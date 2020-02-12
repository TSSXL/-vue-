<template>
  <div class="home">
    <banner-Component></banner-Component>
    <div class="main">
<!--    产品中心-->
       <div class="pro">
         <div class="link">
         <div class="l wow fadeInLeft">
           <p>产品</p>
           <p>寻找您想要的产品</p>
         </div>
           <div class="r wow fadeInRight">
            <div class="item " v-for="(item,index) in list" :key="index" :class="{'active':select===index}">
          {{item.name}}
            </div>
           </div>
         </div>
         <div class="allPro">
            <div class="item wow fadeIn" v-for="(item,index) in pList" :key="index" :style="aStyle(index)">
            <div class="one">
              <img :src="item.img" alt="">
            </div>
              <div class="two">
                <p class="name">{{item.name}}</p>
                <p class="content">{{item.con}}</p>
                <div class="bq">
                  <div class="ms">
                    <p>{{item.bq}}</p>
                  </div>
                </div>
              </div>
            </div>
         </div>
       </div>

<!--      企业介绍-->
      <div class="about wow fadeIn">
        <div class="content">
         <p>企业介绍</p>
          <p>
            浙江亿安培电器有限公司是一家专业从事汽车继电器、新能源专用继电器、电器控制盒、高压配电盒、汽车电子控制模块等产品的研发、生产、销售、服务于一体的高新科技企业。产品广泛应用于汽车、新能源、工程机械、光伏、工业控制等领域。
          </p>
          <p>优质服务，以质取胜</p>
          <div class="btn">
            <span>
                  了解更多
            </span>
          </div>
        </div>
      </div>

