<template>
    <div class="banner">
        <swiper :options="swiperOptiona" ref="mySwipers" class="swiper" >
            <swiper-slide class="item" v-for="(item,index) in bList" :key="index">
                <img :src="`http://yibin.sansg.com/upload/${item.PICURL}`" alt="">
                <div class="text">
                    <p>
                        <span v-for="(i,idx) in item.TEXT1" :key="idx" :style="aStyle(idx)" :class="{'small':i==='*'}">{{i}}</span>
                    </p>
                    <p >
                        <span v-for="(i,idx) in item.TEXT2" :key="idx" :style="aStyle(idx)" :class="{'small':i==='*'}">{{i}}</span>
                    </p>
                    <p>
                        <span v-for="(i,idx) in item.TEXT3" :key="idx" :style="aStyle(idx)" :class="{'small':i==='*'}">{{i}}</span>
                    </p>
                    <i class="iconfont icon-you"></i>
                </div>
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination">

        </div>
        <div class="share">
        <i class="iconfont icon-fenxiang"></i>
        </div>
        <div class="circle" @click="goDown">
            <span>
                     <i class="iconfont icon-right-copy"></i>
            </span>
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
                bList:[],
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
            setTimeout(()=>{
                this.getList()
            },4000)
            // this.$nextTick(()=>{
            //     this.getList()
            // })
        },
        methods:{
            aStyle(n){
                let a=1*0.05+1
                return {transitionDelay:a+'s'}
            },
            goDown(){
                this.$emit('goDown')
            },
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
                }
                .text{
                    z-index: 10;
                    position: absolute;
                    left: 10%;
                    bottom:20%;
                    width:80%;
                    color:white;
                    p:nth-child(1){
                        font-size: 76px;
                        font-weight: bold;
                        width:50%;
                        overflow: hidden;
                        height:auto;
                        font-family: play;
                        color:white;
                    }
                    p:nth-child(2){
                        line-height: 35px;
                        font-size: 70px;
                        font-weight: bold;
                        height:auto;
                        color:white;
                        font-family: play;
                        margin-top: 30px;
                    }
                    p:nth-child(3){
                        font-size: 18px;
                        width:50%;
                        margin-top: 30px;
                        font-family: light;
                        line-height: 30px;
                        color:white;
                        span{
                            margin-left: 5px;
                            letter-spacing: 0 !important;
                        }
                    }
                    span{
                        display: inline-block;
                        opacity: 0;
                        letter-spacing: 5px;
                        transform: translate(100px, 0px);
                        transition: 0.8s cubic-bezier(0.32, 0.6, 0.4, 1.21);
                    }
                    .small{
                        font-size: 40px;
                        opacity: 0;
                    }
                }
            }
            .swiper-slide-active{
                .text{
                    span{
                        opacity: 1;
                        transform: translate(0px, 0px);
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
        width:9px;
        height:9px;
        border-radius: 50%;
        background-color: white;
        content:'';
        display: inline-block;
        transition: all 1s;
        opacity: 0;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet-active{
      border-color: transparent;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet-active::before{
        opacity: 0;
    }
    .banner .swiper-pagination>>>.swiper-pagination-bullet-active::after{
        background-color: #747576;
        opacity: 1;
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
    @media screen and (max-width:450px){
        .banner .swiper-pagination{
            width:40%;
        }
    }
</style>