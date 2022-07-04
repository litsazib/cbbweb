var maxchars = 300;
console.log('try out jquery');
$(document).ready(function() {
// Mobile Menu toggle 
$("#openNav").click(function(){
  $('#mySidenav').css('width','100%');
});
$("#closeNav").click(function(){
  $('#mySidenav').css('width','0%');
});

$('.spMenuLinks li a').click(function(){
  $('#mySidenav').css('width','0%');
});


$(window).scroll(function() {
  if ($(this).scrollTop()>150){
    $('.scrollToTop').show(1000);
  }else{
    $('.scrollToTop').hide(1000);
  }
});

/*About-us section interactive */ 
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

/* SNS Hover */
  function snsHover(){
    let path = "/public/images/social/";
    $(".icon_fb").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_fb_h.png`); 
      });     
    });     
    $(".icon_fb").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_fb.png`);    
      });    
    }); 

    $(".icon_twitter").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_twitter_h.png`); 
      });     
    });     
    $(".icon_twitter").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_twitter.png`);    
      });    
    }); 

    $(".icon_in").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_linkedin_h.png`); 
      });     
    });     
    $(".icon_in").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_linkedin.png`);    
      });    
    }); 

    $(".icon_ins").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_Instagram_h.png`); 
      });     
    });     
    $(".icon_ins").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_instagram.png`);    
      });    
    }); 

    $(".icon_youtube").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_youtube_h.png`); 
      });     
    });     
    $(".icon_youtube").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_youtube.png`);    
      });    
    }); 

    $(".icon_medium").mouseenter(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_medium_h.png`); 
      });     
    });     
    $(".icon_medium").mouseleave(function(){   
      $(this).fadeIn('slow', function(){
          $(this).attr('src',`${path}icon_medium.png`);    
      });    
    }); 
  } 
  snsHover();

  /**
   * INit WOW animation
   */
  var initWow = function() {
    var timeout = 10;
    setTimeout(function() {
      wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      });
      wow.init();
    }, timeout);
  };
  initWow();

  // Active Carousel 
  $("#testimonial-slider").owlCarousel({
    items: 1,
    nav: false,
    dots:true,
    margin: 0,
    loop:false,
    autoplay:false,
    autoplayTimeout:3000
  });

  $("#ourteamSlider").owlCarousel({
    items: 1,
    nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    dots:false,
    margin: 22,
    loop:false,
    autoplay:false,
    autoplayTimeout:3000,
    rtl: false,
    responsive : {
        // breakpoint from 768 up
        768 : {
          items:4,
          loop:false,
          dots:false
        }
    }
  });

  $("#ourteamProjectSlider").bxSlider({
    mode: 'horizontal',
    ticker: true,
    speed: 70000,

    minSlides: 1,
    maxSlides: 7,
    slideWidth: "auto",

    tickerHover: false,
    infiniteLoop: true,
    slideMargin: 1,
    controls: false
  });

  $("#serviceSlider").owlCarousel({
    //items: 3.3,
    nav: false,
    dots:false,
    margin:29,
    loop: true,
    autoplay: false,
    autoplayTimeout:3000,

    responsive : {
        // breakpoint from 769 up
        769 : {
          items:3.3
        },
        // breakpoint from 0 up
        0 : {
          items:1,
          dots:true,
        }
    }
  });

  $("#our-project").owlCarousel({
    items: 3.3,
    nav: false,
    dots:false,
    margin:29,
    loop: true,
    autoplay: false,

    responsive : {
        // breakpoint from 769 up
        769 : {
          items:3.3
        },
        // breakpoint from 0 up
        0 : {
          items:1,
          margin:0,
          dots:true,
        }
    }
  });


  $('.navAnimated li,.quickLink ul li,.right,.spMenuLinks,.description,.spMenuLinks li')
  .find('a[href^="#"]')
  .on('click', function(e) {
    $('.navAnimated li,.quickLink ul li,.description,.spMenuLinks li').each(function() {
      $('.navAnimated li,.quickLink ul li,.description,.spMenuLinks li').removeClass('active')
    })
    $(this).addClass('active')
    $(this)
      .closest('li')
      .addClass('active')

    var target = this.hash
    var menu = target
    var displayTarget = target
    
    if (target =='#service') {
      var top = $(target).offset().top-200;
    } else if (target =='#projects') {
      var top = $(target).offset().top-150;
    } else {
      var top = $(target).offset().top-200;
    }
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: top
        },
        500,
        'swing',
        function() {
          window.location.hash = target
        }
      )
  })

  var mouseMovement = document.getElementsByClassName('mouseMovement');
  const moveCursor = event => {
    //console.log('dasdas');
    const setWidth = mouseMovement[0].getBoundingClientRect().width / 2;
    const aaa = event.clientX / 100;
    mouseMovement[0].style.setProperty('transform', "translate3d(" + (event.clientX / 100) + "px, " + (event.clientY / 100) + "px, 0px)");

  }
  document.addEventListener("mousemove", moveCursor);

  //Skill, Chat mouse move
  const mouseMoveElement = event => {
    var man_move_segment = $(".manMouseMove");
    var faq_move_segment = $(".faqMouseMove");

    man_move_segment[0].style.setProperty('transform', "translate3d(" + (event.clientX / 100) + "px, " + (event.clientY / 100) + "px, 0px)");
    faq_move_segment[0].style.setProperty('transform', "translate3d(" + (event.clientX / 100) + "px, " + (event.clientY / 100) + "px, 0px)");
  }
  document.addEventListener("mousemove", mouseMoveElement);

  //character limit
  $('#message').keyup(function () {
    var tlength = $(this).val().length;
    $(this).val($(this).val().substring(0, maxchars));
    var tlength = $(this).val().length;
    remain = maxchars - parseInt(tlength);
    $('#remain').text(remain);
  });

});

var slideShows = document.getElementsByClassName("slideShow");
var slideShows2 = document.getElementsByClassName("slideShow2");
var timers = [];

// Finds all elements by class name and adds an event listener to each.
function addListener(element, listenFor, functionToCall) {
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener(listenFor, functionToCall);
  }
}

function listen(element, listenFor, functionToCall) {
  element.addEventListener(listenFor, functionToCall);
}

//addDots();

function nextSlide(slideShowss,i,element=''){
  //i += 1;
  //console.log(slideShowss[i]);
	var currentSlideHere = slideShowss[i].getElementsByClassName("visible");
	
	var slides = slideShowss[i].getElementsByClassName("slide");
	var slidesArray = Array.prototype.slice.call(slides);
	var here = slidesArray.indexOf(currentSlideHere[0]);
	slides[here].classList.remove("visible");
	here += 1;
	if (here >= slides.length) {
		here = 0;
	}
	slides[here].classList.add("visible");
	
	if(element !=''){
	
	}
}

for(var i=0; i<slideShows.length; i++) {
	(function() {
    var count = i;
    timers.push(undefined);
    slideShow(slideShows,count,9000);
  }());
	
}
//function allSlide (){
for(var i=0; i<slideShows2.length; i++) {
	(function() {
  var count = i;
  timers.push(undefined);
    slideShow(slideShows2,count,3000,'.element');
  }());
	
}
//}
//allSlide();

function slideShow(slideShowss,count,interval,element='') {
	if(timers[count] == undefined ) {
		timers[count] = setInterval(function() {
		
		if(element !=''){
		  nextSlide(slideShowss,count,element);
		} else {
      nextSlide(slideShowss,count);
		}
		
		}, interval);
	} 
}

  $(document).on('scroll', onScroll)

  var target = window.location.hash

  $(window).on('load', function() {
    var screenTop = $(document).scrollTop();  
    
    if (target) {
      if (target =='#service') {
        var top = $(target).offset().top-200;
      } else if (target =='#projects') {
        var top = $(target).offset().top-150;
      } else {
        var top = $(target).offset().top-200;
      }
      $('html, body').animate(
        {
          scrollTop: top
        },
        500,
        'swing',
        function() {}
      )
    } else {
      if (screenTop > 3775 && screenTop < 4225) {
      }
    }
  })
  var header = document.getElementById("navsection");
  let home = document.getElementById('homebg');
  
  //let headerHeight = header.offsetHeight+"px";
  let headerHeight = "168px";
  home.style.paddingTop = `${headerHeight}`;

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();

    if(scrollPos>2000) {
      $(".skill-lockup").each(function(){

        $(this).find(".bar-inner").animate({
          width: $(this).find(".skill-bar").attr("data-width")
        },3000)
        $(this).find(".skill-name").animate({
          width: $(this).find(".skill-bar").attr("data-width")
        },3000)
      });
    }

    
    let bodyTag = document.body;
    var sticky = header.offsetTop;
    
    if (scrollPos>header.offsetHeight) {
      header.classList.add("sticky");
      $('#mobileNavbar').addClass('stickyNav');
      home.style.paddingTop = `${headerHeight}`;

      //Logo change
      $("#navsection .logo a img ").attr("src", "/public/images/logo_right.png");

    } else {
      header.classList.remove("sticky");
      $('#mobileNavbar').removeClass('stickyNav');
      home.style.paddingTop = `${headerHeight}`;
      bodyTag.style.paddingTop = `${0}`;

      //Logo change
      $("#navsection .logo a img ").attr("src", "/public/images/logo_cybridgebd.svg");
    }

    $('.navbar__lists li a').each(function() {
      var currLink = $(this)
      if (currLink.attr('href') !='#') {
        var refElement = $(currLink.attr('href'));
        if (refElement.length >0) {
          
        
          var b4last = 0
          if (currLink.hasClass('before-last')) {
            b4last = 200
          } else {
            b4last = 0
          }
          if (refElement.position().top &&
            refElement.position().top - b4last <= scrollPos &&
            refElement.position().top + refElement.height() > scrollPos
          ) {
            $('.navbar__lists li').removeClass('active')
            currLink.closest('li').addClass('active')
            currLink.addClass('active')
          } else if (scrollPos <= 500 && $(window).width() > 769) {
          } else if (scrollPos <= 700 && $(window).width() < 769) {
          } else if (
            $(window).scrollTop() + $(window).height() >
              $(document).height() - 100 &&
            $(window).width() > 769
          ) {
            $('.navbar__lists li').removeClass('active')
            $('.last-nav').addClass('active')
          } else {
            currLink.closest('li').removeClass('active')
            currLink.removeClass('active')
          }
          //console.log(currLink.attr('href'));
        }
      }
    })
  }

$(document).ready(function() {
  
    $("#contactForm" ).validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true,
        },
        message: {
          required: true,
        }
      },
      messages: {
        name: "Please enter your name",
        email: "Please enter your valid email address",
        message: "Please enter your message",
      },
      errorElement: 'span',
      errorPlacement: function(error, element) {
        if (element.attr("name") == "name") {
          error.appendTo(".nameErrorMessage");
        }
        else if (element.attr("name") == "email") {
          error.appendTo(".emailErrorMessage");
        }
        else if (element.attr("name") == "message") {
          error.appendTo(".messageErrorMessage");
        }
      }
    });

    $("#jpContactForm" ).validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true,
        },
        message: {
          required: true,
        }
      },
      messages: {
        name: "お名前を入力してください。",
        email: "有効なメールアドレスを入力してください。",
        message: "メッセージを入力してください。",
      },
      errorElement: 'span',
      errorPlacement: function(error, element) {
        if (element.attr("name") == "name") {
          error.appendTo(".nameErrorMessage");
        }
        else if (element.attr("name") == "email") {
          error.appendTo(".emailErrorMessage");
        }
        else if (element.attr("name") == "message") {
          error.appendTo(".messageErrorMessage");
        }
      }
    });

    $( "#contactForm, #jpContactForm" ).on( "submit", function(e) {

      if($("#contactForm, #jpContactForm").valid()){

        var data = $( "#contactForm, #jpContactForm" ).serialize();

        var rcres = grecaptcha.getResponse();

        if(rcres.length == 0){
          if ($("#jpContactForm").length > 0) {
            $(".recaptchaErrorMessage").html("キャプチャの検証が必要です。");
          }
          else{
            $(".recaptchaErrorMessage").html("Captcha validation is required.");
          }
          return false;
        }

        $.ajax({
          type: 'POST',
          url: '/emailsend.php',
          data: data,
          success: function (data) {

            var jsonData = JSON.parse(data);
            if(jsonData.success == "1"){

              $("#remain").html(maxchars);

              if ($("#jpContactForm").length > 0) {
                $("#jpContactForm")[0].reset();
                $("#emailModal p").html("お問い合わせを正常に送信しました。");
              }
              else{
                $("#contactForm")[0].reset();
                $("#emailModal p").html("Successfully send your query.");
              }

              $("#emailModal").show();
            }
            else{

              if ($("#jpContactForm").length > 0) {
                $("#emailModal p").html("フォームは送信されていません。");
              }
              else{
                $("#emailModal p").html("Your from has not submitted.");
              }

              $("#emailModal").show();
            }

            grecaptcha.reset();
            $(".recaptchaErrorMessage").html("");
          },
          error: function (data) {
              console.log('An error occurred.');
              console.log(data);
          }
        });
      }

      e.preventDefault();
    })

});

//Recaptcha call back
function recaptcha_callback(){
  $(".recaptchaErrorMessage").html("");
}

window.onclick = function(event) {
  if (event.target.id == "emailModal") {
    $("#emailModal").hide();
  }
}

$(".close").click(function () {
  $("#emailModal").hide();
})

$("#loadMore").on('click', function (e) {
  e.preventDefault();


  if ($(".loadMoreContent:hidden").length != 0) {
    $('html,body').animate({
        scrollTop: $(this).offset().top - 150
    }, 700);
  }

  $(".loadMoreContent:hidden").slice(0, 1).slideDown();

  if ($(".loadMoreContent:hidden").length == 0) {
    $("#loadMore").hide();
  }

  equalHeight(".ourBlog .row2 .rowContain");
  equalHeight(".ourBlog .row3 .rowContain");

});

/*ourClientProjectSection*/
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
/*End ourClientProjectSection*/

/*Equal height column*/
$(window).on("resize", function () {

  setTimeout(function (){

    //Blog
    equalHeight(".ourBlog .row1 .rowContain");
    equalHeight(".ourBlog .row2 .rowContain");
    equalHeight(".ourBlog .row3 .rowContain");

    //service-slider
    equalHeight("#serviceSlider .owl-item  .bannerItem");

    //our-project-section
    equalHeight(".our-project-section .box-inner  .box-contain");

  }, 500);

}).resize();

function equalHeight(selector){

  $(selector).css('height','auto');

  var maxHeight = 0;
  $(selector).each(function(){
    if ($(this).outerHeight() > maxHeight) {
      maxHeight = $(this).outerHeight();
    }
  });

  $(selector).css('height', maxHeight+'px');
}
/*End equal height column*/

$(".languages-switch a").on('click', function(e) {
  var dataPosition = $(this).attr("data-postion");

  if(dataPosition == 2){
    return false;
  }

  $('.languages-switch a').each(function(index) {
    $(this).removeClass("actived");
  })

  $('.languages-switch a').each(function(index) {

    var postion = $(this).attr('data-postion');

    if(dataPosition == postion){
      $(this).addClass("actived");
    }

    //Click from top
    if(dataPosition == 1){

      if(postion == 1){
        $(this).attr("data-postion", 2);
      }

      if(postion == 2){
        $(this).attr("data-postion", 3);
      }

      if(postion == 3){
        $(this).attr("data-postion", 1);
      }
    }

    //Click from 2 (middle)
    //No movement

    //Click from bottom
    if(dataPosition == 3){
      if(postion == 1){
        $(this).attr("data-postion", 3);
      }

      if(postion == 2){
        $(this).attr("data-postion", 1);
      }

      if(postion == 3){
        $(this).attr("data-postion", 1);
      }
    }

  })

  $(this).attr('data-postion', 2)

  var languages = $(this).attr("data-lang");
  if(languages == "bn"){

    window.setTimeout(function(){
      //window.location.href = "./bn";
    }, 1000);
  }

  if(languages == "en"){
    window.setTimeout(function(){
      //window.location.href = "./en";
    }, 1000);
  }

  if(languages == "jp"){
    window.setTimeout(function(){
      //window.location.href = "./jp";
    }, 1000);
  }

})
