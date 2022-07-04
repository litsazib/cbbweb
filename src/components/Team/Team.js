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
                    <h3>Our Team</h3>
                    <p>Our Professional Members</p>
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
                                <p>Md. Abdul Hakim</p>
                                <h3>COO</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_mazhar} alt="img_Mazhar" />
                            </div>

                            <div className="namePosition">
                                <p>Mazhar Ahmed</p>
                                <h3>CTO</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_mizan} alt="img_mizan1" />
                            </div>

                            <div className="namePosition">
                                <p>Md. Mizan Ibn Yusuf</p>
                                <h3>Manager, HR & Administration</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_utpol} alt="img_utpal" />
                            </div>

                            <div className="namePosition">
                                <p>Utpal Biswas</p>
                                <h3>TL, Web Development</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_sazib} alt="img_sazib" />
                            </div>

                            <div className="namePosition">
                                <p>Roknuzzaman Sazib</p>
                                <h3>Sr. Frontend Developer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_toma} alt="img_toma" />
                            </div>

                            <div className="namePosition">
                                <p>Tohomina Akter Toma</p>
                                <h3>Sr. Designer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_mamun} alt="img_mamun" />
                            </div>

                            <div className="namePosition">
                                <p>Kazi Abdullah AL Mamun</p>
                                <h3>Sr. Software Engineer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_rifatul} alt="img_rifatul" />
                            </div>

                            <div className="namePosition">
                                <p>Md. Rifatul Islam Chow.</p>
                                <h3>Sr. Software Engineer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_fahmid} alt="img_fahmid" />
                            </div>

                            <div className="namePosition">
                                <p>Md. Fahmid Al Masud</p>
                                <h3>Software Engineer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_abdullah} alt="img_abdullah" />
                            </div>

                            <div className="namePosition">
                                <p>Md. Abdullah Al Mahmud</p>
                                <h3>Sr. Software Engineer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_momin} alt="img_momin" />
                            </div>

                            <div className="namePosition">
                                <p>Sayed al Momin</p>
                                <h3>Sr. Software Engineer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_faruque} alt="img_faruque" />
                            </div>

                            <div className="namePosition">
                                <p>A B M Faruque Rahman</p>
                                <h3>Sr. Software Engineer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_fahreyad} alt="img_fahreyad" />
                            </div>

                            <div className="namePosition">
                                <p>Md. Fahreyad Hossain</p>
                                <h3>Sr. Software Engineer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_kanij} alt="img_kanij" />
                            </div>

                            <div className="namePosition">
                                <p>Kanij Aktar</p>
                                <h3>Designer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="imageBox">
                            <div className="image">
                                <img src={img_fatin} alt="img_fatin" />
                            </div>

                            <div className="namePosition">
                                <p>Md. Fatin Istiaq</p>
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
