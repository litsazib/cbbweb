import React, { Component,Fragment } from 'react';
import Marquee from "react-fast-marquee";
import $ from "jquery";
import clientLogo1 from '../../asset/images/our_client/logos/img_logo01.png';
import clientLogo1_h from '../../asset/images/our_client/logo_active/img_logo01.png';
import clientLogo2 from '../../asset/images/our_client/logos/img_logo02.png';
import clientLogo2_h from '../../asset/images/our_client/logo_active/img_logo02.png';
import clientLogo3 from '../../asset/images/our_client/logos/img_logo03.png';
import clientLogo3_h from '../../asset/images/our_client/logo_active/img_logo03.png';
import clientLogo4 from '../../asset/images/our_client/logos/img_logo04.png';
import clientLogo4_h from '../../asset/images/our_client/logo_active/img_logo04.png';
import clientLogo5 from '../../asset/images/our_client/logos/img_logo05.png';
import clientLogo5_h from '../../asset/images/our_client/logo_active/img_logo05.png';
import clientLogo6 from '../../asset/images/our_client/logos/img_logo06.png';
import clientLogo6_h from '../../asset/images/our_client/logo_active/img_logo06.png';
import clientLogo7 from '../../asset/images/our_client/logos/img_logo07.png';
import clientLogo7_h from '../../asset/images/our_client/logo_active/img_logo07.png';
import clientLogo8 from '../../asset/images/our_client/logos/img_logo08.png';
import clientLogo8_h from '../../asset/images/our_client/logo_active/img_logo08.png';
import clientLogo9 from '../../asset/images/our_client/logos/img_logo09.png';
import clientLogo9_h from '../../asset/images/our_client/logo_active/img_logo09.png';
import clientLogo10 from '../../asset/images/our_client/logos/img_logo10.png';
import clientLogo10_h from '../../asset/images/our_client/logo_active/img_logo10.png';


class Brand extends Component {

  render() {
      $(document).on('mouseover',".imageChange",function(){
        var hoverImage = $(this).attr("data-hover");

        $(this).fadeIn("slow", function(){
          $(this).attr("src", hoverImage);
        });
      })

      $(document).on('mouseout',".imageChange",function(){
        var hoverImage = $(this).attr("data-out");

        $(this).fadeIn("slow", function(){
          $(this).attr("src", hoverImage);
        });
      })

    return (
      <Fragment>
        <div className="ourClientProjectSection clearfix">
          <div className="container">
            <Marquee gradient={false} pauseOnClick={true}>
                <div className="item">
                  <img className="imageChange" src={clientLogo1} alt="img_logo01" 
                  data-hover={clientLogo1_h}
                  data-out={clientLogo1} />
                </div>
                <div className="item">
                  <img className="imageChange" src={clientLogo2} alt="img_logo02" 
                  data-hover={clientLogo2_h}
                  data-out={clientLogo2} />
                </div>
                <div className="item">
                  <img className="imageChange" src={clientLogo3} alt="img_logo03" 
                  data-hover={clientLogo3_h}
                  data-out={clientLogo3} />
                </div>
                <div className="item">
                  <img className="imageChange" src={clientLogo4} alt="img_logo04" 
                  data-hover={clientLogo4_h}
                  data-out={clientLogo4} />
                </div>
                <div className="item">
                  <img className="imageChange" src={clientLogo5} alt="img_logo05" 
                  data-hover={clientLogo5_h}
                  data-out={clientLogo5} />
                </div>
                <div className="item">
                  <img className="imageChange" src={clientLogo6} alt="img_logo06" 
                  data-hover={clientLogo6_h}
                  data-out={clientLogo6} />
                </div>
                <div className="item">
                  <img className="imageChange" src={clientLogo7} alt="img_logo07" 
                  data-hover={clientLogo7_h}
                  data-out={clientLogo7} />
                </div>
                <div className="item">
                  <img className="imageChange" src={clientLogo8} alt="img_logo08" 
                  data-hover={clientLogo8_h}
                  data-out={clientLogo8} />
                </div>
                <div className="item">
                  <img className="imageChange" src={clientLogo9} alt="img_logo09" 
                  data-hover={clientLogo9_h}
                  data-out={clientLogo9} />
                </div>
                <div className="item">
                  <img className="imageChange" src={clientLogo10} alt="img_logo09" 
                  data-hover={clientLogo10_h}
                  data-out={clientLogo10} />
                </div>
            </Marquee>
          </div>
      </div>
      </Fragment>
    )
  }
}

export default Brand;

