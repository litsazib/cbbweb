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
                        <h3>企業情報</h3>
                        <h2>インターネットと人をつなぐ架け橋。</h2>
                    </div>
                    <div className="rightContent">
                        <div className="spinxConnect">
                            <div data-index="0" className="spinxAccoTitle current">
                                <i className="icnConnect icon_01"></i>サイブリッジバングラデシュについて
                                <div className="spinxAccoContent showContent"> 
                                    <p>サイブリッジバングラデシュは、株式会社サイブリッジグループの関連会社である、日本に拠点を置くソフトウェア会社です。現在、サイブリッジはダッカ、バングラデシュ、東京本社、ベトナムにオフィスを構えています。サイブリッジ・バングラデシュでは、Webデザイン・開発、モバイルアプリケーション開発、ソフトウェア品質テスト、24時間365日のITサポートなど、革新的で創造的なサービスを提供しています。日本で満足している弊社のクライアントは、弊社の仕事の質の高さを証明しています。近い将来、日本だけでなく、ここバングラデシュでも、お客様の信頼と期待に応えられるような、よりクリエイティブで良い商品ができるよう、日々努力しています。</p> 
                                </div> 
                            </div> 
                            <div data-index="1" className="spinxAccoTitle">
                                <i className="icnCreate icon_02"></i>企業理念
                                <div className="spinxAccoContent"> 
                                    <p>社員の成長、会社の成長によってより良い社会を実現を作りましょう。</p>
                                </div> 
                            </div> 

                            <div data-index="2" className="spinxAccoTitle">
                                <i className="icnEvolve"></i>コーポレートスローガン
                                <div className="spinxAccoContent"> 
                                    <p>時代の変化を先取りし、人々の生活をより豊かにする新しい価値を創造し続けます。</p> 
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
