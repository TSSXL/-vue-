<template>
  <div class="con">
    <div class="banner">
      <img src="../assets/zm/banner.png" alt="">
      <div class="text">
        <p class="p1 animated fadeInLeft">团结 · 敬业 · 创新 · 拼搏</p>
        <p class="p2 animated fadeInLeft">Unity · Dedication · Innovation · Hard work</p>
      </div>
    </div>
    <div class="main">
      <div class="nav">
        <div class="left wow">
          <p>关于我们</p>
          <p>About Us</p>
          <div class="line">

          </div>
        </div>
        <div class="right wow">
          <span><i class="iconfont icon-home"></i></span>
          <a href="./index.html">首页-</a>
          <a href="./about.html">关于我们</a>
        </div>
      </div>
      <div class="tnav wow fadeInUp" :style="aStyle">
        <span v-for="(item,index) in list" :key="index" :class="{'active':select===index}" @click="change(index)">{{item}}</span>
      </div>

     <!--      公司概况-->
      <div class="about" id="gk">
     <div class="title wow fadeInUp">
         <p>关于镇明转轴</p>
       <p>About zms</p>
     </div>
        <div class="content">
          <div class="left wow">
          <div class="l">
            <img src="../assets/zm/l.png" alt="">
          </div>
            <div class="r">
              <img src="../assets/zm/r1.png" alt="">
              <img src="../assets/zm/r2.png" alt="">
            </div>
          </div>
          <div class="right wow">
           <p>宁波镇明转轴有限公司</p>
            <p>世界一流的轴制造商</p>
            <aboutDia />
            <div class="im">
              <img src="../assets/zm/1495678518246.png" alt="">
            </div>
          </div>
        </div>
      </div>

<!--      厂房设备展示-->
         <div class="house" id="sb">
           <div class="title wow fadeInUp">
             <p>厂房设备展示</p>
             <p>Plant equipment</p>
           </div>
           <div class="allImgs wow fadeInUp">
             <swiper class="swiper" :options="swiperOption" ref="mySwiper"  v-if="hList.length>0">
               <swiper-slide class="item" v-for="(item,index) in hList" :key="index" >
                 <div class="oItem">
                   <img :src="item.a" alt="">
                 </div>
                <div class="oItem" v-for="(i,idx) in item.conList" :key="idx" @click="getBig(index,i.img)">
                  <img :src="i.img" alt="">
                  <div class="circle">
                  <i class="iconfont icon-fangda"></i>
                  </div>
                  <div class="name">
                    {{i.name}}
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

<!--      企业理念-->
      <div class="title1 wow fadeInUp" id="ln">
        <p>企业理念</p>
        <p>Corporate Philosophy</p>
      </div>
       <div class="idea">

         <div class="service wow fadeInLeft">
        <div class="left">
          <p>服务客户</p>
          <p>
            为客户创造更多的价值<br>
            提供更好的服务
          </p>
        </div>
           <div class="right">
             <img src="../assets/zm/ser.png" alt="">
           </div>
         </div>
         <div class="cj wow fadeInRight">
           <div class="left">
             <p>成就员工</p>
             <p>
               为员工提供一个有进步和<br>
               提升价值的工作环境。
             </p>
           </div>
           <div class="right">
             <img src="../assets/zm/cj.png" alt="">
           </div>
         </div>
         <div class="gx wow fadeInLeft">
           <div class="left">
             <p>贡献社会</p>
             <p>
               我们肩负的企业责任并不局限于<br>
               我们的商业运营。
             </p>
           </div>
           <div class="right">
             <img src="../assets/zm/gx.png" alt="">
           </div>
         </div>
       </div>

<!--      企业荣誉-->
        <div class="honor" id="ry">
          <div class="title wow fadeInUp">
            <p>企业荣誉</p>
            <p>Enterprise Honor</p>
          </div>
            <Honor class="wow fadeInUp" style="animation-duration: 2s" />

        </div>

