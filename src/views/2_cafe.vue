<template>
    <div id="app">
        <component :is="currentMenu" :right="side === 'right' ? true: false">
            <a href="#">
                <i class="fa fa-fw fa-star-o"></i>
                <span>Favourites</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-bell-o"></i>
                <span>Alerts</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-envelope-o"></i>
                <span>Messages</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-comment-o"></i>
                <span>Comments</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-bar-chart-o"></i>
                <span>Analytics</span>
            </a>
            <a href="#">
                <i class="fa fa-fw fa-newspaper-o"></i>
                <span>Reading</span>
            </a>
        </component>
          <main id="page-wrap">
    <article id="article1">
      <div id="top">
        <ul>
          <li><a href="#none">#전체</a></li>
          <li><a href="#none">#디저트</a></li>
          <li><a href="#none">#우유</a></li>
          <li><a href="#none">#빙수</a></li>
          <li><a href="#none">#번</a></li>
          <li><a href="#none">#스무디</a></li>
          <li><a href="#none">#프라페</a></li>
        </ul>
      </div>
    </article>

    <article id="sub1">
      <div class="sub_img">
        <img src="./image/preview.png" alt="사진" />
      </div>
      <div class="sub_top">
        <ul>
          <li>#디저트</li>
          <li>#우유</li>
        </ul>
        <button type="button">
          <img src="./image/button.png" alt="삼점" />
        </button>
      </div>
      <div class="sub_write">
        <a href="#none">
          <div class="write">
            <img src="./image/place.png" alt="위치" />
            <span>
              <h1>커피전문점</h1>
              <p>경기 안양시 만안구 안양로 303 안양메쎄타워 2층</p>
            </span>
          </div>
        </a>
        <p>
          라떼와 스콘이 너무 맛있는 집! 안양에서 분위기 즐기고 싶다면 추천ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
        </p>
      </div>
      <div class="sub_bottom">
        <h1>단골 · 30분 전.</h1>
        <div>
          <a href="#none">
            <img src="./image/message.png" alt="댓글" />
            <p>2 개</p>
          </a>
        </div>
      </div>
    </article>
    <!-- 본문 -->

    <article id="sub1">
      <div class="sub_top">
        <ul>
          <li>#디저트</li>
          <li>#우유</li>
        </ul>
        <button type="button">
          <img src="./image/button.png" alt="삼점" />
        </button>
      </div>
      <div class="sub_write">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nullam
          neque amet, commodo iaculis laoreet ipsum elit. Fermentum, morbi
          congue consectetur erat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Neque nullam neque amet, commodo iaculis laoreet
          ipsum elit. Fermentum, morbi congue consectetur erat. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Neque nullam neque amet,
          commodo iaculis laoreet ipsum elit. Fermentum, morbi congue
          consectetur erat.
        </p>
      </div>
      <div class="sub_bottom">
        <h1>단골 · 1시간 전.</h1>
        <div>
          <a href="#none">
            <img src="./image/message.png" alt="댓글" />
            <p>2 개</p>
          </a>
        </div>
      </div>
    </article>
    <!-- 본문 -->
          </main>
    </div>
<Footer />     
</template>

