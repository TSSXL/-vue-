<template>
    <div class="con">
        <div class="main" id="banner">
            <div class="nav" >
                <div class="navC">
                    <div class="left wow">
                        <a href="/index.html">Home-</a>
                        <a href="/pro.html">all</a>
                    </div>
                    <!--                    <div class="right wow" @mouseenter="showNav" @mouseleave="hideNav">-->
                    <!--                        <div >ALL  Product <i class="iconfont icon-arrow-left"></i></div>-->
                    <!--                        <div class="proList" :class="{'animated fadeInUp':active}" v-if="active">-->
                    <!--                            <div v-for="(item,index)  in proList" :key="index" @click="getType(item.ID,item.CALLED)">-->
                    <!--                                {{item.CALLED}}-->
                    <!--                                <i class="iconfont icon-arrow-left"></i>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </div>
            </div>
            <div class="aContent">
                <div class="left animated fadeInLeft">
                    <div class="leftCon">
                        <ul>
                            <li class="all" v-for="(item,index) in proList" :key="index" :class="{'selected':select===index}" @click="change(index,item.CALLED,item.ID)"><a style="cursor: pointer"><span></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{item.CALLED}}</font></font></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-main">
                    <div class="products-category">
                        <div class="title wow fadeInUp" id="title">
                            <a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{text}}</font></font></a></div>
                                        <div class="allItems">
                                            <div class="item wow" v-for="(item,index) in listAll" :key="index" @click="gotoInfo(item.ID)">
                                                <div class="a1">
                                                    <img class="img1" :src="`http://yibin.sansg.com/upload/${item.SMALLPIC}`" alt="">
                                                    <div class="sc" :class="{'show':getNum(item.ID)}">
                                                        <img src="../assets/black.png" alt=""  @click.stop="reShop(item.ID)">
                                                        <img src="../assets/white.png" alt="" @click.stop="addShop(item.ID)">
                                                    </div>
                                                </div>
                                                <div class="a2">
                                                    <p>{{item.PRONAME}}</p>
                                                    <p>{{item.TITLE2}}</p>
                                                </div>
                                            </div>
                                        </div>
                    </div>
                </div>

            </div>
            <div class="load wow fadeInUp">
                <a @click="showMore">回到顶部</a>
            </div>
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import footComponent from '../components/foot'
    import Scrollbar from 'smooth-scrollbar'
    import {getProductstypeUrl2,getProductsUrl} from '../util/lang'
    export default {
        name: "pro",
        data(){
            return{
                select:0,
                text:'所有产品',
                pid:'',
                page:'',
                totalPage:'',
                arr:[],
                num:'',
                active:0,
                listAll:[],
                proList:[
                    {CALLED:'所有',ID:42},
                    {CALLED:'沙发',ID:56},  //二级分类
                    {CALLED:'单人沙发',ID:61},
                    {CALLED:'双人沙发',ID:62},
                    {CALLED:'三人沙发',ID:63},
                    {CALLED:'休闲椅',ID:64},
                    {CALLED:'桌椅',ID:57},   //二级分类
                    {CALLED:'椅子',ID:65},
                    {CALLED:'圆桌',ID:66},
                    {CALLED:'方桌',ID:67},
                    {CALLED:'茶几',ID:58},  //二级分类
                    {CALLED:'圆几',ID:68},
                    {CALLED:'方几',ID:69},
                    {CALLED:'异形',ID:70},
                    {CALLED:'床·床垫',ID:59}, //二级分类
                    {CALLED:'床',ID:71},
                    {CALLED:'床头柜',ID:72},
                    {CALLED:'儿童床',ID:73},
                    {CALLED:'床尾凳',ID:74},
                    {CALLED:'床垫',ID:75},
                    {CALLED:'柜架',ID:60}, //二级分类
                    {CALLED:'装饰柜',ID:76},
                    {CALLED:'书柜',ID:77},
                    {CALLED:'电视柜',ID:78},
                    {CALLED:'书桌',ID:79},
                    {CALLED:'克雷马系列',ID:0},
                    {CALLED:'马雷克系列',ID:1}
                ]
            }
        },
        components:{footComponent},
        mounted(){
            Scrollbar.initAll(document.getElementById("scroller-wrapper"));
            let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
            scrollbar.scrollTo(0,0)
            // this.getPro()
            this.saveList()
            if(localStorage.getItem('fbarr')!==null){
                this.arr=JSON.parse(localStorage.getItem('fbarr'))
            }
            if(window.location.search.split('?')[1]!==undefined && parseInt(window.location.search.split('?')[3].split('=')[1])>10 ){
                // console.log(window.location.search.split('?')[2].split('=')[1])
                this.select=parseInt(window.location.search.split('?')[1].split('=')[1])
                this.text=decodeURI(window.location.search.split('?')[2].split('=')[1])
                this.getProList(parseInt(window.location.search.split('?')[3].split('=')[1]))
            }else if(window.location.search.split('?')[1]!==undefined &&parseInt(window.location.search.split('?')[3].split('=')[1])<10){
                this.select=parseInt(window.location.search.split('?')[1].split('=')[1])
                this.text=decodeURI(window.location.search.split('?')[2].split('=')[1])
                this.getProList2(decodeURI(window.location.search.split('?')[2].split('=')[1]))
            }else{
                this.getProList('42')
            }
        },
        methods:{
            change(n,t,id){
                this.select=n
                this.text=t
                // this.getProList(id)
                const  link=`/pro.html?index=${n}?text=${t}?id=${id}`
                window.open(link,'_self')
                // Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#title"),{
                //     offsetTop:90,
                // })
            },
            getType(id,text){
                const  link=`/pro.html?id=${id}?text=${text}`
                window.open(link,'_self')
            },
            showMore(){
                Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#banner"))
                // if(this.page<=this.totalPage){
                //     this.$nextTick(()=>{
                //         const url = `${getProductsUrl('zh-CN',this.pid,6,this.page++)}`
                //         this.$axios.get(url).then(res => {
                //             this.list=this.list.concat(res.data.proarr)
                //         })
                //     })
                // }else{
                //     this.$notify({
                //         title: '提示',
                //         message: '已经加载全部了',
                //         offset: 100
                //     });
                // }
            },
            // getPro(){
            //     this.$nextTick(()=>{
            //         const url = `${getProductstypeUrl2('zh-CN','42')}`
            //         this.$axios.get(url).then(res => {
            //             this.proList=res.data
            //             console.log(this.proList)
            //         })
            //     })
            // },
            getProList(id){
                // this.pid=id
                // this.page=2
                const url = `${getProductsUrl('zh-CN',id,100000000,1)}`
                this.$axios.get(url).then(res => {
                    this.listAll=res.data.proarr
                    this.totalPage=res.data.pagershow.totalPagers
                })
            },
            saveList(){
                // this.pid=id
                // this.page=2
                const url = `${getProductsUrl('zh-CN',42,100000000,1)}`
                this.$axios.get(url).then(res => {
                        localStorage.setItem('proList',JSON.stringify(res.data.proarr))
                })
            },
            getProList2(type){
                let list=JSON.parse(localStorage.getItem('proList'))
                console.log(list)
               list.map((item)=>{
                   if(type==item.TYPE) {
                       this.listAll.push(item)
                   }
               })
            },
            gotoInfo(id){
                const link = `/proInfo.html?pid=${id}?text=${this.text}`
                window.open(link)
            },
            delete(i){
                var index = this.arr.indexOf(i);
                this.arr.splice(index, 1)
                localStorage.setItem('fbarr',JSON.stringify(this.arr))
            },
            getNum(n){
                if(this.arr.includes(n)){
                    return true
                }
            },
            reShop(n){
                this.delete(n)
                this.$message({
                    showClose: true,
                    message: '取消收藏',
                    type: 'warning'
                });
            },
            addShop(n){
                this.arr.push(n)
                this.$message({
                    showClose: true,
                    message: '成功收藏',
                    type: 'success'
                });
                localStorage.setItem('fbarr',JSON.stringify(this.arr))
            },
            showNav(){
                this.active=true
            },
            hideNav(){
                this.active=false
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
        .main{
            width:100%;
            background-color: #F3F4F6;
            padding: 90px 0;
            .nav{
                width:100%;
                border-bottom: 1px solid rgba(0,0,0,.03);
                .navC{
                    width:1440px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .left{
                        display: flex;
                        flex-direction: row;
                        animation-name: transition1;
                        animation-duration: 1s;
                        animation-fill-mode:forwards;
                        line-height: 60px;
                        a{
                            color:#6C6C6C;
                            transition: all 1s;
                        }
                        a:hover{
                            color:black;
                        }
                    }
                    .right{
                        font-family: "Fira Code Medium";
                        font-weight: lighter;
                        cursor: pointer;
                        position: relative;
                        animation-name: transition2;
                        animation-duration: 1s;
                        animation-fill-mode:forwards;
                        z-index: 100000;
                        height:100%;
                        padding: 20px 50px;
                        .proList{
                            width:100%;
                            top:100%;
                            left:0;
                            transition: all 1s;
                            position: absolute;
                            text-align: center;
                            background-color: rgba(255,255,255,.8);
                            border-radius: 5px;
                            box-shadow:2px 2px 2px 2px rgba(0,0,0,.2);
                            div{
                                color:#5D5D5D;
                                padding: 15px 0;
                                font-size: 15px;
                                transition: all 1s;
                            }
                            div:hover{
                                color:white;
                                background-color: black;
                            }
                        }
                    }
                    .right::before{
                        position: absolute;
                        left:0;
                        top:22px;
                        width:1px;
                        height:20px;
                        background-color: rgba(0,0,0,.2);
                        content:'';
                        display: inline-block;
                    }
                    .right::after{
                        position: absolute;
                        right:0;
                        top:22px;
                        width:1px;
                        height:20px;
                        background-color: rgba(0,0,0,.2);
                        content:'';
                        display: inline-block;
                    }
                }
            }
            .pName{
                width:1440px;
                margin: 0 auto;
                color:#5D5D5D;
                font-family: "Fira Code Medium";
                font-weight: lighter;
                padding: 20px 0;
            }
            .aContent{
                width:100%;
                display: flex;
                flex-direction: row;
                .left{
                    float: left;
                    width: 200px;
                    padding-left: 0;
                    clear: left;
                    .leftCon{
                        margin-top: 20px;
                        padding-left: 30px;
                        position: relative;
                        ul{
                            font-size: 16px;
                            letter-spacing: 1px;
                            list-style: none;
                            margin: 0;
                            padding: 0;
                            li{
                                padding-bottom: 10px;
                                a{
                                    transition: color 300ms;
                                    color: #000;
                                    text-decoration: none;
                                    span{
                                        width: 11px;
                                        height: 11px;
                                        display: inline-block;
                                        background-color: #e5e5e5;
                                        margin-right: 12px;
                                        position: relative;
                                    }
                                    span::after{
                                        content: '';
                                        position: absolute;
                                        background-color: #000;
                                        height: 7px;
                                        width: 7px;
                                        top: 2px;
                                        left: 2px;
                                        opacity: 0;
                                        transition: all 1s;
                                    }
                                }
                            }
                            .selected{
                                span::after{
                                    opacity: 1;
                                }
                            }
                            .all{
                                text-transform: uppercase;
                            }
                        }
                    }
                }
                .col-main{
                    float: right;
                    padding-right: 0;
                    width: calc(100% - 276px);
                    .products-category {
                        width: 100%;
                        margin-top: 17px;
                        margin-bottom: 10px;
                        overflow: hidden;
                        .title{
                            font-size: 18px;
                            text-transform: uppercase;
                            margin: 0;
                            margin-bottom: 15px;
                            font-family: "Avenir","Helvetica Neue",Verdana,Arial,sans-serif;
                            font-weight: 300;
                            padding-left: 40px;
                        }
                        .allItems{
                            width:100%;
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            .item{
                                position: relative;
                                cursor: pointer;
                                width:24%;
                                margin-left: 1%;
                                margin-top: 40px;
                                border-bottom: 1px solid #D9D9D9;
                                animation-name: polygon;
                                animation-duration: 2s;
                                .a1{
                                    width:100%;
                                    overflow: hidden;
                                    position: relative;
                                    .img1{
                                        width:100%;
                                        object-fit: cover;
                                        display: block;
                                        transition: all 1s;
                                    }
                                    .sc{
                                        position: absolute;
                                        right:15px;
                                        top:15px;
                                        height:20px;
                                        width:21px;
                                        img{
                                            position: absolute;
                                            left:0;
                                            top:0;
                                            width:100%;
                                            height:100%;
                                            transition: all 1s;
                                            object-fit: cover;
                                            display: block;
                                        }
                                        img:nth-child(1){
                                            opacity: 0;
                                            z-index: 10;
                                        }
                                        img:nth-child(2){
                                            z-index: 100;
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
                                }
                                .a2{
                                    width:80%;
                                    margin-left: 10%;
                                    padding: 20px 0;
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: space-between;
                                    p{
                                        color:white;
                                        transition: all 1s;
                                        background-color: #9b9b9b;
                                        padding: 3px 5px;
                                        border-radius: 4px;
                                        line-height: 25px;
                                    }
                                }
                            }
                            .item::before{
                                position: absolute;
                                left:0;
                                top:0;
                                width:0;
                                content:'';
                                display: inline-block;
                                height:1px;
                                background-color: black;
                                transition: all 1s;
                                z-index: 100;
                            }
                            .item::after{
                                position: absolute;
                                left:0;
                                bottom:0;
                                width:0;
                                content:'';
                                display: inline-block;
                                height:1px;
                                background-color: black;
                                transition: all 1s;
                                z-index: 100;
                            }
                            .item:hover::before{
                                width:100%;
                            }
                            .item:hover::after{
                                width:100%;
                            }
                            .item:hover{
                                .a1{
                                    img{
                                        transform: scale(1.05);
                                    }
                                }
                                .a2{
                                    p{
                                        background-color: black;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .load{
                padding: 60px 0;
                padding-bottom: 120px;
                width:100%;
                text-align: center;
                a{
                    font-family: it;
                    font-weight: bolder;
                    text-transform: capitalize;
                    cursor: pointer;
                    font-size: 12px;
                    background: transparent;
                    text-decoration: none;
                    padding: 10px 70px;
                    border: 1px solid black;
                    -webkit-tap-highlight-color: transparent;
                    display: inline-block;
                    vertical-align: middle;
                    transform: translateZ(0);
                    box-shadow: 0 0 1px transparent;
                    backface-visibility: hidden;
                    position: relative;
                    transition-property: color;
                    transition-duration: .5s;
                }
                a::before{
                    content: "";
                    position: absolute;
                    z-index: -1;
                    top: 0;
                    left: 0;
                    height:100%;
                    width:100%;
                    right: 0;
                    bottom: 0;
                    background:black;
                    -webkit-transform: scaleX(0);
                    transform: scaleX(0);
                    -webkit-transform-origin: 0 50%;
                    transform-origin: 0 50%;
                    -webkit-transition-property: transform;
                    transition-property: transform;
                    -webkit-transition-duration: .5s;
                    transition-duration: .5s;
                    -webkit-transition-timing-function: ease-out;
                    transition-timing-function: ease-out;
                }
                a:hover{
                    color:white;
                }
                a:hover::before{
                    -webkit-transform: scaleX(1);
                    transform: scaleX(1);
                    -webkit-transition-timing-function: cubic-bezier(.52,1.64,.37,.66);
                    transition-timing-function: cubic-bezier(.52,1.64,.37,.66);
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
                .nav{
                    .navC{
                        width:95%;
                    }
                }
                .pName{
                    width:95%;
                }
            }
        }
    }
</style>