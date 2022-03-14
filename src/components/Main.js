import './Main.css';
import {Link} from "react-router-dom";
window.onload = function(){
    const tab01 = document.querySelector(".btn .first > a");
    const tab02 = document.querySelector(".btn .second > a");
    const bestTab = document.querySelector(".best");
    const newTab = document.querySelector(".new");
    function onClick(event){
      tab01.classList.remove('active');
      tab02.classList.remove('active');
      if(!this.classList.contains('active'))
      {
        this.classList.add('active');
      }
      if("BEST ITEM" === event.target.textContent){
        console.log("b");
        bestTab.style.display="block";
        newTab.style.display="none";
      }else{
        console.log("n");
        bestTab.style.display="none";
        newTab.style.display="block";
      }
    }
    tab01.addEventListener('click',onClick);
    tab02.addEventListener('click',onClick);
  }
function Main(){
    return (
        <div class="header">
            <div class="wrap">
                <h1>
                    <a href="javascript:void(0);">
                    <img src={ require('./images/logo.png')} width={250} alt="로고"/>
                    </a>
                </h1>
                <div class="gnb">
                  <ul>
                      <li>
                          <a href="javascript:void(0);" class="mainnav">지점찾기</a>
                          <ul class="subnav">
                              <li><a href="javascript:void(0);">전체보기</a></li>
                              <li><a href="javascript:void(0);">쉐어하우스</a></li>
                              <li><a href="javascript:void(0);">마이룸(원룸)</a></li>
                              <li><a href="javascript:void(0);">기타(중개/제휴)</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="javascript:void(0);" class="mainnav">서비스안내</a>
                          <ul class="subnav">
                              <li><a href="javascript:void(0);">브랜드소개</a></li>
                              <li><a href="javascript:void(0);">이용안내</a></li>
                              <li><a href="javascript:void(0);">동거동락 스토리</a></li>
                              <li><a href="javascript:void(0);">공지사항</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="javascript:void(0);" class="mainnav">SEASON</a>
                          <ul class="subnav">
                              <li><a href="javascript:void(0);">봄</a></li>
                              <li><a href="javascript:void(0);">여름</a></li>
                              <li><a href="javascript:void(0);">가을</a></li>
                              <li><a href="javascript:void(0);">겨울</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="javascript:void(0);" class="mainnav">분위기</a>
                          <ul class="subnav">
                              <li><a href="javascript:void(0);">사극</a></li>
                              <li><a href="javascript:void(0);">모던</a></li>
                              <li><a href="javascript:void(0);">판타지</a></li>
                              <li><a href="javascript:void(0);">로맨틱</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
            </div>
            <div class="main">
                <ul>
                    <li><a href="javascript:void(0);"><img src={ require('./images/main01.jpg')} width={1200} alt="로고"/></a></li>
                    <li><a href="javascript:void(0);"><img src={ require('./images/main02.jpg')} width={1200} alt="로고"/></a></li>
                    <li><a href="javascript:void(0);"><img src={ require('./images/main03.jpg')} width={1200} alt="로고"/></a></li>
                </ul>
            </div>
            <div class="tab">
              <ul class="btn">
                  <li class="first"><a href="javascript:void(0);" class="active">BEST ITEM</a></li>
                  <li class="second"><a href="javascript:void(0);">NEW ARRIVALS</a></li>
              </ul>
              <div class="bwrap">
                <div class="best">
                  <ul>
                    <li>
                      <Link to="/best">
                      <img src={ require('./images/best01.jpg')} width={200} alt="로고"/>
                        <p>반지의 제왕(호빗)<br />판타지</p>
                        <del>82,000원</del>
                         /
                        <span class="price">49,200</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best">
                        <img src={ require('./images/best02.jpg')} width={200} alt="로고"/>
                        <p>개구리 왕자(동화)<br />판타지</p>
                        <del>109,000원</del>
                        /
                        <span class="price">70,800원</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best">
                        <img src={ require('./images/best03.jpg')} width={200} alt="로고"/>
                        <p>일본식 가옥<br />산뜻</p>
                        <del>64,000원</del>
                        /
                        <span class="price">49,900원</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best">
                        <img src={ require('./images/best04.jpg')} width={200} alt="로고"/>
                        <p>영국식 전원주택<br />모던</p>
                        <del>200,000원</del>
                        /
                        <span class="price">150,800원</span>
                      </Link>
                    </li>
                    <li class="last">
                      <Link to="/best">
                        <img src={ require('./images/best05.jpg')} width={200} alt="로고"/>
                        <p>깔끔한 오피스텔<br />모던</p>
                        <del>130,000원</del>
                        /
                        <span class="price">90,500원</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="new">
                  <ul>
                    <li>
                      <Link to="/best">
                        <img src={ require('./images/new01.jpg')} width={200} alt="로고"/>
                        <p>부드러운 인테리어<br />산뜻</p>
                        <del>89,000원</del>
                        /
                        <span class="price">68,000원</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best">
                        <img src={ require('./images/new02.jpg')} width={200} alt="로고"/>
                        <p>고풍적인 인테리어<br />고전</p>
                        <del>100,000원</del>
                        /
                        <span class="price">80,000원</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best">
                        <img src={ require('./images/new03.jpg')} width={200} alt="로고"/>
                        <p>따뜻한 인테리어<br />고전</p>
                        <del>89,000원</del>
                        /
                        <span class="price">67,000원</span>
                      </Link>
                    </li>
                      <li>
                        <Link to="/best">
                          <img src={ require('./images/new04.jpg')} width={200} alt="로고"/>
                          <p>분위기 좋은 인테리어<br />풍경</p>
                          <del>230,000원</del>
                          /
                          <span class="price">180,000원</span>
                        </Link>
                      </li>
                      <li class="last">
                        <Link to="/best">
                          <img src={ require('./images/new05.jpg')} width={200} alt="로고"/>
                          <p>넓은 인테리어<br />모던</p>
                          <del>90,000</del>
                          /
                          <span class="price">70,000원</span>
                        </Link>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
            <div class="contents">
              <div class="notice">
                <h2>공지사항</h2>
                  <ul>
                    <li><a href="javascript:void(0);" class="popupOpen">· 후기 적립금 안내</a><span class="date">2022.03.12</span></li>
                    <li><a href="javascript:void(0);">· 판타지 시즌 OFF세일 20%할인  </a><span class="date">2022.02.24</span></li>
                    <li><a href="javascript:void(0);">· 숙박 문의 Q&amp;A</a><span class="date">2022.02.18</span></li>
                    <li><a href="javascript:void(0);">· 2030 데이트 코스 및 축제</a><span class="date">2021.12.28</span></li>
                    <li><a href="javascript:void(0);">· 겨울 시즌 눈꽃 축제 공지</a><span class="date">2021.11.07</span></li>
                  </ul>
              </div>
              <div class="banner">
                <a href="javascript:void(0);"><img src={ require('./images/banner.png')}alt="banner"/></a>
              </div>
              <div class="now">
                <a href="javascript:void(0);"><img src={ require('./images/now.jpg')} width={380} alt="now"/></a>
              </div>
            </div>
            <div class="footer">
              <div class="wrap">
                <h1><a href="javascript:void(0);"><img src={ require('./images/footer-logo.png')} width={250} alt="로고"/></a></h1>
                <p>Copyright ⓒ SHAREHOUSE . All rights reserved.</p>
                <div class="snsnav">
                <ul>
                  <li><a href="javascript:void(0);">FACEBOOK</a></li>
                  <li><a href="javascript:void(0);">INSTAGRAM</a></li>
                  <li class="last"><a href="javascript:void(0);">TWITTER</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        );
}
export default Main;