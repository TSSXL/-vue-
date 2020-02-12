<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/yap/pro/pbanner.png" alt="">
            <div class="text">
                <p class="animated fadeInUp" style="animation-delay: 0.2s">产品中心</p>
                <p class="animated fadeIn">Product Center</p>
                <div class="scroll">

                </div>
            </div>
        </div>
        <div class="main">
         <div class="nav">
             <div class="allItems">
                 <div class="item wow fadeInUp" v-for="(item,index) in list" :key="index" :style="aStyle(index)" :class="{'active':select===index}">
                     {{item}}
                 </div>
             </div>
         </div>
            <div class="content">
             <div class="link wow fadeIn">
                 <span>您的位置：</span>
                 <a href="./pro.html">
                  产品中心  >
                 </a>
                 <span>&nbsp;全部系列</span>
             </div>
                <div class="allItems">
                    <div class="item wow fadeInUp" v-for="(item,index) in pList" :key="index">
                        <div class="one">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="two">
                          <p>{{item.price}}</p>
                            <p>{{item.title}}</p>
                            <p>{{item.size}}</p>
                        </div>
                    </div>
                </div>
                <div class="btn wow fadeInUp">
            <span>
                  MORE
            </span>
                </div>
            </div>
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import footComponent from '../components/foot'
    export default {
        name: "about",
        data(){
            return{
                select:0,
                list:[
                    "全部系列",
                    "汽车继电器",
                    "PCB继电器",
                    "新能源继电器",
                    "大功率继电器",
                    "汽车电器控制盒",
                    "汽车高压配电盒"
                ],
                pList:[
                    {
                        img:require('../assets/yap/pro/p.png'),
                        title:'汽车电子继电器',
                        price:'￥199',
                        size:'型号：PLTD'
                    },
                    {
                        img:require('../assets/yap/pro/p.png'),
                        title:'汽车电子继电器',
                        price:'￥199',
                        size:'型号：PLTD'
                    },
                    {
                        img:require('../assets/yap/pro/p.png'),
                        title:'汽车电子继电器',
                        price:'￥199',
                        size:'型号：PLTD'
                    },
                    {
                        img:require('../assets/yap/pro/p.png'),
                        title:'汽车电子继电器',
                        price:'￥199',
                        size:'型号：PLTD'
                    },
                    {
                        img:require('../assets/yap/pro/p.png'),
                        title:'汽车电子继电器',
                        price:'￥199',
                        size:'型号：PLTD'
                    },
                    {
                        img:require('../assets/yap/pro/p.png'),
                        title:'汽车电子继电器',
                        price:'￥199',
                        size:'型号：PLTD'
                    }
                ]
            }
        },
        components:{footComponent},
        methods:{
            aStyle(n){
                return {animationDelay:0.1*n+'s'}
            },
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
        background-color: #F8F8F8;
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
            position: relative;
            img{
                display: block;
                width:100%;
                object-fit: cover;
            }
            .text{
              position: absolute;
                width:30%;
                display: flex;
                flex-direction: column;
                align-items: center;
                left:6%;
                bottom:0;
                p{
                    animation-duration: 2s;
                }
                p:nth-child(1){
                    color:white;
                    font-size: 30px;
                    font-weight: bolder;
                }
                p:nth-child(2){
                    font-size: 60px;
                    text-transform: uppercase;
                    color:rgba(255,255,255,.08);
                    margin-top: -30px;
         font-family: os;
                    font-style: normal;
                    font-weight: bolder;
                }
                .scroll{
                    width:1px;
                    height:142px;
                    background:rgba(255,255,255,0.15);
                    position: relative;
                    &::after{
                        content:'';
                        display: inline-block;
                        width:1px;
                        height:23px;
                        background:rgba(255,255,255,1);
                        position: absolute;
                        animation: down 2s infinite linear;
                        left:0;
                        top:0;
                    }
                    @keyframes down {
                       from{
                           top:0;
                       }
                        to{
                            top:100%;
                        }
                    }
                }
            }
        }
        .main{
            width:1440px;
            margin: 30px auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
            .nav{
               width:223px;;
                .allItems{
                    width:100%;
                    display: flex;
                    flex-direction: column;
                    background:rgba(255,255,255,1);
                    border:1px solid rgba(225, 225, 225, 1);
                    box-shadow:0px 2px 10px 0px rgba(204,204,204,0.52);
                    .item{
                        color:#666666;
                        font-family: "Fira Code Light";
                        font-weight: lighter;
                        border-bottom: 1px solid #E1E1E1;
                        text-align: center;
                        padding: 10px 0;
                        cursor: pointer;
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
            .content{
                width:75%;
                margin-left: 5%;
                .link{
                    width:100%;
                    border-bottom: 2px solid #E1E1E1;
                    display: flex;
                    flex-direction: row;
                    margin: 20px auto;
                    padding-bottom: 15px;
                    margin-bottom: 0;
                    span,a{
                        color:#666666;
                        font-size: 13px;
                    }
                    a{
                        transition: all 1s;
                        &:hover{
                            color:#227CCB;
                        }
                    }
                }
                .allItems{
                    width:100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    .item{
                        width:30%;
                        margin-left: 2.5%;
                        background-color: #FFFFFF;
                        cursor: pointer;
                        margin-top: 40px;
                        transition: all 1s;
                        animation-duration: 2s;
                        .one{
                            width:100%;
                            text-align: center;
                            padding: 20px 0;
                            overflow: hidden;
                            img{
                                transition: all 1s;
                            }
                        }
                        .two{
                           width:100%;
                            text-align: center;
                            padding-bottom: 20px;
                            p:nth-child(1){
                                color:#555555;
                                font-family: "Fira Code Light";
                                font-weight: lighter;
                                padding: 5px 0;
                                position: relative;
                                transition: all 1s;
                                &::after{
                                   content:'';
                                    display: inline-block;
                                    position: absolute;
                                    left:45%;
                                    height:1px;
                                    background-color: rgba(0,0,0,.1);
                                    bottom:0;
                                    transition: all 1s;
                                    width:10%;
                                }
                            }
                            p:nth-child(2){
                                color:#999999;
                                font-size: 14px;
                                font-family: "Fira Code Light";
                                font-weight: lighter;
                                margin-top: 10px ;
                                margin-bottom: 5px;
                            }
                            p:nth-child(3){
                                color:#999999;
                                font-size: 12px;
                                font-family: "Fira Code Light";
                                font-weight: lighter;
                            }
                        }
                        &:hover{
                            box-shadow:0px 10px 20px 0px rgba(0, 0, 0, 0.15);
                            .one{
                                img{
                                    transform: scale(1.05);
                                }
                            }
                            .two{
                                p:nth-child(1){
                                    color:#227CCB;
                                    &::after{
                                        width:100%;
                                        left:0;
                                    }
                                }
                            }
                        }
                    }
                }
                .btn{
                    width:352px;
                    height:50px;
                    border-radius:28px;
                    position: relative;
                    cursor: pointer;
                    overflow: hidden;
                    border: 1px solid #CDCDCD;
                    margin: 60px auto;
                    animation-duration: 2s;
                    span{
                        position: absolute;
                        left:0;
                        top:0;
                        display: inline-block;
                        width:100%;
                        height:100%;
                        text-align: center;
                        transition: all 1s;
                        line-height: 50px;
                        color:#666666;
                        font-family: "Fira Code Light";
                        font-weight: lighter;
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
        .foot{
            animation-name: polygon;
            animation-duration: 1s;
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
                clip-path: polygon(50% 0, 99% 50%, 50% 99%, 0 50%);
            }
            100% {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
        }
        @media screen and (max-width: 1440px) and (min-width: 1000px){
            .banner{
                img{
                    height:500px;
                }
                .text{
                    width:38%;
                }
            }
            .main{
                width:90%;
            }
        }
        @media screen and (max-width: 1000px){
            .banner{
                img{
                    height:500px;
                }
            }
        }
    }
</style>
