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
                    <h3>チームについて</h3>
                    <p>プロフェッショナル会員について</p>
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
                                <p>エムディ アブドゥル ハキム</p>
                                <h3>最高執行責任者</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_mazhar} alt="img_Mazhar" />
                            </div>

                            <div className="namePosition">
                                <p>マザール アーメド</p>
                                <h3>最高技術責任者</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_mizan} alt="img_mizan1" />
                            </div>

                            <div className="namePosition">
                                <p>エムディ ミザン イブン ユスフ</p>
                                <h3>マネジャー、人事・管理者</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_utpol} alt="img_utpal" />
                            </div>

                            <div className="namePosition">
                                <p>ウトゥパル ビスワス</p>
                                <h3>TL、ウェブ開発</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_sazib} alt="img_sazib" />
                            </div>

                            <div className="namePosition">
                                <p>ルックニュッザマン サジブ</p>
                                <h3>Sr.フロントエンドデベロッパー</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_toma} alt="img_toma" />
                            </div>

                            <div className="namePosition">
                                <p>トホミナ アクター トマ</p>
                                <h3>Sr. デザイナー</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_mamun} alt="img_mamun" />
                            </div>

                            <div className="namePosition">
                                <p>カジ アブドゥラ アル マムン</p>
                                <h3>Sr. ソフトウェアエンジニア</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_rifatul} alt="img_rifatul" />
                            </div>

                            <div className="namePosition">
                                <p>エムディ リファトゥル イスラム チョー</p>
                                <h3>Sr. ソフトウェアエンジニア</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_fahmid} alt="img_fahmid" />
                            </div>

                            <div className="namePosition">
                                <p>エムディ ファミッド アル メースッド</p>
                                <h3>ソフトウェアエンジニア</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_abdullah} alt="img_abdullah" />
                            </div>

                            <div className="namePosition">
                              <p>エムディ アブドゥラ アル マハムッド</p>
                                <h3>Sr. ソフトウェアエンジニア</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_momin} alt="img_momin" />
                            </div>

                            <div className="namePosition">
                                <p>サイードアルモミン</p>
                                <h3>Sr. ソフトウェアエンジニア</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_faruque} alt="img_faruque" />
                            </div>

                            <div className="namePosition">
                                <p>ア ブ ム ファルク ラフマン</p>
                                <h3>Sr. ソフトウェアエンジニア</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_fahreyad} alt="img_fahreyad" />
                            </div>

                            <div className="namePosition">
                                <p>エムディー ファハリィヤード ホッセン</p>
                                <h3>Sr. ソフトウェアエンジニア</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_kanij} alt="img_kanij" />
                            </div>

                            <div className="namePosition">
                                <p>カニジ アクター</p>
                                <h3>デザイナー</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_fatin} alt="img_fatin" />
                            </div>

                            <div className="namePosition">
                                <p>エムディ ファティン イスティアク</p>
                                <h3>JLT</h3>
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
