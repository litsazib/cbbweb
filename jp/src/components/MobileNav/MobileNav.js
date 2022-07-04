import React, { Component,Fragment } from 'react';
import { Link } from 'react-scroll';
import logo_right from '../../asset/images/logo_right.png';
import icon_fb from '../../asset/images/social/icon_fb.png';
import icon_twitter from '../../asset/images/social/icon_twitter.png';
import icon_linkedin from '../../asset/images/social/icon_linkedin.png';
import icon_instagram from '../../asset/images/social/icon_instagram.png';
import icon_youtube from '../../asset/images/social/icon_youtube.png';
import icon_medium from '../../asset/images/social/icon_medium.png';



class MobileNav extends Component {

  onScroll = () => {
    if (window.scrollY > 100) {
      document.getElementById('mobileNavbar').classList.add('stickyNav');
    }
    else if (window.scrollY < 100) {
      document.getElementById('mobileNavbar').classList.remove('stickyNav');
    }
  }
  showNav = ()=> {
    document.getElementById('mySidenav').style.width="100%";
  }
  hideNav = (e)=> {
    e.preventDefault();
    document.getElementById('mySidenav').style.width="0%";
  }
  onNavLinkClick = (e)=> {
    document.getElementById('mySidenav').style.width="0%";
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <nav id="mobileNavbar">
            <div className="spLogo">
              <a href="/"><img src={logo_right} alt="sp-logo"/></a>
            </div>
            <div className="navIcon" id="openNav" onClick={this.showNav}><p>☰</p></div>
        </nav>
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" id="closeNav" onClick={this.hideNav}>&times;</a>
            <ul className="spMenuLinks">
              <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={this.onNavLinkClick} >企業情報</Link></li>
              <li><Link to="service" spy={true} smooth={true} offset={-100} duration={500} onClick={this.onNavLinkClick} >サービス</Link></li>
              <li><Link to="strength" spy={true} smooth={true} offset={-100} duration={500} onClick={this.onNavLinkClick} >強さ</Link></li>
              <li><Link to="team" spy={true} smooth={true} offset={-100} duration={500} onClick={this.onNavLinkClick} >チーム</Link></li>
              <li><Link to="blog" spy={true} smooth={true} offset={-100} duration={500} onClick={this.onNavLinkClick} >ブログ</Link></li>
              <li className="btnGetInTouch"><Link to="contact-us" spy={true} smooth={true} offset={300} duration={500} onClick={this.onNavLinkClick} >お問い合わせはこちら</Link></li>
            </ul>
            <div className="snsLink">
                <h2>フォローする</h2>
                <div className="images">
                    <a href="https://www.facebook.com/CybridgeBangladesh" target="_blank" rel="noreferrer"><img src={icon_fb} alt="icon_fb" /></a>
                    <a href="https://twitter.com/cybridge" target="_blank" rel="noreferrer"><img src={icon_twitter}  alt="icon_twitter" /></a>
                    <a href="https://www.linkedin.com/company/cybridge-bangladesh" target="_blank" rel="noreferrer"><img src={icon_linkedin}  alt="icon_linkedin" /></a>
                    <a href="https://www.instagram.com/accounts/login/?next=/cybridgebangladesh/" target="_blank" rel="noreferrer"><img src={icon_instagram} alt="icon_instagram" /></a>
                    <a href="https://www.youtube.com/channel/UCsfoAPEMIpsG8E9Q4z7hdCg" target="_blank" rel="noreferrer"><img src={icon_youtube} alt="icon_youtube" /></a>
                    <a href="https://medium.com/oceanize-geeks" target="_blank" rel="noreferrer"><img src={icon_medium} alt="icon_medium" /></a>
                </div>
            </div>
        </div>
      </Fragment>
    )
  }
}
export default  MobileNav;
