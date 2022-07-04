import React, { Component, Fragment } from 'react';
import { Link } from 'react-scroll';
import $ from "jquery";
import ScrollTop from '../TopBanner/ScrollTop';
import websiteLogo from '../../asset/images/logo_cybridgebd.svg';
import scrollLogo from '../../asset/images/logo_right.png';
import centerImage from '../../asset/images/top-animation/img_top_bg.png';
import img_calendar from '../../asset/images/top-animation/img_calendar.png';
import img_code from '../../asset/images/top-animation/img_code.png';
import img_cloud2 from '../../asset/images/top-animation/img_cloud2.png';
import img_cloud1 from '../../asset/images/top-animation/img_cloud1.png';
import img_chart from '../../asset/images/top-animation/img_chart.png';
import img_loud from '../../asset/images/top-animation/img_loud.png';
import img_tree from '../../asset/images/top-animation/img_tree.png';
import img_men from '../../asset/images/top-animation/img_men.png';
import img_woman from '../../asset/images/top-animation/img_woman.png';

class TopBanner extends Component {

    constructor() {
        super();
        this.state = {
            isSticky: false
        }
    }
    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({ isSticky: true })
            $('#navsection').addClass('sticky');
        }
        else if (window.scrollY < 100) {
            this.setState({ isSticky: false })
            $('#navsection').removeClass('sticky');
        }
    }

    moveCursor = (event) => {
        let mouseMovement = document.getElementsByClassName('mouseMovement');
        mouseMovement[0].style.setProperty('transform', "translate3d(" + (event.clientX / 100) + "px, " + (event.clientY / 100) + "px, 0px)");
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        document.addEventListener("mousemove", this.moveCursor);
    }

  render() {
    const pthomebg = {
        paddingTop: '168px'  
    };
    $(document).ready(function() {
        $(".languages-switch a").on('click', function(e) {
            var dataPosition = $(this).attr("data-postion");

            if(dataPosition == 2){
                return false;
            }

            $('.languages-switch a').each(function(index) {
                $(this).removeClass("actived");
            })

            $('.languages-switch a').each(function(index) {

                var postion = $(this).attr('data-postion');

                if(dataPosition == postion){
                $(this).addClass("actived");
                }
                if(dataPosition == 1){

                if(postion == 1){
                    $(this).attr("data-postion", 2);
                }

                if(postion == 2){
                    $(this).attr("data-postion", 3);
                }

                if(postion == 3){
                    $(this).attr("data-postion", 1);
                }
                }
                if(dataPosition == 3){
                if(postion == 1){
                    $(this).attr("data-postion", 3);
                }

                if(postion == 2){
                    $(this).attr("data-postion", 1);
                }

                if(postion == 3){
                    $(this).attr("data-postion", 1);
                }
                }

            })

            $(this).attr('data-postion', 2)
        })

        var lang = document.documentElement.lang;
        if(lang === 'en') {
            $(".languages-switch a").on('click', function(e) {
            var languages = $(this).attr("data-lang");
            if(languages === "bn"){
                window.setTimeout(function(){
                window.location.href = "./bn";
                }, 1000);
            }

            if(languages === "en"){
                window.setTimeout(function(){
                window.location.href = "./";
                }, 1000);
            }
            if(languages === "jp"){
                window.setTimeout(function(){
                window.location.href = "./jp";
                }, 1000);
            }
            })
        }
        if (lang ==='bn') {
            $(".languages-switch a").on('click', function(e) {
            var languages = $(this).attr("data-lang");
            if(languages === "bn"){
                window.setTimeout(function(){
                window.location.href = "../bn";
                }, 1000);
            }
            if(languages === "en"){
                window.setTimeout(function(){
                window.location.href = "/";
                }, 1000);
            }
            if(languages === "jp"){
                window.setTimeout(function(){
                window.location.href = "../jp";
                }, 1000);
            }
            })
        }
        if (lang ==='jp') {
            $(".languages-switch a").on('click', function(e) {
            var languages = $(this).attr("data-lang");
            if(languages === "bn"){
                window.setTimeout(function(){
                window.location.href = "../bn";
                }, 1000);
            }
            if(languages === "en"){
                window.setTimeout(function(){
                window.location.href = "/";
                }, 1000);
            }
            if(languages === "jp"){
                window.setTimeout(function(){
                window.location.href = "/jp";
                }, 1000);
            }
            })
        }
    });
    return (
      <Fragment>
        <ScrollTop/>
        <div className="topSection clearfix" id="home">
            <div className="topbg" id="homebg" style={pthomebg}>
                <div className="header" id="navsection">
                    <div className="headerContainer">
                        <div className="logo">
                            <h1>
                                <a href="/" id="logo">
                                    <img src={this.state.isSticky ? scrollLogo : websiteLogo }  alt="CYBRiDGE BANGLADESH"/>
                                </a>
                            </h1>
                        </div>

                        <div className="mainMenu">
                            <ul className="navAnimated">
                                <li className='about'>
                                    <Link data-hover="About Us" to="about" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>
                                </li>
                                <li>
                                    <Link data-hover="Services" to="service" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
                                </li>
                                <li>
                                    <Link data-hover="Strength" to="strength" spy={true} smooth={true} offset={-100} duration={500}>Strength</Link>
                                </li>
                                <li>
                                    <Link data-hover="Team" to="team" spy={true} smooth={true} offset={-100} duration={500}>Team</Link>
                                </li>
                                <li>
                                    <Link data-hover="Blog" to="blog" spy={true} smooth={true} offset={-100} duration={500}>Blog</Link>
                                </li>
                                <li className="lang-menu">
                                    <div className="languages-switch">
                                        <a href="javascript:void(0);" className="" data-postion="1" data-lang="bn">BN</a>
                                        <a href="javascript:void(0);" className="actived" data-postion="2" data-lang="en">EN</a>
                                        <a href="javascript:void(0);" className="" data-postion="3"  data-lang="jp">JP</a>
                                    </div>
                                </li>
                                <li className="btnGetInTouch">
                                    <Link to="contact-us" spy={true} smooth={true} offset={-100} duration={500}>Get in touch</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottombg">
                    <div className="container">
                        <div className="aboutSection topContain">
                            <div className="topContainer clearfix">
                                <div className="pioneer">
                                    <div className="slideShow pioneerText toutiao " id="1">
                                        <div className="slideDiv slide visible">
                                            <p>Committed to providing top-notch solutions</p>
                                        </div>
                                        <div className="slideDiv slide">
                                            <p>CYBRiDGE is the pioneer of future software</p>
                                        </div>
                                        <div className="slideDiv slide">
                                            <p>CYBRiDGE will help building your brands</p>
                                        </div>
                                    </div>
                                    <div className="slideShow2" id="2" style={{ display: 'none' }}>

                                    </div>

                                    <div className="slideShow2" id="3">
                                        <div className="slideDiv slide visible technology">

                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>for Web</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">We build dynamic partnerships by providing robust and sustainable solutions. Our mission is to ensure customer happiness through a human-centered approach, future-proof technology, and best practices.</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>for Smartphone</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp"> As an expert, we understand thoroughly what our customers need. So, we make your software with maximum excellence, creativity, and innovation.</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>for Cloud</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp"> As an expert, we understand thoroughly what our customers need. So, we make your software with maximum excellence, creativity, and innovation.</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>Modern Technologies</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">Our reliable software solutions will definitely add value to your business and your customers will experience the most user-friendly, secured, and up-to-date privacy-enabled applications.</p>
                                            </div>
                                            
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>Software Security</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">Our reliable software solutions will definitely add value to your business and your customers will experience the most user-friendly, secured, and up-to-date privacy-enabled applications.</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>User Privacy</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">Our reliable software solutions will definitely add value to your business and your customers will experience the most user-friendly, secured, and up-to-date privacy-enabled applications.</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>Sustainable</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">CYBRiDGE Bangladesh is recognized for its excellence in key technologies, and efficient project management. Believe in us and take our one-stop tech services to make your brand reliable, innovative & dynamic.</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>Trustworthy</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">CYBRiDGE Bangladesh is recognized for its excellence in key technologies, and efficient project management. Believe in us and take our one-stop tech services to make your brand reliable, innovative & dynamic.</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>Successful</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">CYBRiDGE Bangladesh is recognized for its excellence in key technologies, and efficient project management. Believe in us and take our one-stop tech services to make your brand reliable, innovative & dynamic.</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="imagesBox">
                                    <img className="centerImage" src={centerImage} alt="CYBRiDGE BANGLADESH"/>

                                    <div className="mouseMovement">
                                        <div className="imageAnimateNew firstPart upsideDown">
                                            <img src={img_calendar} loading="lazy" width="69" alt="img_calendar" className="up"/>
                                        </div>

                                        <div className="imageAnimateNew secondPart">
                                            <img src={img_code} loading="lazy" width="69" alt="img_code" className="up"/>
                                        </div>
                                        <div className="imageAnimateNew fourthPart ">
                                            <img src={img_cloud2} loading="lazy" width="69" alt="img_cloud2" className="up"/>
                                        </div>

                                        <div className="imageAnimateNew upsideDown fifthPart ">
                                            <img src={img_cloud1} loading="lazy" width="69" alt="img_cloud1" className="up"/>
                                        </div>

                                        <div className="imageAnimateNew wavePart ">
                                            <img src={img_chart} loading="lazy" width="69" alt="img_chart" className="up"/>
                                        </div>

                                        <div className="imageAnimateNew sixthPart ">
                                            <img src={img_loud} loading="lazy" width="69" alt="img_loud" className="up"/>
                                        </div>
                                        <div className="imageAnimateNew upsideDown thirdPart ">
                                            <img src={img_tree} loading="lazy" width="69" alt="img_tree" className="up"/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="slidingElements">
                                <div className="slidingImage">
                                    <img src={img_men} alt="CYBRiDGE Bangladesh"/>
                                </div>
                                <div className="slidingImage second">
                                    <img src={img_woman} alt="CYBRiDGE Bangladesh"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Fragment>
    );
  }
}
export default TopBanner;