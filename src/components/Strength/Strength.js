import React, { Component,Fragment } from 'react';
import { Link } from 'react-scroll';
import { Waypoint } from 'react-waypoint';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
class Strength extends Component {

  _handleWaypointEnter = ()=>{
    let strengthItem = document.querySelector('.navAnimated li:nth-child(3)');
    strengthItem.classList.add('active')

  }
  _handleWaypointLeave = ()=>{
    let strengthItem = document.querySelector('.navAnimated li:nth-child(3)');
    strengthItem.classList.remove('active')
  }
  
  render() {
    return (
      <Fragment>
       <Waypoint topOffset={'20%'} onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave}>
          <div className="qualifiedSection clearfix" id="strength">
            <div className="container">
                <div className="ourQuilifiedContent">
                    <div className="payFor wow fadeInLeft">
                        <div className="title">
                            <h2>Our Strength</h2>
                            <h3>Pay for the quality software solution</h3>
                        </div>
                        <div className="description">
                            <p className="first">We value your money and are always committed to providing top-notch quality software solutions. Our developers relentlessly work for our clients to provide the most up-to-date technology-based software solution which ensures smooth user experience, security, and profitability.</p>
                            <p className="last">Our 100% client satisfaction brought us the software industry leading position within a very short period of time.  </p>
                            <Link className="getInTouch"  to="contact-us" spy={true} smooth={true} offset={-100} duration={500}>Get in touch</Link>
                        </div>
                    </div>
                    <div className="ourProject">
                        <div className="completeReview">
                            <div className="complete">
                                <div className="box blue wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="title">
                                        <h3>
                                          <CountUp start={0} end={80}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                  <span className="number color1 counter" ref={countUpRef}>80</span>
                                                </VisibilitySensor>
                                            )}
                                          </CountUp>
                                          <span>Our Project</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                        Last 5 years, we have successfully completed 80+ projects ensuring 100% clients satisfaction.
                                    </div>
                                </div>

                                <div className="box wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="title">
                                        <h3>
                                          <CountUp start={0} end={50}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                  <span className="number color2 counter" ref={countUpRef}>50</span>
                                                </VisibilitySensor>
                                            )}
                                          </CountUp>
                                          <span>Complete</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                        We have completed successful collaborative works with 50+ different partner companies till now.
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <div className="box wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="title">
                                        <h3>
                                          <CountUp start={0} end={60}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                  <span className="number color2 counter" ref={countUpRef}>60</span>
                                                </VisibilitySensor>
                                            )}
                                          </CountUp>
                                          <span>Our Clients</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                        Our 60+ happy clients are our inspiration in our future journey.
                                    </div>
                                </div>

                                <div className="box blue wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="title">
                                        <h3>
                                          <CountUp start={0} end={100}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                  <span className="number color2 counter" ref={countUpRef}>100</span>
                                                </VisibilitySensor>
                                            )}
                                          </CountUp>
                                          <span>Review</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                        We are always grateful to our honorable customers to keep believing in us and sharing their honest opinion.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
       </Waypoint>
      </Fragment>
    )
  }
}
export default Strength;
