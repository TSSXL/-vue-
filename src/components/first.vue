<template>
    <div class="con" :class="{'dark':active2}">
       <div class="m1">
           <a class="left" href="/index.html">
               <img class="a" src="../assets/yap/home/Eanper.png" alt="">
           </a>
           <div class="right animated fadeInRight">
               <div class="search">
                   <input type="text">
                   <span>搜索</span>
               </div>
               <div class="phone">
                   <a href="tel:0574-2786 9883">
                       <i class="iconfont icon-dianhua"></i>
                       <span>
                           0574-2786 9883
                       </span>
                   </a>
               </div>
           </div>
       </div>
        <div class="mm">
            <div class="main">
                <div class="right">
                    <ul>
                        <li class="animated fadeInDown" :class="page === 'index' ? 'showLine' : ''" @click="goto('index')"  style="animation-delay: 0.2s">
                            <a>首页</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'about' ? 'showLine' : ''" @click="goto('about')" style="animation-delay: 0.3s">
                            <a>关于我们
                                <i class="iconfont icon-you"></i>
                            </a>
                            <div class="nav">
                                <span class="animated fadeInUp" style="animation-delay: 0.2s" @click.stop="change(0)">企业介绍</span>
                                <span class="animated fadeInUp" style="animation-delay: 0.4s" @click.stop="change(1)">企业文化</span>
                                <span class="animated fadeInUp" style="animation-delay: 0.6s" @click.stop="change(2)">发展历程</span>
                                <span class="animated fadeInUp" style="animation-delay: 0.8s" @click.stop="change(3)">荣誉资质</span>
                                <span class="animated fadeInUp" style="animation-delay: 1s" @click.stop="change(4)">全球化服务</span>
                            </div>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'pro' ? 'showLine' : ''" @click="goto('pro')" style="animation-delay: 0.4s">
                            <a>产品中心</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'sale' ? 'showLine' : ''" @click="goto('sale')" style="animation-delay: 0.5s">
                            <a >技术能力</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'job' ? 'showLine' : ''"  style="animation-delay: 0.6s">
                            <a >成功案例</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'news' ? 'showLine' : ''" @click="goto('news')" style="animation-delay: 0.7s">
                            <a >新闻资讯</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'contact' ? 'showLine' : ''" @click="goto('contact')" style="animation-delay: 0.8s">
                            <a >联系我们</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

