import React, { Component,Fragment } from 'react';
import axios from "axios";
import 'dotenv/config';
import swal from 'sweetalert';
import ReCAPTCHA from "react-google-recaptcha";
import img_man01 from '../../asset/images/contactus/img_man01.png';
import img_message02 from '../../asset/images/contactus/img_message02.png';
import img_message03 from '../../asset/images/contactus/img_message03.png';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        rcres:'',
        errors:{}
    };

    // handle the value
    handleCHange = input => e => {
        this.setState({[input]: e.target.value});
    }

    validateAll = ()=> {
        let {name,email,message,rcres} = this.state;
        let errors = {};
        if(!name) errors.name = "Please enter your name";
        if(!email) errors.email = "Please enter your valid email address";
        if(!message) errors.message = "Please enter your message";
        if(!rcres) errors.rcres = "Captcha validation is required.";
        return errors;
    }

    isValid = (errors) => {
        let keys = Object.keys(errors);
        let count = keys.reduce((acc,curr)=>(errors[curr] ? acc+1 : acc),0);
        return count ===0;
    }

    submitForm = (e) => {
        e.preventDefault();
        let errors = this.validateAll();
        if(this.isValid(errors)) {
            var payload = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
                rcres: this.state.rcres
            };
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
                crossDomain: true,
            };

            axios.post('http://localhost/api/emailsend.php',JSON.stringify(payload))
            .then(response => {
                if(response.status===200) {
                    // swal("Send!", "Email sent successfully", "success");
                    console.log(response)
                }else {
                }
            })
            .catch(error => {console.log(error)})

            this.setState({
                name:"",
                email:"",
                message:"",
                rcres:""
            })
        }else {
            this.setState({
                errors:errors
            })
        }
       
    }

    contactMove = (event) => {
    let manMouseMove = document.getElementsByClassName('manMouseMove');
    manMouseMove[0].style.setProperty('transform', "translate3d(" + (event.clientX / 100) + "px, " + (event.clientY / 100) + "px, 0px)");
    }

    componentDidMount() {
    document.addEventListener("mousemove", this.contactMove);
    }
    onChangeRecaptcha = (value) => {
        this.setState({
            rcres:value
        })
    }
  render() {
    const {name, email, message,errors,rcres} = this.state;
    return (
      <Fragment>
         <div className="contactUsSection" id="contact-us">
            <div className="container">
                <div className="innerContain">
                    <div className="imageSection wow fadeInLeft">
                        <img src={img_man01} alt="img_man01" />
                        <div className="manMouseMove">
                            <div className="animationImg first">
                                <img src={img_message02} alt="img_message02" />
                            </div>
                            <div className="animationImg second">
                                <img src={img_message03} alt="img_message03" />
                            </div>
                        </div>
                    </div>
                    <div className="contactFormSection wow fadeInRight">
                        <div className="titleSection">
                            <h2>Contact Us</h2>
                            <p>For any Queries please submit the following form</p>
                        </div>
                        <div className="formSection">
                            <form id="contactForm" onSubmit={this.submitForm}>
                                <div className="inputSection">
                                    <div className="labelWithInput">
                                        <div className="inputLabel">
                                            Your Name*
                                        </div>
                                        <div className="inputText">
                                            <input type="text" id="name" value={name} onChange={this.handleCHange('name')} />
                                        </div>
                                    </div>
                                    <div className="nameErrorMessage">
                                        {errors.name ? <span id="name-error" className='error'>{errors.name}</span>:""}
                                    </div>
                                </div>

                                <div className="inputSection">
                                    <div className="labelWithInput">
                                        <div className="inputLabel">
                                            Your Email*
                                        </div>
                                        <div className="inputText">
                                            <input type="text" id="email" value={email} onChange={this.handleCHange('email')} />
                                        </div>
                                    </div>
                                    <div className="emailErrorMessage">
                                    {errors.email ? <span id="message-error" className='error'>{errors.email}</span>:""}
                                    </div>
                                </div>

                                <div className="inputSection messageSection">
                                    <div className="labelWithInput">
                                        <div className="inputLabel">
                                            Message*
                                        </div>
                                        <div className="inputTextarea">
                                            <textarea type="text" id="message" value={message} onChange={this.handleCHange('message')}></textarea>
                                            <span className="remain-text"><em id="remain">300</em> characters remaining</span>
                                        </div>
                                    </div>
                                    <div className="messageErrorMessage">
                                    {errors.message ? <span id="message-error" className='error'>{errors.message}</span>:""}
                                    </div>
                                </div>

                                <div className="inputSection recaptcha">
                                    <ReCAPTCHA className="g-recaptcha" sitekey={process.env.REACT_APP_SITE_KEY}   onChange={this.onChangeRecaptcha}></ReCAPTCHA>  
                                    <div className="recaptchaErrorMessage">
                                    {errors.rcres && rcres==="" ? <span className='recaptchaErrorMessage'>{errors.rcres}</span>:""}
                                    </div>
                                </div>

                                <div className="inputSection buttonSection">
                                    <input className="contactbtn" type="submit" name="submit" value="Submit" />
                                </div>
                            </form>

                            <div id="emailModal" className="modalPopup">
                                <div className="modalContent">
                                    <span className="close">&times;</span>
                                    <p>Successfully send your query.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Fragment>
    )
  }
}
export default Contact;
