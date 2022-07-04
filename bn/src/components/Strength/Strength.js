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
                            <h2>আমাদের শক্তিমত্তা</h2>
                            <h3>মানসম্পন্ন সফটওয়্যার সল্যুশনের জন্য অর্থ প্রদান করুন</h3>
                        </div>
                        <div className="description">
                            <p className="first">আমরা আপনার অর্থকে গুরুত্ব দিই এবং সর্বদা উৎকৃষ্ট মানের সফটওয়্যার সমাধান প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমাদের ডেভেলপাররা আমাদের গ্রাহকদের জন্য সবচেয়ে আপ-টু-ডেট প্রযুক্তি-ভিত্তিক সফটওয়্যার সমাধান প্রদানের জন্য নিরলসভাবে কাজ করে যা ব্যবহারকারীর অভিজ্ঞতা, নিরাপত্তা এবং মুনাফা নিশ্চিত করে।</p>
                            <p className="last">আমাদের ১০০ %  গ্রাহক সন্তুষ্টি আমাদের খুব অল্প সময়ের মধ্যে সফটওয়্যার শিল্পের শীর্ষস্থানীয় অবস্থানে নিয়ে এসেছে।  </p>
                            <Link className="getInTouch"  to="contact-us" spy={true} smooth={true} offset={-100} duration={500}>যোগাযোগ করুন</Link>
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
                                          <span>আমাদের প্রকল্পসমূহ</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                        গত 5 বছরে, আমরা ১০০ % গ্রাহক সন্তুষ্টি নিশ্চিত করে ৮০+ প্রকল্প সফলভাবে সম্পন্ন করেছি।
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
                                          <span>সমাপ্ত</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                      আমরা এখন পর্যন্ত ৫০+ বিভিন্ন সহযোগী কোম্পানির সাথে সফল ভাবে কাজ সম্পন্ন করেছি। 
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
                                          <span>আমাদের গ্রাহক</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                        আমাদের ৬০+ হ্যাপি গ্রাহক আমাদের ভবিষ্যতের যাত্রায় আমাদের অনুপ্রেরণা।
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
                                          <span>রিভিউ</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                        আমরা সবসময় আমাদের সম্মানিত গ্রাহকদের প্রতি কৃতজ্ঞ আমাদের প্রতি বিশ্বাস রাখার জন্য এবং আমাদের সম্পর্কে তাদের সত্য অভিমত শেয়ার করার জন্য।
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
