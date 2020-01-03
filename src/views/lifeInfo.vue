<template>
    <div class="con">
      <div class="main">
          <div class="content">
              <div class="oval wow fadeInUp"></div>
              <p class="title wow fadeInUp">{{info.PRONAME}}</p>
              <div class="oImg wow fadeInUp">
                  <img  :src="`http://yibin.sansg.com/upload/${info.SMALLPIC}`" alt="">
              </div>
              <div class="lg wow fadeInUp" v-html="info.CONTENT[1]"></div>
              <div class="allImgs wow fadeInUp">
                  <swiper class="swiper" :options="swiperOption"  v-if="list.length>0">
                      <swiper-slide class="item" v-for="(item,index) in list" :key="index" >
                          <div class="a1">
                              <img :src="`http://yibin.sansg.com/upload/${item.PICURL}`" alt="">
                          </div>
                      </swiper-slide>
                      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
                      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
                  </swiper>
              </div>
              <div class="wow fadeInUp" style="animation-duration: 4s">
                  <div class="ktt ">
                      <div  class="tc">
                          <div  class="split-line"></div>
                          <img  src="../assets/livingRoom.6efd4981.svg"></div>
                      <div class="kt" v-html="info.CONTENT[2]"></div>
                  </div>
                  <div class="ktt">
                      <div  class="tc">
                          <div  class="split-line"></div>
                          <img  src="../assets/bedroom.0ddcb55f.svg"></div>
                      <div class="kt" v-html="info.CONTENT[3]"></div>
                  </div>
                  <div class="ktt">
                      <div  class="tc">
                          <div  class="split-line"></div>
                          <img  src="../assets/diningRoom.909a9df7.svg"></div>
                      <div class="kt" v-html="info.CONTENT[4]"></div>
                  </div>
                  <div class="ktt">
                      <div  class="tc">
                          <div  class="split-line" style="margin-bottom: 40px;"></div>
                          <img  src="../assets/cf.svg"></div>
                      <p style="text-align: center;font-size: 10px;margin: 20px 0;">书房</p>
                      <div class="kt" v-html="info.CONTENT[5]"></div>
                  </div>
              </div>
              <div class="recommend">
                  <div  class="tc">
                      <div  class="split-line"></div>
                      <p>查看相关产品</p>
                      <a ><img src="../assets/livingRoom.6efd4981.svg" /></a>
                      <a ><img  src="../assets/bedroom.0ddcb55f.svg" /></a>
                      <a><img  src="../assets/diningRoom.909a9df7.svg" /></a>
                  </div>
              </div>
          </div>
      </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import  footComponent from '../components/foot'
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";
    import Scrollbar from 'smooth-scrollbar'
    import {getProductsInfo} from '../util/lang'
    export default {
        name: "proInfo",
        data(){
            return{
                swiperOption:{
                    notNextTick: true,
                    slidesPerView: 2,
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
                info:{
                    CONTENT:[]
                },
                list:[],
                scrollbar:''
            }
        },
        components:{footComponent,swiper, swiperSlide },
        mounted(){
            Scrollbar.initAll(document.getElementById("scroller-wrapper"));
            this.scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
            this.scrollbar.scrollTo(0,1)
            this.$nextTick(() => {
                // this.getPro()
                this.getNid()
                // this.getNid2()
                this.fetchData()
                // this.text=decodeURI(this.getNid2())
            })
        },
        methods:{
            // getType(id,text){
            //     const  link=`/pro.html?id=${id}?text=${text}`
            //     window.open(link,'_self')
            // },
            // getPro(){
            //     this.$nextTick(()=>{
            //         const url = `${getProductstypeUrl2('zh-CN','42')}`
            //         this.$axios.get(url).then(res => {
            //             this.proList=res.data
            //         })
            //     })
            // },
            getNid () {
                return window.location.search.replace('?', '').split('=')[1]
            },
            // getNid2 () {
            //     return window.location.search.replace('?', '').split('=')[2]
            // },
            fetchData () {
                const nid = this.getNid()
                const url = `${getProductsInfo( 'zh-CN',nid)}`
                this.$axios.get(url).then(res => {
                    res.data.proarr.CONTENT=res.data.proarr.CONTENT.split("{nextpage}")
                    this.info=res.data.proarr
                    this.list=res.data.proimg
                    console.log(res.data)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.con{
    width:100%;
    position: relative;
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
        background-color: white;
        padding: 90px 0;
        .content{
            width:1440px;
            margin: 40px auto;
            .oval {
                border: 4px solid #c19a77;
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }
            .title{
                font-size: 24px;
                line-height: 35px;
                font-family: SourceHanSerifSC-bold, SimSun;
                font-weight: 700;
                margin: 5px 0;
            }
            .oImg{
                width:100%;
                overflow: hidden;
                cursor: pointer;
                img{
                    display: block;
                    width:100%;
                    transition: all 1s;
                }
                img:hover{
                    transform: scale(1.05);
                }
            }
            .lg{
                width:100%;
                animation-duration: 2s;
            }
            .allImgs{
                width:100%;
                margin: 30px auto;
                animation-duration: 2s;
                .swiper{
                    .item{
                        overflow: hidden;
                        cursor: pointer;
                        img{
                          transition: all 1s;
                            width:100%;
                        }
                        img:hover{
                            transform: scale(1.05);
                        }
                    }
                }
            }
            .ktt{
                width:100%;
                animation-duration: 2s;
                .tc{
                    width:100%;
                    text-align: center;
                    .split-line {
                        width: 630px;
                        margin: auto;
                        height: 20px;
                        background-image: url('../assets/line.png');
                        background-position: 50%;
                    }
                }
            }
            .recommend{
                width:100%;
                margin: 30px auto;
                .tc{
                    width:100%;
                    text-align: center;
                    .split-line {
                        width: 630px;
                        margin: auto;
                        height: 20px;
                        background-image: url('../assets/line.png');
                        background-position: 50%;
                    }
                    p{
                        font-size: 20px;
                        line-height: 35px;
                        font-family: "SourceHanSerifSC-bold",SimSun;
                        font-weight: 700;
                        margin: 20px auto;
                    }
                    a{
                        cursor: pointer;
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
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0,100%,0);
            transform: translate3d(0,100%,0);
        }

        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .main{
            .nav{
                .navC{
                    width:95%;
                }
            }
            .pName,.content,.action,.proInfo{
                width:95%;
            }
        }
    }
}
</style>
<style scoped>
    @media screen and (max-width:450px){
        .htmlCon >>>  table{
            width:100%;
            word-break: break-all;
        }
        .htmlCon >>>  div img{
            width:100%;
        }
        .htmlCon >>>  p img{
            width:100%;
            object-fit: contain;
        }
    }
</style>