import React, { Component,Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import $ from "jquery";

class AboutUs extends Component {

  _handleWaypointEnter = ()=>{
    let aboutItem = document.querySelector('.navAnimated li:nth-child(1)');
    aboutItem.classList.add('active')
  }
  _handleWaypointLeave = ()=>{
    let aboutItem = document.querySelector('.navAnimated li:nth-child(1)');
    aboutItem.classList.remove('active')
  }

  render() {
    $(function() {
      $('.spinxAccoTitle').on('click', function(e) {
        $('.spinxAccoTitle').each(function() {
            $('.spinxAccoTitle').removeClass('current')
            $('.current .spinxAccoContent').removeClass('showContent');
          })
          $(this).addClass('current')
          $('.current .spinxAccoContent').addClass('showContent');
          $(this)
            .addClass('current')
            $('.spinxAccoContent').removeClass('showContent');
            $('.current .spinxAccoContent').addClass('showContent');
      })
    });
    return (
      <Fragment>
        <Waypoint topOffset={'0%'} onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave}>
          <div className="aboutUsSection" id="about">
            <div className="container">
                <div className="aboutSectionDflex">
                    <div className="leftContent">
                        <h3>আমাদের সম্পর্কে</h3>
                        <h2>ইন্টারনেট এবং মানুষের মধ্যে সেতুবন্ধন।</h2>
                    </div>
                    <div className="rightContent">
                        <div className="spinxConnect">
                            <div data-index="0" className="spinxAccoTitle current">
                                <i className="icnConnect icon_01"></i>সাইব্রিজ বাংলাদেশ সম্পর্কে
                                <div className="spinxAccoContent showContent"> 
                                    <p>সাইব্রিজ বাংলাদেশ একটি জাপান ভিত্তিক সফটওয়্যার কোম্পানি যা সাইব্রিজ গ্রুপ কর্পোরেশনের অধিভুক্ত একটি প্রতিষ্ঠান। এখন সাইব্রিজের ঢাকা, বাংলাদেশের পাশাপাশি টোকিও- সদর দফতর এবং ভিয়েতনামে অফিস রয়েছে। সাইব্রিজ বাংলাদেশে, আমরা উদ্ভাবনী এবং সৃজনশীল পরিষেবা প্রদান করি যেমন ওয়েব ডিজাইন এবং ডেভেলপমেন্ট, মোবাইল অ্যাপ্লিকেশন ডেভেলপমেন্ট, সফটওয়্যার কোয়ালিটি টেস্টিং এবং 24x7 আইটি সাপোর্ট। জাপানে আমাদের সন্তুষ্ট গ্রাহকেরা আমাদের কাজের গুণগত মানের সাক্ষ্য বহন করে। অদূর ভবিষ্যতে আমরা কেবল জাপানেই নয় বাংলাদেশেও আমাদের গ্রাহকদের আস্থা ও প্রত্যাশা মেটাতে সক্ষম এরকম আরও উদ্ভাবনী এবং মান সম্পন্ন পণ্য সরবরাহ করতে প্রতিশ্রুতিবদ্ধ।</p> 
                                </div> 
                            </div> 
                            <div data-index="1" className="spinxAccoTitle">
                                <i className="icnCreate icon_02"></i>কর্পোরেট দর্শন
                                <div className="spinxAccoContent"> 
                                    <p>কর্মীদের বিকাশ এবং কোম্পানির প্রবৃদ্ধির মাধ্যমে আমরা একটি ভাল সমাজ তৈরি করবো।</p>
                                </div> 
                            </div> 

                            <div data-index="2" className="spinxAccoTitle">
                                <i className="icnEvolve"></i>কর্পোরেট স্লোগান
                                <div className="spinxAccoContent"> 
                                    <p>আমরা সময়ের পরিবর্তনের সাথে যে নতুন প্রত্যাশা তৈরি হয় তা পূরণের চেষ্টা চালিয়ে যাবো এবং নতুন মূল্যবোধ তৈরি করব যা মানুষের জীবনকে সমৃদ্ধ করবে।</p> 
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
export default AboutUs;
