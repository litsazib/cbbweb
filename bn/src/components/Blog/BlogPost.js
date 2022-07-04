import React, { Component,Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from "jquery";
import img_blog01 from '../../asset/images/blog/img_blog01.jpg';
import img_blog02 from '../../asset/images/blog/img_blog02.jpg';
import img_blog03 from '../../asset/images/blog/img_blog03.jpg';
import img_blog04 from '../../asset/images/blog/img_blog04.jpg';
import img_blog05 from '../../asset/images/blog/img_blog05.jpg';
import img_blog06 from '../../asset/images/blog/img_blog06.jpg';
import img_blog07 from '../../asset/images/blog/img_blog07.jpg';
import img_blog08 from '../../asset/images/blog/img_blog08.jpg';

class Blog extends Component {

    lodeEvent = event => {
        event.preventDefault();
        $(".rowContain:hidden").slice(0, 3).slideDown();
        if ($(".rowContain:hidden").length === 0) {
            $("#loadMore").fadeOut('slow');
        }
    };
    componentDidMount(){
        $(".rowContain").slice(0, 3).show();
    }

    _handleWaypointEnter = ()=>{
        let blogItem = document.querySelector('.navAnimated li:nth-child(5)');
        blogItem.classList.add('active')

    }
    _handleWaypointLeave = ()=>{
        let blogItem = document.querySelector('.navAnimated li:nth-child(5)');
        blogItem.classList.remove('active')
    }

  render() {

    return (
      <Fragment>
        <Waypoint topOffset={'20%'} onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave}>
            <div className="ourBlog clearfix" id="blog">
                <div className="container">
                    <div className="titleSection wow fadeIn">
                        <h3>আমাদের ব্লগ</h3>
                        <p>সফটওয়্যার অ্যাপ্লিকেশন দিয়ে কি পরিমান শিল্পবিপ্লব ঘটছে তা দেখতে ও জানতে আপাদের ব্লগে চোখ রাখুন নিয়মিত।</p>
                    </div>

                    <div className="containSection clearfix">

                        <div className="rowItem clearfix">

                            <div className="rowContain" data-wow-delay="0.2s">
                                <a className="link" href="https://medium.com/oceanize-geeks/automate-boring-stuffs-python-fabric-ec9cf2183f45" target="_blank" rel="noreferrer">
                                    <div className="image"><img src={img_blog01} alt="img_blog01" /></div>
                                    <div className="bottomContain">
                                        <h3>Automate boring stuffs, Python Fabric</h3>
                                        <p>Everyday we have to do many boring stuffs when it comes to DevOps. Everytime we have to deploy</p>
                                    </div>
                                </a>
                            </div>

                            <div className="rowContain" data-wow-delay="0.4s">
                                <a className="link" href="https://medium.com/oceanize-geeks/making-a-rest-api-in-elixir-phoenix-54006df1b573" target="_blank" rel="noreferrer">
                                    <div className="image"><img src={img_blog02} alt="img_blog02" /></div>
                                    <div className="bottomContain">
                                        <h3>Making a REST API in Elixir Phoenix</h3>
                                        <p>Elixir is built on top of Erlang but it is quite friendly / high level than Erlang. Working with Elixir provides all the</p>
                                    </div>
                                </a>
                            </div>

                            <div className="rowContain" data-wow-delay="0.6s">
                                <a className="link" href="https://medium.com/oceanize-geeks/desktop-notifications-in-python-shell-script-ae58a49c0baa" target="_blank" rel="noreferrer">
                                    <div className="image"><img src={img_blog03} alt="img_blog03" /></div>
                                    <div className="bottomContain">
                                        <h3>Desktop Notifications in Python & Shell Script</h3>
                                        <p>Mostly we forget that our desktops support notifications now-a-days. Every platform (Windows, Linux and Mac)</p>
                                    </div>
                                </a>
                            </div>

                            <div className="rowContain" data-wow-delay="0.2s">
                                <a className="link" href="https://medium.com/oceanize-geeks/lets-create-phonetic-alphabet-in-perl-2b2a516dcd7f" target="_blank" rel="noreferrer">
                                    <div className="image"><img src={img_blog04} alt="img_blog04" /></div>
                                    <div className="bottomContain">
                                        <h3>Let’s create Phonetic Alphabet in PERL</h3>
                                        <p>Phonetic alphabet is a kind of list of words which are mapped to alphabets. Like if I want to say that I have a ID</p>
                                    </div>
                                </a>
                            </div>

                            <div className="rowContain" data-wow-delay="0.2s">
                                <a className="link" href="https://medium.com/oceanize-geeks/lets-use-terraform-9008295c8a19" target="_blank" rel="noreferrer">
                                    <div className="image"><img src={img_blog05} alt="img_blog05" /></div>
                                    <div className="bottomContain">
                                        <h3>Let’s use Terraform</h3>
                                        <p>Terraform is developed by HashiCorp and provides us facilities to write our infrastructure as code.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="rowContain" data-wow-delay="0.2s">
                                <a className="link" href="https://medium.com/oceanize-geeks/training-need-analysis-tna-7183c19ccb01" target="_blank" rel="noreferrer">
                                    <div className="image"><img src={img_blog06} alt="img_blog06" /></div>
                                    <div className="bottomContain">
                                        <h3>Training Need Analysis (TNA).</h3>
                                        <p>TNA means Training Need Analysis. Training Needs Analysis has another name and it is Learning Needs Analysis</p>
                                    </div>
                                </a>
                            </div>

                            <div className="rowContain" data-wow-delay="0.2s">
                                <a className="link" href="https://medium.com/oceanize-geeks/the-problems-of-strategic-human-resource-management-in-bangladesh-7426c7979ff5" target="_blank" rel="noreferrer">
                                    <div className="image"><img src={img_blog07} alt="img_blog07" /></div>
                                    <div className="bottomContain">
                                        <h3>The problems of strategic human resource</h3>
                                        <p>In Bangladesh strategic human resource management called SHRM. Lack of skilled human resource manager</p>
                                    </div>
                                </a>
                            </div>

                            <div className="rowContain" data-wow-delay="0.2s">
                                <a className="link" href="https://medium.com/oceanize-geeks/what-is-hrm-what-is-hrm-activities-eb1a7c4ddd9d" target="_blank" rel="noreferrer">
                                    <div className="image"><img src={img_blog08} alt="img_blog08" /></div>
                                    <div className="bottomContain">
                                        <h3>What is HRM? & What are HRM activities?</h3>
                                        <p>The full meaning of HRM is Human Resource Management. If i want to give the definition of Human Resource</p>
                                    </div>
                                </a>
                            </div>

                        </div>


                        <div className="loadMoreBtn">
                            <a href="#" id="loadMore" onClick={this.lodeEvent}>আরো</a>
                        </div>

                    </div>
                </div>
            </div>
        </Waypoint>
      </Fragment>
    )
  }
}
export default Blog;
