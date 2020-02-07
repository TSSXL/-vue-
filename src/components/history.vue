<template>
    <div class="con">
       <div class="allImgs">
           <div class="text">
               <p>成长·铸就高度</p>
               <p>GROW CREATES FUTURE</p>
           </div>
           <swiper class="swiper1" :options="swiperOption" ref="mySwiper"  v-if="list.length>0">
               <swiper-slide class="item" v-for="(item,index) in list" :key="index" >
                   <div class="oItem">
                       <img :src="item.img" alt="">
                       <p>{{item.con}}</p>
                   </div>
               </swiper-slide>
           </swiper>
           <swiper class="swiper2" :options="swiperOption2" ref="mySwiper2"  v-if="list.length>0">
               <swiper-slide class="item" v-for="(item,index) in list" :key="index" >
                   <div>
                       {{item.year}}
                   </div>
               </swiper-slide>
           </swiper>
           <div class="prev">
                 <span>
                         <i class="iconfont icon-youjiantou"></i>
               </span>
               <span>prev</span>
           </div>
           <div class="next ">
               <span>next</span>
               <span>
                         <i class="iconfont icon-youjiantou"></i>
               </span>
           </div>
       </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";
    export default {
        name: "history",
        data(){
            return{
                swiperOption2:{
                    slidesPerView: 5,
                    loop:false,
                    speed:1000,
                    centeredSlides : true,
                    slideToClickedSlide: true,
                    navigation: {
                        nextEl: '.allImgs .next',
                        prevEl: '.allImgs .prev'
                    }
                },
                swiperOption:{
                    slidesPerView: 1,
                    loop:false,
                    centeredSlides : true,
                    slideToClickedSlide: true
                },
            list:[
                {
                    img:require('../assets/zm/hist.png'),
                    con:'年销售额超过一千万人民币',
                    year:'1998',
                },
                {
                    img:require('../assets/zm/hist.png'),
                    con:'年销售额超过一千万人民币',
                    year:'1997',
                },
                {
                    img:require('../assets/zm/hist.png'),
                    con:'年销售额超过一千万人民币',
                    year:'1996',
                },
                {
                    img:require('../assets/zm/hist.png'),
                    con:'年销售额超过一千万人民币',
                    year:'1995',
                },
                {
                    img:require('../assets/zm/hist.png'),
                    con:'年销售额超过一千万人民币',
                    year:'1994',
                }
            ]
            }
        },
        components:{
            swiper, swiperSlide
        },
        mounted() {
            this.$nextTick(()=>{
                const swiperTop = this.$refs.mySwiper.swiper
                const swiperThumbs = this.$refs.mySwiper2.swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
        },
    }
</script>

<style lang="scss" scoped>
.con{
    width:100%;
    .allImgs{
        width:100%;
        position: relative;
        height:600px;
        .text{
            position: absolute;
            left:0;
            top:30px;
            width:100%;
            p{
                font-style: italic;
                font-size: 20px;
                color:#F37041;
                font-family: "Fira Code Medium";
                text-align: center;
                letter-spacing: 0.5px;
            }
            p:nth-child(2){
                margin: 10px auto;
            }
        }
        .swiper2{
            width:100%;
            position: absolute;
            left:0;
            bottom:20%;
            .item{
                position: relative;
                height:150px;
                div{
                  color:#8D8D8D;
                    font-size: 60px;
                    font-style: italic;
                    position: relative;
                    &::after{
                        content:'';
                        display: inline-block;
                        width:27px;
                        height:27px;
                        background:rgba(255,255,255,1);
                        border:1px solid rgba(220,220,220,1);
                        box-shadow:0px 0px 42px 1px rgba(0, 0, 0, 0.17);
                        border-radius:50%;
                        position: absolute;
                        z-index: 1000;
                    }
                    &::before{
                        content:'';
                        display: inline-block;
                        width:15px;
                        height:15px;
                        position: absolute;
                        z-index: 10000;
                        background:#c5c5c5;
                        box-shadow:0px 0px 42px 1px rgba(0, 0, 0, 0.17);
                        border-radius:50%;
                    }
                }
                &::after{
                    content:'';
                    display: inline-block;
                    height:1px;
                    width:100%;
                    background-color: red;
                    position: absolute;
                    left:0;
                    top:40%;
                }
                &:nth-of-type(odd){
                    div{
                        margin-top: 70px;
                        &::after{
                            left:14%;
                            top:-34%;
                        }
                        &::before{
                            left: 16%;
                            top: -24%;
                        }
                    }
                }
                &:nth-of-type(even){
                    div{
                        margin-top: -10px;
                        &::after{
                            left:14%;
                            top:84%;
                        }
                        &::before{
                            left: 16%;
                            top: 92%;
                        }
                    }
                }
            }
            .swiper-slide-active{
             div::after,div::before{
                 background-color: #F37041;
             }
            }
        }
        .swiper1{
            width:30%;
            position: absolute;
            left:28%;
            bottom:0;
            z-index: 100;
            .item{
                .oItem{
                    padding: 15px 15px;
                    background-color: white;
                    overflow: hidden;
                    padding-bottom: 50px;
                    box-shadow:0px 0px 42px 1px rgba(0, 0, 0, 0.17);
                    img{
                        width:100%;
                        display: block;
                        transition: all 1s;
                    }
                    &:hover{
                        img{
                            transform: scale(1.05);
                        }
                    }
                    p{
                        margin: 30px auto;
                        color:#F37041;
                        font-size: 20px;
                        font-style: italic;
                    }
                }
            }
        }
        .prev{
            position: absolute;
            width:223px;
            height:35px;
            background:rgba(197,197,197,1);
            z-index: 100;
            bottom:0;
            right:29.4%;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            span{
                color:white;
                font-family: "Fira Code Light";
                font-weight: lighter;
                font-style: italic;
                text-transform: uppercase;
            }
            span:nth-child(2){
                margin-left: 20px;
                transition: all 1s;
            }
            i{
                font-size: 30px;
                transition: all 1s;
                color:white;
            }
            &:hover{
                i{
                    color:#F37041;
                }
                span:nth-child(2){
                   margin-left: 50px;
                }
            }
            &:focus{
                outline: none;
            }
        }
        .next{
            @extend .prev;
            right:16%;
            background-color: #C9151E;
            span:nth-child(2){
                display: inline-block;
                transform: rotate(180deg);
            }
            &:hover{
                i{
                    color:#F37041;
                }
            }
        }
    }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .allImgs{
            .swiper2{
                .item{

                }
            }
            .swiper1{
                left:20%;
            }
        }
    }
}
</style>