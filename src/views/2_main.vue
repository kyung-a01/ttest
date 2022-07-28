<template>
  <Header />
  <main>
    <img src="../assets/ad.jpg" alt="구글광고" />
    <div id="ranking">
      <ul>
        <li>
          <span>오늘의 음료</span>
          <span>마지막 갱신시각 오후 1시 30분</span>
        </li>
        <li>
          <ul class="today">
            <li>
              <div class="round_box">
                <img src="../assets/coffee_1.jpg" alt="1위음료사진" />
              </div>
              <p>
                <span>1위</span>
                <span>복숭아 아이스티</span>
                <span>스타벅스 (3m)</span>
              </p>
            </li>

            <li>
              <div class="round_box">
                <img src="../assets/coffee_2.png" alt="2위음료사진" />
              </div>
              <p>
                <span>2위</span>
                <span>자몽차</span>
                <span>딩동당동 (783m)</span>
              </p>
            </li>
            <li>
              <div class="round_box">
                <img src="../assets/coffee_3.jpg" alt="3위음료사진" />
              </div>
              <p>
                <span>3위</span>
                <span>구름을 품은 크림 카페라떼</span>
                <span>카페 어울림 (2km)</span>
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Modal 버튼 -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      커피를 선택하세요
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            ...

            <!-- 검색바 -->
            <!-- Bootstrap CSS -->
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
            />
            <!-- Font Awesome CSS -->
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <!-- Actual search box -->
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>

            <!-- Another variation with a button -->
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search this blog"
              />
              <div class="input-group-append">
                <button class="btn btn-secondary" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
            <!-- 검색바끝 -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal 버튼 끝-->
    <!--  <VueWinwheel :segments="options" /> -->

    <section class="vue-winwheel">
      <div class="mobile-container">
        <h1>Vue-Winwheel</h1>
        <div class="wheel-wrapper">
          <div class="canvas-wrapper">
            <canvas id="canvas">
              <!-- 높이값 넓이값 -->
              <p
                style="
                   {
                    color: white;
                  }
                "
                align="center"
              >
                Sorry, your browser doesn't support canvas. Please try Google
                Chrome.
              </p>
            </canvas>
             <div class="button-wrapper">
            <a
              class="btn btn-play"
              href="#"
              @click.prevent="startSpin()"
              v-if="!loadingPrize && !wheelSpinning"
              ></a
            >
          </div>
          </div>
           <a
              href="#"
              @click.prevent="startSpin()"
              v-if="!loadingPrize && !wheelSpinning"
              >
            <div class="button-wrapper">
            
                클릭
                
            </div>
          </a>
        </div>
      </div>
<!--        <div
        class="custom-modal modal-mask"
        id="modalSpinwheel"
        v-if="modalPrize"
      >
        <div slot="body">
          <a href="" @click.prevent="hidePrize()" class="modal-dismiss">
            <i class="icon_close"></i>
          </a>
          <h2>Yay you got the prize!!</h2>
          <h1>{{ prizeName }}</h1>
        </div>
      </div>  -->
    </section>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from "../layouts/Header";
import Footer from "../layouts/Footer.vue";
import VueWinwheel from "vue-winwheel/vue-winwheel";
import * as Winwheel from "./Winwheel";