<!--        品质保障-->
        <div class="quality" id="pz">
            <div class="title wow fadeInUp">
                <p>品质保障</p>
                <p>Quality Assurance</p>
            </div>
            <div class="t2 wow">
                <p>我们的目标</p>
                <p>世界一流的专业转轴制造商</p>
            </div>
            <div class="three">
            <div class="left">
               <div class="item wow fadeInUp">
              <img src="../assets/zm/duty.png" alt="">
              <p class="t0">责任</p>
              <p class="t1">
                  责任是对社会的责任<br>
                  对员工的责任
              </p>
          </div>
                <div class="item wow fadeInUp">
                    <img src="../assets/zm/create.png" alt="">
                    <p class="t0">创新</p>
                    <p class="t1">
                        创新是实现理想的<br>
                        动力和基础
                    </p>
                </div>
                <div class="item wow fadeInUp">
                    <img src="../assets/zm/devalop.png" alt="">
                    <p class="t0">发展</p>
                    <p class="t1">
                        发展是硬道理<br>
                        发展是目的
                    </p>
                </div>
            </div>
                <div class="right wow fadeInUp">
                <p>我们的灵魂</p>
                    <p>
                        我们根据客户需求开发新产品，提供可靠的质量和最好的服务，并降低客户成本。<br>
                        · 致力产品质量达到世界水准<br>
                        · 打造高度统一价值观的经营管理团队
                    </p>
                </div>
            </div>
        </div>

<!--        发展历程-->
       <div class="develop" id="fz">
           <div class="title wow fadeInUp">
               <p>发展历程</p>
               <p>Development Path</p>
           </div>
           <History class="wow fadeInUp" style="animation-duration: 2s" />
       </div>

    </div>
      <foot-Component class="foot wow"></foot-Component>
  </div>
</template>

<script>
  import footComponent from '../components/foot'
  import Honor from '../components/honor'
  import History from '../components/history'
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";
  import aboutDia  from "../components/aboutDia";
  import Scrollbar from 'smooth-scrollbar'
export default {
  name: 'about',
    data(){
    let _this=this
      return{
          aStyle:{},
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
                _this.hList[active].a=_this.hList[active].conList[0].img
              });
            }
          },
          navigation: {
            nextEl: '.allImgs .next',
            prevEl: '.allImgs .prev'
          }
        },
        hList:[
          {
            a:'',
            conList:[
              {img:require('../assets/zm/h1.png'),name:'厂房设备'},
              {img:require('../assets/zm/h2.png'),name:'厂房设备'},
              {img:require('../assets/zm/h3.png'),name:'厂房设备'},
              {img:require('../assets/zm/h4.png'),name:'厂房设备'},
              {img:require('../assets/zm/h5.png'),name:'厂房设备'}
            ]
          },
          {
            a:'',
            conList:[
              {img:require('../assets/zm/h4.png'),name:'厂房设备'},
              {img:require('../assets/zm/h5.png'),name:'厂房设备'}
            ]
          }
        ],
        select:0,
        list:[
          "企业概况",
          "厂房设备",
          "企业理念",
                "企业荣誉",
                "品质保障",
                "发展历程"
        ],
          scrollbar:''
      }
    },
  components:{footComponent,aboutDia,swiper, swiperSlide ,Honor,History},
  mounted() {
      Scrollbar.initAll(document.getElementById("scroller-wrapper"));
      this.scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
      this.scrollbar.scrollTo(0,1)
      window.pageYOffset=this.scrollbar.scrollTop
      this.scrollbar.addListener((status) => {
          if(status.offset.y>800){
              this.aStyle={
                  position:'sticky',
                  top:status.offset.y+111+'px',
                  left:'0',
                  zIndex:'1000'
              }
          }else{
              this.aStyle={
                  position:'static'
              }
          }
      });
    this.$nextTick(()=>{
     this.hList[0].a=this.hList[0].conList[0].img
        if(this.getNid()!==undefined){
            setTimeout(()=>{
                this.change(parseInt(this.getNid()))
            },1000)
        }
    })
  },
  methods:{
    getBig(i,n){
      this.hList[i].a=n
    },
      getNid () {
          return window.location.search.replace('?', '').split('=')[1].split('?')[0]
      },
    change(n){
      this.select=n
        if(n===0){
            Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#gk"),{
                offsetTop:100,
            })
        }else if(n===1){
            Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#sb"),{
                offsetTop:100,
            })
        }else if(n===2){
            Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#ln"),{
                offsetTop:100,
            })
        }else if(n===3){
            Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#ry"),{
                offsetTop:100,
            })
        }else if(n===4){
            Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#pz"),{
                offsetTop:100,
            })
        }else{
            Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#fz"),{
                offsetTop:100,
            })
        }
    }
  }
}
</script>

