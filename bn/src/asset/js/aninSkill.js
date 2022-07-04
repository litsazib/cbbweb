import $ from "jquery";

const SkillAnimation = () => {
  
  $("text").removeAttr('style');

  $("#Php").toggleClass('phpActive');
  $("#htaccess").toggleClass('htaccessActive');
  $("#angular").toggleClass('angularActive');
  $("#postgresq").toggleClass('postgresqActive');

  $("#wordpress").toggleClass('wordpressActive');
  $("#kotlin").toggleClass('kotlinActive');
  $("#javascript").toggleClass('javascriptActive');
  $("#spring").toggleClass('springActive');
  $("#winforms").toggleClass('winformsActive');
  $("#powershell").toggleClass('powershellActive');
  $("#cvsmocos").toggleClass('cvsmocosActive');
  $("#aspnetmvc").toggleClass('aspnetmvcActive');
  $("#git").toggleClass('gitActive');
  

  setTimeout(function(){ 
    $("#laravel").toggleClass('laravelActive');
    $("#python").toggleClass('pythonActive');
    $("#jquery").toggleClass('jqueryActive');
    $("#windows").toggleClass('windowsActive');
    }, 700);

  setTimeout(function(){ 
    $("#typescript").toggleClass('typescriptActive');
    $("#angularjs").toggleClass('angularjsActive');
    $("#node-js").toggleClass('nodeActive');
    $("#vue-js").toggleClass('vueActive');
    }, 1000);

  setTimeout(function(){ 
    $("#web-services").toggleClass('web-servicesActive');
    $("#React-native").toggleClass('React-nativeActive');
    $("#mysql").toggleClass('mysqlActive');
    $("#vuejs").toggleClass('vueActive');
    $("#CSS").toggleClass('cssActive');
    $("#CPlus").toggleClass('cPlusActive');
    $("#C_2").toggleClass('cshirpActive');
    $("#mongodb").toggleClass('mongoActive');
    $("#django").toggleClass('djangoActive');
    $("#algorithm").toggleClass('algorithmActive');
    }, 1200);

  setTimeout(function(){ 
    $("#objectivec").toggleClass('objectivecActive');
    $("#excelvba").toggleClass('excelvbaActive');
    $("#oracol").toggleClass('oracolActive');
    $("#unit-testing").toggleClass('unit-testingActive');
    }, 1300);

  setTimeout(function(){ 
    $("#shell").toggleClass('shellActive');
    $("#firebaseMultithreadin").toggleClass('firebaseMultithreadin');
    $("#google-map").toggleClass('google-map');
    $("#react-js").toggleClass('react-js');
    }, 1600);

  setTimeout(function(){ 
    $("#ruby-on-rails").toggleClass('rubyonrailsActive');
    $("#sqlite").toggleClass('sqliteActive');
    $("#image").toggleClass('imageActive');
    $("#hibernate").toggleClass('hibernateActive');
    $("#loops").toggleClass('loopsActive');
    $("#sql-server").toggleClass('sqlserverActive');
    $("#aspnet").toggleClass('aspnetActive');
    $("#android-studio").toggleClass('androidstudioActive');
    }, 1700);

  setTimeout(function(){ 
    $("#performance").toggleClass('performanceActive');
    $("#validation").toggleClass('validationActive');
    }, 1800);
};

export default SkillAnimation;
