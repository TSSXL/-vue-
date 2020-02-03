<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/zm/news/nbanner.png" alt="">
        </div>
        <div class="main">
            <div class="nav">
                <div class="left">
                    <p>新闻详情</p>
                    <p>NewsInfo</p>
                    <div class="line">

                    </div>
                </div>
                <div class="right">
                    <span><i class="iconfont icon-home"></i></span>
                    <a href="./index.html">首页-</a>
                    <a href="./news.html">新闻中心</a>
                </div>
            </div>
            <p class="title">{{info.TITLE}}</p>
            <p class="time">{{info.SHOWTIME}}</p>
            <div class="htmlCon" v-html="info.CONTENT">

            </div>
        </div>
        <foot-Component></foot-Component>
    </div>
</template>

<script>
    import {getNewsInfo} from '../util/lang'
    import footComponent from '../components/foot'
    export default {
        name: "newsInfo",
        data(){
            return{
                info:{}
            }
        },
        components:{footComponent},
        mounted(){
            this.$nextTick(()=>{
                this.getNid()
                this.getNewsInfo()
            })
        },
        methods:{
            getNid () {
                return window.location.search.replace('?', '').split('=')[1]
            },
            getNewsInfo(){
                const nid = this.getNid()
                const url = `${getNewsInfo('zh-CN',nid)}`
                this.$axios.get(url).then(res => {
                    res.data.SHOWTIME=res.data.SHOWTIME.substring(0,11)
                    this.info=res.data
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .con{
        width:100%;
        .banner{
            width:100%;
            img{
                display: block;
                width:100%;
                object-fit: cover;
            }
        }
        .main{
            width:1440px;
            margin: 60px auto;
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
            .title{
                text-align: center;
                font-weight: bolder;
                color:#2B2B2B;
                font-size: 20px;
            }
            .time{
                color:#2B2B2B;
                text-align: center;
                padding: 15px 0;
                border-bottom: 1px solid #DFDFDF;
            }
            .htmlCon{
                width:100%;
                margin: 60px auto;
                font-size: 14px;
                line-height: 30px;
            }
        }
        @media screen and (max-width:450px){
            .main{
                width:95%;
            }
        }
    }
</style>
<style scoped>
    @media screen and (max-width:450px){
        .htmlCon >>> p img{
            width:100%;
            object-fit: cover;
        }
        .htmlCon >>> p video{
            width:100%;
            object-fit: cover;
        }
        .htmlCon >>> div img{
            width:100%;
            object-fit: cover;
        }
    }
</style>
