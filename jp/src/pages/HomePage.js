import React, { Component, Fragment } from 'react';
import '../asset/css/animate.css';
import '../asset/css/style.css';
import '../asset/css/responsive.css';
import '../asset/css/bn.css';
import WOW from 'wowjs';
import TopBanner from "../components/TopBanner/TopBanner";
import Brand from "../components/ClientProject/Brand";
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import Features from '../components/Features/Features';
import Skill from '../components/Skill/Skill';
import Strength from '../components/Strength/Strength';
import Faq from '../components/Faq/Faq';
import Video from '../components/Video/Video';
import Team from '../components/Team/Team';
import Contact from '../components/Contact/Contact';
import BlogPost from '../components/Blog/BlogPost';
import Footer from '../components/Footer/Footer';
import MobileNav from '../components/MobileNav/MobileNav';
import Loading from '../components/Loading/Loading';


class HomePage extends Component {

  state = { isLoading: true }


  componentDidMount() {
    window.addEventListener('load', (event) => {
      this.setState({isLoading: false})
    });
    new WOW.WOW({
      live: false
    }).init();
  }
  
  render() {
    if(this.state.isLoading) {
      return (<Loading/>);
    }else {
      return (
        <Fragment>
          <MobileNav/>
          <TopBanner />
          <Brand/>
          <AboutUs/>
          <Services/>
          <Features/>
          <Skill/>
          <Strength/>
          <Faq/>
          <Video/>
          <Team/>
          <Contact/>
          <BlogPost/>
          <Footer/>
        </Fragment>
      );
    }
  }
}

export default HomePage;