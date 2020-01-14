<template>
  <div class="home">
    <banner-Component @goDown="goDown"></banner-Component>
    <div class="main" id="nav">
<!--      品牌-->
      <div class="brand" >
      <div class="title wow">
        <p>
          Brand<br>
          Traceability
        </p>
        <p>品牌溯源</p>
      </div>
        <div class="content">
           <div class="left wow">
             <p>
              　　意大利米兰是世界时尚与设计之都和时尚界最有影响力的城市，世界历史文化名城，世界歌剧圣地，世界艺术之都。米兰拥有众多的美术馆，博物馆，世界著名大师的作品一应俱全。像达芬奇的《最后的晚餐》和众多手稿，米开朗基罗生前最后一个雕塑，拉斐尔，提香，佩鲁吉诺，毕加索等大师的绘画均收藏于布雷拉美术馆、布雷拉现代美术馆、二十世纪博物馆、米兰现代艺术博物馆等地。意大利同时汇聚了众多世界时尚名品，像阿玛尼、范思哲、普拉达、杜嘉班纳、华伦天奴、古奇、莫斯奇诺等。而诞生于意大利米兰的EBIN CASA，将米兰的时尚文化和艺术传承在家具设计中进行了尽情演绎，打造出独具魅力的时尚简约家具。
             </p>
             <a @click="gotoAbout">loading more series</a>
           </div>
          <div class="right wow">
            <img src="../assets/fb/right.png" alt="">
          </div>
        </div>
      </div>

<!--      产品-->
      <div class="pro">
        <div class="one wow fadeInUp">
          <div class="title">
            <p>Product Series</p>
            <p @click="gotoPro">Explore more product lines >></p>
          </div>
        </div>
        <swiper class="swiper wow fadeIn" :options="swiperOption"  v-if="pList.length>0">
          <swiper-slide class="item" v-for="(item,index) in pList" :key="index" >
           <div class="a1" @click="gotoInfo(item.ID)">
             <img :src="`http://yibin.sansg.com/upload/${item.SMALLPIC}`" alt="">
           </div>
           <div class="a2" @click="gotoInfo(item.ID)">
             <p>{{item.PRONAME}}</p>
             <p>{{item.TITLE2}}</p>
           </div>
          </swiper-slide>
          <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        </swiper>
        <swiper class="swiper swiper2 wow fadeIn" :options="moblieswiperOption"  v-if="pList.length>0">
          <swiper-slide class="item" v-for="(item,index) in pList" :key="index" >
            <div class="a1" @click="gotoInfo(item.ID)">
              <img :src="`http://yibin.sansg.com/upload/${item.SMALLPIC}`" alt="">
            </div>
            <div class="a2" @click="gotoInfo(item.ID)">
              <p>{{item.PRONAME}}</p>
              <p>{{item.TITLE2}}</p>
            </div>
          </swiper-slide>
          <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        </swiper>
<!--        <div class="btn prev ">-->
<!--          <i class="iconfont icon-leftts"></i>-->
<!--        </div>-->
<!--        <div class="btn next ">-->
<!--          <i class="iconfont icon-leftts"></i>-->
<!--        </div>-->
      </div>

<!--      品牌优势-->
      <div class="pp">
        <div class="title wow ">
          <p>
            Brand<br>
            Advantagers
          </p>
          <p>品牌优势</p>
        </div>
        <p class="content wow">

          源自意大利的意缤品牌，作为国际原创家具品牌的典范，以其简约奢华，知性优雅的现代国际风格，引领时尚的潮流；<br>
          意缤品牌的设计团队由来自意大利、西班牙和中国的设计师组成，具有国际时尚的艺术视角和深厚纯正的专业底蕴----这也是原创设计，创作国际顶级品牌的先决条件，<br>
          典雅时尚、别致完美的外形设计，都达到能仿其行不能仿其神的境界；
        </p>
        <a class="wow" @click="gotoAbout">loading more series</a>
        <div class="twoImg">
          <div>
            <img class="wow" src="../assets/fb/l.png" alt="">
          </div>
          <div>
            <img class="wow" src="../assets/fb/r.png" alt="">
          </div>
        </div>
      </div>