<!--        <div class="top animated fadeInDown">-->
<!--            <a href="/index.html" class="l1">-->
<!--                <img class="aImg" src="../assets/fb/topLogo.png" alt="">-->
<!--            </a>-->
<!--            <div class="mNav" :class="{active: menuOpen}" @click="menuOpen=!menuOpen">-->
<!--                <span class="burger"></span>-->
<!--                <span class="burger"></span>-->
<!--                <span class="burger"></span>-->
<!--            </div>-->
<!--        </div>-->
        <div class="menuBox" :class="{open: menuOpen}">
            <ul>
                <li ><a href="/index.html">首页</a></li>
                <li style="transition-delay: 0.2s"><a href="/pro.html">所有商品</a></li>
                <li style="transition-delay: 0.3s"><a href="/lifestyle.html">生活方式</a></li>
                <li style="transition-delay: 0.4s"><a href="/homecase.html">居家案例</a></li>
                <li style="transition-delay: 0.5s"><a href="/cooperation.html">合作</a></li>
                <li style="transition-delay: 0.6s"><a href="/newPro.html">3D云设计</a></li>
                <li style="transition-delay: 0.7s"><a href="/collect.html">我的收藏</a></li>
                <li style="transition-delay: 0.7s"><a href="/about.html">关于我们</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Scrollbar from 'smooth-scrollbar';
    export default {
        name: "first",
        data(){
            return{
                keywords:'',
                showSearch:false,
                select:0,
                menuOpen:false,
                active2:false,
                scrollbar:'',
                top:''
            }
        },
        props:['page'],
        // watch: {
        //     $route: 'getScrollbar'
        // },
        mounted(){
            this.$nextTick(()=>{
                this.getScrollbar()
            })
        },
        methods:{
            change(n){
                const  link=`/about.html?index=${n}`
                window.open(link,'_self')
            },
            gotoPros(){
                const  link=`/pros.html?name=${this.keywords}`
                window.open(link,'_self') // this.project.link
            },
            aStyle(n){
                return {transitionDelay:n*0.1+'s'}
            },
           goto(n){
              const link=`/${n}.html`
               window.open(link,'_self')
           },
            scrollHeader(scrollTop){
                this.active2=scrollTop>200 ? true : false
            },
            getScrollbar(){
                this.$nextTick(()=>{
                    this.scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
                    this.active2=false
                    this.select=parseInt(localStorage.getItem('home.html'))
                    let scrollHeader=this.scrollHeader
                    if(this.scrollbar){
                        this.scrollbar.addListener((status) => {
                            scrollHeader(status.offset.y)
                        });
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .con{
        width:100%;
        position: fixed;
        top:0;
        left:0;
        z-index: 1000;
        transition: all 1s;
        background-color: white;
        box-shadow:3px 8px 15px 0px rgba(0, 0, 0, 0.23);
        .m1{
            width:80%;
            margin-left: 10%;
            display: flex;
            flex-direction: row;
           justify-content: space-between;
            padding: 15px 0;
            .left{
                display: inline-block;
                width:216px;
                height:53px;
                position: relative;
                overflow: hidden;
                margin-top: 10px;
                img{
                    position: absolute;
                    left:-100%;
                    top:0;
                    height:100%;
                    width:100%;
                    animation: show 1s linear forwards;
                    opacity: 0;
                }
                @keyframes show {
                    from{
                        left:-100%;
                        opacity: 0;
                    }
                    to{
                        left:0;
                        opacity: 1;
                    }
                }
            }
            .right{
                display: flex;
                flex-direction: row;
                align-items: center;
                padding-top: 10px;
                .search{
                    width:450px;
                    position: relative;
                    height:50px;
                    input{
                        width:100%;
                     height:100%;
                        text-indent: 20px;
                        border:1px solid rgba(51, 51, 51, 0.1);
                        border-radius:30px;
                        border-color: rgba(51, 51, 51, 0.1) !important;
                        &:focus{
                            border-color: rgba(51, 51, 51, 0.1) !important;
                        }
                    }
                    span{
                        width:100px;
                        height:35px;
                        background:rgba(34,124,203,1);
                        border-radius:30px;
                        position: absolute;
                        right:10px;
                        top:9px;
                        color:white;
                        line-height: 35px;
                        text-align: center;
                        font-family: "Fira Code Light";
                        font-weight: lighter;
                        cursor: pointer;
                    }
                }
                .phone{
                    margin-left: 40px;
                    a{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        i{
                            color:#ADADAD;
                            font-size: 18px;
                            padding-right: 20px;
                        }
                        span{
                            display: inline-block;
                            padding-left: 20px;
                            color:#555555;
                            font-size: 20px;
                            font-family: "Fira Code Light";
                            font-weight: lighter;
                            position: relative;
                            &::after{
                                content:'';
                                display: inline-block;
                                width:1px;
                                height:15px;
                                background:rgba(205,205,205,1);
                                position: absolute;
                                left:0;
                                top:5px;
                            }
                        }
                    }
                }
            }
        }
        .mm{
            width:100%;
            border-top: 1px solid rgba(51,51,51,.1);
            border-bottom: 1px solid rgba(255,255,255,.2);
            .main{
                width:80%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                transition: all 600ms;
                margin-left: 10%;
                .right{
                    display: flex;
                    flex-direction: row;
                    width:100%;
                    ul{
                        list-style: none;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        width:100%;
                        padding: 0;
                        li{
                            position: relative;
                            margin-left: 5%;
                            cursor: pointer;
                            padding: 15px 0;
                            width:12%;
                            a{
                                font-size: 14px;
                                font-family: "Fira Code Light";
                                font-weight: lighter;
                                color:#666666;
                                transition: all 1s;
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                width:100%;
                                text-align: center;
                                align-items: center;
                                i{
                                    transition: all 1s;
                                }
                            }
                            &:hover{
                                a{
                                    i{
                                        transform: rotate(90deg);
                                    }
                                }
                            }
                            .nav{
                                position: absolute;
                                top:100%;
                                width:100%;
                                left:0;
                                flex-direction: column;
                               display: none;
                                span{
                                    display: inline-block;
                                    width:100%;
                                    padding: 10px 0;
                                    text-align: center;
                                    color:#666666;
                                    font-size: 14px;
                                    font-family: "Fira Code Light";
                                    font-weight: lighter;
                                    background-color: white;
                                    cursor: pointer;
                                    transition: all 1s;
                                    &:hover{
                                        background-color: #227CCB;
                                        color:white;
                                    }
                                }
                                span:nth-child(1){
                                    border-bottom: 1px solid #D1D1D1;
                                }
                            }
                            &::before{
                                position: absolute;
                                left:0;
                                top:0;
                                width:0;
                                height:1px;
                                transition: all 1s;
                                content:'';
                                display: inline-block;
                                background-color: #227CCB;
                            }
                            &::after{
                                position: absolute;
                                left:0;
                                bottom:-1px;
                                width:0;
                                height:1px;
                                transition: all 1s;
                                content:'';
                                display: inline-block;
                                background-color: #227CCB;
                            }
                            &:hover{
                                .nav{
                                    display: flex;
                                }
                            }
                            &:hover::before{
                                width:100%;
                            }
                            &:hover::after{
                                width:100%;
                            }
                        }
                        .showLine::after{
                            width:100%;
                        }
                        .showLine::before{
                            width:100%;
                        }
                    }
                }
                @media screen and (max-width: 1440px) and (min-width: 1000px){
                    .right{
                        width:100%;
                    }
                }
            }
        }
        .top{
            display: none;
        }
        .menuBox{
            position: fixed;
            top: -100vh;
            left:0;
            height:100vh;
            width: 80%;
            background:black;
            z-index: 1010;
            transition: .8s;
            display: block;
        }
        .menuBox.open{
            left:0;
            top: 71px;
            padding-top: 20px;
            ul{
                li{
                    transform: matrix(1, 0, 0, 1, 0, 0);
                }
            }
        }
        .menuBox ul{
            display: block;
            font-size: 18px;
            width:100%;
            padding: 18px 0px;
            text-align: center;
            list-style: none;
            li{
                padding: 15px 0;
                text-transform: uppercase;
                font-family: SourceHanSerifCN-Regular;
                transform: matrix(1, 0, 0, 1, -600, 0);
                transition: all 1s;
                a{
                    color:white;
                    transition: all 1s;
                    font-size: 12px;
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
        @keyframes polygon {
            0% {
                clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
            }
            100% {
                clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
            }
        }
        @media screen and (min-width: 2200px){
            .main{
                ul{
                    width:60%;
                }
            }
        }
        @media screen and (max-width: 1440px){
            .main{
                width:90%;
                margin-left: 5%;
                ul{
                    width:50%;
                }
            }
        }
        @media screen and (max-width: 1000px){
            .main{
                display: none;
            }
            .top{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width:100%;
                transition: all 2s;
                background-color: white;
                padding: 10px 0;
                a{
                    text-align: center;
                    display: inline-block;
                    text-align: center;
                    padding: 10px 0;
                    width:100%;
                }
            }
            .mNav{
                display: block;
                transition: .8s;
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 60px;
            }
            .mNav .burger{
                width: 32px;
                height: 1px;
                background-color: black;
                position: absolute;
                top: 25px;
                left: 50%;
                margin: 0px 0px 0px -16px;
                transform-origin: center;
                transition: .8s;
            }
            .mNav .burger:nth-of-type(2){
                top: 35px;
            }
            .mNav .burger:nth-of-type(3){
                top: 45px;
            }
            .mNav.active{
                background-color:black;
            }
            .mNav.active .burger{
                background-color: #fff;
            }
            .mNav.active .burger:nth-of-type(1){
                top: 35px;
                transform: rotate(225deg);
            }
            .mNav.active .burger:nth-of-type(2){
                left: -100%;
                opacity: 0;
            }
            .mNav.active .burger:nth-of-type(3){
                top: 35px;
                transform: rotate(-225deg);
            }
        }
    }
    .dark{
        transform: translateY(-94px);
        /*@media screen and (max-width:450px){*/
        /*    .mImg{*/
        /*        display: none;*/
        /*    }*/
        /*    .mImg2{*/
        /*        display: block;*/
        /*    }*/
        /*    .mNav .burger{*/
        /*        background-color: #0C3665;*/
        /*    }*/
        /*}*/
    }
</style>
