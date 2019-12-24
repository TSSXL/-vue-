<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/cbanner.png" alt="">
            <div class="text wow fadeInUp">
                <p class="t1">Join · Ebin</p>
                <p class="t2">品牌优势</p>
                <p class="t3">Branded Advantages</p>
                <div class="three" ref="counts">
                    <div class="item">
                        <p id="num1">1952</p>
                        <p>富邦家具始创于1952年</p>
                    </div>
                    <div class="item">
                        <p id="num2">500</p>
                        <p>隶属于中国企业500强<br>
                            宁波富邦控股集团</p>
                    </div>
                    <div class="item">
                        <p id="num3">60</p>
                        <p>六十多年历史传承的品牌</p>
                    </div>
                    <div class="item">
                        <p id="num4">200000</p>
                        <p>占地面积</p>
                        <p class="l1">㎡</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="one">
                <img class="bigImg" src="../assets/ys.png" alt="">
                <div class="content">
                    <div class="c1">
                        <div class="title wow fadeInUp">
                            <p>8</p>
                            <p>八大优势</p>
                            <p>Advantage</p>
                        </div>
                        <div class="all wow fadeInUp">
                            <div class="item" @click="change(0)" :class="{'aItem':select===0}">
                                <div class="i1">
                                    <i class="iconfont icon-qiyeguanli"></i>
                                </div>
                                <p>企划背景优势</p>
                            </div>
                            <div class="item" @click="change(1)" :class="{'aItem':select===1}">
                                <div class="i1">
                                    <i class="iconfont icon-zuanshi"></i>
                                </div>
                                <p>品牌背景优势</p>
                            </div>
                            <div class="item" @click="change(2)" :class="{'aItem':select===2}">
                                <div class="i1">
                                    <i class="iconfont icon-shafa"></i>
                                </div>
                                <p>产品质量优势</p>
                            </div>
                            <div class="item" @click="change(3)" :class="{'aItem':select===3}">
                                <div class="i1">
                                    <i class="iconfont icon-yuangui"></i>
                                </div>
                                <p>精湛工艺优势</p>
                            </div>
                            <div class="item" @click="change(4)" :class="{'aItem':select===4}">
                                <div class="i1">
                                    <i class="iconfont icon-tuanduisvg"></i>
                                </div>
                                <p>设计团队优势</p>
                            </div>
                            <div class="item" @click="change(5)" :class="{'aItem':select===5}">
                                <div class="i1">
                                    <i class="iconfont icon-hezuo"></i>
                                </div>
                                <p>管理服务优势</p>
                            </div>
                            <div class="item" @click="change(6)" :class="{'aItem':select===6}">
                                <div class="i1">
                                    <i class="iconfont icon-xiaoshou"></i>
                                </div>
                                <p>销售政策优势</p>
                            </div>
                            <div class="item" @click="change(7)" :class="{'aItem':select===7}">
                            <div class="i1">
                                <i class="iconfont icon-dengpao"></i>
                            </div>
                            <p>企业支持优势</p>
                        </div>
                        </div>
                        <transition  name="fade" >
                            <div class="all2 wow fadeInUp" v-if="select===0">
                                <aboutDia :id="select" />
                            </div>
                        </transition>
                        <transition  name="fade" >
                            <div class="all2" v-if="select===1">
                                <aboutDia :id="select" />
                            </div>
                        </transition>
                        <transition  name="fade" >
                            <div class="all2" v-if="select===2">
                                <aboutDia :id="select" />
