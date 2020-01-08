<template>
    <div class="con">
     <div class="banner">
         <img src="../assets/about/ban.png" alt="">
         <p class="animated fadeInUp">Ebin ·Life · Home</p>
     </div>
        <div class="main">
        <div class="nav">
           <div class="left wow">
               <a href="/index.html">Home-</a>
               <a href="/homecase.html">homecase</a>
           </div>
<!--            <div class="right" @mouseenter="showNav" @mouseleave="hideNav">-->
<!--               <div > {{text}} <i class="iconfont icon-arrow-left"></i></div>-->
<!--                <div class="proList" :class="{'animated fadeInUp':active}" v-if="active">-->
<!--                 <div v-for="(item,index)  in proList" :key="index" @click="getType(item.ID,item.CALLED)">-->
<!--                     {{item.CALLED}}-->
<!--                     <i class="iconfont icon-arrow-left"></i>-->
<!--                 </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
            <div class="allItems">
                <div class="item wow" v-for="(item,index) in list"  :key="index" @click="gotoInfo(item.ID)">
                    <div class="a1">
                        <img  :src="`http://yibin.sansg.com/upload/${item.SMALLPIC}`" alt="">
                    </div>
                    <div class="a2">
                        <p>{{item.PRONAME}}</p>
                        <div v-html="item.MEMO">

                        </div>
                    </div>
                </div>
            </div>
            <div class="load wow fadeInUp">
                <a @click="showMore">loading more series</a>
            </div>
        </div>
        <div class="mCon" v-if="IsShow">
         <div class="content" id="intro">
           <div class="left">
               <homeDia :id="id" />
           </div>
             <div class="right">
              <p class="p1">
                  <span>{{info.PRONAME}}</span>
                  <i class=" el-icon-close" @click="hideDia"></i>
              </p>
                 <div class="memo" v-html="info.MEMO">

                 </div>
             </div>
         </div>
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import footComponent from '../components/foot'
    import homeDia from '../components/homeDia'
    import {getProductstypeUrl2,getProductsUrl,getProductsInfo} from '../util/lang'
    import Scrollbar from 'smooth-scrollbar'
    export default {
        name: "about",
        data(){
            return{
                IsShow:false,
                text:'产品分类',
                active:0,
                pid:'',
                id:'',
                page:'',
                info:{},
                totalPage:'',
                proList:[],
                list:[],
                scrollbar:'',
                top:''
            }
        },
        components:{footComponent,homeDia},
        mounted(){
            Scrollbar.init(document.getElementById("scroller-wrapper"));
            this.scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
            this.scrollbar.scrollTo(0,0)
            this.getPro()
            if(window.location.search.split('?')[1]!==undefined){
                this.text=decodeURI(window.location.search.split('?')[2].split('=')[1])
                this.getProList(parseInt(window.location.search.split('?')[1].split('=')[1]))
            }else{
                this.getProList('44')
            }
        },
        methods:{
            fetchData (nid) {
                this.id=nid
                const url = `${getProductsInfo( 'zh-CN',nid)}`
                this.$axios.get(url).then(res => {
                    this.info=res.data.proarr
                    console.log(this.info)
                })
            },
            getType(id,text){
                const  link=`/homecase.html?id=${id}?text=${text}`
                window.open(link,'_self')
            },
            showMore(){
                if(this.page<=this.totalPage){
                    this.$nextTick(()=>{
                        const url = `${getProductsUrl('zh-CN',this.pid,8,this.page++)}`
                        this.$axios.get(url).then(res => {
                            this.list=this.list.concat(res.data.proarr)
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
            getPro(){
                this.$nextTick(()=>{
                    const url = `${getProductstypeUrl2('zh-CN','44')}`
                    this.$axios.get(url).then(res => {
                        this.proList=res.data
                    })
                })
            },
            getProList(id){
                this.pid=id
                this.page=2
                const url = `${getProductsUrl('zh-CN',id,8,1)}`
                this.$axios.get(url).then(res => {
                    this.list=res.data.proarr
                    this.totalPage=res.data.pagershow.totalPagers
                })
            },
            showNav(){
                this.active=true
            },
            hideNav(){
                this.active=false
            },
            hideDia(){
                this.IsShow=false
                this.scrollbar.scrollTo(0,this.top)
            },
            gotoInfo(id){
                this.top=this.scrollbar.scrollTop
                this.fetchData(id)
                 this.IsShow=true
                setTimeout(()=>{
                    Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#intro"),{
                        offsetTop:100,
                    })
                },100)
                // const link = `/homeInfo.html?pid=${id}?text=${this.text}`
                // window.open(link)
            },
        }
    }
</script>

<style lang="scss" scoped>
.con{
    width:100%;
    animation: run5 1s linear forwards;
    position: relative;
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
        p{
            position: absolute;
            width:100%;
            top:60%;
            left:0;
            text-align: center;
            font-size: 30px;
            font-style: italic;
            color:white;
            font-family: bem;
        }
    }
    .main{
        width:100%;
        .nav{
            width:1440px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0,0,0,.03);
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
        .allItems{
            width:1440px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .item{
                position: relative;
                cursor: pointer;
                width:23.5%;
                margin-left: 1%;
                margin-top: 30px;
                border-bottom: 1px solid #D9D9D9;
                animation-name: polygon;
                animation-duration: 2s;
                transition: all 1s;
                box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
                .a1{
                    width:100%;
                    overflow: hidden;
                    img{
                        width:100%;
                        object-fit: cover;
                        display: block;
                        transition: all 1s;
                    }
                }
                .a2{
                    width:90%;
                    margin-left: 5%;
                    padding: 10px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    p{
                        font-weight: 600;
                        color: #1f1f1f;
                        transition: all 1s;
                    }
                    div{
                        width:90%;
                     padding: 10px 0;
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
                box-shadow: 0 4px 12px rgba(0,0,0,.18);
                .a1{
                    img{
                        transform: scale(1.05);
                    }
                }
                .a2{
                    p{
                        color:black;
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
    .mCon{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,.85);
        padding-top:120px;
        .content{
            width:1440px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            background-color: white;
            height:800px;
            .left{
                width:70%;
            }
            .right{
                width:30%;
                background-color: white;
                .p1{
                    width:90%;
                    margin-left: 5%;
                    padding: 10px 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    span{
                        font-size: 14px;
                        font-weight: 600;
                        line-height: 18px;
                        margin-bottom: 2px;
                        color: #1f1f1f;
                    }
                    i{
                        color:#909399;
                        cursor: pointer;
                    }
                }
                .memo{
                    width:90%;
                    margin-left: 5%;
                }
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
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .main{
            .nav{
                width:95%;
            }
        }
        .mCon{
            .content{
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
                flex-direction: column;
                .item{
                    width:100%;
                    margin-left: 0;
                }
            }
        }
        .mCon{
            .content{
                width:90%;
                flex-direction: column-reverse;
                .left,.right{
                    width:100%;
                }
            }
        }
    }
}
</style>
