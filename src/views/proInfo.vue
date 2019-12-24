<template>
    <div class="con">
        <div class="main">
            <div class="nav">
                <div class="navC">
                    <div class="left wow">
                        <a href="/index.html">Home-</a>
                        <a href="/pro.html">All Product</a>
                    </div>
                    <div class="right wow" @mouseenter="showNav" @mouseleave="hideNav">
                        <div >ALL  Product <i class="iconfont icon-arrow-left"></i></div>
                        <div class="proList" :class="{'animated fadeInUp':active}" v-if="active">
                            <div v-for="(item,index)  in proList" :key="index" @click="getType(item.ID,item.CALLED)">
                                {{item.CALLED}}
                                <i class="iconfont icon-arrow-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="pName wow fadeInUp">- {{text}} - </p>
            <div class="content">
                <swiper :options="swiperOptionTop" class="gallery-top wow" ref="swiperTop" v-if="list.length>0">
                    <swiper-slide class="item" v-for="(item,index) in list" :key="index">
                        <img :src="`http://yibin.sansg.com/upload/${item.PICURL}`" alt="" >
                    </swiper-slide>
                    <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
                    <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
                </swiper>
                <swiper :options="swiperOptionThumbs" class="gallery-thumbs wow" ref="swiperThumbs" v-if="list.length>0">
                    <swiper-slide class="item" v-for="(item,index) in list" :key="index">
                        <img :src="`http://yibin.sansg.com/upload/${item.PICURL}`" alt="">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="action">
                <div class="left" :class="{'show':IsCollect}">
                    <img src="../assets/black.png" alt="" @click="reShop">
                    <img src="../assets/white.png" alt="" @click="addShop" >
                </div>
                <div class="right">
                   <i class="iconfont icon-quanping" @click="showBig"></i>
                </div>
            </div>
            <div class="proInfo">
                 <p class="wow fadeIn">{{info.PRONAME}}</p>
                <p class="wow fadeInUp">{{info.TITLE2}}</p>
                <div class="jj wow fadeInUp" v-html="info.MEMO"></div>
                <div class="html wow fadeInUp" v-html="info.CONTENT">

                </div>
