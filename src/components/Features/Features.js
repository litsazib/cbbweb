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
                  <h3>What Makes Us Different?</h3>
              </div>

              <div className="bottomSection">
                  <div className="item wow fadeInUp" data-wow-delay=".2s">
                      <div className="imageTitle">
                          <div className="image"><img src={culture01} alt="icon_culture01" /></div>
                          <div className="heading">Work Culture</div>
                      </div>

                      <div className="content">
                        We nurture a flexible, casual, autonomous, and rewarding work culture. We regularly exchange our employees in between our parent companies to learn, grow, and evolve.
                      </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".4s">
                      <div className="imageTitle">
                          <div className="image"><img src={icon_transparency} alt="icon_transparency03" /></div>
                          <div className="heading">Transparency</div>
                      </div>

                      <div className="content">
                          You can expect 100% transparency regarding our services, commitment, deadlines, and project budgets. So you need not worry about any nasty surprises.
                      </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".6s">
                      <div className="imageTitle">
                          <div className="image"><img src={trust} alt="icon_trust02" /></div>
                          <div className="heading">Trust</div>
                      </div>

                      <div className="content">
                          Our client’s trust is paramount to us. We are here to assist your business and work tirelessly to ensure your success.
                      </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".8s">
                      <div className="imageTitle">
                          <div className="image"><img src={Reliability} alt="icon_Reliability04" /></div>
                          <div className="heading">Reliability</div>
                      </div>

                      <div className="content">
                          We only ever make promises that we can keep. Our reliability helps us develop great bonding with our clients.
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