<script>
    import slide from './components/Menu/slide';
    import bubble from './components/Menu/bubble';
    import elastic from './components/Menu/elastic';
    import falldown from './components/Menu/fallDown';
    import push from './components/Menu/push';
    import pushrotate from './components/Menu/pushRotate';
    import reveal from './components/Menu/reveal';
    import scaledown from './components/Menu/scaleDown';
    import scalerotate from './components/Menu/scaleRotate';
    import stack from './components/Menu/stack';
    import Menu from './components/Menu';
    import Footer from '../layouts/Footer.vue';

    export default {
      data() {
        return {
          menus: {
            slide: { buttonText: 'Slide' },
            push: { buttonText: 'Push' },
            pushRotate: { buttonText: 'Push Rotate' },
            reveal: { buttonText: 'Reveal' },
            scaleDown: { buttonText: 'Scale Down' },
            scaleRotate: { buttonText: 'Scale Rotate' },
            // elastic: { buttonText: 'Elastic - (WIP)' },
            // stack: { buttonText: 'Stack - (WIP)' },
            bubble: { buttonText: 'Bubble' },
            fallDown: { buttonText: 'Fall Down' }
          },
          side: 'left',
          currentMenu: 'slide'
        };
      },
      components: {
        slide,
        bubble,
        elastic,
        push,
        pushrotate,
        scaledown,
        scalerotate,
        reveal,
        stack,
        falldown,
        Menu,
        Footer
      },
      methods: {
        changeMenu(menu) {
          this.currentMenu = menu.replace(/ +/g, '').toLowerCase();
          return this.currentMenu;
        },
        changeSide(side) {
          this.side = side;
        }
      }
    };
</script>

 <style lang="less" scoped>


 
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Noto+Sans+KR:wght@300&display=swap');

@font-face {
    font-family: 'GangwonEduSaeeum_OTFMediumA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduSaeeum_OTFMediumA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GangwonEdu_OTFLightA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}



    *,
    *:after,
    *:before {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    html {
      height: 100%;
    }

    body {
      height: 100%;
      color: #fffce1;
      font-family: 'Raleway', Arial, sans-serif;
      margin: 0px;
    }

    #app {
      height: 100%;
    }

    a {
      color: #4e4a46;
      text-decoration: none;

      &:hover,
      &:focus {
        color: #c94e50;
      }
    }

    main {
      height: 100%;
      padding: 3em 2em;
      text-align: center;
      background: #b4bad2;
      overflow: auto;
    }

    h1 {
      font-weight: 800;
      font-size: 3.75em;
    }

    .description {
      max-width: 20em;
      margin: 1.2em auto 1em;
      line-height: 1.3em;
      font-weight: 400;
    }

    .demo-buttons {
      font-size: 1em;
      max-width: 1200px;
      margin: 2em auto 3em;
      padding: 0 10em;

      a {
        display: inline-block;
        margin: 0.75em;
        padding: 1.35em 1.1em;
        width: 15em;
        background: #fffce1;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 800;
        border-top-left-radius: 20px 50px;
        border-top-right-radius: 20px 50px;
        border-bottom-right-radius: 20px 50px;
        border-bottom-left-radius: 20px 50px;
        cursor: pointer;

        &.currentDemo {
          background: #c94e50;
          color: #fffce1;
        }
      }
    }

    .sideButton {
      display: inline-block;
      width: 5em;
      height: 2.5em;
      line-height: 2.5em;
      cursor: pointer;
      background: #fffce1;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.8em;
      font-weight: 800;

      &.left {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }

      &.right {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      &.active {
        background: #c94e50;
        color: #fffce1;
      }
    }

    @media screen and (max-width: 40em) {
      main {
        font-size: 80%;
      }

      h1 {
        padding-top: 1em;
        font-size: 2.5em;
      }

      .demo-buttons {
        max-width: 900px;
        padding: 0 2em;
      }
    }

    //
    // Burger menu custom styles
    //
    .bm-burger-button {
      position: absolute;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
    }

    .right .bm-burger-button {
      left: initial;
      right: 36px;
    }

    .bm-burger-bars {
      background: #373a47;
    }

    .bm-morph-shape {
      fill: #373a47;
    }

    .bm-menu {
      background: #373a47;

      a {
        color: #b8b7ad;

        &:hover,
        &:focus {
          color: #c94e50;
        }
      }
    }

    //
    // Mixins
    //
    .menu-1 {
      .bm-cross {
        background: #bdc3c7;
      }

      .bm-menu {
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
      }
    }

    .menu-2 {
      .bm-cross {
        background: #999;
      }

      .bm-menu {
        padding: 3.4em 1em 0;
      }

      a {
        padding: 1em;
      }

      i {
        font-size: 1.7em;
        vertical-align: middle;
        color: #282a35;
      }
    }

    .menu-3 {
      .bm-cross {
        background: #888;
      }

      .bm-menu {
        padding: 2em 1em;
        font-size: 1.15em;
      }

      i {
        opacity: 0.5;
      }

      span {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.75em;
      }
    }

    .menu-4 {
      .bm-cross {
        background: #888;
      }

      h2 {
        margin: 0 auto;
        padding: 2em 1em;
        color: rgba(0, 0, 0, 0.4);
        box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);

        i {
          margin-left: 0.2em;
        }

        span {
          font-size: 1.6em;
          font-weight: 700;
        }
      }

      a {
        padding: 1em;
        text-transform: uppercase;
        transition: background 0.3s, box-shadow 0.3s;
        box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);

        span {
          letter-spacing: 1px;
          font-weight: 400;
        }

        &:hover,
        &:focus {
          background: rgba(0, 0, 0, 0.2);
          box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
          color: #b8b7ad;
        }
      }
    }


 

 
