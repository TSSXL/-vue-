<template>
    <div class="con">
        <div class="allImgs">
            <div class="left">
                <swiper class="swiper1" :options="swiperOption" ref="mySwiper"  v-if="list.length>0">
                    <swiper-slide class="item" v-for="(item,index) in list" :key="index" >
                        <div class="oItem">
                            <img :src="item.img" alt="">
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="sha">

                </div>
            </div>
            <swiper class="swiper2" :options="swiperOption2" ref="mySwiper2"  v-if="list.length>0">
                <swiper-slide class="item" v-for="(item,index) in list" :key="index" >
                 <div>
                     {{item.name}}
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
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";
    export default {
        name: "honor",
        data(){
            return{
                swiperOption:{
                    effect : 'coverflow',
                    slidesPerView: 2,
                    initialSlide: 1,
                    speed:1000,
                    centeredSlides: true,
                    slideToClickedSlide: true,
                    coverflowEffect: {
                        rotate: 60,
                        stretch: 10,
                        depth: 200,
                        modifier: 1,
                        slideShadows : false
                    },
                    navigation: {
                        nextEl: '.allImgs .next',
                        prevEl: '.allImgs .prev'
                    }
                },
                swiperOption2:{
                    slidesPerView: 4,
                    loop:false,
                    direction : 'vertical',
                    centeredSlides : true,
                    slideToClickedSlide: true
                },
                list:[
                    {img:require('../assets/zm/honor.png'),name:'宁波市企业工程'},
                    {img:require('../assets/zm/honor.png'),name:'高新企业'},
                    {img:require('../assets/zm/honor.png'),name:'荣誉资质一'},
                    {img:require('../assets/zm/honor.png'),name:'荣誉资质一'},
                    {img:require('../assets/zm/honor.png'),name:'荣誉资质一'},
                    {img:require('../assets/zm/honor.png'),name:'宁波市企业工程'},
                    {img:require('../assets/zm/honor.png'),name:'高新企业'},
                    {img:require('../assets/zm/honor.png'),name:'荣誉资质一'},
                    {img:require('../assets/zm/honor.png'),name:'荣誉资质一'},
                    {img:require('../assets/zm/honor.png'),name:'荣誉资质一'},
                    {img:require('../assets/zm/honor.png'),name:'宁波市企业工程'},
                    {img:require('../assets/zm/honor.png'),name:'高新企业'},
                    {img:require('../assets/zm/honor.png'),name:'荣誉资质一'},
                    {img:require('../assets/zm/honor.png'),name:'荣誉资质一'},
                    {img:require('../assets/zm/honor.png'),name:'荣誉资质一'}
                ]
            }
        },
        components:{ swiper, swiperSlide},
        mounted() {
            this.$nextTick(()=>{
                const swiperTop = this.$refs.mySwiper.swiper
                const swiperThumbs = this.$refs.mySwiper2.swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
.con{
    width:100%;
    .allImgs{
        width:1440px;
        margin: 60px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        .left{
            width:70%;
            position: relative;
            .swiper1{
                width:100%;
                .item{
                    transition-duration: 2s !important;
                    cursor: pointer;
                    .oItem{
                        img{
                            width:100%;
                            object-fit: cover;
                        }
                    }
                }

            }
            .sha{
                position: absolute;
                width: 100%;
                height: 100%;
                background: -moz-linear-gradient(left, rgba(228, 233, 237, 1) 0%, rgba(228, 233, 237, 0) 25%, rgba(228, 233, 237, 0) 75%, rgba(228, 233, 237, 1) 100%);
                background: -o-linear-gradient(left, rgba(228, 233, 237, 1) 0%, rgba(228, 233, 237, 0) 25%, rgba(228, 233, 237, 0) 75%, rgba(228, 233, 237, 1) 100%);
                background: -webkit-gradient(linear, right top, right bottom, color-stop(0,rgba(228, 233, 237, 1)),color-stop(0.25,rgba(228, 233, 237, 0)),color-stop(0.75,rgba(228, 233, 237, 0)), color-stop(1, rgba(228, 233, 237, 1)));
                background: -webkit-linear-gradient(left, rgba(228, 233, 237, 1) 0%, rgba(228, 233, 237, 0) 25%, rgba(228, 233, 237, 0) 75%, rgba(228, 233, 237, 1) 100%);
                z-index: 3;
                top: 0;
                left: 0;
                pointer-events: none;
            }
        }
        .swiper2{
            width:25%;
            height:300px;
            .item{
                cursor: pointer;
                div{
                    text-align: center;
                    border-radius: 30px;
                    padding: 10px 0;
                    height:30px;
                    font-family: "Fira Code Light";
                    font-weight: lighter;
                    transition: all 1s;
                    line-height: 30px;
                }
            }
            .swiper-slide-active{
                div{
                    background-color: #F37041;
                    color:white;
                }
            }
        }
        .prev{
            position: absolute;
            right:14%;
            top:-10%;
            z-index: 100;
            border-radius: 50%;
            transform: rotate(90deg);
            cursor: pointer;
            i{
                font-size: 30px;
                transition: all 1s;
            }
            &:hover{
                i{
                    color:#F37041;
                }
            }
            &:focus{
                outline: none;
            }
        }
        .next{
            @extend .prev;
            top:105%;
        }
    }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .allImgs{
            width:90%;
        }
    }
}
</style>