<!--      新闻资讯-->
      <div class="news">
        <div class="link">
          <div class="l wow fadeInLeft">
            <p>新闻</p>
            <p>news</p>
          </div>
          <div class="r wow fadeInRight">
            <div class="item" v-for="(item,index) in list2" :key="index" :class="{'active':select2===index}">
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="allItems">
            <swiper class="swiper1" :options="swiperOption" ref="mySwiper"  v-if="nList.length>0">
                <swiper-slide class="item wow fadeIn" v-for="(item,index) in nList" :key="index" >
                    <div class="one">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="two">
                        <p>{{item.title}}</p>
                        <p>{{item.con}}</p>
                    </div>
                    <p class="time">
                        {{item.time}}
                        <i class="iconfont icon-you"></i>
                    </p>
                </swiper-slide>
            </swiper>
            <div class="prev"></div>
            <div class="next "></div>
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
          swiperOption:{
              slidesPerView: 3,
              speed:1000,
              slideToClickedSlide: true,
              navigation: {
                  nextEl: '.allItems .next',
                  prevEl: '.allItems .prev'
              }
          },
        select:0,
        select2:0,
        list2:[
          {
            name:'全部'
          },
          {
            name:'最新'
          },
          {
            name:'MORE'
          }
        ],
        list:[
          {
            name:'全部'
          },
          {
            name:'汽车继电器'
          },
          {
            name:'PCB继电器'
          },
          {
            name:'新能源继电器'
          },
          {
            name:'MORE'
          }
        ],
        pList:[
          {
            img:require('../assets/yap/home/p.png'),
            name:'M4/012-1H1G继电器',
            con:'后窗除雾器、电池断路装置、汽车空调、油泵控制、雾灯、冷却风扇控制、大灯控制等',
            bq:'继电器,触点切换,新品上市'
          },
          {
            img:require('../assets/yap/home/p.png'),
            name:'M4/012-1H1G继电器',
            con:'后窗除雾器、电池断路装置、汽车空调、油泵控制、雾灯、冷却风扇控制、大灯控制等',
            bq:'继电器,触点切换,新品上市'
          },
          {
            img:require('../assets/yap/home/p.png'),
            name:'M4/012-1H1G继电器',
            con:'后窗除雾器、电池断路装置、汽车空调、油泵控制、雾灯、冷却风扇控制、大灯控制等',
            bq:'继电器,触点切换,新品上市'
          },
          {
            img:require('../assets/yap/home/p.png'),
            name:'M4/012-1H1G继电器',
            con:'后窗除雾器、电池断路装置、汽车空调、油泵控制、雾灯、冷却风扇控制、大灯控制等',
            bq:'继电器,触点切换,新品上市'
          },
          {
            img:require('../assets/yap/home/p.png'),
            name:'M4/012-1H1G继电器',
            con:'后窗除雾器、电池断路装置、汽车空调、油泵控制、雾灯、冷却风扇控制、大灯控制等',
            bq:'继电器,触点切换,新品上市'
          },
          {
            img:require('../assets/yap/home/p.png'),
            name:'M4/012-1H1G继电器',
            con:'后窗除雾器、电池断路装置、汽车空调、油泵控制、雾灯、冷却风扇控制、大灯控制等',
            bq:'继电器,触点切换,新品上市'
          },
          {
            img:require('../assets/yap/home/p.png'),
            name:'M4/012-1H1G继电器',
            con:'后窗除雾器、电池断路装置、汽车空调、油泵控制、雾灯、冷却风扇控制、大灯控制等',
            bq:'继电器,触点切换,新品上市'
          },
          {
            img:require('../assets/yap/home/p.png'),
            name:'M4/012-1H1G继电器',
            con:'后窗除雾器、电池断路装置、汽车空调、油泵控制、雾灯、冷却风扇控制、大灯控制等',
            bq:'继电器,触点切换,新品上市'
          },
          {
            img:require('../assets/yap/home/p.png'),
            name:'M4/012-1H1G继电器',
            con:'后窗除雾器、电池断路装置、汽车空调、油泵控制、雾灯、冷却风扇控制、大灯控制等',
            bq:'继电器,触点切换,新品上市'
          }
        ],
        nList:[
          {
            img:require('../assets/yap/home/n.png'),
            title:'弧焊逆变电源以其高效率电能转换著称',
            con:'弧焊逆变电源以其高效率电能转换著称，随着功率控制器件向实用化和大容量化方向发展，弧焊逆变电源也将跨入高频化、大容量的时代。率因数很低...',
            time:'12-16'
          },
          {
            img:require('../assets/yap/home/n.png'),
            title:'弧焊逆变电源以其高效率电能转换著称',
            con:'弧焊逆变电源以其高效率电能转换著称，随着功率控制器件向实用化和大容量化方向发展，弧焊逆变电源也将跨入高频化、大容量的时代。率因数很低...',
            time:'12-15'
          },
          {
            img:require('../assets/yap/home/n.png'),
            title:'弧焊逆变电源以其高效率电能转换著称',
            con:'弧焊逆变电源以其高效率电能转换著称，随着功率控制器件向实用化和大容量化方向发展，弧焊逆变电源也将跨入高频化、大容量的时代。率因数很低...',
            time:'12-14'
          },
            {
                img:require('../assets/yap/home/n.png'),
                title:'弧焊逆变电源以其高效率电能转换著称',
                con:'弧焊逆变电源以其高效率电能转换著称，随着功率控制器件向实用化和大容量化方向发展，弧焊逆变电源也将跨入高频化、大容量的时代。率因数很低...',
                time:'12-13'
            }
        ],
          scrollbar:'',
      }
    },
    mounted() {
        Scrollbar.initAll(document.getElementById("scroller-wrapper"));
        let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
        scrollbar.scrollTo(0,0)
        this.scrollbar = Scrollbar.init(document.getElementById('scroller-wrapper'));
        window.pageYOffset=this.scrollbar.scrollTop
        this.scrollbar.addListener((status) => {

        });
    },
  components:{bannerComponent,footComponent,swiper, swiperSlide},
    methods:{
        aStyle(n){
            return {animationDelay:0.1*n+'s'}
        }
    }
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
    .pro{
      width:1440px;
      margin: 60px auto;
     .link{
       width:100%;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       .l{
         display: flex;
         flex-direction: row;
         align-items: center;
         p:nth-child(1){
           color:#0A4F8C;
           font-size: 24px;
         }
         p:nth-child(2){
           color:#BBBBBB;
           font-size: 14px;
           margin-left: 10px;

         }
       }
       .r{
         display: flex;
         flex-direction: row;
         align-items: center;
         .item{
           border: 1px solid #C6C6C6;
           border-radius: 15px;
           text-align: center;
           font-size: 14px;
           font-family: "Fira Code Light";
           font-weight: lighter;
           padding: 5px  15px;
           cursor: pointer;
           margin-left: 30px;
           transition: all 1s;
           &:hover{
             background-color: #227CCB;
             color:white;
           }
         }
         .active{
           background-color: #227CCB;
           color:white;
         }
       }
     }
      .allPro{
        width:100%;
        margin: 60px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .item{
          width:32%;
          margin-left: 1%;
          margin-top: 30px;
          cursor: pointer;
          transition: all 1s;
          border:2px solid rgba(34,124,203,0);
            animation-duration: 2s;
          .one{
            width:100%;
            overflow: hidden;
            text-align: center;
            img{
              transition: all 1s;
            }
          }
          .two{
            width:100%;
            transition: all 1s;
            padding-top: 30px;
            p{
              transition: all 1s;
            }
           .name{
              color:#333333;
              font-size: 17px;
              margin: 30px auto;
             margin-top: 0;
              width:90%;
            }
           .content{
              color:#999999;
              font-size: 13px;
              font-family: "Fira Code Light";
              font-weight: lighter;
              line-height: 30px;
              width:90%;
             display: -webkit-box;
             -webkit-box-orient: vertical;
             -webkit-line-clamp: 2;
             overflow: hidden;
              margin: 0 auto;
             margin-bottom: 20px;
            }
            .bq{
              width:100%;
              border-top: 1px solid #CDCDCD;
              .ms{
                width:90%;
                padding: 20px 0;
                color:#828282;
                font-size: 12px;
                margin: 0 auto;
              }
            }
          }
          &:hover{
            border:2px solid rgba(34,124,203,1);
            .one{
              img{
                transform: scale(1.05);
              }
            }
            .two{
              background-color: #227CCB;
              p{
                color:white;
              }
            }
          }
        }
      }
    }
    .about{
      width:100%;
      background: url("../assets/yap/home/ab.png") no-repeat;
      background-size: cover;
      height:679px;
        animation-duration: 2s;
      .content{
        width:1440px;
        margin:0 auto;
        p:nth-child(1){
          color:#555555;
          font-size: 36px;
          padding-top: 100px;
          padding-bottom: 30px;
        }
        p:nth-child(2),p:nth-child(3){
          color:#7F7F7F;
          font-size: 13px;
          line-height: 25px;
          width:50%;
        }
        p:nth-child(3){
          margin: 30px 0;
        }
        .btn{
          width:234px;
          height:50px;
          border-radius:28px;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border: 1px solid #6D6D6D;
          span{
            position: absolute;
            left:0;
            top:0;
            display: inline-block;
            width:100%;
            height:100%;
            text-align: center;
            transition: all 1s;
            line-height: 45px;
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
    }
    .news{
      @extend .pro;
      .allItems{
        width:100%;
        display: flex;
        flex-direction: row;
        margin: 60px auto;
          position: relative;
          padding-bottom: 60px;
        .item{
          width:32%;
          margin-left: 3%;
          cursor: pointer;
          .one{
            width:100%;
            overflow: hidden;
            img{
              width:100%;
              display: block;
              object-fit: cover;
              transition: all 1s;
            }
          }
          .two{
            width:100%;
            border-bottom: 1px solid #227CCB;
            position: relative;
            p:nth-child(1){
            color:#333333;
              margin: 20px auto;
              transition: all 1s;
            }
            p:nth-child(2){
              color:#999999;
              font-size: 13px;
              line-height: 25px;
              margin-bottom: 20px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            &::after{
              content:'';
              display: inline-block;
              height:1px;
              width:0;
              position: absolute;
              bottom:-1px;
              left:0;
              transition: all 1s;
              background:linear-gradient(to right,#7f06a8, #bc34e4, #e8e8e8)
            }
          }
          .time{
            width:100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 20px;
            color:#888888;
            margin: 20px auto;
            transition: all 1s;
          font-family: "Arial Rounded MT Bold";
            i{
              opacity: 0;
              transition: all 1s;
            }
          }
          &:hover{
            .one{
              img{
                transform: scale(1.05);
              }
            }
            .two{
              p:nth-child(1){
                color:#227CCB;
              }
              &::after{
                width:100%;
              }
            }
            .time{
              color:#227CCB;
              i{
                opacity: 1;
              }
            }
          }
        }
        .item:nth-child(1){
          margin-left: 0;
        }
          .prev{
              position: absolute;
              left:50%;
              bottom:0;
              z-index: 100;
              cursor: pointer;
              width:6px;
              height:6px;
              background:rgba(229,229,229,1);
              border-radius:50%;
              border:2px solid rgba(79,144,210,0);
              transition: all 1s;
              &:hover{
                  width:8px;
                  height:8px;
                  background:rgba(255,255,255,1);
                  border:2px solid rgba(79,144,210,1);
              }
              &:focus{
                  outline: none;
              }
          }
          .next{
              @extend .prev;
              left:53%;
          }
      }
    }
  }
  .foot{
    animation-name: polygon;
    animation-duration: 1s;
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
      clip-path: polygon(0% 0%, 100% 100%, 0% 100%, 100% 0%);
    }
    100% {
      clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
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
  @media screen  and (min-width: 2200px){

  }
  @media screen and (max-width: 1440px) and (min-width: 1000px){
   .main{
       .pro{
           width:90%;
       }
       .about{
           .content{
               width:90%;
           }
       }
   }
  }
  @media screen and (max-width: 1000px){

  }
}
</style>