dl,
ol,
ul {
  padding-left: 0;
  margin: 0;
}

main {
  width: 100%;
  height: 1000px;
  background-color: #e9e9e9;
  color: black;
  font-family: "GowunDodum-Regular";
  text-align: left;
/*   margin: 0 auto;
 */}

ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}

.button {
  position: fixed;
  width: 80px;
  height: 80px;
  top: 85%;
  left: 80%;
}

header {
  width: auto;
  height: 60px;
  background: #ffffff;
}

#bar {
  width: 90%;
  height: 59px;
  margin: 0 auto;
  border-bottom: 1px solid #cccccc;
}
#bar > img {
  position: relative;
  width: auto;
  height: 40px;
  top: 10px;
  left: 10px;
}

#bar span {
  position: relative;
  float: right;
  top: 20px;
  left: -10px;
}

#article1 {
  width: auto;
  height: 70px;
  font-family: "GowunDodum-Regular";
}
#top {
  width: 90%;
  height: 55px;
  margin-left: 5%;
  padding-top: 15px;
  overflow: hidden;
}
#top ul {
  width: 1000px;
  height: auto;
}
li {
  display: flex;
  width: auto;
  height: 40px;
  background: #065f44;
  float: left;
  margin-right: 15px;
  border-radius: 25px;
  padding: 0 3%;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  color: #ffffff;
  font-family: "Gowun Dodum", sans-serif;
}
#top ul li a {
  color: #ffffff;
  font-family: "Gowun Dodum", sans-serif;
}

#sub1 {
  width: 90%;
  height: auto;
  margin: 0 auto;
  border-bottom: 1px solid #cccccc;
}
#sub1 .sub_img {
  width: 100%;
  height: 350px;
  background: #cccccc;
  box-shadow: 0 0 5px #cccccc;
}
#sub1 .sub_img img {
  width: 100%;
  height: 350px;
}
.sub_top {
  width: 100%;
  height: 40px;
  margin-top: 30px;
}
.sub_top ul {
  width: 90%;
  height: auto;
}
button {
  width: 50px;
  height: 30px;
  float: right;
  align-items: center;
/*   background: #ffffff;
 */}
button img {
  width: auto;
  height: 30px;
}
.sub_write {
  width: 100%;
  height: 300px;
  margin-top: 20px;
}
.sub_write .write {
  width: 99.8%;
  height: 98px;
  border-radius: 15px;
  border: 1px solid #cccccc;
}
.sub_write .write img {
  width: 98px;
  height: 98px;
  float: left;
}

.sub_write .write span {
  display: block;
  width: 70%;
  height: 60px;
  margin-top: -75px;
  margin-left: 25%;
  color: #000000;
  font-family: "GangwonEduSaeeum_OTFMediumA", sans-serif;
  float: left;
}

