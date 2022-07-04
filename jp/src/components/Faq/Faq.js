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
                          <h2>よくある質問</h2>
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
                                          <label className="label" htmlFor="rd1">ソフトウェア開発にはどのくらい時間がかかりますか。</label>
                                          <div className="content">
                                         この質問に対しては、お客様の要望を把握し、適切なプロジェクト分析を行わない限り、正確な回答はできません。
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd2" name="rd"/>
                                          <label className="label" htmlFor="rd2">御社と一緒に働くための技術的な詳細に精通している必要がありますか。</label>
                                          <div className="content">
                                              全く必要ありません。弊社はすべての段階でお客様をサポートします。お客様側で必要なのは目的のソフトウェア製品を使ってどのような目的を達成したいかという明確なビジョンだけです。そのため、お客様は自分のニーズに集中する必要があります、弊社はそれを実現するためのお手伝いをします。
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd3" name="rd"/>
                                          <label className="label" htmlFor="rd3">作業を開始するために必要な情報は何ですか。</label>
                                          <div className="content">
                                              プロジェクトの詳細例えば締め切り、見込みユーザー、解決したいビジネス上の課題などを教えてください。
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd4" name="rd"/>
                                          <label className="label" htmlFor="rd4">仕事でどのような方法論を使用していますか。</label>
                                          <div className="content">
                                          弊社が業務で使用する主な方法論はアジャイルですが、その選択は特定のプロジェクトに依存する場合があります。プロジェクトの作業に対する反復的なアプローチは、定期的に製品品質を向上させる機会を提供し、また、常に顧客からのフィードバックを得ることができます。
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd5" name="rd"/>
                                          <label className="label" htmlFor="rd5">御社のお客様の地理は何処ですか。</label>
                                          <div className="content">
                                             現在、日本国内のお客様にのみサービスを提供していますが、今後はバングラデシュを含む南アジアでのビジネス展開を予定しています。
                                          </div>
                                      </div>
                                      <div className="tab">
                                          <input type="radio" id="rd6" name="rd"/>
                                          <label className="label" htmlFor="rd6">御社のオフィスはどこですか。</label>
                                          <div className="content">
                                              サイブリッジバングラデシュは日本を拠点とするソフトウェア会社であるサイブリッジグループ株式会社の関連会社です。サイブリッジグループ株式会社は2004年に東京で設立されましたが、サイブリッジバングラデシュは2015年からバングラデシュで事業を展開しています。現在では、バングラデシュのダッカのほか、東京本社、ベトナムにオフィスを構えています。
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
