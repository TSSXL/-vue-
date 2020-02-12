<template>
  <div class="con">
    <div class="banner">
      <img src="../assets/yap/about/abanner.png" alt="">
    </div>
    <div class="main">
   <div class="nav">
     <p class="wow fadeInDown">关于我们</p>
     <p class="wow fadeInDown">about us</p>
     <div class="link wow fadeInDown">
     <div v-for="(item,index) in nList" :key="index" :class="{'active':select===index}" @click="change(index)">
       {{item}}
     </div>
     </div>
   </div>
      <transition name="fade">
        <div class="company" v-if="select===0">
          <div class="left wow">
            <p class="p1">企业介绍</p>
            <p class="p2">Enterprise introduction</p>
            <aboutDia />
          </div>
          <div class="right wow">
            <img src="../assets/yap/about/right.png" alt="">
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="culture" v-if="select===1">
          <div class="left">
            <p class="p1">企业文化</p>
            <p class="p2">corporate culture</p>
            <div class="content">
             <p class="t1">有理想的企业才有前进的动力</p>
              <p class="t2">
                企业愿景：成为全球汽车电子领域一流企业<br>
                企业使命：为客户打造优质的产品、为员工提供最好的平台、为社会创造更多的价值<br>
                企业精神：团结拼搏、高效创新<br>
                企业价值观：客户为本、诚信正直、责任担当、永不言弃<br>
                经营方针：优质服务、以质取胜<br>
                质量方针：质量为先、精益求精
              </p>
            </div>
          </div>
          <div class="right">
            <img src="../assets/yap/about/culture.png" alt="">
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="history" v-if="select===2">
          <div class="right">
            <img src="../assets/yap/about/rain.png" alt="">
          </div>
          <div class="left">
            <homeDia />
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="honor" v-if="select===3">
         <div class="allItems">
            <div class="item wow fadeInUp" v-for="(item,index) in hList" :key="index" @click="showBig(item.img)">
              <div class="left">
                  <img :src="item.img" alt="">
              </div>
                <div class="right">
                    <p>{{item.title}}</p>
                    <p>{{item.con}}</p>
                </div>
            </div>
         </div>
            <div class="btn">
            <span>
                  MORE
            </span>
            </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="service" v-if="select===4">
        <div class="content">
         <div class="text wow fadeInDown">
          <p>全球化服务</p>
             <p>
                 　　公司产品出口全球多个国家和地区，并匹配相应的销售及服务网络，已具备全球化市场运作和技术服务能力，客户涵盖了汽车、新能源、工程机械、光伏、工业控制等众多领域的知名企业。<br>
                 　　公司拥有专业的营销团队，结合丰富的国内外实战经验，为客户提供满意的解决方案和优质的服务。
             </p>
         </div>
            <div class="allItems">
                 <div class="item wow fadeInDown" style="animation-delay: 0.1s">
                     <div class="one">
                         <i class="iconfont icon-fuwu"></i>
                     </div>
                     <p>提供从制模、压铸、机加工、表面处理、装配到仓储出运的一站式服务，为客户提供高附加值的全面解决方案。</p>
                 </div>
                <div class="item wow fadeInDown" style="animation-delay: 0.2s">
                    <div class="one">
                        <i class="iconfont icon-jiaoliu"></i>
                    </div>
                    <p>市场团队流畅的英语交流和及时回复，消除沟通隔阂，确保订单细节准确无误。</p>
                </div>
                <div class="item wow fadeInDown" style="animation-delay: 0.3s">
                    <div class="one">
                        <i class="iconfont icon-zhinengyouhua"></i>
                    </div>
                    <p>为客户免费提供符合压铸特性的设计优化，在达到功能要求的前提下可对产品进行减重设计。</p>
                </div>
                <div class="item wow fadeInDown" style="animation-delay: 0.4s">
                    <div class="one">
                        <i class="iconfont icon-fuwuerji"></i>
                    </div>
                    <p>可信赖的售后服务，产品质量若有不符合可退换货处理。</p>
                </div>
            </div>
        </div>
        </div>
      </transition>
    </div>
      <div class="big2" v-if="showImg" @click="hide" id="ia" :style="dStyle">
          <img :src="src" alt="">
      </div>
      <foot-Component class="foot wow"></foot-Component>
  </div>
</template>

<script>
  import footComponent from '../components/foot'
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";
  import aboutDia  from "../components/aboutDia";
  import homeDia  from "../components/homeDia";
  import Scrollbar from 'smooth-scrollbar'
