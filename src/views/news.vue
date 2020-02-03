<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/zm/news/nbanner.png" alt="">
        </div>
        <div class="main">
            <div class="nav">
                <div class="left">
                    <p>新闻中心</p>
                    <p>News</p>
                    <div class="line">

                    </div>
                </div>
                <div class="right">
                    <span><i class="iconfont icon-home"></i></span>
                    <a href="./index.html">首页-</a>
                    <a href="./news.html">新闻中心</a>
                </div>
            </div>
            <div class="tnav">
                <span v-for="(item,index) in list" :key="index" :class="{'active':select===index}" @click="change(index)">{{item}}</span>
            </div>
            <transition name="fade">
                <div class="yg" v-if="select===0">
                    <p class="title">企业资讯</p>
                      <div class="item" v-for="(item,index) in nList" :key="index" @click="gotoInfo">
                          <div class="left">
                              <img :src="item.img" alt="">
                          </div>
                          <div class="right">
                              <p>   {{item.title}}</p>
                                 <p>{{item.con}}</p>
                              <div class="detail">
                                  探索更多
                                  <span>
                                      <i class="iconfont icon-top-line"></i>
                                  </span>
                              </div>
                          </div>
                      </div>
                    <div class="btn">
                        <a>
                            <div><span>加载更多</span><span>加载更多</span></div>
                        </a>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div class="xz" v-if="select===1">
                    <p class="title">展会信息</p>
                    <div class="item" v-for="(item,index) in nList2" :key="index" @click="gotoInfo">
                        <div class="left">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="right">
                            <p>   {{item.title}}</p>
                            <p>{{item.con}}</p>
                            <div class="detail">
                                探索更多
                                <span>
                                      <i class="iconfont icon-top-line"></i>
                                  </span>
                            </div>
                        </div>
                    </div>
                    <div class="btn">
                        <a>
                            <div><span>加载更多</span><span>加载更多</span></div>
                        </a>
                    </div>
                </div>
            </transition>

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
                    "企业资讯",
                    "展会信息"
                ],
                nList:[
                    {
                        img:require('../assets/zm/news/n.png'),
                        title:'易会满：科创板开市后整个股价的变化是比较合理的',
                        con:'3日讯，证监会主席易会满表示，科创板正式开市后，第一个方面就是科创板的上市公司的价值，比较好的得到了体现。第二个，我觉得市场投资者还是比较活跃。第三个的话，上市以后整个股价的变化应该是比较合理的。那么在一百天的交易里面，股票有上有下，我觉得都非常正常。有些公司有一定的回归跟分化，这也是博弈的结果。第四个特.. ...'
                    },
                    {
                        img:require('../assets/zm/news/n.png'),
                        title:'易会满：科创板开市后整个股价的变化是比较合理的',
                        con:'3日讯，证监会主席易会满表示，科创板正式开市后，第一个方面就是科创板的上市公司的价值，比较好的得到了体现。第二个，我觉得市场投资者还是比较活跃。第三个的话，上市以后整个股价的变化应该是比较合理的。那么在一百天的交易里面，股票有上有下，我觉得都非常正常。有些公司有一定的回归跟分化，这也是博弈的结果。第四个特.. ...'
                    },
                    {
                        img:require('../assets/zm/news/n.png'),
                        title:'易会满：科创板开市后整个股价的变化是比较合理的',
                        con:'3日讯，证监会主席易会满表示，科创板正式开市后，第一个方面就是科创板的上市公司的价值，比较好的得到了体现。第二个，我觉得市场投资者还是比较活跃。第三个的话，上市以后整个股价的变化应该是比较合理的。那么在一百天的交易里面，股票有上有下，我觉得都非常正常。有些公司有一定的回归跟分化，这也是博弈的结果。第四个特.. ...'
                    }
                ],
                nList2:[
                    {
                        img:require('../assets/zm/news/n.png'),
                        title:'易会满：科创板开市后整个股价的变化是比较合理的',
                        con:'3日讯，证监会主席易会满表示，科创板正式开市后，第一个方面就是科创板的上市公司的价值，比较好的得到了体现。第二个，我觉得市场投资者还是比较活跃。第三个的话，上市以后整个股价的变化应该是比较合理的。那么在一百天的交易里面，股票有上有下，我觉得都非常正常。有些公司有一定的回归跟分化，这也是博弈的结果。第四个特.. ...'
                    },
                    {
                        img:require('../assets/zm/news/n.png'),
                        title:'易会满：科创板开市后整个股价的变化是比较合理的',
                        con:'3日讯，证监会主席易会满表示，科创板正式开市后，第一个方面就是科创板的上市公司的价值，比较好的得到了体现。第二个，我觉得市场投资者还是比较活跃。第三个的话，上市以后整个股价的变化应该是比较合理的。那么在一百天的交易里面，股票有上有下，我觉得都非常正常。有些公司有一定的回归跟分化，这也是博弈的结果。第四个特.. ...'
                    },
                    {
                        img:require('../assets/zm/news/n.png'),
                        title:'易会满：科创板开市后整个股价的变化是比较合理的',
                        con:'3日讯，证监会主席易会满表示，科创板正式开市后，第一个方面就是科创板的上市公司的价值，比较好的得到了体现。第二个，我觉得市场投资者还是比较活跃。第三个的话，上市以后整个股价的变化应该是比较合理的。那么在一百天的交易里面，股票有上有下，我觉得都非常正常。有些公司有一定的回归跟分化，这也是博弈的结果。第四个特.. ...'
                    }
                ]
            }
        },
        components:{footComponent},
        methods:{
            change(n){
                this.select=n
            },
            gotoInfo(){
                const link='/newsInfo.html'
                window.open(link,'_blank')
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
                .item{
                    width:100%;
                    display: flex;
                    flex-direction: row;
                    cursor: pointer;
                    margin-top: 50px;
                    .left{
                        width:35%;
                        overflow: hidden;
                        img{
                            width:100%;
                            object-fit: cover;
                            transition: all 1s;
                        }
                    }
                    .right{
                        width:62%;
                        margin-left: 3%;
                        p:nth-child(1){
                            font-size: 22px;
                            font-family: "Fira Code Medium";
                            margin: 15px auto;
                            transition: all 1s;
                        }
                        p:nth-child(2){
                            font-size: 14px;
                            line-height: 30px;
                            margin: 30px auto;
                            font-family: "Fira Code Light";
                            font-weight: lighter;
                        }
                        div{
                            font-family: "Fira Code Light";
                            font-weight: lighter;
                            font-size: 14px;
                            span{
                                width:20px;
                                height:20px;
                                background:linear-gradient(-90deg,rgba(197,74,30,1),rgba(244,128,87,1));
                                border:1px solid rgba(223, 88, 39, 1);
                                box-shadow:0px 2px 6px 0px rgba(0, 0, 0, 0.3);
                                border-radius:50%;
                                display: inline-block;
                                transform: rotate(90deg);
                                text-align: center;
                                margin-left: 10px;
                                transition: all 1s;
                                i{
                                    color:white;
                                }
                            }
                        }
                    }
                    &:hover{
                        .left{
                            img{
                                transform: scale(1.05);
                            }
                        }
                        .right{
                            p:nth-child(1){
                                color:#F37041;
                            }
                            div{
                                span{
                                   margin-left: 20px;
                                }
                            }
                        }
                    }
                }
                .btn{
                    width:100%;
                    margin: 50px auto;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    a{
                        line-height: 1.5;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        list-style-type: none;
                        text-align: center;
                        pointer-events: auto;
                        box-sizing: border-box;
                        color: inherit;
                        animation-duration: 1s;
                        animation-fill-mode: both;
                        position: relative;
                        display: inline-block;
                        max-width: 192px;
                        height: 60px;
                        background: #e60012;
                        transform: translate3d(0px, 0%, 0px);
                        text-decoration: none;
                        font-family: "Fira Code Light";
                        font-weight: lighter;
                        font-size: 16px;
                        letter-spacing: 0.05em;
                        transition-delay: 0.6s;
                        overflow: hidden;
                        box-shadow: 0 21px 32px -8px rgba(0, 0, 0, 0.2);
                        animation-name: fadeInUpSmall;
                        cursor: pointer;
                        width: 100%;
                        visibility: visible;
                        animation-delay: 0.2s;
                        div{
                            position: relative;
                            z-index: 8;
                            top: 50%;
                            width: 100%;
                            height: 26px;
                            margin-top: -13px;
                            overflow: hidden;
                            span{
                                position: absolute;
                                z-index: 1;
                                left: 0;
                                height: 26px;
                                line-height: 26px;
                                top: 0;
                                width: 100%;
                                text-align: center;
                                transition: transform 0.5s ease;
                            }
                            span:first-of-type{
                                color: #333;
                                transform: translateY(24px);
                            }
                            span:last-of-type{
                                color: #fff;
                                transform: translateY(0);
                            }
                        }
                        &::before{
                            content: '';
                            position: absolute;
                            z-index: 4;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: #fff;
                            border-radius: 50% 50% 0 0;
                            transform: translateY(100%) scaleY(0.5);
                            transition: all 0.6s ease;
                        }
                        &::after{
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: #e60012;
                            border-radius: 0;
                            transform: translateY(0) scaleY(1);
                            transition: all 0.6s ease;
                        }
                        &:hover{
                            div{
                                span:first-of-type{
                                    transform: translateY(0);
                                }
                                span:last-of-type{
                                    transform: translateY(-24px);
                                }
                            }
                        }
                        &:hover::before{
                            border-radius: 0;
                            transform: translateY(0) scaleY(1);
                            transition-delay: 0s;
                        }
                        &:hover::after{
                            border-radius: 0 0 50% 50%;
                            transform: translateY(-100%) scaleY(0.5);
                            transition-delay: 0s;
                        }
                    }
                    /*div{*/
                    /*    background-color: #F37041;*/
                    /*    color:white;*/
                    /*    width:140px;*/
                    /*    text-align: center;*/
                    /*    padding: 10px 0;*/
                    /*    font-family: "Fira Code Light";*/
                    /*    font-weight: lighter;*/
                    /*    cursor: pointer;*/
                    /*}*/
                }
            }
            .xz{
                @extend .yg;
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
                .nav{
                    width:95%;
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
