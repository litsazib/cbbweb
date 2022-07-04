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
                window.location.href = "./en";
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
                window.location.href = "../";
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
                                    <Link data-hover="আমাদের সম্পর্কে" to="about" spy={true} smooth={true} offset={-100} duration={500}>আমাদের সম্পর্কে</Link>
                                </li>
                                <li>
                                    <Link data-hover="সেবাসমূহ" to="service" spy={true} smooth={true} offset={-100} duration={500}>সেবাসমূহ</Link>
                                </li>
                                <li>
                                    <Link data-hover="শক্তিমত্তা" to="strength" spy={true} smooth={true} offset={-100} duration={500}>শক্তিমত্তা</Link>
                                </li>
                                <li>
                                    <Link data-hover="টিম" to="team" spy={true} smooth={true} offset={-100} duration={500}>টিম</Link>
                                </li>
                                <li>
                                    <Link data-hover="ব্লগ" to="blog" spy={true} smooth={true} offset={-100} duration={500}>ব্লগ</Link>
                                </li>
                                <li className="lang-menu">
                                    <div className="languages-switch">
                                        <a href="javascript:void(0);" className="" data-postion="1" data-lang="en">EN</a>
                                        <a href="javascript:void(0);" className="actived" data-postion="2" data-lang="bn">BN</a>
                                        <a href="javascript:void(0);" className="" data-postion="3"  data-lang="jp">JP</a>
                                    </div>
                                </li>
                                <li className="btnGetInTouch">
                                    <Link to="contact-us" spy={true} smooth={true} offset={-100} duration={500}>যোগাযোগ</Link>
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
                                            <p>সর্বোৎকৃষ্ট মানের সফটওয়্যার সল্যুশন প্রদান করতে</p>
                                        </div>
                                        <div className="slideDiv slide">
                                            <p>সাইব্রিজ হল ভবিষ্যত সফটওয়্যার নির্মাণ শিল্পের পথপ্রদর্শক</p>
                                        </div>
                                        <div className="slideDiv slide">
                                            <p>সাইব্রিজ আপনার ব্র্যান্ডকে প্রতিষ্ঠিত করতে সাহায্য করবে</p>
                                        </div>
                                    </div>
                                    <div className="slideShow2" id="2" style={{ display: 'none' }}>

                                    </div>

                                    <div className="slideShow2" id="3">
                                        <div className="slideDiv slide visible technology">

                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>ওয়েব</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">আমরা সর্বোৎকৃষ্ট এবং টেকসই সমাধান প্রদান করে আমাদের গ্রাহকদের সাথে চমৎকার অংশীদারিত্ব গড়ে তুলি। মানব-কেন্দ্রিক পন্থা, ভবিষ্যত-সুরক্ষিত প্রযুক্তি এবং সর্বোত্তম নীতি অনুসরণের মাধ্যমে গ্রাহকদের সুখ নিশ্চিত করাই আমাদের লক্ষ্য।</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>স্মার্টফোন</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">আমাদের রয়েছে একদল উদ্যমী এবং অভিজ্ঞ সফটওয়্যার ইঞ্জিনিয়ার যারা আমাদের গ্রাহকদের কী প্রয়োজন তা পুঙ্খানুপুঙ্খভাবে বুঝতে পারে। সুতরাং, আমরা সর্বোচ্চ উৎকর্ষ, সৃজনশীলতা এবং উদ্ভাবনের সাথে আপনার সফটওয়্যার তৈরি করি। </p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>ক্লাউড</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp"> আমাদের রয়েছে একদল উদ্যমী এবং অভিজ্ঞ সফটওয়্যার ইঞ্জিনিয়ার যারা আমাদের গ্রাহকদের কী প্রয়োজন তা পুঙ্খানুপুঙ্খভাবে বুঝতে পারে। সুতরাং, আমরা সর্বোচ্চ উৎকর্ষ, সৃজনশীলতা এবং উদ্ভাবনের সাথে আপনার সফটওয়্যার তৈরি করি। </p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>আধুনিক প্রযুক্তি</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">আমাদের নির্ভরযোগ্য সফটওয়্যার অ্যাপ্লিকেশনগুলো অবশ্যই আপনার ব্যবসায় বাড়তি ভ্যালু যোগ করবে এবং আপনার গ্রাহকরা সর্বাধিক ইউজারফ্রেন্ডলি, সুরক্ষিত এবং আপ-টু-ডেট গোপনীয়তারক্ষায়-সক্ষম অ্যাপ্লিকেশন এক্সপেরিয়েন্স করবে।</p>
                                            </div>
                                            
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>সফটওয়্যার নিরাপত্তা</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">আমাদের নির্ভরযোগ্য সফটওয়্যার অ্যাপ্লিকেশনগুলো অবশ্যই আপনার ব্যবসায় বাড়তি ভ্যালু যোগ করবে এবং আপনার গ্রাহকরা সর্বাধিক ইউজারফ্রেন্ডলি, সুরক্ষিত এবং আপ-টু-ডেট গোপনীয়তারক্ষায়-সক্ষম অ্যাপ্লিকেশন এক্সপেরিয়েন্স করবে।</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>ব্যবহারকারীর গোপনীয়তা</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">আমাদের নির্ভরযোগ্য সফটওয়্যার অ্যাপ্লিকেশনগুলো অবশ্যই আপনার ব্যবসায় বাড়তি ভ্যালু যোগ করবে এবং আপনার গ্রাহকরা সর্বাধিক ইউজারফ্রেন্ডলি, সুরক্ষিত এবং আপ-টু-ডেট গোপনীয়তারক্ষায়-সক্ষম অ্যাপ্লিকেশন এক্সপেরিয়েন্স করবে।</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>টেকসই</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">সাইব্রিজ বাংলাদেশ নতুন সকল প্রধান টেকনোলোজিতে তার শ্রেষ্ঠত্ব এবং দক্ষ প্রকল্প ব্যবস্থাপনার জন্য স্বীকৃত। আমাদের উপর বিশ্বাস রাখুন এবং আপনার ব্র্যান্ডকে নির্ভরযোগ্য, উদ্ভাবনী এবং গতিশীল করতে আমাদের ওয়ান-স্টপ টেক পরিষেবাগুলো নিন।</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>বিশ্বস্ত</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">সাইব্রিজ বাংলাদেশ নতুন সকল প্রধান টেকনোলোজিতে তার শ্রেষ্ঠত্ব এবং দক্ষ প্রকল্প ব্যবস্থাপনার জন্য স্বীকৃত। আমাদের উপর বিশ্বাস রাখুন এবং আপনার ব্র্যান্ডকে নির্ভরযোগ্য, উদ্ভাবনী এবং গতিশীল করতে আমাদের ওয়ান-স্টপ টেক পরিষেবাগুলো নিন।</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>সফল</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">সাইব্রিজ বাংলাদেশ নতুন সকল প্রধান টেকনোলোজিতে তার শ্রেষ্ঠত্ব এবং দক্ষ প্রকল্প ব্যবস্থাপনার জন্য স্বীকৃত। আমাদের উপর বিশ্বাস রাখুন এবং আপনার ব্র্যান্ডকে নির্ভরযোগ্য, উদ্ভাবনী এবং গতিশীল করতে আমাদের ওয়ান-স্টপ টেক পরিষেবাগুলো নিন।</p>
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