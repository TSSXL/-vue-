<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/zm/xs/xbanner.png" alt="">
        </div>
        <div class="main">
            <div class="nav">
                <div class="left">
                    <p>销售网络</p>
                    <p>Sales Network</p>
                    <div class="line">

                    </div>
                </div>
                <div class="right">
                    <span><i class="iconfont icon-home"></i></span>
                    <a href="./index.html">首页-</a>
                    <a href="./sale.html">销售网络</a>
                </div>
            </div>
            <div class="tnav">
                <span v-for="(item,index) in list" :key="index" :class="{'active':select===index}" @click="change(index)">{{item}}</span>
            </div>
            <div class="xsfb">
                <p class="title">销售分布</p>
                <div class="world-img">
                    <img src="../assets/zm/xs/world-img.png" alt="">
                    <div class="list">
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>
            </div>
            <div class="customer">
                <p class="title">客户展示</p>
            </div>
            <div class="hope">
                <p class="title">销售展望</p>
                <div class="content">
                 <p>暂无内容</p>
                </div>
            </div>
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import footComponent from '../components/foot'
    import {getProductsUrl} from '../util/lang'
    export default {
        name: "pro",
        data(){
            return{
                select:0,
                list:[
                    "销售分布",
                    "客户展示",
                    "销售展望"
                ]
            }
        },
        components:{footComponent},
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
        .xsfb{
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
            .world-img{
                width:100%;
                position: relative;
                margin: 60px auto;
                img{
                    width:100%;
                    object-fit: cover;
                }
                .list{
                    .point{
                        position: absolute;
                        width: 9.85%;
                        padding-top: 9.85%;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                        background-image: url(https://www.4d-bios.com/bocweb/web/css/../img/point-bg.png);
                        transform-origin: center;
                        transform: scale(.5);
                        animation: pointAni 2s infinite;
                        -webkit-animation: pointAni 2s infinite;
                    }
                    @keyframes pointAni {
                        50% {
                            transform: scale(.7);
                        }
                        100% {
                            transform: scale(.5);
                        }
                    }
                    .point:nth-child(1){
                        left: 24%;
                        top: 10.5%;
                    }
                    .point:nth-child(2){
                        left: 22%;
                        top: 22%;
                        width: 5.375%;
                        padding-top: 5.375%;
                    }
                    .point:nth-child(3){
                        left: 29%;
                        top: 54%;
                    }
                    .point:nth-child(4){
                        left: 53%;
                        top: 38%;
                    }
                    .point:nth-child(5){
                        left: 74%;
                        top: 17%;
                    }
                    .point:nth-child(6){
                        left: 78%;
                        top: 54%;
                        width: 8.375%;
                        padding-top: 8.375%;
                    }
                }
            }
        }
        .customer{
            @extend .xsfb;
        }
        .hope{
            @extend.xsfb;
            .content{
                width:100%;
                margin: 60px auto;
                p{
                    text-align: center;
                }
            }
        }
    }
    @keyframes run5 {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
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
    @media screen and (max-width: 1000px){
        .main{
            width:90%;
            margin-left: 5%;
            .allItems{
                flex-direction: column;
                .item{
                    width:100%;
                    margin-left: 0;
                }
            }
        }
    }
}
</style>
