import React, { Component,Fragment } from 'react';
import img_main from '../../asset/images/animation_faq/img_main.png';
import img_like_right02 from '../../asset/images/animation_faq/img_like_right02.png';
import img_smile05 from '../../asset/images/animation_faq/img_smile05.png';
import img_star_right01 from '../../asset/images/animation_faq/img_star_right01.png';
import img_star_right03 from '../../asset/images/animation_faq/img_star_right03.png';
import img_like_right1 from '../../asset/images/animation_faq/img_like_right-1.png';
import img_star_right02 from '../../asset/images/animation_faq/img_star_right01.png';

class Faq extends Component {
  
  mouseMoveElement = (event) => {
    let faqMouseMove = document.getElementsByClassName('faqMouseMove');
    faqMouseMove[0].style.setProperty('transform', "translate3d(" + (event.clientX / 100) + "px, " + (event.clientY / 100) + "px, 0px)");
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.mouseMoveElement);
  }

  render() {
    return (
      <Fragment>
            <div className="faqSection clearfix">
              <div className="container">
                  <div className="ourFaqContent wow fadeInUp">
                      <h3>এফ.এ.কিউ</h3>
                      <div className="titleArea">
                          <h2>জিজ্ঞাসিত প্রশ্ন</h2>
                      </div>
                  </div>
                  <div className="optionsRap">
                      <div className="whyOptions">
                          <div className="optsns optionsLeft wow slideInLeft">
                              <img src={img_main} alt=""/>
                              <div className="faqMouseMove">
                                  <div className="faqAnimation first">
                                      <img src={img_like_right02} alt="img_like_right02" />
                                  </div>

                                  <div className="faqAnimation second">
                                      <img src={img_smile05} alt="img_smile05" />
                                  </div>

                                  <div className="faqAnimation third">
                                      <img src={img_star_right01} alt="img_star_right01" />
                                  </div>

                                  <div className="faqAnimation four">
                                      <img src={img_star_right03} alt="img_star_right03" />
                                  </div>

                                  <div className="faqAnimation five">
                                      <img src={img_like_right1} alt="img_like_right02" />
                                  </div>

                                  <div className="faqAnimation six">
                                      <img src={img_star_right02} alt="img_star_right01" />
                                  </div>
                              </div>
                          </div>
                          <div className="optsns optionsRight wow slideInRight">
                              <div className="faqContentsVessel">
                                  <div className="tabs">
                                      <div className="tab">
                                          <input type="radio" id="rd1" name="rd" defaultChecked/>
                                          <label className="label" htmlFor="rd1">একটি সফটওয়্যার ডেভেলপ করতে কেমন সময় নেয়?</label>
                                          <div className="content">
                                         আমরা গ্রাহকের চাহিদা সম্পর্কে না জেনে এবং সঠিক প্রকল্প বিশ্লেষণ না করে এই প্রশ্নের সঠিক উত্তর দিতে পারবো না।
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd2" name="rd"/>
                                          <label className="label" htmlFor="rd2">আপনাদের সাথে কাজ করার জন্য আমার কি প্রযুক্তিগত ব্যাপারের সাথে পরিচিত হওয়া প্রয়োজন?</label>
                                          <div className="content">
                                              কদমই প্রয়োজন নেই। আমরা প্রতিটি পর্যায়ে আপনাকে সহায়তা করতে প্রস্তুত আছি। কাঙ্খিত সফ্টওয়্যার ব্যবহার করে আপনি কী লক্ষ্য অর্জন করতে চান তার একটি পরিষ্কার দৃষ্টিভঙ্গি গ্রাহকের থাকা প্রয়োজন। অতএব, আপনাকে কেবল আপনার প্রয়োজনটা আমাদের জানাতে হবে এবং আমরা আপনাকে সেগুলো বাস্তবায়ন করতে সহায়তা করব।
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd3" name="rd"/>
                                          <label className="label" htmlFor="rd3">কাজ শুরু করার জন্য আমার কাছ থেকে আপনার কি কি তথ্য লাগবে?</label>
                                          <div className="content">
                                              দয়া করে আপনার প্রকল্পের বিস্তারিত শেয়ার করুন যেমন সময়সীমা, সম্ভাব্য ব্যবহারকারী বা ব্যবসায়িক চ্যালেঞ্জ যে গুলো আপনি সমাধান করতে চান।
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd4" name="rd"/>
                                          <label className="label" htmlFor="rd4">কাজ করতে আপনারা কোন মেথোডোলজি ব্যবহার করেন?</label>
                                          <div className="content">
                                          আমাদের কাজে আমরা যে প্রধান মেথোডোলজি ব্যবহার করি তা হল Agile, যদিও এটি প্রকল্পের উপর নির্ভর করে। প্রকল্পের কাজ করার সময় Iterative Approach আমাদের নিয়মিতভাবে পণ্যের গুণগত মান উন্নত করার সুযোগ দেয়, এবং গ্রাহকদের নিয়মিত ফিডব্যাক জানানোর সুযোগ দেয়। 
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd5" name="rd"/>
                                          <label className="label" htmlFor="rd5">আপনাদের গ্রাহক কোথাকার?</label>
                                          <div className="content">
                                             বর্তমানে, আমরা শুধুমাত্র জাপানি গ্রাহকদের আমাদের পরিষেবা প্রদান করি তবে আমরা বাংলাদেশ সহ দক্ষিণ এশিয়ায় আমাদের ব্যবসা সম্প্রসারণের পরিকল্পনা করেছি।
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd6" name="rd"/>
                                          <label className="label" htmlFor="rd6">আপনার কোম্পানির অফিস কোথায় অবস্থিত?</label>
                                          <div className="content">
                                              সাইব্রিজ বাংলাদেশ হল সাইব্রিজ গ্রুপ কর্পোরেশনের একটি অধিভুক্ত প্রতিষ্ঠান যা একটি জাপান ভিত্তিক সফটওয়্যার কোম্পানি। আমরা 2015 সাল থেকে বাংলাদেশে কাজ করছি যদিও সাইব্রিজ গ্রুপ কর্পোরেশন 2004 সালে জাপানের টোকিওতে প্রতিষ্ঠিত হয়েছিল। বর্তমানে আমাদের ঢাকা, বাংলাদেশের পাশাপাশি টোকিও- সদর দফতর এবং ভিয়েতনামে অফিস রয়েছে।
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
    )
  }
}
export default Faq;
