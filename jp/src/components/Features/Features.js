import React, { Component,Fragment } from 'react';
import culture01 from '../../asset/images/icon_culture01.png';
import icon_transparency from '../../asset/images/icon_transparency03.png';
import trust from '../../asset/images/icon_trust02.png';
import Reliability from '../../asset/images/icon_Reliability04.png';

class Features extends Component {
  render() {
    return (
      <Fragment>
        <div className="whatMakesUsDifferent clearfix">
          <div className="container">
              <div className="titleSection wow fadeInUp">
                  <h3>何が違うのか。</h3>
              </div>

              <div className="bottomSection">
                  <div className="item wow fadeInUp" data-wow-delay=".2s">
                      <div className="imageTitle">
                          <div className="image"><img src={culture01} alt="icon_culture01" /></div>
                          <div className="heading">職場文化</div>
                      </div>

                      <div className="content">
                        弊社柔軟で、カジュアルで、自律的で、やりがいのある職場文化を育みます。 学び、成長し、進化するために、親会社の間に定期的に従業員を交換しています。
                      </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".4s">
                      <div className="imageTitle">
                          <div className="image"><img src={icon_transparency} alt="icon_transparency03" /></div>
                          <div className="heading">透明性</div>
                      </div>

                      <div className="content">
                          弊社のサービス、コミットメント、納期、プロジェクト予算について、100％の透明性を期待できます。そのため、不測の事態を心配する必要はありません。
                      </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".6s">
                      <div className="imageTitle">
                          <div className="image"><img src={trust} alt="icon_trust02" /></div>
                          <div className="heading">信頼</div>
                      </div>

                      <div className="content">
                         クライアントの信頼は弊社にとって最優先事項です。 弊社はお客様のビジネスを支援し、御社の成功を確かなものにするためにたゆまぬ努力をするためにここにいます。
                      </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".8s">
                      <div className="imageTitle">
                          <div className="image"><img src={Reliability} alt="icon_Reliability04" /></div>
                          <div className="heading">信頼性</div>
                      </div>

                      <div className="content">
                          弊社は守れる約束しかしません。弊社の信頼性はお客様の素晴らしい絆を築くのに役立ちます。
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Features;
