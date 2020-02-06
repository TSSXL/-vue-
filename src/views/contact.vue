<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/zm/cbanner.png" alt="">
        </div>
        <div class="main">
        <div class="nav">
            <div class="left wow">
                    <p>联系我们</p>
                    <p>Contact Us</p>
                    <div class="line">

                    </div>
            </div>
            <div class="right wow">
                <span><i class="iconfont icon-home"></i></span>
                <a href="./index.html">首页-</a>
                <a href="./contact.html">联系我们</a>
            </div>
        </div>
            <div class="tnav wow fadeInUp">
              <span v-for="(item,index) in list" :key="index" :class="{'active':select===index}" @click="change(index)">{{item}}</span>
            </div>
            <div class="ly wow fadeIn" id="ly">
            <p class="title">在线留言</p>
                <div class="form">
                    <input type="text" placeholder="姓名">
                    <input type="text" placeholder="公司名称">
                    <input type="text" placeholder="电话">
                    <input type="text" placeholder="邮箱">
                    <textarea  cols="30" rows="8" placeholder="留言内容:"></textarea>
                </div>
                <div class="btn">
                    <a>
                        <div><span>发送</span><span>发送</span></div>
                    </a>
                </div>
            </div>
            <div class="lx wow fadeIn" id="lx">
                <p class="title">联系方式</p>
                <div class="content">
              <div class="left">
                  宁波镇明转轴有限公司
              </div>
                    <div class="right">
                      <map-Component class="map"></map-Component>
                    </div>
                </div>
            </div>
        </div>
        <foot-Component></foot-Component>
    </div>
</template>

<script>
    import  footComponent from '../components/foot'
    import  mapComponent from '../components/map'
    import Scrollbar from 'smooth-scrollbar'
    export default {
        name: "contact",
        data(){
            return{
                select:0,
                list:[
                    "在线留言",
                    "联系方式"
                ]
            }
        },
        components:{footComponent,mapComponent},
        mounted() {
            Scrollbar.initAll(document.getElementById("scroller-wrapper"));
            let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
            scrollbar.scrollTo(0,1)
            if(window.location.search.replace('?', '').split('=')[1]!==undefined){
                setTimeout(()=>{
                    this.change(parseInt(this.getNid()))
                },1000)
            }
        },
        methods:{
            getNid () {
                return window.location.search.replace('?', '').split('=')[1].split('?')[0]
            },
            change(n){
               this.select=n
                if(n===0){
                    Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#ly"),{
                        offsetTop:100,
                    })
                }else{
                    Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#lx"),{
                        offsetTop:100,
                    })
                }
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
        .ly{
            width:1440px;
            margin: 60px auto;
            animation-duration: 2s;
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
            .form{
                width:100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                input{
                    width:45%;
                    height: 35px;
                    background-color: transparent;
                    outline: none;
                    border: none;
                    margin-top: 30px;
                    border-color: #D0D0D0;
                    border-bottom: 1px solid #D0D0D0;
                    color: #B1B1B1;
                    font-style: italic;
                    font-family: "Fira Code Light";
                    font-weight: lighter;
                    text-indent: 10px;
                }
                textarea{
                    width:100%;
                    background-color: transparent;
                    outline: none;
                    border: none;
                    margin-top: 30px;
                    border-color: #D0D0D0;
                    border-bottom: 1px solid #D0D0D0;
                    color: #B1B1B1;
                    font-style: italic;
                    font-family: "Fira Code Light";
                    font-weight: lighter;
                    text-indent: 10px;
                }
            }
            .btn{
                width:100%;
                margin: 30px auto;
               display: flex;
                flex-direction: row;
                justify-content: flex-end;
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
        .lx{
            width:1440px;
            margin: 30px auto;
            animation-duration: 2s;
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
            .content{
                width:100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin:50px auto;
                .left{
                    color:#313131;
                    font-size: 32px;
                    width:35%;
                   font-weight: bolder;
                    padding-top: 60px;
                }
                .right{
                    width:65%;
                    .map{
                        height:400px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .main{
            .nav,.ly,.lx{
                width:90%;
            }
        }
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
}
</style>