export default {
  components: { Header, Footer, VueWinwheel },
  name: "VueWinWheel",
  props: {
    segments: {
      default() {
        return [
          {
            textFillStyle: "#fff",
            fillStyle: "#000",
            text: "Prize 1",
          },
          {
            textFillStyle: "#000",
            fillStyle: "#fadede",
            text: "Prize 2",
          },
          {
            textFillStyle: "#fff",
            fillStyle: "#000",
            text: "Prize 3",
          },
          {
            textFillStyle: "#000",
            fillStyle: "#fadede",
            text: "Prize 4",
          },
          {
            textFillStyle: "#fff",
            fillStyle: "#000",
            text: "Prize 5",
          },
          {
            textFillStyle: "#000",
            fillStyle: "#fadede",
            text: "Prize 6",
          },
          {
            textFillStyle: "#fff",
            fillStyle: "#000",
            text: "Prize 7",
          },
          {
            textFillStyle: "#000",
            fillStyle: "#fadede",
            text: "Prize 8",
          },
        ];
      },
    },
  },

  data() {
    return {
      loadingPrize: false,
      theWheel: null,
      modalPrize: false,
      wheelPower: 1,
      wheelSpinning: false,
      prizeName: "BUY 1 GET 1",
      WinWheelOptions: {
        textFontSize: 14,
        outterRadius: 410,
        innerRadius: 25,
        lineWidth: 8,
        animation: {
          type: "spinOngoing",
          duration: 0.5,
        },
      },
      options: [
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Prize 1",
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Prize 2",
        },
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Prize 3",
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Prize 4",
        },
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Prize 5",
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Prize 6",
        },
        {
          textFillStyle: "#fff",
          fillStyle: "#000",
          text: "Prize 7",
        },
        {
          textFillStyle: "#000",
          fillStyle: "#fadede",
          text: "Prize 8",
        },
      ],
    };
  },
  methods: {
    showPrize() {
      this.modalPrize = true;
    },
    hidePrize() {
      this.modalPrize = false;
    },
    startSpin() {
      if (this.wheelSpinning === false) {
        this.theWheel.startAnimation();
        this.wheelSpinning = true;
        this.theWheel = new Winwheel.Winwheel({
          ...this.WinWheelOptions,
          numSegments: this.segments.length,
          segments: this.segments,
          animation: {
            type: "spinToStop",
            duration: 5,
            spins: 5,
            callbackFinished: this.onFinishSpin,
          },
        });

        // example input prize number get from Backend
        // Important thing is to set the stopAngle of the animation before stating the spin.

        var prizeNumber = Math.floor(Math.random() * this.segments.length); // or just get from Backend
        var stopAt =
          (360 / this.segments.length) * prizeNumber -
          360 / this.segments.length / 2; // center pin
        // var stopAt = 360 / this.segments.length * prizeNumber - Math.floor(Math.random() * 60) //random location
        this.theWheel.animation.stopAngle = stopAt;
        this.theWheel.startAnimation();
        this.wheelSpinning = false;
      }
    },
    resetWheel() {
      this.theWheel = new Winwheel.Winwheel({
        ...this.WinWheelOptions,
        numSegments: this.segments.length,
        segments: this.segments,
      });

      if (this.wheelSpinning) {
        this.theWheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
      }

      this.theWheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
      this.theWheel.draw(); // Call draw to render changes to the wheel.
      this.wheelSpinning = false; // Reset to false to power buttons and spin can be clicked again.
    },
    initSpin() {
      this.loadingPrize = true;
      this.resetWheel();
      this.loadingPrize = false;
    },
    onFinishSpin(indicatedSegment) {
      this.prizeName = indicatedSegment.text;
      this.showPrize();
    },
  },
  computed: {},
  updated() {},
  mounted() {
    this.initSpin();
    // this.resetWheel()
  },
  created() {},
};
</script>

<style scoped>
@font-face {
  font-family: "GowunDodum-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

main {
  width: 100%;
  height: 1600px;
  /*   background-color: red;
 */
  color: black;
  font-family: "GowunDodum-Regular";
}

main > img {
  width: 100%;
}

#ranking > ul {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  flex-direction: column;
  padding-left: 0;
}

#ranking > ul > li:first-child {
  /*   background-color: pink;
 */
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  align-items: baseline;
  padding: 0px 20px;
}

#ranking > ul > li:first-child > span:first-child {
  font-size: 25px;
  font-size: 6vw;
  color: #4f4f4f;
  line-height: 80px;
}

@media screen and (min-width: 450px) {
  #ranking > ul > li:first-child > span:first-child {
    font-size: 26px;
  }
}

#ranking > ul > li:first-child > span:last-child {
  font-size: 10px;
  color: #4f4f4f;
}

#ranking > ul > li:last-child > ul.today {
  width: 100%;
  height: 100%;
  /*   background: #aaa;
 */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 0;
}

