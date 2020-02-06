<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/zm/pro/pbanner.png" alt="">
        </div>
        <div class="main">
            <div class="nav">
                <div class="left">
                    <p>产品中心</p>
                    <p>Products</p>
                    <div class="line">

                    </div>
                </div>
                <div class="right">
                    <span><i class="iconfont icon-home"></i></span>
                    <a href="./index.html">首页-</a>
                    <a href="./pro.html">产品中心</a>
                </div>
            </div>
            <div class="tnav wow">
                <span v-for="(item,index) in list" :key="index" :class="{'active':select===index}" @click="change(index)">{{item}}</span>
            </div>
            <div class="allItems">
                <div class="item wow fadeInUp" v-for="(item,index) in pList" :key="index" :style="aStyle(index)">
                <div class="one">
                    <img :src="item.img" alt="">
                    <div class="add">
                        <i class="el-icon-plus"></i>
                    </div>
                </div>
                    <div class="two">
                        <p>{{item.name}}</p>
                        <p>{{item.con}}</p>
                        <div class="red">
                           <div></div>
                            <span>View details</span>
                        </div>
                    </div>
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
                    "电机轴",
                    "发电机",
                    "泵/阀"
                ],
                pList:[
                    {
                        img:require('../assets/zm/pro/p.png'),
                        name:'电机轴',
                        con:'主要用于汽车电机、传动系统'
                    },
                    {
                        img:require('../assets/zm/pro/p.png'),
                        name:'发电机轴',
                        con:'主要用于汽车电机、传动系统'
                    },
                    {
                        img:require('../assets/zm/pro/p.png'),
                        name:'泵/阀',
                        con:'主要用于汽车电机、传动系统'
                    }
                ]
            }
        },
        components:{footComponent},
        methods:{
            change(n){
                this.select=n
            },
            aStyle(n){
                return {animationDelay:n*0.2+0.2+'s'}
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
                        font-weight: lighter;
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
                    padding: 0 50px;
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
            .allItems{
                width:1440px;
                margin: 50px auto;
                display: flex;
                flex-direction: row;
               .item{
                   width:33%;
                   margin-left: 1%;
                   cursor: pointer;
                   margin-top: 30px;
                   transition: all 1s;
                   animation-duration: 2s;
                   .one{
                       width:100%;
                       position: relative;
                       overflow: hidden;
                       img{
                           width:100%;
                           display: block;
                           transition: all 1s;
                       }
                       .add{
                          padding: 20px 20px;
                           position: absolute;
                           opacity: 0;
                           transition: all 1s;
                           right:0;
                           bottom:0;
                           text-align: center;
                           background-color: #F37041;
                           i{
                               color:white;
                               font-size: 25px;
                           }
                       }
                   }
                   .two{
                       width:95%;
                       margin: 10px auto;
                       p:nth-child(1){
                           color:#313131;
                           font-size: 20px;
                           font-family: "Fira Code Medium";
                           transition: all 1s;
                       }
                       p:nth-child(2){
                           color:#7F7F7F;
                           font-size: 14px;
                           font-family: "Fira Code Light";
                           font-weight: lighter;
                           margin: 15px auto;
                           display: -webkit-box;
                           -webkit-box-orient: vertical;
                           -webkit-line-clamp: 1;
                           overflow: hidden;
                       }
                       .red{
                           width:100%;
                           display: flex;
                           flex-direction: row;
                           align-items: center;
                           div{
                               width:0;
                               height:1px;
                               background:rgba(243,112,65,1);
                               transition: all 1s;
                           }
                           span{
                               color:#F37041;
                               font-size: 14px;
                               margin-left: 10px;
                           }
                       }
                   }
                   &:hover{
                       box-shadow:5px 5px 5px 5px #e2e2e2;
                       .one{
                           img{
                               transform: scale(1.05);
                           }
                           .add{
                               opacity: 1;
                           }
                       }
                       .two{
                           p:nth-child(1){
                               color:#F37041;
                           }
                           .red{
                               div{
                                   width:92px;
                               }
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
        @media screen and (max-width: 1440px) and (min-width: 1000px){
            .main{
                .nav,.allItems{
                    width:90%;
                }
            }
        }
        @media screen and (max-width: 1000px){
            .banner{
                img{
                    height:500px;
                }
            }
            .main{
                .nav{
                    width:90%;
                }
                .allItems{
                    width:90%;
                    margin: 0 auto;
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