export default {
  name: 'about',
    data(){
      return{
          src:'',
          showImg:false,
          dStyle:{},
        select:0,
        nList:[
          "企业介绍",
           "企业文化",
           "发展历程",
           "荣誉资质",
           "全球化服务"
        ],
          hList:[
              {
                  img:require('../assets/yap/about/honor.png'),
                  title:'认证证书1',
                  con:'2018年，获取“组合开关的铝合金压铸外壳的制造，IATF16949:2016标准的要求”'
              },
              {
                  img:require('../assets/yap/about/honor.png'),
                  title:'认证证书1',
                  con:'2018年，获取“组合开关的铝合金压铸外壳的制造，IATF16949:2016标准的要求”'
              },
              {
                  img:require('../assets/yap/about/honor.png'),
                  title:'认证证书1',
                  con:'2018年，获取“组合开关的铝合金压铸外壳的制造，IATF16949:2016标准的要求”'
              },
              {
                  img:require('../assets/yap/about/honor.png'),
                  title:'认证证书1',
                  con:'2018年，获取“组合开关的铝合金压铸外壳的制造，IATF16949:2016标准的要求”'
              }
          ]
      }
    },
  components:{footComponent,aboutDia,swiper, swiperSlide,homeDia },
  mounted() {
      Scrollbar.initAll(document.getElementById("scroller-wrapper"));
      this.scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
      this.scrollbar.scrollTo(0,1)
      // window.pageYOffset=this.scrollbar.scrollTop
      this.scrollbar.addListener((status) => {
          this.dStyle={paddingTop:status.offset.y+120+'px'}
          window.pageYOffset=this.scrollbar.scrollTop
      });
    this.$nextTick(()=>{
        if(window.location.search.replace('?', '').split('=')[1]!==undefined){
                this.getScroll(parseInt(this.getNid()))
        }
    })
  },
  methods:{
      hide(){
          this.showImg=false
      },
      showBig(n){
          this.src=n
          // this.src='http://fushiwei.sansg.com/upload/'+n
          this.showImg=true
      },
      getNid () {
          return window.location.search.replace('?', '').split('=')[1].split('?')[0]
      },
      getScroll(n){
          this.select=n
      },
      change(n){
          const  link=`/about.html?index=${n}`
          window.open(link,'_self')
          // this.select=n
      },
  }
}
</script>