<!--                                <div class="content2" v-html="info.CONTENT">-->
<!--                                </div>-->
                            </div>
                        </transition>
                        <transition  name="fade" >
                            <div class="all2" v-if="select===3">
                                <aboutDia :id="select" />
                            </div>
                        </transition>
                        <transition  name="fade" >
                            <div class="all2" v-if="select===4">
                                <aboutDia :id="select" />
                            </div>
                        </transition>
                        <transition  name="fade" >
                            <div class="all2" v-if="select===5">
                                <aboutDia :id="select" />
                            </div>
                        </transition>
                        <transition  name="fade" >
                            <div class="all2" v-if="select===6">
                                <aboutDia :id="select" />
                            </div>
                        </transition>
                        <transition  name="fade" >
                        <div class="all2" v-if="select===7">
                            <aboutDia :id="select" />
                        </div>
                    </transition>
                    </div>
                </div>
            </div>
            <div class="two">
             <div class="title wow fadeInUp">
                 <p>加盟细则</p>
                 <p>Joining Rules</p>
             </div>
                <div class="tc">
                 <div class="left wow">
                     <img src="../assets/jm.png" alt="">
                 </div>
                    <div class="right wow">
                      <p>加盟条件</p>
                        <p>Join Conditions</p>
                        <p>
                            了解富邦，认可富邦品牌文化，有良好的公司管理模式与运作规范;<br>
                            有品牌加盟代理运营经验，有建材、家具、家电、家纺等泛家居行业背景者优先;<br>
                            良好的个人信誉，有独立承担投资风险及民事责任的能力;<br>
                            有良好的投资理念和相应的资金实力，准备资金一般在80-200万;<br>
                            有高效稳定的业务团队、丰富的渠道及品牌资源者优先;<br>
                            认同富邦经营管理模式，接受富邦代理商资格审查;<br>
                            已有或能够在区域主流卖场内获得最佳开店位置者优先。
                        </p>
                    </div>
                </div>
            </div>
            <div class="three">
                <div class="title wow fadeInUp">
                    <p>店面要求</p>
                    <p>Store Requirements</p>
                </div>
                <div class="img wow">
                    <img src="../assets/yb.png" alt="">
                </div>
                 <div class="info wow fadeInUp">
                 <div class="item">
                      <p>店面要求</p>
                     <p>当地最成熟、最高端的家具建材商场或当地品牌集中的家具建材商圈,
                         以及地理位置优越、交通便利的独立商场</p>
                 </div>
                     <div class="item">
                         <p>位置要求</p>
                         <p>
                             专业卖场内，店面位置要求B类以上；<br>
                             建材街或建材家具市场内
                         </p>
                     </div>
                     <div class="item">
                      <p>店面要求</p>
                         <p>
                             位置优越（包括但不仅限于门头开阔<br>
                             、店面方正、交通便利、品牌集中）</p>
                     </div>
                     <div class="item">
                      <p>单品牌店面面积要求（单层、实用面积）</p>
                         <p>富邦美品 300㎡/新美荟200㎡/意缤250㎡/至锐250㎡/莱洛克100㎡</p>
                     </div>
                     <div class="item">
                       <p>多品牌综合店（独立商场）店面面积需求</p>
                         <p>2个品牌：300-400㎡/3个品牌：500-600㎡/4个品牌：700-1000㎡</p>
                 </div>
                 </div>
            </div>
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import { CountUp } from 'countup.js'
    import  footComponent from '../components/foot'
    import  aboutDia from '../components/aboutDia'
    import Scrollbar from 'smooth-scrollbar'
    import { getNewsUrl} from '../util/lang'
    export default {
        name: "contact",
        data(){
            return{
                select:0,
                info:{
                    CONTENT:''
                },
            }
        },
        components:{footComponent,aboutDia},
        mounted() {
            Scrollbar.initAll(document.getElementById("scroller-wrapper"));
            let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
            scrollbar.scrollTo(0,1)
            this.count()
            this.$nextTick(()=>{
                this.getInfo(0)
            })
        },
        methods:{
            getInfo(n){
                const url = `${getNewsUrl('zh-CN',n+24,1000,1)}`
                this.$axios.get(url).then(res => {
                  this.info=res.data.newsArr[0]
                })
            },
            change(n){
                this.select=n
                this.getInfo(n)
            },
            count(){
                let element=this.$refs.counts;
                let actualTop = element.offsetTop;
                let current = element.offsetParent;
                while (element=element.offsetParent){
                    actualTop += element.offsetTop;
                    /* current = current.offsetParent; */
                }
                let demoFi1 = new CountUp("num1", 1952);
                let demoFi2 = new CountUp("num2", 500);
                let demoFi3 = new CountUp("num3", 60);
                let demoFi4 = new CountUp("num4", 200000);
                let numok=false;
                let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
                if(scrollbar){
                    scrollbar.addListener((status) => {
                        if(!numok){
                            if(actualTop<status.offset.y+document.body.clientHeight){
                                demoFi1.start();
                                demoFi2.start();
                                demoFi3.start();
                                demoFi4.start();
                                numok=true;
                            }
                        }
                    });
                }
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
        height:100vh;
        img{
            width:100%;
            object-fit: cover;
            display: block;
            height:100%;
        }
        .text{
            position: absolute;
            width:100%;
            top:38%;
            left:0;
            .t1{
                text-align: center;
                font-size: 30px;
                font-style: italic;
                color:white;
                font-family: bem;
                padding-bottom: 60px;
            }
            .t2{
                font-family: "Fira Code Medium";
                font-size: 30px;
                text-align: center;
                color:white;
            }
            .t3{
                font-size: 20px;
                text-align: center;
                color:white;
                font-style: italic;
                font-family: bem;
            }
            .three{
                width:1000px;
                margin: 80px auto;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .item{
                    position: relative;
                    p{
                        text-align: center;
                        color:white;
                    }
                    p:nth-child(1){
                        font-family: ding;
                        font-size: 60px;
                    }
                    p:nth-child(2){
                        font-family: "Fira Code Medium";
                        font-weight: lighter;
                        line-height: 30px;
                    }
                    .l1{
                        position: absolute;
                        right:-30px;
                        top:-10px;
                        font-family: "Fira Code Medium";
                        font-weight: lighter;
                        font-size: 20px;
                    }
                }
            }
        }
    }
    .main{
        width:100%;
        background-color: #F3F4F6;
        .one{
            width:100%;
            position: relative;
            .bigImg{
                width:100%;
                object-fit: cover;
                display: block;
            }
            .content{
                position: absolute;
                left:0;
                top:0;
                width:100%;
                height:100%;
                .c1{
                    width:1440px;
                    margin: 60px auto;
                    display: flex;
                    flex-direction: column;
                    .title{
                        width:100%;
                        p{
                            text-align: center;
                        }
                        p:nth-child(1){
                            font-family: ding;
                            font-size: 100px;
                            text-shadow: 5px 3px 8px rgba(0,0,0,.36);
                        }
                        p:nth-child(2){
                            font-family: "Fira Code Medium";
                            font-weight: bolder;
                            font-size: 25px;
                        }
                        p:nth-child(3){
                            font-style: italic;
                            font-size: 20px;
                            font-family: bem;
                        }
                    }
                    .all{
                        width:100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin: 50px auto;
                        .item{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            cursor: pointer;
                            .i1{
                                height:82px;
                                width:82px;
                                border-radius: 50%;
                                border: 1px solid #CBCBCB;
                                text-align: center;
                                transition: all 1s;
                                i{
                                    color:#929292;
                                    font-size: 30px;
                                    line-height: 82px;
                                    transition: all 1s;
                                }
                            }
                            p{
                                padding: 15px 0;
                          font-family: "Fira Code Medium";
                                font-weight: lighter;
                            }
                        }
                        .item:hover{
                            .i1{
                                background-color: black;
                                i{
                                    color:white;
                                }
                            }
                        }
                        .aItem{
                            .i1{
                                background-color: black;
                                i{
                                    color:white;
                                }
                            }
                        }
                    }
                    .all2{
                        width:1200px;
                        margin: 0 auto;
                        height:550px;
                         background: url("../assets/circle.png") no-repeat;
                        background-size: cover;
                        .content2{
                            width:76%;
                            margin-left: 12%;
                            font-family: "Fira Code Medium";
                            font-weight: lighter;
                            line-height: 40px;
                            font-size: 14px;
                            height:250px;
                            overflow-x: scroll;
                            margin-top: 60px;
                        }
                    }
                }
            }
        }
        .two{
            width:1200px;
            margin: 0 auto;
            padding: 60px 0;
            .title{
                width:100%;
                text-align: center;
                p:nth-child(1){
               font-family: "Fira Code Medium";
                    font-weight: bolder;
                    font-size: 25px;
                }
                p:nth-child(2){
                    font-style: italic;
                    font-size: 20px;
                    padding: 10px 0;
                    font-family: bem;
                }
            }
            .tc{
                width:100%;
                display: flex;
                flex-direction: row;
                margin: 60px 0;
                margin-top: 80px;
                .left{
                    width:45%;
                    overflow: hidden;
                    cursor: pointer;
                    animation-name: transition1;
                    animation-duration: 1s;
                    animation-fill-mode:forwards;
                    img{
                        width:100%;
                        display: block;
                        height:100%;
                        object-fit: cover;
                        transition: all 1s;
                    }
                    img:hover{
                        transform: scale(1.05);
                    }
                }
                .right{
                    width:50%;
                    margin-left: 5%;
                    padding-top: 35px;
                    animation-name: transition2;
                    animation-duration: 1s;
                    animation-fill-mode:forwards;
                    p:nth-child(1){
                    font-family: "Fira Code Medium";
                        font-size: 25px;
                    }
                    p:nth-child(2){
                        font-style: italic;
                        font-size: 20px;
                        color:#848484;
                        padding: 10px 0;
                        font-family: bem;
                    }
                    p:nth-child(3){
             font-family: "Fira Code Medium";
                        font-weight: lighter;
                        line-height: 35px;
                    }
                }
            }
        }
        .three{
            width:100%;
            padding-bottom: 200px;
            .title{
                width:100%;
                text-align: center;
                p:nth-child(1){
                   font-family: "Fira Code Medium";
                    font-weight: bolder;
                    font-size: 25px;
                }
                p:nth-child(2){
                    font-style: italic;
                    font-size: 20px;
                    padding: 10px 0;
                    font-family: bem;
                }
            }
            .img{
                width:100%;
                animation-name: polygon;
                animation-duration: 2s;
                margin: 20px 0;
                img{
                    width:100%;
                    display: block;
                    object-fit: cover;
                }
            }
            .info{
                width:1440px;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                .item{
                    width:30%;
                    margin-left: 2%;
                    margin-top: 40px;
                    p{
                        text-align: center;
                    }
                    p:nth-child(1){
                     font-family: "Fira Code Medium";
                        font-weight: bolder;
                        padding: 20px 0;
                    }
                    p:nth-child(2){
                      font-family: "Fira Code Medium";
                        font-weight: lighter;
                        line-height: 35px;
                        font-size: 15px;
                    }
                }
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
            .one{
                .bigImg{
                    height:1000px;
                }
                .content{
                    .c1{
                        width:95%;
                    }
                }
            }
            .three{
                .info{
                    width:95%;
                }
            }
        }
    }
}
</style>