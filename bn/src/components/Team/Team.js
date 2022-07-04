import React, { Component,Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img_hakim from '../../asset/images/ourteam/img_hakim.png';
import img_mazhar from '../../asset/images/ourteam/img_Mazhar.png';
import img_mizan from '../../asset/images/ourteam/img_mizan1.png';
import img_utpol from '../../asset/images/ourteam/img_utpal.png';
import img_sazib from '../../asset/images/ourteam/img_sazib.png';
import img_toma from '../../asset/images/ourteam/img_toma.png';
import img_mamun from '../../asset/images/ourteam/img_mamun.png';
import img_rifatul from '../../asset/images/ourteam/img_rifatul.png';
import img_fahmid from '../../asset/images/ourteam/img_fahmid.png';
import img_abdullah from '../../asset/images/ourteam/img_abdullah.png';
import img_momin from '../../asset/images/ourteam/img_momin.png';
import img_faruque from '../../asset/images/ourteam/img_faruque.png';
import img_fahreyad from '../../asset/images/ourteam/img_fahreyad.png';
import img_kanij from '../../asset/images/ourteam/img_kanij.png';
import img_fatin from '../../asset/images/ourteam/img_fatin.png';

class Team extends Component {
    state= {
        responsive : {
            768 : {
                items:4,
                loop:false,
                dots:false
            }
        }
    }
    _handleWaypointEnter = ()=>{
        let teamItem = document.querySelector('.navAnimated li:nth-child(4)');
        teamItem.classList.add('active')

    }
    _handleWaypointLeave = ()=>{
        let teamItem = document.querySelector('.navAnimated li:nth-child(4)');
        teamItem.classList.remove('active')
    }
  render() {
    return (
      <Fragment>
        <Waypoint topOffset={'20%'} onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave}>
            <div className="ourTeamSection" id="team">
            <div className="container">
                <div className="titleSection wow fadeIn">
                    <h3>আমাদের টিম</h3>
                    <p>আমাদের প্রফেশনাল মেম্বার</p>
                </div>

                <div className="innerBox wow fadeInUp">
                    <OwlCarousel 
                    items={1}
                    margin={22} 
                    autoplay ={false}  
                    nav={true}
                    navText={["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"]}
                    dots={false}
                    loop={false}
                    autoplayTimeout={3000}
                    responsive={this.state.responsive}

                    className="owl-carousel owl-theme">

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_hakim} alt="img_hakim" />
                            </div>

                            <div className="namePosition">
                                <p>মোঃ আব্দুল হাকিম</p>
                                <h3>সিওও</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_mazhar} alt="img_Mazhar" />
                            </div>

                            <div className="namePosition">
                                <p>মাজহার আহমেদ</p>
                                <h3>সিটিও</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_mizan} alt="img_mizan1" />
                            </div>

                            <div className="namePosition">
                                <p>মোঃ মিজান ইবনে ইউসুফ</p>
                                <h3>ম্যানেজার, এইচআর এবং এডমিনিস্ট্রেশন</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_utpol} alt="img_utpal" />
                            </div>

                            <div className="namePosition">
                                <p>উৎপল বিশ্বাস</p>
                                <h3>সিনিয়র ওয়েব ডেভেলপমেন্ট</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_sazib} alt="img_sazib" />
                            </div>

                            <div className="namePosition">
                                <p>রোকনুজ্জামান সজীব</p>
                                <h3>সিনিয়র ফ্রন্টএন্ড ডেভেলপার</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_toma} alt="img_toma" />
                            </div>

                            <div className="namePosition">
                                <p>তোহমিনা আক্তার তমা</p>
                                <h3>সিনিয়র ডিজাইনার</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_mamun} alt="img_mamun" />
                            </div>

                            <div className="namePosition">
                                <p> কাজী আবদুল্লাহ আল মামুন</p>
                                <h3>সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_rifatul} alt="img_rifatul" />
                            </div>

                            <div className="namePosition">
                                <p>মোঃ রিফাতুল ইসলাম চৌ</p>
                                <h3>সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_fahmid} alt="img_fahmid" />
                            </div>

                            <div className="namePosition">
                                <p> মোঃ ফাহমিদ আল মাসুদ</p>
                                <h3>সফটওয়্যার ইঞ্জিনিয়ার</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_abdullah} alt="img_abdullah" />
                            </div>

                            <div className="namePosition">
                                <p>মোঃ আব্দুল্লাহ আল মাহমুদ</p>
                                <h3>সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_momin} alt="img_momin" />
                            </div>

                            <div className="namePosition">
                                <p>সায়েদ আল মমিন</p>
                                <h3>সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_faruque} alt="img_faruque" />
                            </div>

                            <div className="namePosition">
                                <p>এ বি এম ফারুক রহমান</p>
                                <h3>সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_fahreyad} alt="img_fahreyad" />
                            </div>

                            <div className="namePosition">
                                <p>ফাহরিয়াদ হোসেন</p>
                                <h3>সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_kanij} alt="img_kanij" />
                            </div>

                            <div className="namePosition">
                                <p>কানিজ আক্তার</p>
                                <h3>ডিজাইনার</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_fatin} alt="img_fatin" />
                            </div>

                            <div className="namePosition">
                                <p>মোঃ ফাতিন ইশতিয়াক</p>
                                <h3>জেএলটি</h3>
                            </div>
                        </div>
                    </div>
                    </OwlCarousel>
                </div>
            </div>
            </div>
        </Waypoint>
      </Fragment>
    )
  }
}
export default Team;
