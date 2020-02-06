<template>
  <div class="home">
    <banner-Component></banner-Component>
    <div class="main">
<!--    关于镇明转轴-->
      <div class="about">
          <div class="content">
              <div class="left wow">
              <div class="one">
                <div class="l">
                    <img src="../assets/zm/home/dot.png" alt="">
                </div>
                  <div class="r">
                      <img src="../assets/zm/home/zm.png" alt="">
                      <span>
                          <i class="iconfont icon-bofang"></i>
                      </span>
                  </div>
              </div>
                  <div class="two">
                      <img src="../assets/zm/home/ab.png" alt="">
                  </div>
                  <div class="three">
                      <div></div>
                      <p>人本、诚信、创新、发展</p>
                  </div>
              </div>
              <div class="right wow">
                  <p>关于镇明转轴</p>
                  <p>ABOUT US</p>
                  <homeDia class="dia" />
                  <div class="detail">
                      了解更多
                      <span>
                                      <i class="iconfont icon-top-line"></i>
                                  </span>
                  </div>
                  <div class="im">
                      <img src="../assets/zm/home/DSC_1697.png" alt="">
                  </div>
              </div>
          </div>
      </div>

<!--        汽车电机轴-->
      <div class="car wow">
       <div class="content wow fadeIn">
           <p>汽车电机轴</p>
           <p>汽车轴从2011年开始试样投产，公司引进先进的加工设备，配备专业技术操作人才。两年时间，共组建了4条专业汽车产品轴生产线，生产包括新型能源汽车轴、混合动力汽车轴、汽车马达发动机轴、汽车座椅轴等产品。</p>
           <div class="detail">
               了解详情
               <span>
                                      <i class="iconfont icon-top-line"></i>
                                  </span>
           </div>
       </div>
      </div>

<!--        工业电机轴&新能源轴-->
       <div class="pros">
      <div class="industry wow">
          <div class="content wow fadeIn">
              <p>工业电机轴</p>
              <p>工业电机轴类产品是目前公司主要生产项目之一. 目前主要生产机器人、伺服电机、减速机、压缩机等设备用轴。</p>
              <div class="detail">
                  了解详情
                  <span>
                                      <i class="iconfont icon-top-line"></i>
                                  </span>
              </div>
          </div>
      </div>
           <div class="ele wow">
               <div class="content wow fadeIn">
                   <p>新能源轴</p>
                   <p>主要用于风力发电、新能源主要用于风力发电、 新能源等大型电机... ...
                   </p>
                   <div class="detail">
                       了解详情
                       <span>
                                      <i class="iconfont icon-top-line"></i>
                                  </span>
                   </div>
               </div>
           </div>
       </div>

<!--        新闻资讯-->
       <div class="news">
        <div class="title wow fadeInLeft">
        <p>新闻资讯</p>
            <p>news</p>
        </div>
           <div class="content wow fadeInRight">
          <div class="link">
              <a href="./news.html">全部/</a>
              <a href="./news.html?index=0">企业资讯/</a>
              <a href="./news.html?index=1">展会信息</a>
          </div>
               <div class="allNews">
                   <swiper class="swiper" :options="swiperOption" ref="mySwiper"  v-if="nList.length>0">
                       <swiper-slide class="item" v-for="(item,index) in nList" :key="index" >
                        <div class="l">
                            <img :src="item.img" alt="">
                        </div>
                           <div class="r">
                               <p>{{item.title}}</p>
                               <p>{{item.con}}</p>
                               <div class="detail">
                                   探索更多
                                   <span>
                                      <i class="iconfont icon-top-line"></i>
                                  </span>
                               </div>
                           </div>
                       </swiper-slide>
                   </swiper>
                   <div class="prev">
                       <i class="el-icon-arrow-left"></i>
                   </div>
                   <div class="next ">
                       <i class="el-icon-arrow-right"></i>
                   </div>
               </div>
           </div>
       </div>

