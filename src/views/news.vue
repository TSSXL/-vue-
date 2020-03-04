<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/yap/news/nbanner.png" alt="">
        </div>
        <div class="main">
            <div class="nav">
                <p class="wow fadeInDown">新闻资讯</p>
                <p class="wow fadeInDown">information</p>
                <div class="link wow fadeInDown">
                    <div v-for="(item,index) in nList" :key="index" :class="{'active':select===index}" @click="change(index)">
                        {{item}}
                    </div>
                </div>
            </div>
            <transition name="fade">
                <div class="company" v-if="select===0">
             <div class="allItems">
                 <div class="item wow fadeIn" v-for="(item,index) in list" :key="index" @click="gotoInfo(item.ID)">
                     <div class="one">
                         <img :src="`http://yap.sansg.com/upload/${item.SMALLPIC}`" alt="">
                     </div>
                     <div class="two">
                         <p class="title">{{item.TITLE}}</p>
                         <p class="nr">{{item.INTRO}}</p>
                         <div class="time">
                            <p>{{item.SHOWTIME}}</p>
                             <p>></p>
                         </div>
                     </div>
                 </div>
             </div>
                    <div class="btn" @click="showMore">
            <span>
                  MORE
            </span>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div class="company" v-if="select===1">
                    <div class="allItems">
                        <div class="item wow fadeIn" v-for="(item,index) in list2" :key="index" @click="gotoInfo(item.ID)">
                            <div class="one">
                                <img :src="`http://yap.sansg.com/upload/${item.SMALLPIC}`" alt="">
                            </div>
                            <div class="two">
                                <p class="title">{{item.TITLE}}</p>
                                <p class="nr">{{item.INTRO}}</p>
                                <div class="time">
                                    <p>{{item.SHOWTIME}}</p>
                                    <p>></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn" @click="showMore2">
            <span>
                  MORE
            </span>
                    </div>
                </div>
            </transition>
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import footComponent from '../components/foot'
    import { getNewsUrl} from '../util/lang'
    export default {
        name: "about",
        data(){
            return{
                select:0,
                nList:[
                    "公司新闻",
                    "行业资讯"
                ],
                id:'',
                page:'',
                totalPage:'',
                id2:'',
                page2:'',
                totalPage2:'',
                list:[],
                list2:[]
            }
        },
        components:{footComponent},
        mounted() {
            if(window.location.search.replace('?', '').split('=')[1]!==undefined){
                    this.getScroll(parseInt(this.getNid()))
            }
            this.$nextTick(()=>{
                this.getNews('24')
                this.getNews2('25')
            })
        },
        methods:{
            getNews(id){
                this.id=id
                this.page=2
                const url = `${getNewsUrl('zh-CN',id,6,1)}`
                this.$axios.get(url).then(res => {
                    res.data.newsArr.map((item)=>{
                        item.SHOWTIME=item.SHOWTIME.slice(0,11)
                    })
                    this.list=res.data.newsArr
                    this.totalPage=res.data.pagerShow.totalPagers
                })
            },
            showMore(){
                if(this.page<=this.totalPage){
                    this.$nextTick(()=>{
                        const url = `${getNewsUrl('zh-CN',this.id,6,this.page++)}`
                        this.$axios.get(url).then(res => {
                            res.data.newsArr.map((item)=>{
                                item.SHOWTIME=item.SHOWTIME.slice(0,11)
                            })
                            this.list= this.list.concat(res.data.newsArr)
                        })
                    })
                }else{
                    this.$notify({
                        title: '提示',
                        message: '已经加载全部了',
                        offset: 100
                    });
                }
            },
            getNews2(id){
                this.id2=id
                this.page2=2
                const url = `${getNewsUrl('zh-CN',id,6,1)}`
                this.$axios.get(url).then(res => {
                    res.data.newsArr.map((item)=>{
                        item.SHOWTIME=item.SHOWTIME.slice(0,11)
                    })
                    this.list2=res.data.newsArr
                    this.totalPage2=res.data.pagerShow.totalPagers
                })
            },
            showMore2(){
                if(this.page2<=this.totalPage2){
                    this.$nextTick(()=>{
                        const url = `${getNewsUrl('zh-CN',this.id2,6,this.page2++)}`
                        this.$axios.get(url).then(res => {
                            res.data.newsArr.map((item)=>{
                                item.SHOWTIME=item.SHOWTIME.slice(0,11)
                            })
                            this.list2= this.list2.concat(res.data.newsArr)
                        })
                    })
                }else{
                    this.$notify({
                        title: '提示',
                        message: '已经加载全部了',
                        offset: 100
                    });
                }
            },
            getNid () {
                return window.location.search.replace('?', '').split('=')[1].split('?')[0]
            },
            change(n){
                const  link=`/news.html?index=${n}`
                window.open(link,'_self')
                // this.select=n
            },
            getScroll(n){
                this.select=n
            },
            gotoInfo(n){
                const link=`/newsInfo.html?id=${n}`
                window.open(link,'_blank')
            },
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
            position: relative;
            img{
                width:100%;
                object-fit: cover;
                display: block;
            }
        }
        .main{
            width:100%;
            margin: 30px auto;
            position: relative;
            .nav{
                width:1440px;
                margin: 0 auto;
                border-bottom: 2px solid rgba(0,0,0,.1);
                p{
                    text-align: right;
                    color:#666666;
                    animation-duration: 1s;
                }
                p:nth-child(1){
                    font-size: 30px;
                    font-family: "Fira Code Medium";
                }
                p:nth-child(2){
                    font-size: 40px;
                    text-transform: uppercase;
                    animation-delay: 1s;
                    font-family: box;
                }
                .link{
                    width:100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    color:#555555;
                    font-size: 14px;
                    margin: 0 auto;
                    animation-delay: 2s;
                    div{
                        margin-left:30px;
                        font-family: "Fira Code Medium";
                        cursor: pointer;
                        position: relative;
                        padding: 10px 0;
                        &::after{
                            width:0;
                            height:2px;
                            background-color: #333333;
                            position: absolute;
                            left:0;
                            bottom:-1px;
                            content:'';
                            display: inline-block;
                            transition: all 1s;
                        }
                        &:hover::after{
                            width:100%;
                        }
                    }
                    .active::after{
                        width:100%;
                    }
                }
            }
            .company{
                width:1440px;
                margin: 60px auto;
                .allItems{
                    width:100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    .item{
                        width:27%;
                        margin-left: 4%;
                        cursor: pointer;
                        margin-top: 40px;
                        animation-duration: 2s;
                        .one{
                            width:100%;
                            overflow: hidden;
                            img{
                                width:100%;
                                object-fit: cover;
                                display: block;
                                transition: all 1s;
                            }
                        }
                        .two{
                            margin: 15px auto;
                            width:100%;
                            .title{
                                color:#333333;
                               padding: 15px 0;
                                transition: all 1s;
                            }
                            .nr{
                                color:#666666;
                                font-size: 13px;
                                line-height: 25px;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                overflow: hidden;
                            }
                            .time{
                                width:100%;
                                margin: 15px auto;
                                display: flex;
                                flex-direction: row;
                                justify-content: space-between;
                                border-top: 1px solid rgba(0,0,0,.1);
                                padding-top: 15px;
                                position: relative;
                                p{
                                    color:#888888;
                                    font-size: 20px;
                                    font-weight: bolder;
                                    transition: all 1s;
                                    font-family: univer;
                                }
                                p:nth-child(2){
                                    opacity: 0;
                                    transition: all 1s;
                                }
                                &::before{
                                    content:'';
                                    display: inline-block;
                                    width:0;
                                    height:1px;
                                    position: absolute;
                                    left:0;
                                    top:-1px;
                                    background-color: #227CCB;
                                    transition: all 1s;
                                }
                            }
                        }
                        &:hover{
                            .one{
                                img{
                                    transform: scale(1.05);
                                }
                            }
                            .two{
                                .title{
                                    color:#227CCB;
                                }
                                .time{
                                    p{
                                        color:#227CCB;
                                    }
                                    p:nth-child(2){
                                        opacity: 1;
                                    }
                                    &::before{
                                        width:100%;
                                    }
                                }
                            }
                        }
                    }
                }
                .btn{
                    width:352px;
                    height:50px;
                    border-radius:28px;
                    position: relative;
                    cursor: pointer;
                    overflow: hidden;
                    border: 1px solid #CDCDCD;
                    margin: 60px auto;
                    span{
                        position: absolute;
                        left:0;
                        top:0;
                        display: inline-block;
                        width:100%;
                        height:100%;
                        text-align: center;
                        transition: all 1s;
                        line-height: 50px;
                        color:#666666;
                        font-family: "Fira Code Light";
                        font-weight: lighter;
                    }
                    &::before{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 150%;
                        height: 100%;
                        background: #37474f;
                        z-index: 0;
                        -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
                        transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
                        -webkit-transform-origin: 0% 100%;
                        transform-origin: 0% 100%;
                        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.3s;
                        transition: all 1s;
                    }
                    &:hover{
                        span{
                            color:white;
                        }
                    }
                    &:hover::before{
                        opacity: 1;
                        background-color: #3f51b5;
                        -webkit-transform: rotate3d(0, 0, 1, 0deg);
                        transform: rotate3d(0, 0, 1, 0deg);
                        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
                        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
                    }
                }
            }
        }
        .foot{
            animation-name: polygon;
            animation-duration:1s;
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
                clip-path: polygon(50% 0, 99% 50%, 50% 99%, 0 50%);
            }
            100% {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
        }
        @media screen and (max-width: 1440px) and (min-width: 1000px){
            .banner{
                img{
                    height:500px;
                }
            }
            .main{
                .nav,.company{
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
