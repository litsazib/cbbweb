import React, { Component,Fragment } from 'react';
import img_logo01 from '../../asset/images/footer/img_logo01.jpg';
import img_logo02 from '../../asset/images/footer/img_logo02.jpg';
import img_logo05 from '../../asset/images/footer/img_logo05.jpg';
import img_email from '../../asset/images/footer/img_email-b.png';
import icon_fb from '../../asset/images/social/icon_fb.png';
import icon_fb_h from '../../asset/images/social/icon_fb_h.png';
import icon_twitter from '../../asset/images/social/icon_twitter.png';
import icon_twitter_h from '../../asset/images/social/icon_twitter_h.png';
import icon_linkedin from '../../asset/images/social/icon_linkedin.png';
import icon_linkedin_h from '../../asset/images/social/icon_twitter_h.png';
import icon_instagram from '../../asset/images/social/icon_instagram.png';
import icon_instagram_h from '../../asset/images/social/icon_Instagram_h.png';
import icon_youtube from '../../asset/images/social/icon_youtube.png';
import icon_youtube_h from '../../asset/images/social/icon_youtube_h.png';
import icon_medium from '../../asset/images/social/icon_medium.png';
import icon_medium_h from '../../asset/images/social/icon_medium_h.png';

class Footer extends Component {
  render() {
    return (
      <Fragment>
            <div id="footer">
              <div id="footerInner">
                  <div className="footerTop clearfix">
                      <div className="cbGroup">
                          <h4 className="headline">CYBRiDGE Group</h4>
                          <div className="cbGroupIcon">
                              <a href="https://www.cybridge.jp" rel="noreferrer" target="_blank"><img src={img_logo01} alt="img_logo01" /></a>
                              <a href="https://bd.cybridge.jp" rel="noreferrer" target="_blank"><img src={img_logo02} alt="img_logo02" /></a>
                              <a href="https://cybridgeasia.vn" rel="noreferrer" target="_blank"><img src={img_logo05} alt="img_logo05" /></a>
                          </div>
                      </div>
                      <div className="address">
                          <div className="dflexAddress">
                              <div className="addressPhoneMailBlock">
                                  <h2>Bangladesh Office</h2>
                                  <div className="addressBlock clearfix">
                                      <div className="address addressTxt">H-257, Road-19, Flat-A3, Mohakhali DOHS,<br/>Dhaka-1206, Bangladesh<br/>+880 174 9757957</div>
                                  </div>
                                  <div className="mailBlock clearfix">
                                      <div className="mail"><img src={img_email} alt=""/></div>
                                  </div>
                              </div>
                              <div className="japanOffice">
                                  <h2>Japan Office</h2>
                                  <div className="addressBlock clearfix">
                                      <div className="address addressTxt">〒151-0051<br/>5-27-5, Sendagaya, Shibuya-ku, <br/>Tokyo-to, Japan</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="sns">
                          <h2>Follow Us</h2>
                          <ul>
                              <li><a href="https://www.facebook.com/CybridgeBangladesh" target="_blank" rel="noreferrer"><img className="icon_fb" src={icon_fb} onMouseOver={e => (e.currentTarget.src = icon_fb_h)} onMouseOut={e=>(e.currentTarget.src= icon_fb)} alt="icon_fb"/></a></li>
                              <li><a href="https://twitter.com/cybridge" target="_blank" rel="noreferrer"><img className="icon_twitter" src={icon_twitter} onMouseOver={e=>(e.currentTarget.src=icon_twitter_h)} onMouseOut={e=>(e.currentTarget.src=icon_twitter)}  alt="icon_twitter"/></a></li>
                              <li><a href="https://www.linkedin.com/company/cybridge-bangladesh" target="_blank" rel="noreferrer"><img className="icon_in" src={icon_linkedin} onMouseOver={e=>(e.currentTarget.src=icon_linkedin_h)} onMouseOut={e=>(e.currentTarget.src=icon_linkedin)}  alt="icon_linkedin"/></a></li>
                              <li><a href="https://www.instagram.com/accounts/login/?next=/cybridgebangladesh/" target="_blank" rel="noreferrer"><img className="icon_ins" src={icon_instagram} onMouseOver={e=>(e.currentTarget.src=icon_instagram_h)} onMouseOut={e=>(e.currentTarget.src=icon_instagram)} alt="icon_instagram"/></a></li>
                              <li><a href="https://www.youtube.com/channel/UCsfoAPEMIpsG8E9Q4z7hdCg" target="_blank" rel="noreferrer"><img className="icon_youtube" src={icon_youtube} onMouseOver={e=>(e.currentTarget.src=icon_youtube_h)} onMouseOut={e=>(e.currentTarget.src=icon_youtube)} alt="icon_youtube"/></a></li>
                              <li><a href="https://medium.com/oceanize-geeks" target="_blank" rel="noreferrer"><img className="icon_medium" src={icon_medium} onMouseOver={e=>(e.currentTarget.src=icon_medium_h)} onMouseOut={e=>e.currentTarget.src=icon_medium} alt="icon_medium"/></a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="footerBottom">
                      <div className="top"></div>
                      <div className="bottom clearfix">
                          <div>Copyright © CYBRiDGE Bangladesh all rights reserved.</div>
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
    )
  }
}

export default Footer;
