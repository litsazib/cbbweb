import React, { Component, Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img_services01 from '../../asset/images/img_services01.png';
import img_services02 from '../../asset/images/img_services02.png';
import img_services03 from '../../asset/images/img_services03.png';
import img_services04 from '../../asset/images/img_services04.png';
import img_services05 from '../../asset/images/img_services05.png';
import img_services06 from '../../asset/images/img_services06.png';
import img_services07 from '../../asset/images/img_services07.png';
import img_services08 from '../../asset/images/img_services08.png';


class Services extends Component {

  state= {
    responsive : {
        769 : {
          items:3.3
        },
        0 : {
          items:1,
          dots:true,
        }
    }
  }

  componentDidMount(){
    $(function() {
      $('.owl-item .bannerItem').css('height','auto');
      var maxHeight = 0;
      $('.owl-item .bannerItem').each(function(){
        if ($(this).outerHeight() > maxHeight) {
          maxHeight = $(this).outerHeight();
        }
      });
      $('.owl-item .bannerItem').css('height', maxHeight+'px');
    });
  }
  _handleWaypointEnter = ()=>{
    let aboutItem = document.querySelector('.navAnimated li:nth-child(1)');
    let serviceItem = document.querySelector('.navAnimated li:nth-child(2)');
    serviceItem.classList.add('active')
    aboutItem.classList.remove('active');

  }
  _handleWaypointLeave = ()=>{
    let serviceItem = document.querySelector('.navAnimated li:nth-child(2)');
    serviceItem.classList.remove('active')
  }

  render() {
    return (
      <Fragment>
        <Waypoint topOffset={'20%'} onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave}>
          <div className="serviceSection clearfix" id="service">
              <div className="container">
                  <div className="titleSection wow fadeInUp">
                      <h3>Our Services</h3>
                      <p>What we provide</p>
                  </div>
                  <div className="banners clearfix">
                    <OwlCarousel 
                    nav={false}
                    dots={false}
                    margin={29}
                    loop={true}
                    autoplay={false}
                    autoplayTimeout={3000}
                    responsive={this.state.responsive}
                    className="row banner owl-carousel owl-theme">  
                      <div className="bannerItem wow fadeInUp" data-wow-delay="0.5s">
                                <div className="bannerItemImg">
                                    <img src={img_services08} alt="img_services08"/>
                                </div>
                                <h2>Web Development</h2>
                                <p>CYBRiDGE Bangladesh committed to go beyond traditional solutions to develop the most unique web products.</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".2s">
                          <div className="bannerItemImg">
                              <img src={img_services01} alt="img_services01"/>
                          </div>
                          <h2>Custom Software Development</h2>
                          <p>We know every business is unique so we offer the best-customized software solutions from scratch, those designed especially for your business.</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".4s">
                          <div className="bannerItemImg wide">
                              <img src={img_services02} alt="img_services02"/>
                          </div>
                          <h2 className="mt36">Apps Development</h2>
                          <p>Our team of experts develop both iOS and android applications which offer the most customized well-suited features essential for our clients.</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".6s">
                          <div className="bannerItemImg">
                              <img src={img_services03} alt="img_services03"/>
                          </div>
                          <h2>Cloud Computing</h2>
                          <p>Cloud computing is a big shift from the traditional way businesses think about IT resources. Our cloud-computing services help organizations to drive scalable, cost-effective, secure, simple and highly agile systems.</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".8s">
                          <div className="bannerItemImg">
                              <img src={img_services04} alt="img_services04"/>
                          </div>
                          <h2>UI/UX Design</h2>
                          <p>We provide detail-oriented services and latest UI/UX technologies, architectures that transform client expectations by creating beautiful, user-friendly design of web portal, enterprise systems and mobile applications.</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".10s">
                          <div className="bannerItemImg">
                              <img src={img_services05} alt="img_services05"/>
                          </div>
                          <h2>Quality Assurance & Testing</h2>
                          <p>Testing is aimed to ensure full-range QA services (Manual & Automation testing) within rigid deadlines to help our customers delivery high-quality & bug free software in quick releases.</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".12s">
                          <div className="bannerItemImg">
                              <img src={img_services06} alt="img_services06"/>
                          </div>
                          <h2>Internet of Things (IoT)</h2>
                          <p>Our dedicated Internet of Things (IoT) team is focused on the development and implementation of extensive-scale public and commercial IoT projects such as smart cities, smart house, industrial monitoring, automation & traffic solutions.</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".14s">
                          <div className="bannerItemImg">
                              <img src={img_services07} alt="img_services07"/>
                          </div>
                          <h2>Development Team Augmentation</h2>
                          <p>From mock-up to complete development of desktop, mobile or web apps, our software engineer augmentation services are available for every type of project regardless of their complexity.</p>
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

export default Services;