<!--        下一篇-->
        <div class="nextNews wow fadeInUp">
         <div class="left">
             <img src="../assets/zm/home/cn.png" alt="">
         </div>
            <div class="right">
            <p>下一篇</p>
                <p>国家医保局：明年将建成全国统一医保信息系统</p>
                <p>国家医保局6月27日晚发布消息，到2020年我国将建成统一的医保信息系统。全国参保居民将使用全国统一的医保电子凭证，查询个人医保信息、医保参保关系转移接续、异地就医结算也将会更加的快捷方便...</p>
            </div>
        </div>

    </div>
      <foot-Component class="foot wow"></foot-Component>
  </div>
</template>

<script>
  import bannerComponent from '../components/banner'
  import Scrollbar from 'smooth-scrollbar'
  import homeDia from "../components/homeDia";
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";
  import footComponent from '../components/foot'
  import {getProductsUrl} from '../util/lang'
export default {
  name: 'home',
    data(){
      return{
          nList:[
              {
                  img:require('../assets/zm/home/news.png'),
                  title:'易会满：科创板开市后整个股价的变化是比较合理的',
                  con:'3日讯，证监会主席易会满表示，科创板正式开市后，第一个方面就是科创板的上市公司的价值，比较好的得到了体现。第二个，我觉得市场投资者还是比较活跃。第三个的话，上市以后整个股价的变化应该是比较合理的。那么在一百天的交易里面，股票有上有下，我觉得都非常正常。有些公司有一定的回归跟分化，这也是博弈的结果。第四个特.. ...'
              },
              {
                  img:require('../assets/zm/home/news.png'),
                  title:'易会满：科创板开市后整个股价的变化是比较合理的',
                  con:'3日讯，证监会主席易会满表示，科创板正式开市后，第一个方面就是科创板的上市公司的价值，比较好的得到了体现。第二个，我觉得市场投资者还是比较活跃。第三个的话，上市以后整个股价的变化应该是比较合理的。那么在一百天的交易里面，股票有上有下，我觉得都非常正常。有些公司有一定的回归跟分化，这也是博弈的结果。第四个特.. ...'
              },
              {
                  img:require('../assets/zm/home/news.png'),
                  title:'易会满：科创板开市后整个股价的变化是比较合理的',
                  con:'3日讯，证监会主席易会满表示，科创板正式开市后，第一个方面就是科创板的上市公司的价值，比较好的得到了体现。第二个，我觉得市场投资者还是比较活跃。第三个的话，上市以后整个股价的变化应该是比较合理的。那么在一百天的交易里面，股票有上有下，我觉得都非常正常。有些公司有一定的回归跟分化，这也是博弈的结果。第四个特.. ...'
              },
              {
                  img:require('../assets/zm/home/news.png'),
                  title:'易会满：科创板开市后整个股价的变化是比较合理的',
                  con:'3日讯，证监会主席易会满表示，科创板正式开市后，第一个方面就是科创板的上市公司的价值，比较好的得到了体现。第二个，我觉得市场投资者还是比较活跃。第三个的话，上市以后整个股价的变化应该是比较合理的。那么在一百天的交易里面，股票有上有下，我觉得都非常正常。有些公司有一定的回归跟分化，这也是博弈的结果。第四个特.. ...'
              }
          ],
          swiperOption:{
              notNextTick: true,
              slidesPerView: 1,
              speed:1000,
              init:true,
              spaceBetween : 10,
              loop:false,
              autoplay:false,
              setWrapperSize :true,
              on: {
                  slideChangeTransitionEnd: () => {
                      this.$nextTick(() => {
                          let swiper = this.$refs.mySwiper.swiper;
                          let active = swiper.realIndex;
                      });
                  }
              },
              navigation: {
                  nextEl: '.allNews .next',
                  prevEl: '.allNews .prev'
              }
          },
      }
    },
    mounted() {
        Scrollbar.initAll(document.getElementById("scroller-wrapper"));
        let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
        scrollbar.scrollTo(0,0)
        this.scrollbar = Scrollbar.init(document.getElementById('scroller-wrapper'));
        window.pageYOffset=this.scrollbar.scrollTop
    },
  components:{bannerComponent,footComponent,swiper, swiperSlide,homeDia},
}
</script>

