<template>
    <div class="banner">
        <swiper :options="swiperOptiona" ref="mySwipers" class="swiper" >
            <swiper-slide class="item" v-for="(item,index) in bList" :key="index">
                <img :src="`http://yap.sansg.com/upload/${item.PICURL}`" alt="">
                <div class="text">
                    <p class="cn">
                       {{item.TEXT0}}
                    </p>
                    <p class="cn cn2">
                        {{item.TEXT1}}
                    </p>
                    <div>
                        {{item.TEXT2}}
                    </div>

                </div>
            </swiper-slide>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";
    import { getPicUrl} from '../util/lang'
    // import '../common/jquery-1.11.3.min'
    export default {
        name: "banner",
        data(){
            return{
                bList:[],
                swiperOptiona:{
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        hide: true
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true
                    },
                    speed:5000,
                    loop: true,
                    effect : 'fade',
                    fadeEffect: {
                        crossFade: true,
                    },
                    init: false,
                    autoplay:{
                        disableOnInteraction: false,
                        delay: 5000
                    }
                },
            }
        },
        components: {
            swiper,
            swiperSlide,
        },
        mounted(){
            setTimeout(()=>{
                this.getList()
            },100)
        },
        methods:{
            getList(){
                const url = `${getPicUrl( 'zh-CN','首页banner',8)}`
                this.$axios.get(url).then(res => {
                    this.bList=res.data
                    // console.log(this.bList)
                    setTimeout(()=>{
                        this.$refs.mySwipers.swiper.init()
                    },100)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .banner{
        width:100%;
        height:100vh;
        position: relative;
        .swiper{
            height:100%;
            .item{
                position: relative;
                overflow: hidden;
                img{
                    width:100%;
                    height:100%;
                    object-fit: cover;
                    display: block;
                    z-index: 1;
                    cursor: pointer;
                }
                .text{
                    z-index: 10;
                    position: absolute;
                    left: 5%;
                    top:30%;
                    .cn{
                        color:#0A4F8C;
                        font-size: 91px;
                        transform: translateX(-1000px);
                        transition: all 1s;
                        transition-delay: 1s;
                        font-family: zhenyan;
                    }
                    .cn2{
                        margin-left: 190px;
                        transition-delay: 2s;
                    }
                    div{
                        height:67px;
                        box-shadow:0px 6px 6px 0px rgba(132,74,63,0.3);
                        opacity:0.8;
                        background:linear-gradient(to right,rgba(12,95,122,1), rgba(24, 189, 243, 0.08));
                        color:#FCEEE0;
                        font-size: 28px;
                        line-height: 67px;
                        padding-left: 5px;
                        padding-right: 120px;
                        width:auto;
                        transform: translateX(-1000px);
                        transition-delay: 2s;
                        transition: all 1s;
                    }
                }
            }
            .swiper-slide-active{
              .text{
                  .cn,div{
                      transform: translateX(0);
                  }
          }
            }
        }
       .share{
           position: absolute;
           right:8%;
           top:55%;
           z-index: 100;
           cursor: pointer;
           i{
               color:white;
               font-size:40px;
               transition: all 1s;
           }
       }
        .share:hover{
            i{
               color:#747576;
            }
        }
        .circle{
            position: absolute;
            bottom:5%;
            right:10%;
            z-index: 100;
            height:40px;
            width:40px;
            border: 1px solid rgba(255,255,255,.5);
            border-radius: 50%;
            text-align: center;
            overflow: hidden;
            cursor: pointer;
            span{
                display: inline-block;
                padding-top: 5px;
                animation: scrollDown 2s infinite;
                background-position: 0 -56px;
                i{
                    color:white;
                    font-size: 25px;
                }
            }
            @keyframes scrollDown {
                0% {
                    -webkit-transform: translateY(-10%);
                    -moz-transform: translateY(-10%);
                    transform: translateY(-10%);
                    opacity: 1;
                }

                100% {
                    -webkit-transform: translateY(40%);
                    -moz-transform: translateY(40%);
                    transform: translateY(40%);
                    opacity: 0;
                }
            }
        }
        .circle::before{
            position: absolute;
            left:0;
            top:0;
            height:94%;
            width:94%;
            border: 1px solid white;
            animation: run 5s infinite linear;
            content:'';
            display: inline-block;
        }
        @keyframes run {
                 from{
                     transform: rotate(0);
                 }
                 to{
                     transform: rotate(360deg);
                 }
             }
        @media screen and (max-width: 1440px) and (min-width: 1000px){
            .swiper{
                .item{
                    .text{
                        left:5%;
                    }
                    .line{
                        bottom:25%;
                    }
                }
            }
            .share{
                top:70%;
                right:7.5%;
            }
        }
        @media screen and (max-width: 1000px){
            .swiper{
                .item{
                    .text{
                        width:90%;
                        left:5%;
                        p:nth-child(1){
                            font-size: 30px;
                            width:100%;
                        }
                        p:nth-child(2){
                            font-size: 20px;
                        }
                        p:nth-child(3){
                            width:100%;
                            font-size: 16px;
                        }
                    }
                }
            }
        }
    }
</style>
<style scoped>
    .swiper-pagination-bullet-active{
        background-color: #227CCB;
    }
</style>
