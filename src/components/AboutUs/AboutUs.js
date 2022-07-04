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
                        <h3>About Us</h3>
                        <h2>Bridge between the Internet and People.</h2>
                    </div>
                    <div className="rightContent">
                        <div className="spinxConnect">
                            <div data-index="0" className="spinxAccoTitle current">
                                <i className="icnConnect icon_01"></i>About Cybridge Bangladesh
                                <div className="spinxAccoContent showContent"> 
                                    <p>Cybridge Bangladesh is a Japan based Software Company which is an affiliate of CYBRiDGE Group Corporation. Now CYBRiDGE has offices in Dhaka, Bangladesh as well as in the Tokyo- Headquarters, and Vietnam. At CYBRiDGE Bangladesh, we provide innovative and creative services such as web design and development, mobile application development, software quality testing and 24x7 IT support. Our satisfied clients in Japan bear testimony to the quality of our work.  In the near future, we are committed to provide more innovative and qualified products, deserving the trust and expectation of our customers, not only in Japan, but also here in Bangladesh.</p> 
                                </div> 
                            </div> 
                            <div data-index="1" className="spinxAccoTitle">
                                <i className="icnCreate icon_02"></i>Corporate Philosophy
                                <div className="spinxAccoContent"> 
                                    <p>Make a better society through the growth of employees and the growth of the company.</p>
                                </div> 
                            </div> 

                            <div data-index="2" className="spinxAccoTitle">
                                <i className="icnEvolve"></i>Corporate Slogan
                                <div className="spinxAccoContent"> 
                                    <p>We will continue to anticipate the changes of the times and create new values that enrich people's lives.</p> 
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