<style lang="scss" scoped>
.home{
  width:100%;
    animation: run5 1s linear forwards;
    @keyframes run5 {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
  .main{
    width:100%;
      .about{
          width:100%;
          height:1000px;
          background: url("../assets/zm/home/abg.png") no-repeat;
          background-size: cover;
          .content{
              width:1440px;
              margin: 0 auto;
              padding: 60px 0;
              display: flex;
              flex-direction: row;
              .left{
                  width:45%;
                  position: relative;
                  animation:transition1 2s forwards ease-in ;
                  .one{
                      width:100%;
                      position: absolute;
                      top:60px;
                      left:0;
                      display: flex;
                      flex-direction: row;
                      justify-content: flex-end;
                      align-items: center;
                      z-index: 100;
                      .l{
                          margin-right: 20px;
                      }
                      .r{
                          position: relative;
                          cursor: pointer;
                          span{
                              display: inline-block;
                              position: absolute;
                              left:45%;
                              top:35%;
                              height:66px;
                              width:66px;
                              i{
                                  color:rgba(255,255,255,.6);
                                  font-size: 60px;
                              }
                              &::after{
                                  content: "";
                                  position: absolute;
                                  width: 100%;
                                  height: 100%;
                                  top: -2px;
                                  left: -5px;
                                  pointer-events: none;
                                  background-color: transparent;
                                  border-style: solid;
                                  border-width: 2px;
                                  border-color: rgba(255, 255, 255, 0.5);
                                  border-radius: 50%;
                                  opacity: 0;
                                  transition: opacity 0.3s,transform 0.5s;
                              }
                          }
                          &:hover{
                              span::after{
                                  opacity: 1;
                                  transform: scale(1.2);
                                  -webkit-transform: scale(1.2);
                              }
                          }
                      }
                  }
                  .two{
                      width:100%;
                      position: absolute;
                      top:320px;
                      left: -112px;
                  }
                  .three{
                      position: absolute;
                      bottom:15%;
                      left:0;
                      width:90%;
                      display: flex;
                      flex-direction: row;
                      justify-content: flex-end;
                      align-items: center;
                      div{
                          width:247px;
                          height:1px;
                          background:rgba(243,112,65,1);
                      }
                      p{
                          font-size: 18px;
                          font-family: "Fira Code Light";
                          font-weight: lighter;
                          margin-left: 30px;
                      }
                  }
              }
              .right{
                  width:55%;
                  padding-left: 20px;
                  animation:transition2 2s forwards ease-in ;
                  p{
                      width:90%;
                  }
                  p:nth-child(1){
                      color:#2F2F2F;
                      font-size: 30px;
                      font-weight: bold;
                  }
                  p:nth-child(2){
                      color:#D3D6D9;
                      font-family: "Fira Code Light";
                      font-weight: lighter;
                      margin: 5px 0;
                  }
                  .dia{
                      margin: 30px 0;
                      width:90%;
                  }
                 .detail{
                      font-family: "Fira Code Light";
                      font-weight: lighter;
                      font-size: 14px;
                     margin: 30px 0;
                     margin-right: 10px;
                     width:90%;
                     display: flex;
                     flex-direction: row;
                     justify-content: flex-end;
                     cursor: pointer;
                      span{
                          width:20px;
                          height:20px;
                          background:linear-gradient(-90deg,rgba(197,74,30,1),rgba(244,128,87,1));
                          border:1px solid rgba(223, 88, 39, 1);
                          box-shadow:0px 2px 6px 0px rgba(0, 0, 0, 0.3);
                          border-radius:50%;
                          display: inline-block;
                          transform: rotate(90deg);
                          text-align: center;
                          margin-left: 10px;
                          transition: all 1s;
                          i{
                              color:white;
                              font-size: 14px;
                          }
                      }
                     &:hover{
                         span{
                             margin-left: 30px;
                         }
                     }
                  }
                  .im{
                      width:100%;
                      overflow: hidden;
                      cursor: pointer;
                      margin: 58px auto;
                      margin-left: -50px;
                      img{
                          width:100%;
                          display: block;
                          object-fit: cover;
                          transition: all 1s;
                      }
                      &:hover{
                          img{
                               transform: scale(1.05);
                          }
                      }
                  }
              }
          }
      }
      .car{
          width: 100%;
          background: url("../assets/zm/home/car.png") no-repeat;
          background-size: cover;
          height:737px;
          animation-name: polygon;
          animation-duration: 2s;
          cursor: pointer;
          .content{
              width:1440px;
              margin: 0 auto;
              animation-duration: 2s;
              animation-delay: 1.5s;
              p:nth-child(1){
                  color:#383838;
                  font-size: 50px;
                  padding-top: 150px;
                  margin-bottom: 50px;
              }
              p:nth-child(2){
                  color:#4B4B4B;
                  font-family: "Fira Code Light";
                  font-weight: lighter;
                  line-height: 32px;
                  width:38%;
              }
              .detail{
                  font-family: "Fira Code Light";
                  font-weight: lighter;
                  font-size: 14px;
                  display: flex;
                  width:38%;
                  margin: 60px 0;
                  flex-direction: row;
                  justify-content: flex-end;
                  span{
                      width:20px;
                      height:20px;
                      background:linear-gradient(-90deg,rgba(197,74,30,1),rgba(244,128,87,1));
                      border:1px solid rgba(223, 88, 39, 1);
                      box-shadow:0px 2px 6px 0px rgba(0, 0, 0, 0.3);
                      border-radius:50%;
                      display: inline-block;
                      transform: rotate(90deg);
                      text-align: center;
                      margin-left: 10px;
                      transition: all 1s;
                      i{
                          color:white;
                          font-size: 14px;
                      }
                  }
              }
              &:hover{
                      .detail{
                          span{
                              margin-left: 20px;
                          }
                      }
              }
          }

      }
      .pros{
          width:100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 10px;
          .industry{
              width:50%;
              height:600px;
              background: url("../assets/zm/home/in.png") no-repeat;
              background-size: cover;
              animation-name: polygon2;
              animation-duration: 2s;
              cursor: pointer;
              .content{
                  width:80%;
                  margin-left: 10%;
                  text-align: right;
                  animation-duration: 2s;
                  animation-delay: 2s;
                  p:nth-child(1){
                      color:#383838;
                      font-size: 50px;
                      padding-top: 100px;
                      padding-bottom: 30px;
                  }
                  p:nth-child(2){
                      color:#4B4B4B;
                      font-family: "Fira Code Light";
                      font-weight: lighter;
                      line-height: 32px;
                      width:80%;
                      margin-left: 20%;
                  }
                  .detail{
                      font-family: "Fira Code Light";
                      font-weight: lighter;
                      font-size: 14px;
                      display: flex;
                      width:80%;
                      margin: 60px 20%;
                      flex-direction: row;
                      justify-content: flex-end;
                      span{
                          width:20px;
                          height:20px;
                          background:linear-gradient(-90deg,rgba(197,74,30,1),rgba(244,128,87,1));
                          border:1px solid rgba(223, 88, 39, 1);
                          box-shadow:0px 2px 6px 0px rgba(0, 0, 0, 0.3);
                          border-radius:50%;
                          display: inline-block;
                          transform: rotate(90deg);
                          text-align: center;
                          margin-left: 10px;
                          transition: all 1s;
                          i{
                              color:white;
                              font-size: 14px;
                          }
                      }
                  }
              }
              &:hover{
                  .content{
                      .detail{
                          span{
                              margin-left: 30px;
                          }
                      }
                  }
              }
          }
          .ele{
              width:50%;
              height:600px;
              background: url("../assets/zm/home/ele.png") no-repeat;
              background-size: cover;
              margin-left: 10px;
              animation-name: polygon2;
              animation-duration: 2s;
              cursor: pointer;
              .content{
                  width:80%;
                  margin-left: 10%;
                  animation-duration: 2s;
                  animation-delay: 2s;
                  p:nth-child(1){
                      color:#383838;
                      font-size: 50px;
                      padding-top: 100px;
                      padding-bottom: 30px;
                  }
                  p:nth-child(2){
                      color:#4B4B4B;
                      font-family: "Fira Code Light";
                      font-weight: lighter;
                      line-height: 32px;
                      width:50%;
                  }
                  .detail{
                      font-family: "Fira Code Light";
                      font-weight: lighter;
                      font-size: 14px;
                      display: flex;
                      width:80%;
                      margin: 60px 0;
                      flex-direction: row;
                      span{
                          width:20px;
                          height:20px;
                          background:linear-gradient(-90deg,rgba(197,74,30,1),rgba(244,128,87,1));
                          border:1px solid rgba(223, 88, 39, 1);
                          box-shadow:0px 2px 6px 0px rgba(0, 0, 0, 0.3);
                          border-radius:50%;
                          display: inline-block;
                          transform: rotate(90deg);
                          text-align: center;
                          margin-left: 10px;
                          transition: all 1s;
                          i{
                              color:white;
                              font-size: 14px;
                          }
                      }
                  }
              }
              &:hover{
                  .content{
                      .detail{
                          span{
                              margin-left: 30px;
                          }
                      }
                  }
              }
          }
      }
      .news{
          width:100%;
          display: flex;
          flex-direction: row;
          .title{
              width:15%;
              padding: 30px 0;
              background-color: #EDEDED;
              position: relative;
              p:nth-child(1){
                  writing-mode:vertical-lr;
                  font-size: 30px;
                  font-weight: bolder;
                  position: absolute;
                  left:50%;
                  top:30px;
              }
              p:nth-child(2){
                  font-family: dusha;
                  color:#A8A8A8;
                  font-size: 60px;
                  text-transform: uppercase;
                  writing-mode:vertical-lr;
                  position: absolute;
                  left:25%;
                  top:30px;
              }
          }
          .content{
              width:80%;
              margin-left: 2%;
             padding: 60px 0;
              .link{
                  width:100%;
                  display: flex;
                  flex-direction: row;
                  a{
                      font-family: "Fira Code Light";
                      font-weight: lighter;
                      letter-spacing: 1px;
                      transition: all 1s;
                      &:hover{
                          color:#F37041;
                      }
                  }
              }
              .allNews{
                  width:90%;
                  margin: 60px 0;
                  margin-left: 2.5%;
                  position: relative;
                  .swiper{
                      .item{
                          display: flex;
                          flex-direction: row;
                          cursor: pointer;
                          .l{
                              width:35%;
                              overflow: hidden;
                              img{
                                  width:100%;
                                  display: block;
                                  object-fit: cover;
                                  transition: all 1s;
                              }
                          }
                          .r{
                              width:62%;
                              margin-left: 3%;
                              p:nth-child(1){
                                  margin: 20px auto;
                                  font-size: 22px;
                                  font-weight: bolder;
                              }
                              p:nth-child(2){
                                  font-family: "Fira Code Light";
                                  font-weight: lighter;
                                  font-size: 14px;
                                  line-height: 30px;
                                  margin: 10px auto;
                                  display: -webkit-box;
                                  -webkit-box-orient: vertical;
                                  -webkit-line-clamp: 4;
                                  overflow: hidden;
                              }
                              .detail{
                                  font-family: "Fira Code Light";
                                  font-weight: lighter;
                                  font-size: 14px;
                                  display: flex;
                                  flex-direction: row;
                                 margin-top: 60px;
                                  span{
                                      width:20px;
                                      height:20px;
                                      background:linear-gradient(-90deg,rgba(197,74,30,1),rgba(244,128,87,1));
                                      border:1px solid rgba(223, 88, 39, 1);
                                      box-shadow:0px 2px 6px 0px rgba(0, 0, 0, 0.3);
                                      border-radius:50%;
                                      display: inline-block;
                                      transform: rotate(90deg);
                                      text-align: center;
                                      margin-left: 10px;
                                      transition: all 1s;
                                      i{
                                          color:white;
                                          font-size: 14px;
                                      }
                                  }
                              }
                          }
                          &:hover{
                              .l{
                                  img{
                                      transform: scale(1.05);
                                  }
                              }
                              .r{
                                  .detail{
                                      span{
                                          margin-left: 30px;
                                      }
                                  }
                              }
                          }
                      }
                  }
                  .prev{
                      position: absolute;
                      right:10%;
                      bottom:5%;
                      z-index: 100;
                      padding: 5px 5px;
                      transition: all 1s;
                      cursor: pointer;
                      z-index: 100;
                      i{
                          transition: all 1s;
                          font-size: 20px;
                      }
                      &:focus{
                          outline: none;
                      }
                      &:hover{
                          background-color: #F37041;
                          i{
                              color:white;
                          }
                      }
                  }
                  .next{
                      @extend .prev;
                      right:3%;
                      left:auto;
                      &::before{
                          content:'';
                          display: inline-block;
                          width:1px;
                          height:22px;
                          background:rgba(77,77,77,.4);
                          position: absolute;
                          left:-33px;
                          top:4px;
                      }
                  }
              }
          }
      }
      .nextNews{
          width:100%;
          display: flex;
          flex-direction: row;
          margin-bottom: 30px;
          .left{
              width:30%;
              overflow: hidden;
              cursor: pointer;
              img{
                  width:100%;
                  object-fit: cover;
                  display: block;
                  transition: all 1s;
                  height:100%;
              }
              &:hover{
                  img{
                      transform: scale(1.05);
                  }
              }
          }
          .right{
              width:70%;
              background-color: #EDEDED;
              p{
                  width:80%;
                  margin-left: 5%;
              }
              p:nth-child(1){
                  font-size: 14px;
                  font-family: "Fira Code Light";
                  font-weight: lighter;
                  padding: 40px 0;
              }
              p:nth-child(2){
                  font-size: 18px;
                  font-weight: bolder;
              }
              p:nth-child(3){
                  margin: 20px 5%;
                  font-size: 14px;
                  font-family: "Fira Code Light";
                  font-weight: lighter;
                  color:#010101;
                  line-height: 35px;
              }
          }
      }
  }
  .foot{
    animation-name: polygon;
    animation-duration: 2s;
  }
  @keyframes transition1 {
    0% {
      transform: translate(-100px,100px);
      opacity: 0;
    }
    100% {
      transform: translate(0,0);
      opacity: 1;
    }
  }
  @keyframes transition2 {
    0% {
      transform: translate(100px,-100px);
      opacity: 0;
    }
    100% {
      transform: translate(0,0);
      opacity: 1;
    }
  }
  @keyframes polygon {
    0% {
      clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
    }
    100% {
      clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
    }
  }
    @keyframes polygon2 {
        0% {
            clip-path: polygon(0% 0%, 100% 0%, 1000% 0%, 0% 0%);
        }
        100% {
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
        }
    }
  @media screen  and (min-width: 2200px){

  }
  @media screen and (max-width: 1440px) and (min-width: 1000px){
   .main{
       .about{
           .content{
               width:90%;
           }
       }
       .car{
           .content{
               width:90%;
           }
       }
       .news{
           .content{
               .allNews{
                   .prev{
                       right:12%;
                   }
                   .next{
                       right:3%;
                   }
               }
           }
       }
   }
  }
  @media screen and (max-width: 1000px){

  }
}
</style>