.sub_write > p {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  font-family: "GangwonEdu_OTFLightA", sans-serif;
  overflow: hidden;
    font-size: 3vh;

}
.sub_bottom {
  width: 100%;
  height: 55px;
  line-height: 55px;
}
.sub_bottom h1 {
  float: left;
  color: #4d4d4d;
  font-family: "Gowun Dodum", sans-serif;
}
.sub_bottom div {
  width: auto;
  height: auto;
  float: right;
}
.sub_bottom img {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: 10px;
  float: left;
}
.sub_bottom p {
  float: left;
  color: #4d4d4d;
}

footer {
  width: auto;
  height: 150px;
}

@media screen and (max-width: 509px) {
  .cf:after {
    content: "";
    display: block;
    clear: both;
  }
  ul,
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  body {
    width: auto;
    max-width: 780px;
    height: auto;
    background: #ffffff;
  }

  .button {
    position: fixed;
    width: 80px;
    height: 80px;
    top: 85%;
    left: 75%;
  }
  .button img {
    width: 80px;
    height: 80px;
  }

  header {
    width: auto;
    height: 60px;
    background: #ffffff;
  }

  #bar {
    width: 90%;
    height: 59px;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }
  #bar > img {
    position: relative;
    width: auto;
    height: 40px;
    top: 10px;
    left: 10px;
  }

  #bar span {
    position: relative;
    float: right;
    top: 20px;
    left: -10px;
  }

  #article1 {
    width: auto;
    height: 70px;
  }
  #top {
    width: 90%;
    height: 40px;
    margin-left: 5%;
    padding-top: 10px;
    overflow: hidden;
  }
  #top ul {
    width: 1000px;
    height: auto;
  }
  li {
    display: flex;
    width: auto;
    height: 30px;
    background: #065f44;
    float: left;
    margin-right: 15px;
    border-radius: 25px;
    padding: 0 1.5%;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
    color: #ffffff;
    font-family: "Gowun Dodum", sans-serif;
  }
  #top ul li a {
    color: #ffffff;
    font-family: "Gowun Dodum", sans-serif;
  }

  #sub1 {
    width: 90%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }
  #sub1 .sub_img {
    width: 100%;
    height: 320px;
    background: #cccccc;
    box-shadow: 0 0 5px #cccccc;
    margin-top: -20px;
  }
  #sub1 .sub_img img {
    width: 100%;
    height: 320px;
  }
  .sub_top {
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }
  .sub_top ul {
    width: auto;
    height: 30px;
  }
  .sub_top ul li {
    font-size: 1.1em;
    padding: 0 2%;
  }
  button {
    position: relative;
    width: 50px;
    height: 20px;
    float: right;
    top: -25px;
    align-items: center;
/*     background: #ffffff;
 */  }
  button img {
    width: auto;
    height: 20px;
  }
  .sub_write {
    width: 100%;
    height: 300px;
    margin-top: 10px;
  }
  .sub_write .write {
    width: 99.8%;
    height: 78px;
    border-radius: 15px;
    border: 1px solid #cccccc;
  }
  .sub_write .write img {
    width: 78px;
    height: 78px;
    float: left;
  }
  .sub_write .write span {
    display: block;
    width: 65%;
    height: 50px;
    margin-top: -61px;
    margin-left: 25%;
    color: #000000;
    font-size: 0.8em;
    float: left;
    font-family: "GangwonEduSaeeum_OTFMediumA", sans-serif;
  }
  .sub_write > p {
    width: 100%;
    height: 150px;
    margin-top: 20px;
    font-family: "GangwonEduSaeeum_OTFMediumA", sans-serif;
    font-size: 3vh;
    overflow: hidden;
  }
  .sub_bottom {
    width: 100%;
    height: 55px;
    line-height: 55px;
  }
  .sub_bottom h1 {
    float: left;
    color: #4d4d4d;
    font-family: "Gowun Dodum", sans-serif;
    font-size: 1em;
  }
  .sub_bottom div {
    width: auto;
    height: auto;
    float: right;
  }
  .sub_bottom img {
    width: 20px;
    height: 20px;
    margin-top: 18px;
    margin-right: 10px;
    float: left;
  }
  .sub_bottom p {
    float: left;
    color: #4d4d4d;
  }

  footer {
    width: auto;
    height: 150px;
  }
}