<!--                <div class="load wow fadeInUp">-->
<!--                    <a>loading more series</a>-->
<!--                </div>-->
            </div>
        </div>
        <div class="bigImg" v-if="IsShow" @click="hideShow">
            <el-carousel class="allImg" id="ia" :interval="4000" type="card" height="600px">
                <el-carousel-item v-for="(item,index) in list" :key="index">
                    <img :src="`http://yibin.sansg.com/upload/${item.PICURL}`" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import  footComponent from '../components/foot'
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";
    import Scrollbar from 'smooth-scrollbar'
    import {getProductstypeUrl2,getProductsInfo} from '../util/lang'
    export default {
        name: "proInfo",
        data(){
            return{
                arr:[],
                text:'',
                IsShow:false,
                IsCollect:false,
                active:0,
                info:{},
                list:[],
                proList:[],
                swiperOptionTop: {
                    spaceBetween: 10,
                    loop: false,
                    speed:1000,
                    loopedSlides: 5, //looped slides should be the same
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    spaceBetween: 10,
                    slidesPerView: 4,
                    touchRatio: 0.2,
                    loop: false,
                    speed:1000,
                    loopedSlides: 5, //looped slides should be the same
                    slideToClickedSlide: true,
                },
                scrollbar:''
            }
        },
        components:{footComponent,swiper, swiperSlide },
        mounted(){
            Scrollbar.initAll(document.getElementById("scroller-wrapper"));
            this.scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
            this.scrollbar.scrollTo(0,1)
            if(localStorage.getItem('fbarr')!==null){
                this.arr=JSON.parse(localStorage.getItem('fbarr'))
            }
            this.$nextTick(() => {
                this.getPro()
                this.getNid()
                this.getNid2()
                this.fetchData()
                this.getNum()
                this.text=decodeURI(this.getNid2())
            })
        },
        methods:{
            getType(id,text){
                const  link=`/lifestyle.html?id=${id}?text=${text}`
                window.open(link,'_self')
            },
            getNum(){
              let id=window.location.search.replace('?', '').split('=')[1].split('?')[0]
                console.log(id)
                if(this.arr.includes(id)){
                    this.IsCollect=true
                }
            },
            getPro(){
                this.$nextTick(()=>{
                    const url = `${getProductstypeUrl2('zh-CN','43')}`
                    this.$axios.get(url).then(res => {
                        this.proList=res.data
                    })
                })
            },
            getNid () {
                return window.location.search.replace('?', '').split('=')[1].split('?')[0]
            },
            getNid2 () {
                return window.location.search.replace('?', '').split('=')[2]
            },
            fetchData () {
                const nid = this.getNid()
                const url = `${getProductsInfo( 'zh-CN',nid)}`
                this.$axios.get(url).then(res => {
                    this.info=res.data.proarr
                    this.list=res.data.proimg
                    setTimeout(()=>{
                        const swiperTop = this.$refs.swiperTop.swiper
                        const swiperThumbs = this.$refs.swiperThumbs.swiper
                        swiperTop.controller.control = swiperThumbs
                        swiperThumbs.controller.control = swiperTop
                    },100)
                })
            },
            hideShow(){
                this.IsShow=false
                this.scrollbar.scrollTo(0,this.top)
            },
            showBig(){
                this.top=this.scrollbar.scrollTop
                this.IsShow=true
                setTimeout(()=>{
                    Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#ia"),{
                        offsetTop:200
                    })
                },100)
            },
            addShop(){
                const nid = this.getNid()
                this.IsCollect=true
                this.arr.push(nid)
                this.$message({
                    showClose: true,
                    message: '成功收藏',
                    type: 'success'
                });
                localStorage.setItem('fbarr',JSON.stringify(this.arr))
            },
            reShop(){
                const nid = this.getNid()
                this.IsCollect=false
                this.delete(nid)
                this.$message({
                    showClose: true,
                    message: '取消收藏',
                    type: 'warning'
                });
            },
            delete(i){
                var index = this.arr.indexOf(i);
                this.arr.splice(index, 1)
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
    position: relative;
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
        .content{
            width:1440px;
            margin: 40px auto;
            .gallery-top{
                animation-name: polygon;
                animation-duration: 2s;
                width:100%;
                .item{
                    text-align: center;
                    overflow: hidden;
                    img{
                        cursor: pointer;
                        transition: all 1s;
                    }
                    img:hover{
                        transform: scale(1.05);
                    }
                }
            }
            .gallery-thumbs{
                height:150px;
                animation-name: polygon;
                animation-duration: 2s;
                width:100%;
                margin: 10px auto;
                .item{
                    overflow: hidden;
                 img{
                     width:100%;
                     height:100%;
                     object-fit: cover;
                     cursor: pointer;
                     transition: all 1s;
                 }
                    img:hover{
                        transform: scale(1.05);
                    }
                }
            }
        }
        .action{
            width:1440px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            .left{
                height:20px;
                width:21px;
                position: relative;
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
            .right{
                margin-left: 10px;
                i{
                    font-size: 20px;
                    color:#5D5D5D;
                    cursor: pointer;
                }
            }
        }
        .proInfo{
            width:1440px;
            margin: 30px auto;
            p{
                animation-duration: 2s;
            }
            p:nth-child(1){
                font-size: 40px;
                font-family: it;
                padding-bottom: 10px;
            }
            p:nth-child(2){
                color:#5D5D5D;
                 font-family: it;
                padding-bottom: 10px;
            }
            .jj{
                font-family: "Fira Code Medium";
                font-weight: lighter;
                color:#5D5D5D;
                line-height: 30px;
                animation-duration: 4s;
            }
            .html{
                width:100%;
                font-size: 14px;
                line-height: 30px;
                margin: 30px auto;
                animation-duration: 2s;
            }
            .load{
                margin: 30px auto;
                width:100%;
                text-align: center;
                animation-duration: 2s;
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
    }
    .foot{
        animation-name: polygon;
        animation-duration: 2s;
    }
    .bigImg{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,1);
        padding-top: 200px;
        z-index: 1000;
        .allImg{
            width:1440px;
            margin: 0 auto;
            img{
                width:100%;
                height:100%;
                object-fit: cover;
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
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0,100%,0);
            transform: translate3d(0,100%,0);
        }

        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .main{
            .nav{
                .navC{
                    width:95%;
                }
            }
            .pName,.content,.action,.proInfo{
                width:95%;
            }
        }
    }
}
</style>
<style scoped>
    @media screen and (max-width:450px){
        .htmlCon >>>  table{
            width:100%;
            word-break: break-all;
        }
        .htmlCon >>>  div img{
            width:100%;
        }
        .htmlCon >>>  p img{
            width:100%;
            object-fit: contain;
        }
    }
</style>