<!--      品牌概况-->
        <div class="intro">
          <div class="kb"></div>
          <div class="m1">
            <div class="left">
              <img class="wow" src="../assets/fb/left.png" alt="">
            </div>
            <div class="right wow">
              <div class="title">
                <p>
                  Brand<br>
                  Overview
                </p>
                <p>品牌概况</p>
              </div>
              <p class="content">
                意缤设计师用介于奢华和时尚间的品质生活为设计源头，既拥有高端的定位，又更尊重生活品质，它代表着高品质家居生活的追求。在消费观念方面，已超越了“珠光宝气”的奢侈品阶段，而趋于一种理性、健康的消费方式...
              </p>
              <a @click="gotoAbout">loading more series</a>
            </div>
          </div>
        </div>

<!--      产品-->
      <div class="pro2 wow fadeIn">
        <swiper class="swiper" :options="swiperOption2"  v-if="pList2.length>0">
        <swiper-slide class="item" v-for="(item,index) in pList2" :key="index" >
          <div class="a1" @click="gotoInfo2(item.ID)">
            <img :src="`http://yibin.sansg.com/upload/${item.SMALLPIC}`" alt="">
          </div>
          <div class="a2" @click="gotoInfo2(item.ID)">
            <p>{{item.PRONAME}}</p>
            <!--              <p>{{item.TITLE2}}</p>-->
          </div>
        </swiper-slide>
        <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      </swiper>
        <swiper class="swiper swiper2" :options="moblieswiperOption2"  v-if="pList2.length>0">
          <swiper-slide class="item" v-for="(item,index) in pList2" :key="index" >
            <div class="a1" @click="gotoInfo2(item.ID)">
              <img :src="`http://yibin.sansg.com/upload/${item.SMALLPIC}`" alt="">
            </div>
            <div class="a2" @click="gotoInfo2(item.ID)">
              <p>{{item.PRONAME}}</p>
              <!--              <p>{{item.TITLE2}}</p>-->
            </div>
          </swiper-slide>
          <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        </swiper>
      </div>

<!--      诞生-->
       <div class="ds">
         <img class="wow" src="../assets/fb/ds.png" alt="">
         <div class="content wow">
           <div class="left">
             <p>
               Italian modern \<br>
               Minimalist luxury
             </p>
             <p>诞生于意大利米兰的EBIN CASA，将米兰的时尚文化和艺术传承在家具设计中进行了尽情演绎，打造出独具魅力的时尚简约家具。</p>
           </div>
           <div class="right">
             <span>
                         <i class="iconfont icon-bofang"></i>
             </span>
           </div>
         </div>
       </div>

    </div>
      <foot-Component class="foot wow"></foot-Component>
  </div>
</template>

<script>
  import bannerComponent from '../components/banner'
  import Scrollbar from 'smooth-scrollbar'
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";
  import footComponent from '../components/foot'
  import '../common/jquery-1.11.3.min'
  import {getProductsUrl} from '../util/lang'
