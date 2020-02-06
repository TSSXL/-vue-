<template>
    <div class="con" :class="{'dark':active2}">
        <div class="lan animated fadeInRight">
            <span>
                <i class="iconfont icon-shixindiqiu"></i>
            </span>
            <span>语言:中文简体</span>
        </div>
        <div class="mm">
            <div class="main">
                <a class="left" href="/index.html">
                    <img class="a" src="../assets/zm/tlogo.png" alt="">
                </a>
                <div class="right">
                    <ul>
                        <li class="animated fadeInDown" :class="page === 'index' ? 'showLine' : ''" @click="goto('index')"  style="animation-delay: 0.2s">
                            <a>首页</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'about' ? 'showLine' : ''" @click="goto('about')" style="animation-delay: 0.3s">
                            <a>关于我们</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'pro' ? 'showLine' : ''" @click="goto('pro')" style="animation-delay: 0.4s">
                            <a>产品中心</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'news' ? 'showLine' : ''" @click="goto('news')" style="animation-delay: 0.5s">
                            <a >新闻中心</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'job' ? 'showLine' : ''" @click="goto('job')" style="animation-delay: 0.6s">
                            <a >职业发展</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'sale' ? 'showLine' : ''" @click="goto('sale')" style="animation-delay: 0.7s">
                            <a >销售网络</a>
                        </li>
                        <li class="animated fadeInDown" :class="page === 'contact' ? 'showLine' : ''" @click="goto('contact')" style="animation-delay: 0.8s">
                            <a >联系我们</a>
                        </li>
                    </ul>
                    <div class="tc">
                        <div class="animated fadeInDown" style="animation-delay: 0.9s">
                            <i class="iconfont icon-youxiang"></i>
                        </div>
                        <div class="animated fadeInDown" style="animation-delay: 1s">
                            <i class="iconfont icon-search-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="search" :class="{'showsList':showSearch}">
            <span class="x-close" @click="hideS"></span>
           <div class="m1">
               <p>SEARCH</p>
               <div class="ip">
                   <input type="text" v-model="keywords" placeholder="KEYWORDS" @keyup.enter="gotoPros">
                   <i class="iconfont icon-sousuo" @click="gotoPros"></i>
               </div>
           </div>
        </div>

        <div class="top animated fadeInDown">
            <a href="/index.html" class="l1">
                <img class="aImg" src="../assets/fb/topLogo.png" alt="">
            </a>
            <div class="mNav" :class="{active: menuOpen}" @click="menuOpen=!menuOpen">
                <span class="burger"></span>
                <span class="burger"></span>
                <span class="burger"></span>
            </div>
        </div>
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
            gotoPros(){
                const  link=`/pros.html?name=${this.keywords}`
                window.open(link,'_self') // this.project.link
            },
            hideS(){
                this.showSearch=false
            },
            gotoLink(i,n){
                if(i===0 && n===1){
                    const link='/pro.html'
                    window.open(link,'_self')
                }else if(i===0 && n===2){
                    const link='/lifestyle.html'
                    window.open(link,'_self')
                }else if(i===0 && n===3){
                    const link='/homecase.html'
                    window.open(link,'_self')
                }else if(i===0 && n===4){
                    const link='/news.html'
                    window.open(link,'_self')
                }else if(i===0 && n===5){
                    const link='/newPro.html'
                    window.open(link,'_self')
                }else if(i===0 && n===6){
                    const link='/sale.html'
                    window.open(link,'_self')
                }else if(i===0 && n===0){
                    const link='/index.html'
                    window.open(link,'_self')
                }else if(i===0 && n===7){
                    const link='/about.html'
                    window.open(link,'_self')
                }
                else if(i===1){
                    const link='/job.html'
                    window.open(link,'_self')
                }
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
        .animated{
            animation-delay: 600ms;
        }
        .lan{
            width:90%;
            margin-left: 5%;
            padding-top: 15px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            span{
                color:#D4D4D4;
                font-family: "Fira Code Light";
                font-weight: lighter;
                cursor: pointer;
                transition: all 1s;
                i{
                    font-size: 25px;
                    color:white;
                    transition: all 1s;
                }
                &:hover{
                    color:#F37041;
                    i{
                        color:#F37041;
                    }
                }
            }
            span:nth-child(1){
                display: inline-block;
                animation: xz 1s infinite linear;
            }
            @keyframes xz {
                from{
                    transform: rotate(0);
                }
                to{
                    transform: rotate(360deg);
                }
            }
            span:nth-child(2){
                margin-left: 10px;
            }
        }
        .mm{
            width:100%;
            border-bottom: 1px solid rgba(255,255,255,.2);
            padding-bottom: 20px;
            .main{
                width:90%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                transition: all 600ms;
                margin-left: 5%;
                .left{
                    display: inline-block;
                    width:131px;
                    height:47px;
                    position: relative;
                    overflow: hidden;
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
                    width:80%;
                    padding-top: 20px;
                    ul{
                        list-style: none;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        width:77%;
                        li{
                            position: relative;
                            margin-left: 3%;
                            cursor: pointer;
                            a{
                                font-size: 14px;
                                font-family: "Fira Code Light";
                                font-weight: lighter;
                                color:white;
                                transition: all 1s;
                            }
                            &::after{
                                position: absolute;
                                left:30%;
                                bottom:-20px;
                                width:0;
                                height:3px;
                                transition: all 1s;
                                content:'';
                                display: inline-block;
                                background-color: white;
                            }
                            &:hover::after{
                                width:40%;
                            }
                            &:hover{
                                a{
                                    color:#F37041;
                                }
                            }
                        }
                        .showLine::after{
                            width:40%;
                        }
                        .showLine{
                            a{
                                color:#F37041;
                            }
                        }
                    }
                    .tc{
                        width:18%;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        margin-left: 5%;
                        div{
                            width:50%;
                            text-align: center;
                            position: relative;
                            i{
                                color:white;
                                font-size: 20px;
                                cursor: pointer;
                                transition: all 1s;
                            }
                            &:hover{
                                i{
                                    color:#F37041;
                                }
                            }
                        }
                        div:nth-child(1)::before,div:nth-child(1)::after{
                            content:'';
                            display: inline-block;
                            height:20px;
                            width:1px;
                            background-color: rgba(255,255,255,.3);
                            position: absolute;
                        }
                        div:nth-child(1)::before{
                            left:0;
                            top:2px;
                        }
                        div:nth-child(1)::after{
                            right:0;
                            top:2px;
                        }
                    }
                }
                @media screen and (max-width: 1440px) and (min-width: 1000px){
                    .right{
                        width:80%;
                    }
                }
            }
        }
        .search{
            position: absolute;
            right:0;
            top:0;
            width:50%;
            background-color: black;
            height:0;
            transition: all 600ms;
            z-index: 1000;
            .x-close{
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                font-feature-settings: "kern" 1;
                font-kerning: normal;
                font-family: "helvetica_neue_light",Arial,Helvetica,sans-serif;
                font-size: 17px;
                line-height: 24px;
                visibility: inherit;
                padding: 0;
                margin: 0;
                display: block;
                cursor: pointer;
                width: 41px;
                height: 41px;
                top: 20px;
                right: 150px;
                position: absolute;
                z-index: 100;
                color: #000;
                transform: scaleX(1);
                display: none;
            }
            .x-close:before, .x-close:after {
                content: '';
                position: absolute;
                left: -7px;
                top: 20px;
                height: 1px;
                width: 55px;
                z-index: 10;
                background-color: white;
                opacity: 0;
                transition: all 1s;
                transition-delay: 600ms;
                transform: rotate(0deg);
            }
            .m1{
                position: absolute;
                opacity: 0;
                width:70%;
                left:15%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                bottom:0;
                transition: all 2s;
                transform: matrix(1, 0, 0, 1, 1, 0);
                p{
                    width:100%;
                    color:white;
                    font-size: 35px;
                    padding-bottom: 40px;
                }
                .ip{
                    width:80%;
                    position: relative;
                    input{
                        -moz-appearance: none;
                        -webkit-appearance: none;
                        -moz-border-radius: 0;
                        -webkit-border-radius: 0;
                        border-radius: 0;
                        outline: none;
                        background-color: transparent;
                        width: 100%;
                        border: solid 1px white;
                        float: none;
                        display: block;
                        font-family: "helvetica_neue_bold",Arial,Helvetica,sans-serif;
                        font-size: 25px;
                        line-height: 27px;
                        color: white;
                        padding: 33px 90px 33px 33px;
                    }
                    input:focus{
                        outline: none;
                    }
                    i{
                        font-size: 40px;
                        color:white;
                        line-height: 100px;
                        position: absolute;
                        right:0;
                        bottom:0;
                        cursor: pointer;
                    }
                }
            }
        }
        .showsList{
            right:0;
            height:100vh;
            background-color: black;
            .x-close{
                display: block;
            }
            .x-close:before, .x-close:after{
                opacity: 1;
            }
            .x-close:before {
                transform: rotate(-45deg);
            }
            .x-close:after {
                transform: rotate(45deg);
            }
            .m1{
                opacity: 1;
                bottom:50%;
                transform: matrix(1, 0, 0, 1, 0, 0);
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
        background-color: white;
        .lan{
            span{
                color:black;
                i{
                    color:black;
                }
            }
        }
        .mm{
            .main{
                .right{
                    ul{
                        li{
                            a{
                                color:black;
                            }
                        }
                    }
                    .tc{
                        div{
                            i{
                                color:black;
                            }
                        }
                        div:nth-child(1)::before,div:nth-child(1)::after{
                            background-color: black;
                        }
                    }
                }
            }
        }
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
