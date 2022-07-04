import React, { Component,Fragment } from 'react';
import culture01 from '../../asset/images/icon_culture01.png';
import icon_transparency from '../../asset/images/icon_transparency03.png';
import trust from '../../asset/images/icon_trust02.png';
import Reliability from '../../asset/images/icon_Reliability04.png';

class Features extends Component {
  render() {
    return (
      <Fragment>
        <div className="whatMakesUsDifferent clearfix">
          <div className="container">
              <div className="titleSection wow fadeInUp">
                  <h3>কি আমাদের স্বতন্ত্র করে তোলে?</h3>
              </div>

              <div className="bottomSection">
                  <div className="item wow fadeInUp" data-wow-delay=".2s">
                      <div className="imageTitle">
                          <div className="image"><img src={culture01} alt="icon_culture01" /></div>
                          <div className="heading">কাজের সংস্কৃতি</div>
                      </div>

                      <div className="content">
                        আমরা একটি ফ্লেক্সিবল, ক্যাজুয়াল, স্বাধীন, এবং ফলপ্রসূ কাজের সংস্কৃতি লালন করি। আমরা শিখতে, অগ্রসর হতে এবং বিকশিত হওয়ার জন্য আমাদের মূল কোম্পানির মধ্যে নিয়মিত আমাদের কর্মীদের বিনিময় করি।
                      </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".4s">
                      <div className="imageTitle">
                          <div className="image"><img src={icon_transparency} alt="icon_transparency03" /></div>
                          <div className="heading">স্বচ্ছতা</div>
                      </div>

                      <div className="content">
                          আপনি আমাদের পরিষেবা, প্রতিশ্রুতি, সময়সীমা, এবং প্রকল্প বাজেট সম্পর্কে ১০০ % স্বচ্ছতা আশা করতে পারেন। তাই আপনাকে হঠাৎ কোনো বাজে চমকের জন্য চিন্তা করতে হবে না।
                      </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".6s">
                      <div className="imageTitle">
                          <div className="image"><img src={trust} alt="icon_trust02" /></div>
                          <div className="heading">বিশ্বাস</div>
                      </div>

                      <div className="content">
                         আমাদের গ্রাহকের আস্থা আমাদের কাছে সর্বাধিক গুরুত্বপূর্ণ। আমরা আপনার ব্যবসায় সহায়তা করতে এবং আপনার সাফল্য নিশ্চিত করতে অক্লান্ত পরিশ্রম করতে সদা প্রস্তুত।
                      </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".8s">
                      <div className="imageTitle">
                          <div className="image"><img src={Reliability} alt="icon_Reliability04" /></div>
                          <div className="heading">নির্ভরযোগ্যতা</div>
                      </div>

                      <div className="content">
                          আমরা কেবল তেমন প্রতিশ্রুতিই করি যা আমরা রাখতে পারবো। আমাদের নির্ভরযোগ্যতা আমাদের গ্রাহকদের সাথে দুর্দান্ত বন্ধন ধরে রাখতে সহায়তা করে।
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Features;