export default {
  name: 'homea',
    data(){
      return{
          scrollbar:'',
        pList:[],
        pList2:[],
        swiperOption:{
          notNextTick: true,
          slidesPerView: 4,
          speed:1000,
          init:true,
          spaceBetween : 10,
          loop:false,
          autoplay:false,
          setWrapperSize :true,
          navigation: {
            nextEl: '.pro .swiper-button-next',
            prevEl: '.pro .swiper-button-prev'
          }
        },
        moblieswiperOption:{
          notNextTick: true,
          slidesPerView:1,
          speed:1000,
          init:true,
          spaceBetween : 0,
          loop:false,
          autoplay:false,
          setWrapperSize :true,
          navigation: {
            nextEl: '.pro .swiper-button-next',
            prevEl: '.pro .swiper-button-prev'
          }
        },
        swiperOption2:{
          notNextTick: true,
          slidesPerView: 4,
          speed:1000,
          init:true,
          spaceBetween : 10,
          loop:false,
          autoplay:false,
          setWrapperSize :true,
          navigation: {
            nextEl: '.pro2 .swiper-button-next',
            prevEl: '.pro2 .swiper-button-prev'
          }
        },
        moblieswiperOption2:{
          notNextTick: true,
          slidesPerView: 1,
          speed:1000,
          init:true,
          spaceBetween :0,
          loop:false,
          autoplay:false,
          setWrapperSize :true,
          navigation: {
            nextEl: '.pro2 .swiper-button-next',
            prevEl: '.pro2 .swiper-button-prev'
          }
        },
      }
    },
    mounted() {
        Scrollbar.initAll(document.getElementById("scroller-wrapper"));
        let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
        scrollbar.scrollTo(0,0)
      this.getProList('42')
      this.getProList2('43')
        this.scrollbar = Scrollbar.init(document.getElementById('scroller-wrapper'));
        window.pageYOffset=this.scrollbar.scrollTop
        this.scrollbar.addListener(() => {
            // $(".brand .title").each(function() {
            //     var _this = $(this);
            //     if ($(window).scrollTop() >= $(this).offset().top - $(window).height() + 50)
            //     {
            //         _this.addClass('show');
            //     }else{
            //         _this.removeClass('show');
            //     }
            // });
        });
    },
  components:{bannerComponent,footComponent,swiper, swiperSlide},
  methods:{
    gotoPro(){
      const link='/pro.html'
      window.open(link,'_self')
    },
    gotoInfo(id){
      const link = `/proInfo.html?pid=${id}?text=All Product`
      window.open(link)
    },
    gotoInfo2(id){
      const link = `/lifeInfo.html?pid=${id}`
      window.open(link)
    },
    getProList(id){
      const url = `${getProductsUrl('zh-CN',id,10000,1)}`
      this.$axios.get(url).then(res => {
        res.data.proarr.map((item)=>{
          if(item.ISCOMMEND==='1'){
            this.pList.push(item)
          }
        })
      })
    },
    getProList2(id){
      const url = `${getProductsUrl('zh-CN',id,10000,1)}`
      this.$axios.get(url).then(res => {
        res.data.proarr.map((item)=>{
          if(item.ISCOMMEND==='1'){
            this.pList2.push(item)
          }
        })
      })
    },
    gotoAbout(){
      const link='/about.html'
      window.open(link,'_self')
    },
    goDown(){
      Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#nav"),{
        offsetTop:80,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width:100%;
  .main{
    width:100%;
    background-color: #F3F4F6;
    .brand{
      width:1440px;
      margin: 0 auto;
      padding: 60px 0;
      .title{
        display: flex;
        flex-direction: row;
        animation-name: transition1;
        animation-duration: 1s;
        animation-fill-mode:forwards;
        p:nth-child(1){
          font-family: play;
          font-size: 30px;
        }
        p:nth-child(2){
        margin-left: 30px;
          padding-top: 50px;
          display: inline-block;
          color:#3B3B3B;
          font-size: 20px;
     font-family: "Fira Code Medium";
          font-weight: bolder;
        }
      }
      .content{
        width:100%;
        display: flex;
        flex-direction: row;
        .left{
          width:65%;
          animation-name: transition1;
          animation-duration: 1s;
          animation-fill-mode:forwards;
          p{
          font-family: "Fira Code Medium";
            font-weight: lighter;
            line-height: 40px;
            margin: 60px auto;
            font-size: 14px;
          }
          a{
          font-family: it;
            font-weight: bolder;
            text-transform: capitalize;
            cursor: pointer;
            font-size: 12px;
            background: transparent;
            text-decoration: none;
            padding: 10px 70px;
            border: 1px solid black;
            -webkit-tap-highlight-color: transparent;
            display: inline-block;
            vertical-align: middle;
            transform: translateZ(0);
            box-shadow: 0 0 1px transparent;
            backface-visibility: hidden;
            position: relative;
            transition-property: color;
            transition-duration: .5s;
          }
          a::before{
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            height:100%;
            width:100%;
            right: 0;
            bottom: 0;
            background:black;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 0 50%;
            transform-origin: 0 50%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: .5s;
            transition-duration: .5s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
          }
          a:hover{
            color:white;
          }
          a:hover::before{
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transition-timing-function: cubic-bezier(.52,1.64,.37,.66);
            transition-timing-function: cubic-bezier(.52,1.64,.37,.66);
          }
        }
        .right{
          width:35%;
          text-align: center;
          padding-top: 120px;
          animation-name: transition2;
          animation-duration: 1s;
          animation-fill-mode:forwards;
        }
      }
    }
    .pro{
      width:100%;
      margin: 30px auto;
      .one{
        width:100%;
        text-align: center;
        animation-duration: 2s;
        .title{
          text-align: center;
          p:nth-child(1){
            font-family: play;
            font-size: 40px;
            text-transform: capitalize;
            padding-bottom: 20px;
          }
          p:nth-child(2){
            width:auto;
            display: inline-block;
            padding: 2px 5px;
            position: relative;
            cursor: pointer;
          }
          p:nth-child(2)::before{
            position: absolute;
            content:'';
            display: inline-block;
            left:0;
            bottom:0;
            height:1px;
            width:0;
            background-color: black;
            transition: all 1s;
          }
          p:nth-child(2):hover::before{
            width:100%;
          }
        }
      }
      .swiper{
        width:100%;
        margin: 30px auto;
        border-bottom: 1px solid #D9D9D9;
        animation-name: polygon;
        animation-duration: 2s;
        .item{
          position: relative;
          cursor: pointer;
          .a1{
            width:100%;
            overflow: hidden;
            img{
              width:100%;
              object-fit: cover;
              display: block;
              transition: all 1s;
            }
          }
          .a2{
            width:80%;
            margin-left: 10%;
            padding: 20px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            p{
              color:white;
              transition: all 1s;
              background-color: #9b9b9b;
              padding: 3px 5px;
              border-radius: 5px;
              font-size: 14px;
              line-height: 25px;
            }
          }
        }
        .item::before{
          position: absolute;
          left:0;
          top:0;
          width:0;
          content:'';
          display: inline-block;
          height:1px;
          background-color: black;
          transition: all 1s;
          z-index: 100;
        }
        .item::after{
          position: absolute;
          left:0;
          bottom:0;
          width:0;
          content:'';
          display: inline-block;
          height:1px;
          background-color: black;
          transition: all 1s;
          z-index: 100;
        }
        .item:hover::before{
          width:100%;
        }
        .item:hover::after{
          width:100%;
        }
        .item:hover{
          .a1{
            img{
              transform: scale(1.05);
            }
          }
          .a2{
            p{
              background-color: black;
            }
          }
        }
      }
      .swiper2{
        display: none;
      }
    }
    .pp{
      width:72%;
      margin-left: 28%;
      padding: 60px 0;
      padding-bottom: 0;
      .title{
        display: flex;
        flex-direction: row;
        animation-name: transition2;
        animation-duration: 1s;
        animation-fill-mode:forwards;
        p:nth-child(1){
          font-family: play;
          font-size: 30px;
        }
        p:nth-child(2){
          margin-left: 30px;
          padding-top: 50px;
          display: inline-block;
          color:#3B3B3B;
          font-size: 20px;
          font-family: "Fira Code Medium";
          font-weight: bolder;
        }
      }
      .content{
       font-family: "Fira Code Medium";
        font-weight: lighter;
        line-height: 40px;
        margin: 30px 0;
        font-size: 14px;
        animation-name: transition2;
        animation-duration: 1s;
        animation-fill-mode:forwards;
      }
      a{
        font-family: it;
        font-weight: bolder;
        text-transform: capitalize;
        cursor: pointer;
        animation-name: transition2;
        animation-duration: 1s;
        animation-fill-mode:forwards;
        font-size: 12px;
        background: transparent;
        text-decoration: none;
        padding: 10px 70px;
        border: 1px solid black;
        -webkit-tap-highlight-color: transparent;
        display: inline-block;
        vertical-align: middle;
        transform: translateZ(0);
        box-shadow: 0 0 1px transparent;
        backface-visibility: hidden;
        position: relative;
        transition-property: color;
        transition-duration: .5s;
      }
      a::before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height:100%;
        width:100%;
        right: 0;
        bottom: 0;
        background: black;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: .5s;
        transition-duration: .5s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }
      a:hover{
        color:white;
      }
      a:hover::before{
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transition-timing-function: cubic-bezier(.52,1.64,.37,.66);
        transition-timing-function: cubic-bezier(.52,1.64,.37,.66);
      }
      .twoImg{
        width:100%;
        display: flex;
        flex-direction: row;
        margin: 30px auto;
        margin-bottom: 0;
        div{
          width:50%;
          cursor: pointer;
          overflow: hidden;
          img{
            display: block;
            object-fit: cover;
            transition: all 1s;
            animation-name: polygon;
            animation-duration: 2s;
          }
        }
        div:hover{
          img{
            transform: scale(1.05);
          }
        }
      }
    }
    .intro{
      width:100%;
      position: relative;
      height:1000px;
      .m1{
        width:100%;
        display: flex;
        flex-direction: row;
        position: absolute;
        left:0;
        top:100px;
        .left{
           width:65%;
          cursor: pointer;
          overflow: hidden;
          img{
            width:100%;
            object-fit: cover;
            transition: all 1s;
            animation-name: polygon;
            animation-duration: 2s;
          }
          img:hover{
            transform: scale(1.05);
          }
        }
        .right{
          width:30%;
          margin-left: 3%;
          padding-top: 100px;
          animation-name: transition2;
          animation-duration: 1s;
          animation-fill-mode:forwards;
          .title{
            display: flex;
            flex-direction: row;
            p:nth-child(1){
              font-family: play;
              font-size: 30px;
            }
            p:nth-child(2){
              margin-left: 30px;
              padding-top: 50px;
              display: inline-block;
              color:#3B3B3B;
              font-size: 20px;
              font-family: "Fira Code Medium";
              font-weight: bolder;
            }
          }
          .content{
          font-family: "Fira Code Medium";
            font-weight: lighter;
            line-height: 40px;
            margin: 30px 0;
            font-size: 14px;
          }
          a{
            font-family: it;
            font-weight: bolder;
            text-transform: capitalize;
            cursor: pointer;
            font-size: 12px;
            background: transparent;
            text-decoration: none;
            padding: 10px 70px;
            border: 1px solid black;
            -webkit-tap-highlight-color: transparent;
            display: inline-block;
            vertical-align: middle;
            transform: translateZ(0);
            box-shadow: 0 0 1px transparent;
            backface-visibility: hidden;
            position: relative;
            transition-property: color;
            transition-duration: .5s;
          }
          a::before{
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            height:100%;
            width:100%;
            right: 0;
            bottom: 0;
            background: black;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 0 50%;
            transform-origin: 0 50%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: .5s;
            transition-duration: .5s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
          }
          a:hover{
            color:white;
          }
          a:hover::before{
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transition-timing-function: cubic-bezier(.52,1.64,.37,.66);
            transition-timing-function: cubic-bezier(.52,1.64,.37,.66);
          }
        }
      }
      .kb{
        background-color: white;
        width:72%;
        height:600px;
        position: absolute;
        top:0;
        right:0;
      }
    }
    .pro2{
      width:100%;
      animation-name: polygon;
      animation-duration: 2s;
      .swiper{
        width:100%;
        margin: 30px auto;
        border-bottom: 1px solid #D9D9D9;
        .item{
          position: relative;
          cursor: pointer;
          .a1{
            width:100%;
            overflow: hidden;
            img{
              width:100%;
              object-fit: cover;
              display: block;
              transition: all 1s;
            }
          }
          .a2{
            width:80%;
            margin-left: 10%;
            padding: 20px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            p{
              color:white;
              transition: all 1s;
              background-color: #9b9b9b;
              padding: 5px 5px;
              border-radius: 5px;
              font-size: 14px;
             margin: 0 auto;
            }
          }
        }
        .item::before{
          position: absolute;
          left:0;
          top:0;
          width:0;
          content:'';
          display: inline-block;
          height:1px;
          background-color: black;
          transition: all 1s;
          z-index: 100;
        }
        .item::after{
          position: absolute;
          left:0;
          bottom:0;
          width:0;
          content:'';
          display: inline-block;
          height:1px;
          background-color: black;
          transition: all 1s;
          z-index: 100;
        }
        .item:hover::before{
          width:100%;
        }
        .item:hover::after{
          width:100%;
        }
        .item:hover{
          .a1{
            img{
              transform: scale(1.05);
            }
          }
          .a2{
            p{
            background-color: black;
            }
          }
        }
      }
      .swiper2{
        display: none;
      }
    }
    .ds{
      width:100%;
      cursor: pointer;
      position: relative;
      padding-top: 10px;
      padding-bottom: 30px;
      img{
        width:100%;
        object-fit: cover;
        height:100%;
        display: block;
        animation-name: polygon;
        animation-duration: 2s;
      }
      .content{
        position: absolute;
        right:0;
        bottom:30px;
        width:60%;
        background-color: #F3F4F6;
        display: flex;
        flex-direction: row;
        padding: 40px 0;
        animation-name: transition2;
        animation-duration: 1s;
        animation-fill-mode:forwards;
        .left{
          width:65%;
          p{
            margin-left: 5%;
          }
          p:nth-child(1){
            font-family: play;
            font-size: 30px;
          }
          p:nth-child(2){
            font-family: "Fira Code Medium";
            font-weight: lighter;
            line-height: 30px;
            padding: 15px 0;
            font-size: 14px;
          }
        }
        .right{
          margin-left: 5%;
          padding-top: 60px;
          span{
            display: inline-block;
            animation: xz 2s linear infinite;
            i{
              font-size: 60px;
              color:#7C7C7C;
              animation: color2 2s linear infinite;
            }
            @keyframes color2 {
              0% {
                color:rgba(124,124,124,.5);
              }
              25% {
                color:rgba(124,124,124,1);
              }
              50% {
                color:black;
              }
              75% {
                color:rgba(124,124,124,1);
              }
              100% {
                color:rgba(124,124,124,.5);
              }
            }
          }
          @keyframes xz {
            from{
              transform: rotate(0);
            }
            to{
              transform: rotate(360deg);
            }
          }
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
      transform: translate(-100px,-100px);
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
  @media screen  and (min-width: 2200px){
    .main{
      .intro{
        .m1{
          .left{
            img{
              height:800px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1440px) and (min-width: 1000px){
  .main{
    .brand{
      width:95%;
    }
    .intro{
      height:700px;
    }
  }
  }
  @media screen and (max-width: 1000px){
    .main{
      .brand{
        width:95%;
        .content{
          flex-direction: column-reverse;
          .left,.right{
            width:100%;
            margin-left: 0;
          }
          .left{
            p{
              margin: 30px auto;
            }
          }
          .right{
            padding-top: 60px;
          }
        }
      }
      .pro{
        .swiper{
          display: none;
        }
        .swiper2{
          display: block;
        }
      }
      .pp{
        width:90%;
        margin-left: 5%;
        .twoImg{
          flex-direction: column;
          div{
            width:100%;
            margin-top: 10px;
            img{
              height:200px;
              width:100%;
            }
          }
        }
      }
      .intro{
        height:750px;
        .kb{
          width:90%;
          right:5%;
          background-color: transparent;
        }
        .m1{
          flex-direction: column-reverse;
          width:90%;
          margin-left: 5%;
          .left,.right{
            width:100%;
            margin-left: 0;
          }
          .right{
            padding-top: 0;
          }
          .left{
            margin-top: 30px;
          }
        }
      }
      .pro2{
        .swiper{
          display: none;
        }
        .swiper2{
          display: block;
        }
      }
      .ds{
        display: flex;
        flex-direction: column-reverse;
        .content{
          position: static;
          width:100%;
        }
      }
    }
  }
}
</style>