@media screen and (max-width: 439px) {
  .cf:after {
    content: "";
    display: block;
    clear: both;
  }
  ul,
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  body {
    width: auto;
    max-width: 780px;
    height: auto;
    background: #ffffff;
  }

  .button {
    position: fixed;
    width: 80px;
    height: 80px;
    top: 85%;
    left: 75%;
  }
  .button img {
    width: 80px;
    height: 80px;
  }

  header {
    width: auto;
    height: 60px;
    background: #ffffff;
  }

  #bar {
    width: 90%;
    height: 59px;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }
  #bar > img {
    position: relative;
    width: auto;
    height: 40px;
    top: 10px;
    left: 10px;
  }

  #bar span {
    position: relative;
    float: right;
    top: 20px;
    left: -10px;
  }

  #article1 {
    width: auto;
    height: 70px;
  }
  #top {
    width: 90%;
    height: 40px;
    margin-left: 5%;
    padding-top: 10px;
    overflow: hidden;
  }
  #top ul {
    width: 1000px;
    height: auto;
  }
  li {
    display: flex;
    width: auto;
    height: 30px;
    background: #065f44;
    float: left;
    margin-right: 15px;
    border-radius: 25px;
    padding: 0 1.5%;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
    color: #ffffff;
    font-family: "Gowun Dodum", sans-serif;
  }
  #top ul li a {
    color: #ffffff;
    font-family: "Gowun Dodum", sans-serif;
  }

  #sub1 {
    width: 90%;
    height: auto;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }
  #sub1 .sub_img {
    width: 100%;
    height: 320px;
    background: #cccccc;
    box-shadow: 0 0 5px #cccccc;
    margin-top: -20px;
  }
  #sub1 .sub_img img {
    width: 100%;
    height: 320px;
  }
  .sub_top {
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }
  .sub_top ul {
    width: auto;
    height: 30px;
  }
  .sub_top ul li {
    font-size: 1.1em;
    padding: 0 2%;
  }
  button {
    position: relative;
    width: 50px;
    height: 20px;
    float: right;
    top: -25px;
    align-items: center;
/*     background: #ffffff;
 */  }
  button img {
    width: auto;
    height: 20px;
  }
  .sub_write {
    width: 100%;
    height: 300px;
    margin-top: 10px;
  }
  .sub_write .write {
    width: 99.8%;
    height: 78px;
    border-radius: 15px;
    border: 1px solid #cccccc;
  }
  .sub_write .write img {
    width: 78px;
    height: 78px;
    float: left;
  }
  .sub_write .write span {
    display: block;
    width: 50%;
    height: 50px;
    margin-top: 10px;
    margin-left: 10%;
    color: #000000;
    font-size: 0.9em;
    font-family: "GangwonEduSaeeum_OTFMediumA", sans-serif;
  }
  .sub_write > p {
    width: 100%;
    height: 150px;
    margin-top: 20px;
    font-family: "GangwonEduSaeeum_OTFMediumA", sans-serif;
    font-size: 3vh;
  }
  .sub_bottom {
    width: 100%;
    height: 55px;
    line-height: 55px;
  }
  .sub_bottom h1 {
    float: left;
    color: #4d4d4d;
    font-family: "Gowun Dodum", sans-serif;
    font-size: 1em;
  }
  .sub_bottom div {
    width: auto;
    height: auto;
    float: right;
  }
  .sub_bottom img {
    width: 20px;
    height: 20px;
    margin-top: 18px;
    margin-right: 10px;
    float: left;
  }
  .sub_bottom p {
    float: left;
    color: #4d4d4d;
  }

  footer {
    width: auto;
    height: 150px;
  }
  
}
</style>
