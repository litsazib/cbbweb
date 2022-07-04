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
                      <h3>আমাদের সেবাসমূহ</h3>
                      <p>আমরা কি ধরণের সেবা প্রদান করি</p>
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
                                <h2>ওয়েব ডেভেলপমেন্ট</h2>
                                <p>সাইব্রিজ বাংলাদেশ গতানুগতিক ওয়েব এপ্লিকেশনের বাইরে যেয়ে স্বকীয় ওয়েব এপ্লিকেশন তৈরি করতে  প্রতিশ্রুতিবদ্ধ।</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".2s">
                          <div className="bannerItemImg">
                              <img src={img_services01} alt="img_services01"/>
                          </div>
                          <h2>কাস্টম সফটওয়্যার ডেভেলপমেন্ট</h2>
                          <p>আমরা জানি প্রতিটি ব্যবসা স্বতন্ত্র তাই আমরা স্ক্র্যাচ থেকে সেরা-কাস্টমাইজড সফটওয়্যার সল্যুশন তৈরি করি যেগুলো বিশেষ ভাবে আপনার ব্যবসার জন্য ডিজাইন করা হয়েছে৷</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".4s">
                          <div className="bannerItemImg wide">
                              <img src={img_services02} alt="img_services02"/>
                          </div>
                          <h2 className="mt36">অ্যাপস ডেভেলপমেন্ট</h2>
                          <p>আমাদের অভিজ্ঞ সফটওয়্যার ইঞ্জিনিয়ারের দল আইওএস এবং অ্যান্ড্রয়েড উভয় অ্যাপ্লিকেশন তৈরি করে যা আমাদের গ্রাহকদের জন্য প্রয়োজনীয় সর্বাধিক কাস্টমাইজড সেরা বৈশিষ্ট্যগুলো  নিশ্চিত করে।</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".6s">
                          <div className="bannerItemImg">
                              <img src={img_services03} alt="img_services03"/>
                          </div>
                          <h2>ক্লাউড কম্পিউটিং</h2>
                          <p>লাউড কম্পিউটিং হল আইটি রিসোর্স সম্পর্কে ব্যবসার প্রথাগত চিন্তা থেকে থেকে একটি বড় পরিবর্তন৷ আমাদের ক্লাউড-কম্পিউটিং সেবাগুলো আপনার প্রতিষ্ঠানকে সাশ্রয়ী, নিরাপদ, সহজ এবং অত্যন্ত দ্রুত সিস্টেম চালাতে সাহায্য করে।</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".8s">
                          <div className="bannerItemImg">
                              <img src={img_services04} alt="img_services04"/>
                          </div>
                          <h2>UI/UX ডিজাইন</h2>
                          <p>আমরা বিশদ-ভিত্তিক সেবা এবং সর্বশেষ UI/UX প্রযুক্তি, আর্কিটেকচার প্রদান করি যা ওয়েব পোর্টাল, এন্টারপ্রাইজ সিস্টেম এবং মোবাইল অ্যাপ্লিকেশনগুলির সুন্দর, ইউজার-ফ্রেন্ডলী ডিজাইন তৈরি করে গ্রাহকের প্রত্যাশাকে রূপান্তরিত করে।</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".10s">
                          <div className="bannerItemImg">
                              <img src={img_services05} alt="img_services05"/>
                          </div>
                          <h2>কোয়ালিটি অ্যাসুরেন্স এবং টেস্টিং</h2>
                          <p>সময়সীমার মধ্যে পূর্ণ-পরিসরের QA পরিষেবাগুলি (ম্যানুয়াল এবং অটোমেশন টেস্টিং) নিশ্চিত করাই আমাদের টেস্টিং  করার লক্ষ্য যাতে আমাদের গ্রাহকেরা মানের সাথে কোন আপস না করে বাগ-মুক্ত সফটওয়্যার তার ক্লায়েন্টকে সরবরাহ করতে পারে।</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".12s">
                          <div className="bannerItemImg">
                              <img src={img_services06} alt="img_services06"/>
                          </div>
                          <h2>ইন্টারনেট অফ থিংস (IoT)</h2>
                          <p>আমাদের নিবেদিত ইন্টারনেট অফ থিংস (IoT) টিম স্মার্ট শহর, স্মার্ট হাউস, শিল্প মনিটরিং, অটোমেশন এবং ট্র্যাফিক সলুশনের মতো ব্যাপক-স্কেল পাবলিক এবং বাণিজ্যিক IoT প্রকল্পগুলোর ডেভেলপমেন্ট এবং বাস্তবায়নের উপর গুরুত্ব আরোপ করে৷</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".14s">
                          <div className="bannerItemImg">
                              <img src={img_services07} alt="img_services07"/>
                          </div>
                          <h2>ডেভেলপমেন্ট টিম অগমেন্টেশন</h2>
                          <p>মক-আপ থেকে শুরু করে ডেস্কটপ, মোবাইল বা ওয়েব অ্যাপের সম্পূর্ণ ডেভেলপমেন্ট পর্যন্ত, আমাদের সফটওয়্যার ইঞ্জিনিয়ার অগমেন্টেশন পরিষেবাগুলি প্রকল্পের জটিলতা নির্বিশেষে প্রতিটি ধরণের প্রকল্পের জন্য উন্মুক্ত।</p>
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
