<template>
    <div class="banner">
        <swiper :options="swiperOptiona" ref="mySwipers" class="swiper" >
            <swiper-slide class="item" v-for="(item,index) in bList" :key="index">
<!--                <img :src="`http://yibin.sansg.com/upload/${item.PICURL}`" alt="">-->
                <img :src="item.img" alt="">
                <div class="text">
                    <p class="en">
                        Committed to building a<br>
                        World-class shaft manufacturer
                    </p>
                    <p class="cn">
                        人本 · 诚信 · 创新 · 发展
                    </p>

                </div>
                <div class="line">
                    <div></div>
                    <p>致力于打造世界一流的转轴制造商</p>
                </div>
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination">

        </div>
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
                bList:[
                    {
                        img:require('../assets/zm/home/banner.png')
                    },
                    {
                        img:require('../assets/zm/home/banner.png')
                    },
                    {
                        img:require('../assets/zm/home/banner.png')
                    }
                ],
                swiperOptiona:{
                    direction: 'vertical',
                    pagination: {
                        el: ".banner .swiper-pagination",
                        clickable: true,
                        renderBullet: function(index, className) {
                            return '<span class="' + className + '"><i></i></span>';
                        }
                    },
                    speed:1000,
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
            // setTimeout(()=>{
            //     this.getList()
            // },4000)
            setTimeout(()=>{
                this.$refs.mySwipers.swiper.init()
            },100)
        },
        methods:{
            getList(){
                const url = `${getPicUrl( 'zh-CN','首页banner',8)}`
                this.$axios.get(url).then(res => {
                    this.bList=res.data
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
                    transition: all 2s;
                    transform: scale(1.05);
                }
                .text{
                    z-index: 10;
                    position: absolute;
                    left: 10%;
                    top:30%;
                    width:80%;
                    p{
                        transition: all 1s;
                        transform: translateX(-500px);
                    }
                    .en{
                        font-size: 40px;
                        font-family: os;
                        color:white;
                        line-height: 70px;
                        text-transform: uppercase;
                        text-shadow:0px 1px 5px rgba(0, 0, 0, 0.42);
                    }
                    .cn{
                        font-size: 30px;
                        margin: 30px auto;
                       font-family: "Fira Code Light";
                        font-weight: lighter;
                        text-shadow:0px 1px 5px rgba(0, 0, 0, 0.42);
                        color:white;
                    }
                }
                .line{
                    z-index: 10;
                    position: absolute;
                    left: 0;
                    bottom:30%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    div{
                        height:1px;
                        background:rgba(255,255,255,.3);
                        width:450px;
                        transform: translateX(-450px);
                        transition: all 1s;
                        transition-delay: 0.5s;
                    }
                    p{
                        color:white;
                        font-size: 20px;
                        font-family: "Fira Code Medium";
                        margin-left: 10px;
                        transition: all 1s;
                        transform: translateX(-1000px);
                        text-shadow:0px 1px 5px rgba(0, 0, 0, 0.42);
                    }
                }
            }
            .swiper-slide-active{
                img{
                    transform: scale(1);
                }
                .text{
                    p{
                        transform: translateX(0);
                    }
                    .cn{
                        transition-delay: 0.2s;
                    }
                }
                .line{
                    div,p{
                        transform: translateX(0);
                        transition-delay: 0.4s;
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
    .banner .swiper-pagination {
         top:41%;
        right:5%;
        width: 10%;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet {
        position: relative;
        width: 17px;
        height:17px;
        border-radius: 50%;
        border: 1px solid #FFFFFF;
        background-color: transparent;
        margin-left: 30px;
        opacity: 1 !important;
        transition: all 1s;
        margin-top: 20px;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet::before{
        position: absolute;
        left:6px;
        top:6px;
        width:5px;
        height:5px;
        border-radius: 50%;
        background-color: white;
        content:'';
        display: inline-block;
        transition: all 1s;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet::after{
        position: absolute;
        left:4px;
        top:4px;
        width:0;
        height:0;
        border-radius: 50%;
        background-color: white;
        content:'';
        display: inline-block;
        transition: all 1s;
        opacity: 1;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet-active{
      border-color: transparent;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet-active::before{
        opacity: 0;
        top:-30px;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet-active::after{
        background-color: #747576;
        width:9px;
        height:9px;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet:focus{
        outline: none;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet i{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height:8px;
        border-radius: 20px;
        background-color: #fff;
    }
    @media screen and (max-width:1000px){
        .banner .swiper-pagination{
            width:40%;
            bottom:5%;
            flex-direction: row;
            top:auto;
            right:35%;
        }
    }
</style>
