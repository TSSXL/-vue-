<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/zm/job/jbanner.png" alt="">
        </div>
        <div class="main">
            <div class="nav">
                <div class="left wow">
                    <p>职业发展</p>
                    <p>Jobs</p>
                    <div class="line">

                    </div>
                </div>
                <div class="right wow">
                    <span><i class="iconfont icon-home"></i></span>
                    <a href="./index.html">首页-</a>
                    <a href="./job.html">职业发展</a>
                </div>
            </div>
            <div class="tnav wow fadeInUp">
                <span v-for="(item,index) in list" :key="index" :class="{'active':select===index}" @click="change(index)">{{item}}</span>
            </div>
            <transition name="fade">
                <div class="yg" v-if="select===0">
                    <p class="title wow fadeInUp">员工天地</p>
                    <p class="nr wow fadeInUp">
                        镇明转轴发展与其企业文化紧密相连，在镇明你可感受到优秀的团队、拼搏的精神、良好的职业培训与晋升，先进的管理理念等。<br>
                        镇明始终坚持“以人为本”，注重企业文化建设，定期举办员工运动会、文艺晚会、旅游活动、客户联谊活动等。
                    </p>
                    <div class="allImgs">
                        <el-carousel :interval="4000" type="card" height="700px" indicator-position="none">
                            <el-carousel-item v-for="(item,index) in yList" :key="index">
                                <img :src="item.img" alt="">
                                <p>{{item.title}}</p>
                            </el-carousel-item>
                        </el-carousel>
                    </div>

                </div>
            </transition>
            <transition name="fade">
                <div class="xz" v-if="select===1">
                    <p class="title">薪资福利</p>
                    <div class="content">
                         <p>内容待定</p>
                    </div>
                </div>
            </transition>

        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import  footComponent from '../components/foot'
    import Scrollbar from 'smooth-scrollbar'
    import { getNewsUrl} from '../util/lang'
    export default {
        name: "contact",
        data(){
            return{
                yList:[
                    {img:require('../assets/zm/job/pic.png'),title:'镇明转轴60周年活动'},
                    {img:require('../assets/zm/job/pic.png'),title:'镇明转轴60周年活动'},
                    {img:require('../assets/zm/job/pic.png'),title:'镇明转轴60周年活动'},
                    {img:require('../assets/zm/job/pic.png'),title:'镇明转轴60周年活动'}
                ],
                select:0,
                list:[
                    "员工天地",
                    "薪资福利"
                ]
            }
        },
        components:{footComponent},
        mounted() {
            Scrollbar.initAll(document.getElementById("scroller-wrapper"));
            let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
            scrollbar.scrollTo(0,1)
        },
        methods:{
            change(n){
                this.select=n
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
        img{
            display: block;
            width:100%;
            object-fit: cover;
        }
    }
    .main{
        width:100%;
        margin: 30px auto;
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
                margin-top: -150px;
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
                }
                .line{
                    width:1px;
                    height:120px;
                    margin-left: 30px;
                    background-color: white;
                    margin-top: 30px;
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
                padding: 0 30px;
                position: relative;
                font-size: 18px;
                font-family: "Fira Code Light";
                font-weight: lighter;
                cursor: pointer;
                transition: all 1s;
                color:#B8B8B8;
            }
            span:hover{
                color:black;
            }
            .active{
                color:black;
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
        .yg{
            width:1440px;
            margin: 60px auto;
            .title{
                color:#313131;
                font-size: 35px;
                text-align: center;
                font-family: "Fira Code Medium";
                font-weight: bold;
                position: relative;
                padding: 15px 0;
                animation-duration: 2s;
            }
            .title::after{
                position: absolute;
                left:49%;
                bottom:0;
                content:'';
                display: inline-block;
                height:3px;
                width:30px;
                background-color: #F37041;
            }
            .nr{
                width:100%;
                text-align: center;
                font-size: 14px;
                line-height: 35px;
                font-family: "Fira Code Light";
                font-weight: lighter;
                margin: 30px auto;
                animation-duration: 2s;
            }
         .allImgs{
             width:100%;
             img{
                 object-fit: contain;
                 width:100%;
             }
             p{
                 position: absolute;
                 bottom:100px;
                 color:white;
                 left:0;
                 width:100%;
                 text-align: center;
             }
         }
        }
        .xz{
            @extend .yg;
            .content{
                width:100%;
                text-align: center;
                margin: 30px auto;
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
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .main{
            .nav,.yg{
                width:90%;
            }
        }
    }
    @media screen and (max-width: 1000px){
        .banner{
            .text{
                top:10%;
                .t1{
                    padding-bottom: 20px;
                }
                .three{
                    width:90%;
                  flex-direction: column;
                    margin: 0 auto;
                    .item{
                        width:100%;
                        margin-left: 0;
                        margin-top: 20px;
                        p:nth-child(1){
                            font-size: 40px;
                        }
                        .l1{
                            right:28%;
                        }
                    }
                }
            }
        }
        .main{
            .one{
                .bigImg{
                    height:1350px;
                }
                .content{
                    .c1{
                        width:90%;
                        .all{
                            flex-wrap: wrap;
                        }
                        .all2{
                            width:100%;
                            height:450px;
                            background: none;
                            background-color: white;
                        }
                    }
                }
            }
            .two{
                width:90%;
                padding: 30px 0;
                .tc{
                    flex-direction: column;
                 margin: 30px auto;
                    .left,.right{
                        width:100%;
                        margin-left: 0;
                    }
                }
            }
            .three{
                padding-bottom:60px;
                .info{
                    width:90%;
                    flex-direction: column;
                    align-items: center;
                    .item{
                        width:100%;
                        margin-left: 0;
                    }
                }
                .img{
                    img{
                        height:200px;
                    }
                }
            }
        }
    }
}
</style>
<style scoped>
    .successNav .swiper-slide.swiper-slide-active img {
        transform: scaleX(1.6);
        border-radius: 5px;
    }
    .successNav .swiper-slide.swiper-slide-duplicate-prev img,
    .successNav .swiper-slide.swiper-slide-next img,
    .successNav .swiper-container-3d .swiper-slide-shadow-right,
    .successNav .swiper-container-3d .swiper-slide-shadow-left,
    .successNav .swiper-slide.swiper-slide-prev img,
    .successNav .swiper-slide.swiper-slide-prev{
        border-radius: 5px !important;
    }
</style>
