import React, { Component,Fragment } from 'react';
import { Link } from 'react-scroll';
import { Waypoint } from 'react-waypoint';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
class Strength extends Component {

  _handleWaypointEnter = ()=>{
    let strengthItem = document.querySelector('.navAnimated li:nth-child(3)');
    strengthItem.classList.add('active')

  }
  _handleWaypointLeave = ()=>{
    let strengthItem = document.querySelector('.navAnimated li:nth-child(3)');
    strengthItem.classList.remove('active')
  }
  
  render() {
    return (
      <Fragment>
       <Waypoint topOffset={'20%'} onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave}>
          <div className="qualifiedSection clearfix" id="strength">
            <div className="container">
                <div className="ourQuilifiedContent">
                    <div className="payFor wow fadeInLeft">
                        <div className="title">
                            <h2>私たちの強み</h2>
                            <h3>高品質のソフトウェアソリューションにお金を払います。</h3>
                        </div>
                        <div className="description">
                            <p className="first">お客様のお金を大切にし、常に一流の品質のソフトウェアソリューションを提供することをお約束します。お客様のために弊社の開発者はスムーズなユーザー体験、セキュリティ、および収益性を保証する最新技術に基づくソフトウェアソリューションを提供するために絶え間なく努力しています。</p>
                            <p className="last">顧客満足度100％で、短期間にソフトウェア業界をリードする地位を獲得しました。</p>
                            <Link className="getInTouch"  to="contact-us" spy={true} smooth={true} offset={-100} duration={500}>お問い合わせはこちら</Link>
                        </div>
                    </div>
                    <div className="ourProject">
                        <div className="completeReview">
                            <div className="complete">
                                <div className="box blue wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="title">
                                        <h3>
                                          <CountUp start={0} end={80}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                  <span className="number color1 counter" ref={countUpRef}>80</span>
                                                </VisibilitySensor>
                                            )}
                                          </CountUp>
                                          <span>プロジェクト</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                        過去5年間で、80以上のプロジェクトを成功させ、100％の顧客満足度を確保しています。
                                    </div>
                                </div>

                                <div className="box wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="title">
                                        <h3>
                                          <CountUp start={0} end={50}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                  <span className="number color2 counter" ref={countUpRef}>50</span>
                                                </VisibilitySensor>
                                            )}
                                          </CountUp>
                                          <span>完了</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                      現在までに50社以上のパートナー企業との共同作業を成功させてきました。
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <div className="box wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="title">
                                        <h3>
                                          <CountUp start={0} end={60}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                  <span className="number color2 counter" ref={countUpRef}>60</span>
                                                </VisibilitySensor>
                                            )}
                                          </CountUp>
                                          <span>クライアント</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                        60名以上の幸せなクライアントは弊社の今後の旅路のインスピレーションとなっています。
                                    </div>
                                </div>

                                <div className="box blue wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="title">
                                        <h3>
                                          <CountUp start={0} end={100}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                  <span className="number color2 counter" ref={countUpRef}>100</span>
                                                </VisibilitySensor>
                                            )}
                                          </CountUp>
                                          <span>レビュー</span>
                                        </h3>
                                    </div>

                                    <div className="contain">
                                        弊社を信じ続け率直な意見を聞かせてくれる立派なお客さまにいつも感謝しています。
                                    </div>
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
export default Strength;
