<template>
    <div class="con" :class="{'dark':active2}">
        <div class="main">
            <a class="left" href="/index.html">
                <img class="a" src="../assets/fb/topLogo.png" alt="">
            </a>
            <div class="right">
                <ul>
                    <!--                <li v-for="(item,index) in list" :key="index" @click="goto(index)" :class="{'showLine':select===index}">{{item}}</li>-->
                    <li :class="page === 'pro' ? 'showLine' : ''" @click="goto('pro')">
                        <a>　All　</a>
                        <a>产品</a>
                    </li>
                    <li :class="page === 'lifestyle' ? 'showLine' : ''" @click="goto('lifestyle')">
                        <a>　Life Style　</a>
                        <a>生活方式</a>
                    </li>
                    <li :class="page === 'homecase' ? 'showLine' : ''" @click="goto('homecase')">
                        <a>Home Case</a>
                        <a>居家案例</a>
                    </li>
                    <li :class="page === 'cooperation' ? 'showLine' : ''" @click="goto('cooperation')">
                        <a >Cooperation</a>
                        <a >合作</a>
                    </li>
                </ul>
                <div class="a1">
                   <div class="collect" @click="gotoC" :class="page === 'collect' ? 'show' : ''">
                       <img src="../assets/black.png" alt="" >
                       <img src="../assets/white.png" alt=""  >
                   </div>
                    <i class="iconfont icon-sousuo" style="font-size: 22px;" @click="showS"></i>
                    <div class="lines" @click="showList" >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nList"  :class="{'shownList':showNav}">
            <span class="x-close" @click="hideList"></span>
             <div class="mCon">
                 <ul>
                     <li class="list" v-for="(item,index) in nlist" :key="index">
                         <div class="item" v-for="(i,idx) in item.con" :key="idx" :style="aStyle(idx)" @click="gotoLink(index,idx)">
                             {{i}}
                         </div>
                     </li>
                 </ul>
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
                <li style="transition-delay: 0.7s"><a href="/contact.html">关于我们</a></li>
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
                showNav:false,
                showa:true,
                select:0,
                menuOpen:false,
                active2:false,
                scrollbar:'',
                top:'',
                nlist:[
                    {con:[
                        "首页",
                            "所有商品",
                            "生活方式",
                            "居家案例",
                            "生活方式",
                            "3D云设计",
                            "我的收藏",
                            "关于我们"
                        ]},
                    // {con:[
                    //         "加盟合作",
                    //         "加盟优势",
                    //         "培训支持",
                    //         "加盟细则",
                    //         "门店形象"
                    //     ]},
                    // {con:[
                    //         "联系我们",
                    //         "附近门店",
                    //         "富邦美品官网"
                    //     ]}
                ],
                list:[
                    "HOME",
                    "ABOUT US",
                    "PRODUCTS",
                    "FAQ",
                    "NEW ARRIVALS",
                    "CONTACT US",
                ]
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
            showS(){
                this.showSearch=true
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
                    const link='/design.html'
                    window.open(link,'_self')
                }else if(i===0 && n===5){
                    const link='/newPro.html'
                    window.open(link,'_self')
                }else if(i===0 && n===6){
                    const link='/collect.html'
                    window.open(link,'_self')
                }else if(i===0 && n===0){
                    const link='/index.html'
                    window.open(link,'_self')
                }else if(i===0 && n===7){
                    const link='/about.html'
                    window.open(link,'_self')
                }
                else if(i===1){
                    const link='/cooperation.html'
                    window.open(link,'_self')
                }
            },
            aStyle(n){
                return {transitionDelay:n*0.1+'s'}
            },
            hideList(){
                this.showNav=false
            },
            showList(){
                this.showNav=true
            },
            gotoC(){
                const link='/collect.html'
                window.open(link,'_self')
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
                    this.showa=true
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
        background-color: white;
        box-shadow: 0 20px 20px -20px rgba(71,71,71,.2);
        .animated{
            animation-delay: 600ms;
        }
        .main{
            width:90%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            transition: all 600ms;
            margin-left: 5%;
            .left{
              display: inline-block;
                width:215px;
                height:27px;
                position: relative;
                overflow: hidden;
                margin-top:25px;
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
                width:45%;
                ul{
                    list-style: none;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width:75%;
                    li{
                        position: relative;
                        margin-left: 3%;
                        padding: 30px 0;
                        cursor: pointer;
                        a:nth-child(1){
                            color:#ACACAC;
                            width:100%;
                            display: inline-block;
                            text-align: center;
                            line-height: 25px;
                            opacity: 1;
                            transition: all 1s;
                            font-family: it;
                        }
                        a:nth-child(2){
                            position: absolute;
                            left:0;
                            top:32px;
                            display: inline-block;
                            width:100%;
                            text-align: center;
                            font-family: "Fira Code Medium";
                            font-weight: lighter;
                            opacity: 0;
                            transition: all 1s;
                            transform: rotateX(180deg);

                        }
                    }
                    li:hover{
                        a:nth-child(1){
                            opacity: 0;
                            transform: rotateX(180deg);
                        }
                        a:nth-child(2){
                            opacity: 1;
                            transform: rotateX(0);
                        }
                    }
                    .showLine{
                        a:nth-child(1){
                            opacity: 0;
                            transform: rotateX(180deg);
                        }
                        a:nth-child(2){
                            opacity: 1;
                            transform: rotateX(0);
                        }
                    }
                    .showLine::after{
                        width:100%;
                    }
                    li::after{
                        position: absolute;
                        left:0;
                        bottom:0;
                        width:0;
                        height:3px;
                        transition: all 1s;
                        content:'';
                        display: inline-block;
                        background-color: black;
                    }
                    li:hover::after{
                        width:100%;
                    }
                }
                .a1{
                    padding-top: 30px;
                    margin-left: 5%;
                    width:20%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .collect{
                        height:20px;
                        width:21px;
                        position: relative;
                        margin-top: 3px;
                        img{
                            position: absolute;
                            left:0;
                            top:0;
                            width:100%;
                            height:100%;
                            transition: all 1s;
                            object-fit: cover;
                            display: block;
                            cursor: pointer;
                        }
                        img:nth-child(1){
                            opacity: 0;
                            z-index: 10;
                        }
                        img:nth-child(2){
                            z-index: 100;
                        }
                    }
                    .collect:hover{
                        img:nth-child(1){
                            opacity: 1;
                            z-index: 100;
                        }
                        img:nth-child(2){
                            opacity: 0;
                            z-index: 10;
                        }
                    }
                    .show{
                        img:nth-child(1){
                            opacity: 1;
                            z-index: 100;
                        }
                        img:nth-child(2){
                            opacity: 0;
                            z-index: 10;
                        }
                    }
                    i{
                        font-size: 20px;
                        color:#ACACAC;
                        cursor: pointer;
                        transition: all 1s;
                        z-index: 1000;
                    }
                    i:hover{
                        color:black;
                    }
                    .lines{
                     width:30px;
                        position: relative;
                        cursor: pointer;
                        div{
                            height:1px;
                            width:100%;
                            position: absolute;
                            background-color: #ACACAC;
                            left:0;
                            transition: all 1s;
                        }
                        div:nth-child(1){
                            top:5px;
                            animation: long 2s linear infinite;
                        }
                        div:nth-child(2){
                            top:15px;
                            width:75%;
                            animation: long2 2s linear infinite;
                            animation-delay: 600ms;
                        }
                        div:nth-child(3){
                            top:25px;
                            width:50%;
                            animation: long3 2s linear infinite;
                            animation-delay: 1s;
                        }
                        @keyframes long {
                            0% {
                                width: 50%;
                            }
                            25% {
                                width: 75%;
                            }
                            50% {
                                width: 100%;
                            }
                            75% {
                                width: 75%;
                            }
                            100% {
                                width: 50%;
                            }
                        }
                        @keyframes long2 {
                            0% {
                                width: 25%;
                            }
                            25% {
                                width: 50%;
                            }
                            50% {
                                width: 75%;
                            }
                            75% {
                                width: 50%;
                            }
                            100% {
                                width: 25%;
                            }
                        }
                        @keyframes long3 {
                            0% {
                                width: 0;
                            }
                            25% {
                                width: 25%;
                            }
                            50% {
                                width: 50%;
                            }
                            75% {
                                width: 25%;
                            }
                            100% {
                                width: 0;
                            }
                        }
                    }
                    .aLine{
                        div:nth-child(2){
                            top:15px;
                            width: 100%;
                            transform: rotate(90deg);
                            -webkit-animation: none;
                            animation: none;
                        }
                        div:nth-child(1),div:nth-child(3){
                            width:100%;
                            animation: none;
                            top:15px;
                        }
                    }
                }
            }
            @media screen and (max-width: 1440px) and (min-width: 1000px){
                .right{
                    width:50%;
                }
            }
        }
        .nList{
            position: absolute;
            right:-40%;
            top:0;
            width:40%;
            background-color: rgba(0,0,0,.8);
            height:100vh;
            transition: all 600ms;
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
                right: 90px;
                position: absolute;
                z-index: 100;
                color: #000;
                transform: scaleX(1);
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
            .mCon{
                width:100%;
                padding: 60px 0;
                padding-bottom: 90px;
                ul{
                    width:100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    list-style: none;
                    opacity: 0;
                    transition: all 600ms;
                    li{
                        width:50%;
                        margin-top: 30px;
                       .item{
                           text-align: center;
                           margin-top: 20px;
                           font-family: "Fira Code Medium";
                           font-weight: lighter;
                           cursor: pointer;
                           color:#7C7C7C;
                           transition: all 1s;
                           opacity: 0;
                           transform: matrix(1, 5, 5, 1, 100, 0);
                           font-size: 14px;
                       }
                        .item:hover{
                            color:white;
                        }
                        /*.item:nth-child(1){*/
                        /*    font-size:20px;*/
                        /*    color:white;*/
                        /*}*/
                        /*.item:nth-child(2){*/
                        /*    font-size:20px;*/
                        /*    color:white;*/
                        /*}*/
                    }
                }
            }
        }
        .shownList{
            right:0;
            z-index: 1000;
            .x-close:before, .x-close:after{
                opacity: 1;
            }
            .x-close:before {
                transform: rotate(-45deg);
            }
            .x-close:after {
                transform: rotate(45deg);
            }
            .mCon{
                ul{
                    opacity: 1;
                    li{
                        .item{
                            opacity: 1;
                            transform: matrix(1, 0, 0, 1, 0, 0);
                        }
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
    /*.dark{*/
    /*    @media screen and (max-width:450px){*/
    /*        .mImg{*/
    /*            display: none;*/
    /*        }*/
    /*        .mImg2{*/
    /*            display: block;*/
    /*        }*/
    /*        .mNav .burger{*/
    /*            background-color: #0C3665;*/
    /*        }*/
    /*    }*/
    /*}*/
</style>