<style lang="scss" scoped>
  .con{
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
    .banner{
      width:100%;
      position: relative;
      img{
        width:100%;
        object-fit: cover;
        display: block;
      }
      .text{
        position: absolute;
        width:100%;
        top:50%;
        left:0;
        text-align: center;
        .p1{

          font-size: 30px;
          color:white;
          font-weight: bold;
          text-shadow:0px 2px 5px rgba(0, 0, 0, 1);
        }
        .p2{
          @extend .p1;
          font-family: "Fira Code Light";
          font-weight: lighter;
          font-size: 20px;
          animation-delay: 0.2s;
        }
      }
    }
    .main{
      width:100%;
      margin: 30px auto;
        position: relative;
      .nav{
        width:1440px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .left{
          padding: 10px 0;
          text-align: center;
          background-color: #F37041;
          width:200px;
          height:200px;
          overflow: hidden;
          margin-top: -140px;
          z-index: 100;
            animation: transition1 2s ease-in forwards;
          p{
            color:white;
          }
          p:nth-child(1){
            font-size: 35px;
            font-weight: bold;
            margin-top: 10px;
          }
          p:nth-child(2){
            font-size: 25px;
            font-family: "Fira Code Light";
            margin-top: 5px;
            font-weight: lighter;
          }
          .line{
            width:1px;
            height:120px;
            margin-left: 30px;
            background-color: white;
            margin-top: 20px;
          }
        }
        .right{
            animation: transition2 2s ease-in forwards;
          span{
            cursor: pointer;
            margin-right: 10px;
            i{
              font-size: 25px;
              color:black;
              transition: all .6s;
            }
          }
          span:hover{
            i{
              color:#F37041;
            }
          }
          a{
            margin-right: 5px;
            display: inline-block;
            transition: all 1s;
            &:hover{
              color:#F37041;
            }
          }
        }
      }
      .tnav{
        width:100%;
        border-top: 1px solid #E7E7E7;
        border-bottom: 1px solid #E7E7E7;
        display: flex;
        margin: 30px auto;
        flex-direction: row;
        justify-content: center;
        padding: 15px 0;
          animation-duration: 2s;
        span{
          display: inline-block;
          padding: 0 50px;
          position: relative;
          font-size: 18px;
          font-family: "Fira Code Light";
          font-weight: lighter;
          cursor: pointer;
          transition: all 1s;
          color:#B8B8B8;
          position: relative;
        }
        span:hover{
          color:black;
        }
        span::before{
          position: absolute;
          content:'';
          display: inline-block;
          width:12%;
          height:3px;
          background:rgba(243,112,65,1);
          left:44%;
          bottom:-15px;
          opacity: 0;
          transition: all 1s;
        }
        .active{
          color:black;
        }
        .active::before{
    opacity: 1;
        }
        span::after{
          content:'';
          display: inline-block;
          height:18px;
          top:4px;
          right:0;
          width:1px;
          position: absolute;
          background-color: #848484;
        }
      }
      .about{
        width:1440px;
        margin: 60px auto;
        .title{
          width:100%;
            animation-duration: 2s;
          p:nth-child(1){
            color:#313131;
            font-size: 35px;
            position: relative;
            padding: 20px 0;
            font-weight: bold;
            font-family: "Fira Code Medium";
            &::after{
              content:'';
              display: inline-block;
              position: absolute;
              left:0;
              bottom:0;
              width:73px;
              height:8px;
              background:rgba(243,112,65,1);
            }
          }
          p:nth-child(2){
            font-size:20px;
            font-weight:500;
            font-style:italic;
            color:rgba(194,194,194,1);
            line-height:35px;
            margin: 5px auto;
          }
        }
        .content{
          width:100%;
          display: flex;
          margin: 30px auto;
          flex-direction: row;
          justify-content: space-between;
          .left{
            width:65%;
             display: flex;
            flex-direction: row;
              animation: transition1 2s ease-in forwards;
            justify-content: space-between;
            .l{
              width:49.5%;
              overflow: hidden;
              img{
                width:100%;
                display: block;
                object-fit: cover;
                height:100%;
              }
            }
            .r{
              width:49.5%;
              display: flex;
              flex-direction: column;
              overflow: hidden;
              img{
                width:100%;
                  height:50%;
              }
              img:nth-child(2){
                margin-top: 10px;
              }
            }
            img{
              transition: all 1s;
              cursor: pointer;
              &:hover{
                transform: scale(1.05);
              }
            }
          }
          .right{
            width:30%;
              animation: transition2 2s ease-in forwards;
            p:nth-child(1){
              font-size: 30px;
              font-weight: bolder;
            }
            p:nth-child(2){
              margin: 10px auto;
              font-size: 25px;
              font-family: "Fira Code Light";
              font-weight: lighter;
            }
            .im{
              width:100%;
              text-align: center;
            }
          }
        }
      }
      .house{
        @extend .about;
        .allImgs{
          width:100%;
          margin: 30px auto;
          position: relative;
            animation-duration: 2s;
          .swiper{
            .item{
              position: relative;
              .oItem{
                height:615px;
                width:960px;
                cursor: pointer;
                overflow: hidden;
                img{
                  width:100%;
                  height:100%;
                  object-fit: cover;
                  display: block;
                  transition: all 1s;
                }
                &:nth-child(1){
                  float: left;
                }
                &:nth-child(2), &:nth-child(3){
                  float: right;
                  height:300px;
                  width:466px;
                  img{
                    width:100%;
                    height:100%;
                    object-fit: cover;
                    display: block;
                  }
                }
                &:nth-child(3){
                  margin-top: 15px;
                }
                &:nth-child(4),&:nth-child(5),&:nth-child(6){
                  height:300px;
                  width:466px;
                  margin-top: 15px;
                  img{
                    width:100%;
                    height:100%;
                    object-fit: cover;
                    display: block;
                  }
                  float: right;
                }
                &:nth-child(4), &:nth-child(5){
                  float: left;
                  width:472.5px;
                }
               &:nth-child(5){
              margin-left: 15px;
                margin-top: 15px;
              }
                &:not(:first-child){
                  position: relative;
                  .circle{
                    padding: 20px 20px;
                    background:rgba(0,0,0,1);
                    opacity: 0;
                    border-radius:50%;
                    position: absolute;
                    left:43%;
                    top:38%;
                    text-align: center;
                    transition: all 1s;
                    i{
                      color:white;
                      font-size: 25px;
                    }
                  }
                  .name{
                    position: absolute;
                    left:0;
                    bottom:0;
                    width:100%;
                     background-color: #F37041;
                    color:white;
                    font-size: 14px;
                    font-family: "Fira Code Light";
                    font-weight: lighter;
                    text-align: center;
                    padding: 15px 0;
                    opacity: 0;
                    transition: all 1s;
                  }
                }
                &:hover{
                  img{
                    transform: scale(1.05);
                  }
                  .circle{
                    opacity: .7;
                  }
                  .name{
                    opacity: 1;
                  }
                }
              }
            }
          }
          .prev{
            position: absolute;
            left:-60px;
            top:50%;
            background-color: #F37041;
            z-index: 100;
            border-radius: 50%;
            padding: 10px 10px;
              cursor: pointer;
            i{
              color:white;
              font-size: 30px;
            }
              &:focus{
                  outline: none;
              }
          }
          .next{
            @extend .prev;
            right:-60px;
            left:auto;
          }
        }
      }
      .title1{
        width:1440px;
        margin: 0 auto;
          animation-duration: 2s;
        p:nth-child(1){
          color:#313131;
          font-size: 35px;
          position: relative;
          padding: 20px 0;
          font-weight: bold;
          font-family: "Fira Code Medium";
          &::after{
            content:'';
            display: inline-block;
            position: absolute;
            left:0;
            bottom:0;
            width:73px;
            height:8px;
            background:rgba(243,112,65,1);
          }
        }
        p:nth-child(2){
          font-size:20px;
          font-weight:500;
          font-style:italic;
          color:rgba(194,194,194,1);
          line-height:35px;
          margin: 5px auto;
        }
      }
      .idea{
        width:100%;
        margin: 60px auto;
        .service{
          width:88%;
          display: flex;
          flex-direction: row;
          cursor: pointer;
            animation-duration: 2s;
          .left{
            width:40%;
            background-color: #F7F7F7;
            p{
              width:60%;
              margin-left: 40%;
              text-align: center;
              &:nth-child(1){
                color:#F37041;
                font-size: 20px;
                font-weight: bolder;
                margin-top: 50px;
               padding: 30px 0;
              }
              &:nth-child(2){
                color:#4C4C4C;
                font-size: 14px;
                line-height: 35px;
              }
            }
          }
          .right{
            width:60%;
            overflow: hidden;
            img{
              width:100%;
              display: block;
              object-fit: cover;
              transition: all 1s;
            }
          }
          &:hover{
            .right{
              img{
                transform: scale(1.05);
              }
            }
          }
        }
        .cj{
          @extend .service;
          margin-top: 20px;
          flex-direction: row-reverse;
          margin-left: 12%;
          .left{
            p{
              margin-left: 0;
            }
          }
        }
        .gx{
          @extend .service;
          margin-top: 20px;
        }
      }
      .honor{
        width:100%;
        background-color: #E4E9ED;
        padding: 40px 0;
        .title{
          width:1440px;
          margin: 0 auto;
            animation-duration: 2s;
          p:nth-child(1){
            color:#313131;
            font-size: 35px;
            position: relative;
            padding: 20px 0;
            font-weight: bold;
            font-family: "Fira Code Medium";
            &::after{
              content:'';
              display: inline-block;
              position: absolute;
              left:0;
              bottom:0;
              width:73px;
              height:8px;
              background:rgba(243,112,65,1);
            }
          }
          p:nth-child(2){
            font-size:20px;
            font-weight:500;
            font-style:italic;
            color:rgba(194,194,194,1);
            line-height:35px;
            margin: 5px auto;
          }
        }
      }
        .quality{
            @extend .about;
            .t2{
                width:100%;
                text-align: right;
                margin: 30px auto;
                animation: transition2 2s ease-in forwards;
                p:nth-child(1){
                    font-size: 30px;
                    font-family: "Fira Code Light";
                    font-weight: lighter;
                    margin: 15px 0;
                }
                p:nth-child(2){
                    font-size: 40px;
                    font-family: "Fira Code Medium";
                    font-weight: bolder;
                }
            }
            .three{
                width:100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 60px auto;
                .left{
                    width:50%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .item{
                        width:30%;
                        text-align: center;
                        cursor: pointer;
                        transition: all 1s;
                        padding: 40px 0;
                        animation-duration: 2s;
                        .t0{
                            margin: 20px 0;
                            font-size: 22px;
                        }
                        .t1{
                            font-family: "Fira Code Light";
                            font-weight: lighter;
                            line-height: 30px;
                        }
                        &:hover{
                            box-shadow:0px 46px 20px 1px rgba(0, 0, 0, 0.05);
                        }
                    }
                    .item:nth-child(2){
                        animation-delay: 0.2s;
                    }
                    .item:nth-child(3){
                        animation-delay: 0.4s;
                    }
                }
                .right{
                    width:48%;
                    animation-delay: 0.6s;
                    animation-duration: 2s;
                    p:nth-child(1){
                        font-size: 30px;
                        font-family: "Fira Code Light";
                        font-weight: lighter;
                    }
                    p:nth-child(2){
                        font-family: "Fira Code Light";
                        font-weight:lighter;
                        font-size: 14px;
                        line-height: 30px;
                        margin: 30px auto;
                    }
                }
            }
        }
        .develop{
            width:100%;
            background: url("../assets/zm/debg.png") no-repeat;
            background-size:cover;
            height:790px;
            .title{
                width:1440px;
                margin: 0 auto;
                animation-duration: 2s;
                p:nth-child(1){
                    color:#313131;
                    font-size: 35px;
                    position: relative;
                    padding: 20px 0;
                    font-weight: bold;
                    font-family: "Fira Code Medium";
                    &::after{
                        content:'';
                        display: inline-block;
                        position: absolute;
                        left:0;
                        bottom:0;
                        width:73px;
                        height:8px;
                        background:rgba(243,112,65,1);
                    }
                }
                p:nth-child(2){
                    font-size:20px;
                    font-weight:500;
                    font-style:italic;
                    color:rgba(194,194,194,1);
                    line-height:35px;
                    margin: 5px auto;
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
        transform: translate(-300px,-300px);
        opacity: 0;
      }
      100% {
        transform: translate(0,0);
        opacity: 1;
      }
    }
    @keyframes transition2 {
      0% {
        transform: translate(300px,-300px);
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
    @media screen and (max-width: 1440px) and (min-width: 1000px){
     .main{
         .nav,.about{
             width:90%;
         }
         .idea{
             .service{
                 .left{
                     p:nth-child(1){
                         margin-top: 20px;
                     }
                 }
             }
         }
         .title1{
             width:90%;
         }
         .house{
             .allImgs{
                 .swiper{
                     .item{
                         .oItem{
                             width:66.5%;
                         }
                         .oItem:not(:first-child){
                             width:32.6%;
                         }
                     }
                 }
             }
         }
         .honor,.develop{
             .title{
                 width:90%;
             }
         }
     }
    }
    @media screen and (max-width: 1000px){
      .banner{
        img{
          height:500px;
        }
      }
      .main{
        .one,.two,.three,.four{
          width:90%;
        }
        .one{
          flex-direction: column;
          .left,.right{
            width:100%;
            margin-left: 0;
          }
          .right{
            margin-top: 30px;
            .r1{
              margin: 0;
              flex-direction: column;
              div:nth-child(2){
                padding-top: 20px;
                margin-left: 0;
                p{
                  text-align: center;
                }
              }
            }
            .r2{
              padding-top: 30px;
              p:nth-child(1){
                text-align: center;
              }
            }
          }
        }
        .two{
          flex-direction: column;
          p,div{
            width:100%;
          }
          div{
            margin-top: 20px;
          }
        }
        .three{
          flex-direction: column;
          .left,.right{
            width:100%;
            margin-left: 0;
          }
          .right{
            p:nth-child(1){
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
