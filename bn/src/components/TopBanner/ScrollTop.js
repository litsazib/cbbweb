import React, {useEffect } from 'react';
import $ from 'jquery';
import icon_left_arrow from '../../asset/images/ourteam/icon_left_arrow.png';
import { Link } from 'react-scroll';

const ScrollTop = ()=>{

  const pageTop = (e) => {
    e.preventDefault();
    $("html,body").animate({scrollTop: 0});
    return false;
  }

  useEffect(()=>{
    $('.scrollToTop').hide();
    window.addEventListener("scroll",()=>{
      if ($(window).scrollTop()>150){
        $('.scrollToTop').show(1000);
      }else{
        $('.scrollToTop').hide(1000);
      }
    })
  },[])

  return (
    <div className="scrollToTop"><Link to="#" rel="noreferrer" onClick={pageTop}><img src={icon_left_arrow} alt="icon_left_arrow"/></Link></div>
  )
}

export default ScrollTop;
