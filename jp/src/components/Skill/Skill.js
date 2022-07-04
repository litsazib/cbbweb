import React, { Component,Fragment } from 'react';
import SkillAnimation from '../../asset/js/aninSkill';

class Skill extends Component {

  componentDidMount(){
    let fired = false;
    window.addEventListener("scroll",
      function () {
        let scroll = document.documentElement.scrollTop;
        let workOffset = document.querySelector(".skillSection").offsetTop;
        if (fired) {
          return;
        }
        if (parseInt(scroll+100) > workOffset) {
          SkillAnimation();
          fired = true;
        }
      },
      true
    );
  }

  render() {
    return (
      <Fragment>
          <div className="skillSection clearfix wow">
            <div className="container">
              <div className="headingSction wow fadeInUp" data-wow-delay="0.7s">
                  <h2>আমাদের দক্ষতা</h2>
                  <p>আমাদের সফটওয়্যার ইঞ্জিনিয়াররা যে সকল টুল ও প্রযুক্তি ব্যবহার করে</p>
              </div>
              <div id="tagcloud">
                  <svg width="100%" height="100%" viewBox="0 0 1152 701">
                  <defs>
                      <clipPath id="clip-Artboard_8">
                      <rect width="100%" height="100%"/>
                      </clipPath>
                  </defs>
                    <g id="Skill" clipPath="url(#clip-Skill)">
                      <text id="xcode" transform="translate(789 590)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">xcode</tspan></text>
                      <text id="visual-studio" transform="translate(487 300)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-70.211" y="0">visual-studio</tspan></text>
                      <text id="algorithm" opacity="0" transform="translate(838 100)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-48.608" y="0">algorithm</tspan></text>
                      <text id="aspnetmvc" opacity="0" transform="translate(572 700) rotate(-90)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-59.41" y="0">asp.net-mvc</tspan></text>
                      <text id="ruby" transform="translate(949 409)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-21.604" y="0">ruby</tspan></text>
                      <text id="aspnet" opacity="0" transform="translate(244 610)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-37.806" y="0">asp.net</tspan></text>
                      <text id="matlab" transform="translate(732 142)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-32.405" y="0">matlab</tspan></text>
                      <text id="windows" opacity="0" transform="translate(143 227)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-37.806" y="0">windows</tspan></text>
                      <text id="linus" transform="translate(365 568)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">linus</tspan></text>
                      <text id="swing" transform="translate(392 590)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">swing</tspan></text>
                      <text id="list" transform="translate(127 446)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-21.604" y="0">list</tspan></text>
                      <text id="class" transform="matrix(1, 0.017, -0.017, 1, 285.828, 430.499)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">class</tspan></text>
                      <text id="powershell" opacity="0" transform="translate(183 525)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-54.009" y="0">powershell</tspan></text>
                      <text id="entity-framework" transform="translate(810 271)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-86.414" y="0">entity-framework</tspan></text>
                      <text id="android-studio" opacity="0" transform="translate(1000 193)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-75.612" y="0">android-studio</tspan></text>
                      <text id="validation" opacity="0" transform="translate(143 131) rotate(-90)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-54.009" y="0">validation</tspan></text>
                      <text id="google-chrom" transform="translate(720 411)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-64.811" y="0">google-chrom</tspan></text>
                      <text id="Tsql" transform="translate(1077 330)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-21.604" y="0">Tsql</tspan></text>
                      <text id="wpf" transform="translate(597 266) rotate(-90)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-16.203" y="0">wpf</tspan></text>
                      <text id="objectivec" transform="translate(599 80) rotate(-90)" opacity="0" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-59.41" y="0">objective-c</tspan></text>
                      <text id="performance" opacity="0" transform="translate(1043 151.5) rotate(-90)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-59.41" y="0">performance</tspan></text>
                      <text id="forms" transform="translate(549 322)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">forms</tspan></text>
                      <text id="function" transform="translate(262 512)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-43.207" y="0">function</tspan></text>
                      <text id="sql-server" opacity="0" transform="translate(180 547)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-54.009" y="0">sql-server</tspan></text>
                      <text id="xml" transform="translate(829 413)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-16.203" y="0">xml</tspan></text>
                      <text id="file" transform="translate(935 288)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-21.604" y="0">file</tspan></text>
                      <text id="sqp" transform="translate(647 156)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-16.203" y="0">sqp</tspan></text>
                      <text id="database" transform="translate(699 192)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-43.207" y="0">database</tspan></text>
                      <text id="cvsmocos" opacity="0" transform="translate(20 412)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-48.608" y="0">cvs-mocos</tspan></text>
                      <text id="hibernate" transform="translate(1000 609)" opacity="0" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-48.608" y="0">hibernate</tspan></text>
                      <text id="ruby-on-rails" transform="translate(549 650) rotate(-90)" opacity="0" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-70.211" y="0">ruby-on-rails</tspan></text>
                      <text id="regex" transform="translate(668 131)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">regex</tspan></text>
                      <text id="apache" transform="translate(467 461)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-32.405" y="0">apache</tspan></text>
                      <text id="pandas" transform="translate(278 448)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-32.405" y="0">pandas</tspan></text>
                      <text id="google-map" opacity="0" transform="translate(328 336)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-54.009" y="0">google-map</tspan></text>
                      <text id="ruby-on-rails-2" data-name="ruby-on-rails" transform="translate(403 437)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-70.211" y="0">ruby-on-rails</tspan></text>
                      <text id="_.net" data-name=".net" transform="translate(1085 360)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-21.604" y="0">.net</tspan></text>
                      <text id="spring" opacity="0" transform="translate(119 121) rotate(-90)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-32.405" y="0">spring</tspan></text>
                      <text id="numpy" transform="translate(1080 388)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">numpy</tspan></text>
                      <text id="eclipse" transform="translate(706 586)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-37.806" y="0">eclipse</tspan></text>
                      <text id="bash" transform="translate(555 224)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-21.604" y="0">bash</tspan></text>
                      <text id="line" transform="translate(290 365)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-21.604" y="0">line</tspan></text>
                      <text id="arrays" transform="translate(623 323)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-32.405" y="0">arrays</tspan></text>
                      <text id="string" transform="translate(245 388) rotate(-90)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="6.595" y="14">string</tspan></text>
                      <text id="vba" transform="translate(970 231)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-16.203" y="0">vba</tspan></text>
                      <text id="loops" opacity="0" transform="translate(26 347)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">loops</tspan></text>
                      <text id="facebook" transform="translate(537 164)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-43.207" y="0">facebook</tspan></text>
                      <text id="htaccess" opacity="0" data-name=".htaccess" transform="translate(622 90) rotate(-90)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-48.608" y="0">.htaccess</tspan></text>
                      <text id="scala" transform="translate(616 304)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">scala</tspan></text>
                      <text id="firebaseMultithreadin" opacity="0" transform="translate(619 446)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-113.418" y="0">firebaseMultithreadin</tspan></text>
                      <text id="excelvba" transform="translate(221 138)" opacity="0" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-48.608" y="0">excel-vba</tspan></text>
                      <text id="postgresql" transform="translate(673 471)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-54.009" y="0">postgresql</tspan></text>
                      <text id="ajax" transform="translate(656 214)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-21.604" y="0">ajax</tspan></text>
                      <text id="excel" transform="translate(981 469)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">excel</tspan></text>
                      <text id="azure" transform="translate(90 378)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">azure</tspan></text>
                      <text id="sqlite" opacity="0" transform="translate(526 560) rotate(-90)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-32.405" y="0">sqlite</tspan></text>
                      <text id="unit-testing" transform="translate(402 74)" opacity="0" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-64.811" y="0">unit-testing</tspan></text>
                      <text id="amazon-web-services" transform="translate(839 476)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-102.617" y="0">amazon-web-services</tspan></text>
                      <text id="cordove" transform="translate(188 437)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-37.806" y="0">cordove</tspan></text>
                      <text id="shell" transform="translate(645 270)" opacity="0" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">shell</tspan></text>
                      <text id="vb.net" transform="translate(476 330)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-32.405" y="0">vb.net</tspan></text>
                      <text id="symfony" transform="translate(965 441)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-37.806" y="0">symfony</tspan></text>
                      <text id="winforms" opacity="0" transform="translate(1018 149) rotate(-90)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-43.207" y="0">winforms</tspan></text>
                      <text id="iPhone" transform="translate(945 261)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-32.405" y="0">iPhone</tspan></text>
                      <text id="api" transform="translate(172 381)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-16.203" y="0">api</tspan></text>
                      <text id="oracol" transform="translate(442 156)" opacity="0" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-32.405" y="0">oracol</tspan></text>
                      <text id="ling" transform="translate(405 376)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-21.604" y="0">ling</tspan></text>
                      <text id="image" opacity="0" transform="translate(635 660)" fill="#0091d8" fontSize="18" fontFamily="Courier"><tspan x="-27.004" y="0">image</tspan></text>
                      <text id="javascript" transform="translate(652 378)" opacity="0" fill="#8f2b2e" fontSize="50" fontFamily="Courier"><tspan x="-246.04" y="0">javascript</tspan></text>
                      <text id="wordpress" transform="translate(850 534)" opacity="0" fill="#00851f" fontSize="70" fontFamily="Courier"><tspan x="-189.031" y="0">wordpress</tspan></text>
                      <text id="kotlin" transform="translate(275 307)" fill="#00851f" fontSize="20" fontFamily="Courier"><tspan x="-126.021" y="0">kotlin</tspan></text>
                      <text id="python" transform="translate(810 240)" fill="#00851f" fontSize="10" fontFamily="Courier"><tspan x="-126.021" y="0">python</tspan></text>
                      <text id="Php" transform="translate(513 268)" fill="#00851f" fontSize="10" fontFamily="Courier"><tspan x="-63.01" y="0">Php</tspan></text>
                      <text id="laravel" transform="translate(135 496)" fill="#822b95" opacity="0" fontSize="60" fontFamily="Courier"><tspan x="-147.024" y="0">laravel</tspan></text>
                      <text id="vuejs" transform="translate(821 447)" fill="#6e0784" opacity="0" fontSize="20" fontFamily="Courier"><tspan x="-73.812" y="0">vue-js</tspan></text>
                      <text id="typescript" transform="translate(786 311)" fill="#6e0784" opacity="0" fontSize="41" fontFamily="Courier"><tspan x="-123.02" y="0">typescript</tspan></text>
                      <text id="node-js" transform="translate(550 419)" opacity="0" fill="#6e0784" fontSize="41" fontFamily="Courier"><tspan x="-86.114" y="0">node-js</tspan></text>
                      <text id="angularjs" transform="translate(290 410)" fill="#8f2b2e" opacity="0" fontSize="41" fontFamily="Courier"><tspan x="-110.718" y="0">angularjs</tspan></text>
                      <text id="mongodb" transform="translate(496 204)" fill="#8f2b2e" opacity="0" fontSize="15" fontFamily="Courier"><tspan x="-86.114" y="0">mongodb</tspan></text>
                      <text id="html" transform="translate(197 354)" fill="#75148a" fontSize="41" fontFamily="Courier"><tspan x="-49.208" y="0">html</tspan></text>
                      <text id="CPlus" data-name="C++" transform="translate(501 510) rotate(-90)" opacity="0" fill="#923033" fontSize="20" fontFamily="Courier"><tspan x="-36.906" y="0">C++</tspan></text>
                      <text id="CSS" transform="translate(623 590)" fill="#8f2b2e" opacity="0" fontSize="20" fontFamily="Courier"><tspan x="-36.906" y="0">CSS</tspan></text>
                      <text id="react-js" opacity="0" transform="translate(998 236) rotate(-90)" fill="#0091d8" fontSize="30" fontFamily="Courier"><tspan x="-72.012" y="0">react-js</tspan></text>
                      <text id="postgresq" transform="translate(348 252)" fill="#75148a" fontSize="7" fontFamily="Courier"><tspan x="-81.013" y="0">postgresql</tspan></text>
                      <text id="perl" transform="translate(643 242)" fill="#923033" fontSize="30" fontFamily="Courier"><tspan x="-36.006" y="0">perl</tspan></text>
                      <text id="React-native" transform="translate(999 568)" opacity="0" fill="#8f2b2e" fontSize="30" fontFamily="Courier"><tspan x="-108.018" y="0">React-native</tspan></text>
                      <text id="C_2" data-name="C#" transform="translate(933 341)" fill="#923033" opacity="0" fontSize="20" fontFamily="Courier"><tspan x="-24.604" y="0">C#</tspan></text>
                      <text id="jquery" transform="translate(452 571)" fill="#8f2b2e" fontSize="10" fontFamily="Courier"><tspan x="-54.009" y="0">jquery</tspan></text>
                      <text id="sql" transform="translate(351 374)" fill="#923033" fontSize="30" fontFamily="Courier"><tspan x="-27.004" y="0">sql</tspan></text>
                      <text id="mern" transform="translate(935 374)" fill="#0091d8" fontSize="30" fontFamily="Courier"><tspan x="-36.006" y="0">mern</tspan></text>
                      <text id="json" transform="translate(886 408)" fill="#0091d8" fontSize="30" fontFamily="Courier"><tspan x="-36.006" y="0">json</tspan></text>
                      <text id="django" transform="translate(726 168)" fill="#0091d8" opacity="0" fontSize="13" fontFamily="Courier"><tspan x="-54.009" y="0">django</tspan></text>
                      <text id="java" transform="translate(465 510) rotate(-90)" fill="#75148a" fontSize="30" fontFamily="Courier"><tspan x="-36.006" y="0">java</tspan></text>
                      <text id="mysql" transform="translate(100 244)" opacity="0" fill="#8f2b2e" fontSize="30" fontFamily="Courier"><tspan x="-45.007" y="0">mysql</tspan></text>
                      <text id="web-services" transform="translate(100 205)" opacity="0" fill="#8f2b2e" fontSize="30" fontFamily="Courier"><tspan x="-108.018" y="0">web-services</tspan></text>
                      <text id="swift" transform="translate(565 473)" fill="#0091d8" fontSize="30" fontFamily="Courier"><tspan x="-45.007" y="0">swift</tspan></text>
                      <text id="git" opacity="0" transform="translate(1238 442)" fill="#0091d8" fontSize="30" fontFamily="Courier"><tspan x="-27.004" y="0">git</tspan></text>
                    </g>
                  </svg>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}
export default Skill;