<style lang="scss" scoped>
  .con{
    width:100%;
    animation: run5 1s linear forwards;
      position: relative;
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
    }
    .main{
      width:100%;
      margin: 30px auto;
        position: relative;
      .nav{
        width:1440px;
        margin: 0 auto;
        border-bottom: 2px solid rgba(0,0,0,.1);
        p{
          text-align: right;
          color:#666666;
            animation-duration: 1s;
        }
        p:nth-child(1){
          font-size: 30px;
         font-family: "Fira Code Medium";
        }
        p:nth-child(2){
          font-size: 40px;
            animation-delay: 1s;
          text-transform: uppercase;
        font-family: box;
        }
        .link{
          width:100%;
            animation-duration: 1s;
            animation-delay:2s;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          color:#555555;
          font-size: 14px;
          margin: 0 auto;
          div{
            margin-left:30px;
            font-family: "Fira Code Medium";
            cursor: pointer;
            position: relative;
           padding: 10px 0;
            &::after{
              width:0;
              height:2px;
              background-color: #333333;
              position: absolute;
              left:0;
              bottom:-1px;
              content:'';
              display: inline-block;
              transition: all 1s;
            }
            &:hover::after{
              width:100%;
            }
          }
          .active::after{
            width:100%;
          }
        }
      }
      .company{
        width:1440px;
        margin: 20px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 120px;
        .left{
          width:49%;
            animation: transition1 2s linear forwards;
          .p1{
            color:#333333;
            font-size: 24px;
            margin-bottom: 5px;
            font-weight: bolder;
            font-family: "Fira Code Medium";
          }
          .p2{
            color:#333333;
            font-size: 21px;
            border-bottom: 2px solid rgba(0,0,0,.1);
            padding-bottom: 10px;
          }
        }
        .right{
          width:49%;
          overflow: hidden;
            animation: transition2 2s linear forwards;
          cursor: pointer;
          img{
            width:100%;
            object-fit: cover;
            display: inline-block;
            transition: all 1s;
          }
          &:hover{
            img{
              transform: scale(1.05);
            }
          }
        }
      }
      .culture{
        @extend .company;
        .left{
          .content{
             .t1{
               font-size: 30px;
               margin: 25px auto;
             }
            .t2{
              color:#333333;
              font-size: 14px;
              line-height: 35px;
            }
          }
        }
      }
      .history{
    @extend .company;
        .left{
          padding-top: 30px;
            animation: transition2 2s linear forwards;
        }
          .right{
              animation: transition1 2s linear forwards;
          }
      }
      .honor{
        width:1440px;
        margin:60px auto;
          .allItems{
              width:100%;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
              .item{
                  width:48.5%;
                  display: flex;
                  animation-duration: 2s;
                  flex-direction: row;
                  justify-content: space-between;
                  margin-top: 50px;
                  cursor: pointer;
                  .left{
                      width:48%;
                      text-align: center;
                      padding: 10px 0;
                      border: 1px solid #CDCDCD;
                      overflow: hidden;
                      img{
                          display: inline-block;
                          width:90%;
                          margin: 0 auto;
                          transition: all 1s;
                      }
                  }
                  .right{
                      width:48%;
                      p:nth-child(1){
                          color:#227CCB;
                          font-size: 18px;
                          padding-top: 100px;
                          padding-bottom: 30px;
                      }
                      p:nth-child(2){
                          color:#666666;
                          line-height: 30px;
                          font-family: "Fira Code Light";
                          font-weight: lighter;
                      }
                  }
                  &:hover{
                      .left{
                          img{
                              transform: scale(1.05);
                          }
                      }
                  }
              }
          }
          .btn{
              width:352px;
              height:50px;
              border-radius:28px;
              position: relative;
              cursor: pointer;
              overflow: hidden;
              border: 1px solid #CDCDCD;
              margin: 60px auto;
              span{
                  position: absolute;
                  left:0;
                  top:0;
                  display: inline-block;
                  width:100%;
                  height:100%;
                  text-align: center;
                  transition: all 1s;
                  line-height: 50px;
                  color:#666666;
                  font-family: "Fira Code Light";
                  font-weight: lighter;
              }
              &::before{
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 150%;
                  height: 100%;
                  background: #37474f;
                  z-index: 0;
                  -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
                  transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
                  -webkit-transform-origin: 0% 100%;
                  transform-origin: 0% 100%;
                  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.3s;
                  transition: all 1s;
              }
              &:hover{
                  span{
                      color:white;
                  }
              }
              &:hover::before{
                  opacity: 1;
                  background-color: #3f51b5;
                  -webkit-transform: rotate3d(0, 0, 1, 0deg);
                  transform: rotate3d(0, 0, 1, 0deg);
                  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
                  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
              }
          }
      }
        .service{
            width:100%;
            background: url("../assets/yap/about/service.png") no-repeat;
            background-size: cover;
            height:763px;
            margin: 20px auto;
            margin-bottom: 60px;
            .content{
                width:1440px;
                margin: 0 auto;
                padding-top: 60px;
                .text{
                    width:498px;
                    padding: 20px 20px;
                    margin: 0 auto;
                    animation-duration: 2s;
                    background:rgba(255,255,255,1);
                    box-shadow:0px 9px 0px 0px rgba(34,124,203,1);
                    position: relative;
                    p:nth-child(1){
                        padding-bottom: 20px;
                        color:#333333;
                        font-size: 24px;
                        text-align: center;
                    }
                    p:nth-child(2){
                        color:#333333;
                        font-size: 14px;
                        font-family: "Fira Code Light";
                        font-weight: lighter;
                        line-height: 30px;
                    }
                    &::before{
                        content:'';
                        display: inline-block;
                        position: absolute;
                        left:-30px;
                        top:-20px;
                        width:65px;
                        height:65px;
                        background:rgba(10,79,140,1);
                        border-radius:50%;
                    }
                    &::after{
                        content:'';
                        display: inline-block;
                        position: absolute;
                        left:15px;
                        top:10px;
                        width:37px;
                        height:37px;
                        background:rgba(34,124,203,1);
                        border-radius:50%;
                    }
                }
                .allItems{
                    width:100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: 60px auto;
                    .item{
                        width:22%;
                        background-color: white;
                        padding: 20px 0;
                        display: flex;
                        animation-duration: 2s;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;
                        transition: all 1s;
                        box-shadow:0px 10px 10px 0px rgba(210,210,210,0.7);
                        .one{
                            padding-bottom: 20px;
                            i{
                                color:#227CCB;
                                font-size: 60px;
                                transition: all 1s;
                            }
                        }
                        p{
                            color:#333333;
                            width:90%;
                            margin-left: 5%;
                            font-size: 13px;
                            font-family: "Fira Code Light";
                            font-weight: lighter;
                            transition: all 1s;
                            line-height: 25px;
                        }
                        &:hover{
                            background-color: #227CCB;
                            .one{
                                i{
                                    color:white;
                                }
                            }
                            p{
                                color:white;
                            }
                        }
                    }
                }
            }
        }
    }
      .big2{
          position: absolute;
          width:100%;
          text-align: center;
          left:0;
          top:0;
          height:100%;
          background-color: rgba(0,0,0,.8);
          z-index: 1000;
          img{
              width:500px;
              object-fit: cover;
          }
      }
    .foot{
      animation-name: polygon;
      animation-duration: 1s;
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
              clip-path: polygon(50% 0, 99% 50%, 50% 99%, 0 50%);
          }
          100% {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
      }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .banner{
            img{
                height:500px;
            }
        }
        .main{
            .nav,.company,.honor{
                width:90%;
            }
            .service{
                .content{
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