#ranking > ul > li:last-child > ul.today li {
  width: 30%;
  height: 100%;
  padding: 10px 0px;
  overflow: hidden;
}

#ranking > ul > li:last-child > ul.today > li div.round_box {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  width: 30vw;
  height: 30vw;
}

#ranking > ul > li:last-child > ul.today > li div.round_box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#ranking > ul > li:last-child > ul.today > li p {
  margin: 0 auto;
}

#ranking > ul > li:last-child > ul.today > li p span:nth-child(1) {
  display: block;
  font-size: 3vw;
}

#ranking > ul > li:last-child > ul.today > li p span:nth-child(2) {
  display: block;
  font-size: 3vw;
}

@media screen and (min-width: 450px) {
  #ranking > ul > li:last-child > ul.today > li p span:nth-child(1),
  #ranking > ul > li:last-child > ul.today > li p span:nth-child(2) {
    font-size: 16px;
  }
}

#ranking > ul > li:last-child > ul.today > li p span:last-child {
  display: block;
  font-size: 2vw;
}

/* 부트스트랩 모달팝업 */

button.btn.btn-primary {
  border: 1px solid #4f4f4f;
  background-color: #065f44;
}

/* 부트스트랩 모달팝업 */
/*부트스트랩검색바 */

.has-search .form-control {
  padding-left: 2.375rem;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}

/*부트스트랩검색바 */

.vue-winwheel {
  text-align: center;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
.vue-winwheel h1 {
  color: red;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 36px;
  line-height: 90px;
  letter-spacing: 4px;
  margin: 0;

  width: 100%;
  height: 100%;
}
.vue-winwheel h2 {
  margin: 0;
}
.vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content {
  width: calc(100vw - 30px);
  padding-top: 52px;
}
.vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content h2 {
  text-transform: uppercase;
  color: red;
  margin-bottom: 16px;
  margin-top: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 18px;
  letter-spacing: 1.1px;
  margin: 0;
}
.vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: black;
  text-align: center;
  line-height: 25px;
}
.vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content p strong {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.vue-winwheel
  #modalSpinwheel.custom-modal
  .content-wrapper
  .content
  .modal-dismiss {
  top: 12px;
  right: 12px;
}
.vue-winwheel
  #modalSpinwheel.custom-modal
  .content-wrapper
  .content
  .modal-dismiss
  i.icon_close {
  font-size: 30px;
  color: red;
}
.vue-winwheel canvas#canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70vw;
  border-radius: 50%;
}
.vue-winwheel .canvas-wrapper {
  position: relative;
  width: 70vw;
  height: 70vw;
  border-radius: 50%;
  margin: 0 auto;
}
/* .vue-winwheel .canvas-wrapper:after {
  content: "";
  display: block;
  width: 42px;
  background: black;
  height: 42px;
  position: absolute;
  left: calc(50% - 25px);
  margin: auto;
  border-radius: 100%;
  top: calc(50% - 29px);
  border: 5px solid white;
  box-sizing: content-box;
} */
.vue-winwheel .canvas-wrapper:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 100%;
  top: 0;
  width: 70vw;
  height: 70vw;
  border-radius: 50%;
  background: #065f44;
 }

.vue-winwheel .wheel-wrapper {
  position: relative;
}

.vue-winwheel .wheel-wrapper:before {
  content: "";
  width: 62px;
  height: 47px;
  position: absolute;
  top: -10px;
  left: calc(50% - 31px);
  right: 0;
  display: block;
  z-index: 99999;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("../assets/spinner.svg");
}
 
.vue-winwheel .wheel-wrapper .button-wrapper {
  background: black;
  position: absolute;
   margin: auto;
  border-radius: 100%;
   border: 5px solid white;
  box-sizing: content-box;
   top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:15vw;
  height: 15vw;
  line-height: 15vw;
  font-size: 5vw;
  color:white;
}

.vue-winwheel .wheel-wrapper .btn.btn-play {
  padding: 20px !important;
   line-height: 50px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 2px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
}
</style>