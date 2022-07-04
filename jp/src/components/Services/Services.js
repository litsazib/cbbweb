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
                      <h3>サービス</h3>
                      <p>私たちが提供するもの</p>
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
                                <h2>ウェブ開発</h2>
                                <p>サイブリッジバングラデシュは、従来のソリューションにとらわれず、最もユニークなWeb製品を開発することを約束します。</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".2s">
                          <div className="bannerItemImg">
                              <img src={img_services01} alt="img_services01"/>
                          </div>
                          <h2>カスタムソフトウェア開発</h2>
                          <p>すべてのビジネスがユニークであることを知っているので、御社のビジネスのために特別に設計された、最高にカスタマイズされたソフトウェアソリューションをゼロから提供します。</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".4s">
                          <div className="bannerItemImg wide">
                              <img src={img_services02} alt="img_services02"/>
                          </div>
                          <h2 className="mt36">アプリ開発</h2>
                          <p>弊社の専門家チームは、iOSとandroidの両方のアプリケーションを開発し、クライアントに必要不可欠な機能を提供するために最もカスタマイズされたよく適しています。</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".6s">
                          <div className="bannerItemImg">
                              <img src={img_services03} alt="img_services03"/>
                          </div>
                          <h2>クラウドコンピューティング</h2>
                          <p>クラウドコンピューティングは、企業がITリソースについて考えていた従来の方法から大きく転換するものです。弊社のクラウドコンピューティングサービスは、企業がスケーラブルで費用効果が高く安全でシンプルで俊敏性の高いシステムを推進するために役立ちます。</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".8s">
                          <div className="bannerItemImg">
                              <img src={img_services04} alt="img_services04"/>
                          </div>
                          <h2>UI/UXデザイン</h2>
                          <p>詳細志向のサービスと最新のUI/UXテクノロジー、ウェブポータル、エンタープライズシステム、モバイルアプリケーションの美しくユーザーフレンドリーなデザインを作成することでクライアントの期待を変えるアーキテクチャを提供します。</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".10s">
                          <div className="bannerItemImg">
                              <img src={img_services05} alt="img_services05"/>
                          </div>
                          <h2>品質保証とテスト</h2>
                          <p>テストは、お客様が高品質でバグのないソフトウェアをクイックリリースで提供できるように、厳格な期限内にフルレンジのQAサービス（手動および自動化テスト）を保証することを目的としています。</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".12s">
                          <div className="bannerItemImg">
                              <img src={img_services06} alt="img_services06"/>
                          </div>
                          <h2>インターネットオブシングス (IoT)</h2>
                          <p>弊社のインターネットオブシングス (IoT)専門チームは、スマートシティ、スマートハウス、産業用モニタリング、オートメーション、交通ソリューションなどの大規模な公共および商業IoTプロジェクトの開発と実装に注力しています。</p>
                      </div>

                      <div className="bannerItem wow fadeInUp" data-wow-delay=".14s">
                          <div className="bannerItemImg">
                              <img src={img_services07} alt="img_services07"/>
                          </div>
                          <h2>開発チームの増強</h2>
                          <p>デスクトップ、モバイル、ウェブアプリのモックアップから完全な開発まで、弊社のソフトウェアエンジニア増強サービスは、複雑さに関わらず、あらゆる種類のプロジェクトに対応します。</p>
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
