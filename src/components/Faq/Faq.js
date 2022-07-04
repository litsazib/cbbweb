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
                      <h3>FAQ</h3>
                      <div className="titleArea">
                          <h2>Frequently Asked Questions</h2>
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
                                          <label className="label" htmlFor="rd1">How long does software development take?</label>
                                          <div className="content">
                                          We cannot give a precise answer to this question without knowing the client’s demand and without doing proper project analysis.
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd2" name="rd"/>
                                          <label className="label" htmlFor="rd2">Should I be familiar with the technical details to work with you?</label>
                                          <div className="content">
                                              There is absolutely no need. We are here to assist you at every stage. From the client side, all you need is a clear vision of what objectives you want to achieve using the desired software product. TherehtmlFore, you just have to focus on your needs, and we will help you make them a reality.
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd3" name="rd"/>
                                          <label className="label" htmlFor="rd3">What inhtmlFormation do you need from me to start work?</label>
                                          <div className="content">
                                              Please share the details of your project like deadline, prospective users, or business challenges you’d like to solve.
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd4" name="rd"/>
                                          <label className="label" htmlFor="rd4">What methodologies do you use in your work?</label>
                                          <div className="content">
                                          The main methodology we use in our work is Agile, although the choice may depend on a specific project. An iterative approach to the work on the project provides us with the opportunity to regularly improve the product quality, and also constant customer feedback.
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd5" name="rd"/>
                                          <label className="label" htmlFor="rd5">What is your customer geography?</label>
                                          <div className="content">
                                              Currently, we provide our services to customers only in Japan but we have plan to expand our business in South Asia including Bangladesh.
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd6" name="rd"/>
                                          <label className="label" htmlFor="rd6">Where are your company’s office located?</label>
                                          <div className="content">
                                              CYBRiDGE Bangladesh is an affiliate of CYBRiDGE Group Corporation which is a Japan based Software Company. We have been operating in Bangladesh since 2015 although CYBRiDGE Group Corporation was established in 2004 in Tokyo, Japan. Now we have offices in Dhaka, Bangladesh as well as in the Tokyo- Headquarters, and Vietnam.
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
