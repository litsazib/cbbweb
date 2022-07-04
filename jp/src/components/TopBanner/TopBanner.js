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
                window.location.href = "./";
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
                window.location.href = "../en";
                }, 1000);
            }
            if(languages === "jp"){
                window.setTimeout(function(){
                window.location.href = "./";
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
                                    <Link data-hover="企業情報" to="about" spy={true} smooth={true} offset={-100} duration={500}>企業情報</Link>
                                </li>
                                <li>
                                    <Link data-hover="サービス" to="service" spy={true} smooth={true} offset={-100} duration={500}>サービス</Link>
                                </li>
                                <li>
                                    <Link data-hover="強さ" to="strength" spy={true} smooth={true} offset={-100} duration={500}>強さ</Link>
                                </li>
                                <li>
                                    <Link data-hover="チーム" to="team" spy={true} smooth={true} offset={-100} duration={500}>チーム</Link>
                                </li>
                                <li>
                                    <Link data-hover="ブログ" to="blog" spy={true} smooth={true} offset={-100} duration={500}>ブログ</Link>
                                </li>
                                <li className="lang-menu">
                                    <div className="languages-switch">
                                        <a href="javascript:void(0);" className="" data-postion="1" data-lang="en">EN</a>
                                        <a href="javascript:void(0);" className="actived" data-postion="2" data-lang="jp">JP</a>
                                        <a href="javascript:void(0);" className="" data-postion="3"  data-lang="bn">BN</a>
                                    </div>
                                </li>
                                <li className="btnGetInTouch">
                                    <Link to="contact-us" spy={true} smooth={true} offset={-100} duration={500}>お問い合わせはこちら</Link>
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
                                            <p>最高級のソリューションを提供することをお約束します</p>
                                        </div>
                                        <div className="slideDiv slide">
                                            <p>サイブリッジは未来のソフトウェアの先駆者</p>
                                        </div>
                                        <div className="slideDiv slide">
                                            <p>サイブリッジはお客様のブランド構築するためお手伝いします</p>
                                        </div>
                                    </div>
                                    <div className="slideShow2" id="2" style={{ display: 'none' }}>

                                    </div>

                                    <div className="slideShow2" id="3">
                                        <div className="slideDiv slide visible technology">

                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>ウェブ用</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">弊社は堅牢で持続可能なソリューションを提供することで、ダイナミックなパートナーシップを構築しています。弊社の使命は人間中心のアプローチ、将来を見据えたテクノロジー、ベストプラクティスを通じて、お客様の幸せを確保することです。</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>スマートフォン用</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">専門家として、弊社はお客様の何が必要をか徹底的に理解しています。だから、私たちは、最大限の卓越性、創造性、革新性をもって、お客様のソフトウェアを作ります。</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>クラウド用</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">専門家として、弊社はお客様の何が必要をか徹底的に理解しています。だから、私たちは、最大限の卓越性、創造性、革新性をもって、お客様のソフトウェアを作ります。 </p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>現代の技術</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">弊社の信頼できるソフトウェアソリューションは間違いなくお客様のビジネスに付加価値を与え、御社の顧客は最もユーザーフレンドリーで安全な最新のプライバシー対応アプリケーションを体験することができます。</p>
                                            </div>
                                            
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>ソフトウェア・セキュリティ</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">弊社の信頼できるソフトウェアソリューションは間違いなくお客様のビジネスに付加価値を与え、御社の顧客は最もユーザーフレンドリーで安全な最新のプライバシー対応アプリケーションを体験することができます。</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>ユーザーのプライバシー</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">弊社の信頼できるソフトウェアソリューションは間違いなくお客様のビジネスに付加価値を与え、御社の顧客は最もユーザーフレンドリーで安全な最新のプライバシー対応アプリケーションを体験することができます。</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>持続可能な</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">サイブリッジ・バングラデシュは、主要なテクノロジーの卓越性と効率的なプロジェクト管理で知られています。弊社を信じて、弊社のワンストップ技術サービスを利用して、お客様のブランドを信頼でき、革新的でダイナミックなものにしてください。</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>頼もしい</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">サイブリッジ・バングラデシュは、主要なテクノロジーの卓越性と効率的なプロジェクト管理で知られています。弊社を信じて、弊社のワンストップ技術サービスを利用して、お客様のブランドを信頼でき、革新的でダイナミックなものにしてください。</p>
                                            </div>
                                        </div>
                                        <div className="slideDiv slide technology">
                                            <div className="pcbText">
                                                <div className="textCenter">
                                                <p>成功</p>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="lineUp">サイブリッジ・バングラデシュは、主要なテクノロジーの卓越性と効率的なプロジェクト管理で知られています。弊社を信じて、弊社のワンストップ技術サービスを利用して、お客様のブランドを信頼でき、革新的でダイナミックなものにしてください。</p>
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