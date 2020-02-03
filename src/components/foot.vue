<template>
    <div class="con">
        <div class="mone">
            <div class="main">
                <div class="two">
                    <div class="left">
                        <div class="list" v-for="(item,index) in list" :key="index">
                            <div class="item" v-for="(i,idx) in item.con" :key="idx" @click="goto(index,idx)">
                                {{i}}
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <img src="../assets/zm/flogo.png" alt="">
                        <img src="../assets/zm/code.png" alt="">
                        <p>
                            扫一扫<br>
                            关注镇明
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mtwo">
            <div class="mcon">
                <p>
                    © Copyright 2019  zhenming.com Rights Reserved.宁波镇明转轴有限公司 版权所有
                </p>
                <a href="http://www.sansg.com/" target="_blank">网站建设：三盛网络</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "foot",
        data(){
            return{
              list:[
                  {con:[
                      "关于我们",
                          "企业概况",
                          "厂房设备",
                          "企业理念",
                          "企业荣誉",
                          "品质保障",
                          "发展历程"
                      ]},
                  {con:[
                          "产品中心",
                          "汽车电机轴",
                          "健身器材轴",
                         "水泵阀门轴",
                          "家用电器轴",
                          "电动工具轴",
                          "发电机轴"
                      ]},
                  {con:[
                      "新闻中心",
                          "企业资讯",
                          "展会信息"
                      ]},
                  {con:[
                          "职业发展"
                      ]},
                  {con:[
                          "销售网络",
                          "销售分布",
                          "客户展示",
                          "销售展望"
                      ]},
                  {con:[
                          "联系我们",
                          "在线留言",
                          "联系方式"
                      ]}
              ]
            }
        },
        methods:{
            goto(i,n){
                console.log(i,n)
                if(i===0 && n===0){
                    const link='/pro.html'
                   window.open(link,'_self')
                }else if(i===0 && n===1){
                        const link='/lifestyle.html'
                        window.open(link,'_self')
                }else if(i===0 && n===2){
                    const link='/newPro.html'
                    window.open(link,'_self')
                }else if(i===1 && n===0){
                    const link='/homecase.html'
                    window.open(link,'_self')
                }else if(i===1 && n===1){
                    const link='/news.html'
                    window.open(link,'_self')
                }else if(i===1 && n===2){
                    const link='/sale.html'
                    window.open(link,'_self')
                }else if(i===2 && n===0){
                    const link='/about.html'
                    window.open(link,'_self')
                }else if(i===2 && n===1){
                    const link='/job.html'
                    window.open(link,'_self')
                }else if(i===2 && n===2){
                    const link='/job.html'
                    window.open(link,'_self')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.con{
    width:100%;
    .mone{
        width:100%;
        background-color: #333333;
        padding: 30px 0;
        .main{
            width:1440px;
            margin: 0 auto;
            .two{
                width:100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 30px 0;
                .left{
                    width:80%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .list{
                        width:33%;
                        text-align: center;
                        border-right: 1px solid rgba(255,255,255,.1);
                        position: relative;
                        .item{
                            color:#898989;
                            font-family: "Fira Code Medium";
                            font-weight: lighter;
                            font-size: 14px;
                            margin-top: 15px;
                            cursor: pointer;
                            transition: color 1s;
                        }
                        .item:hover{
                            color:#F37041;
                        }
                        .item:nth-child(1){
                            font-size: 16px;
                            color:white;
                            margin-top: 0;
                            font-family: "Fira Code Medium";
                            font-weight: lighter;
                        }
                    }
                    .list::after{
                        position: absolute;
                        right:-1.5px;
                        top:0;
                        height:9px;
                        width:3px;
                        background-color: #696969;
                        content:'';
                        display: inline-block;
                    }
                }
                .right{
                    width:18%;
                   display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        display: block;
                    }
                    img:nth-child(2){
                        margin: 10px auto;
                    }
                    p{
                        text-align: center;
                        font-family: "Fira Code Light";
                        font-weight: lighter;
                        color:#898989;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .mtwo{
        width:100%;
        background-color: #1C1C1C;
        padding: 30px 0;
        .mcon{
            width:1440px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            p,a{
                color:#A5A5A5;
                font-size: 14px;
                cursor: pointer;
                transition: all 1s;
            }
            p:hover,a:hover{
                color:#F37041;
            }
            a{
                margin-right: 5%;
            }
        }
    }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .main{
            width:95%;
        }
    }
    @media screen and (max-width: 1000px){
        .main{
            width:90%;
            .one{
                .l1{
                    justify-content: center;
                }
                .l11{
                    flex-direction: column;
                    align-items: center;
                    div{
                        margin-top: 30px;
                    }
                    div:nth-child(1){
                        margin-top: 0;
                    }
                }
            }
            .two{
                .left{
                    display: none;
                }
                .right{
                    margin-left: 0;
                    width:100%;
                    p{
                        text-align: center;
                        line-height: 30px;
                    }
                    p:nth-child(2){
                        width:100%;
                    }
                }
            }
        }
    }
}
</style>
