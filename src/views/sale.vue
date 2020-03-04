<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/yap/tech/tbanner.png" alt="">
            <div class="text">
                <p class="animated fadeInUp" style="animation-delay: 0.2s">技术能力</p>
                <p class="animated fadeIn">Technological capability</p>
                <div class="scroll">

                </div>
            </div>
        </div>
        <div class="main">
            <div class="nav">
                <div class="allItems">
                    <div class="item wow fadeInUp" v-for="(item,index) in list" :key="index" @click="change(index)" :class="{'active':select===index}" :style="aStyle(index)">
                        {{item}}
                    </div>
                </div>
            </div>
            <div class="content wow fadeIn">
                <div class="link">
                    <span>您的位置：</span>
                    <a href="./sale.html">
                        技术能力  >
                    </a>
                    <span>&nbsp;{{text}}</span>
                </div>
                <transition name="fade">
                    <div class="product" v-if="select===0">
                      <p class="title wow fadeInUp">技术创新是企业生命力的不竭源泉，是市场竞争力的根本所在</p>
                    <div class="acon wow fadeInUp">
                        <div class="left">
                            <img src="../assets/yap/tech/l.png" alt="">
                        </div>
                        <div class="right">
                            <div class="one three">
                                <p>
                                    多项具有自主知识产权的发明专利，研发技术处于国内领先地位。
                                </p>
                            </div>
                            <div class="two">
                                <img src="../assets/yap/tech/r.png" alt="">
                            </div>
                            <div class="two">
                                <img src="../assets/yap/tech/c.png" alt="">
                            </div>
                            <div class="one">
                                <p>
                                    人才是企业最重要的资源，公司坚持“以人为本，尊重知识，人尽其才”的用人理念，现拥有一支行业优秀的研发队伍，具有强大的技术研发和攻关能力。
                                </p>

                            </div>
                        </div>
                    </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="sc" v-if="select===1">
                 <div class="item wow fadeInUp">
                     <img src="../assets/yap/tech/1.png" alt="">
                 </div>
                        <div class="item wow fadeInUp " >
                            <img src="../assets/yap/tech/2.png" alt="">
                        </div>
                        <div class="item wow fadeInUp" >
                            <img src="../assets/yap/tech/3.png" alt="">
                        </div>
                        <div class="item wow fadeInUp">
                            <img src="../assets/yap/tech/4.png" alt="">
                        </div>
                        <div class="item oItem wow fadeInUp">
                            <p>
                                我们立足于先进的生产设备和工艺技术，致力于自身实力的持续增强，打造国内乃至世界一流品质的汽车继电器产品。
                            </p>

                        </div>
                        <div class="item wow fadeInUp">
                            <img src="../assets/yap/tech/6.png" alt="">
                        </div>
                        <div class="item wow fadeInUp">
                            <img src="../assets/yap/tech/7.png" alt="">
                        </div>
                        <div class="item wow fadeInUp">
                            <img src="../assets/yap/tech/8.png" alt="">
                        </div>
                        <div class="item wow fadeInUp">
                            <img src="../assets/yap/tech/9.png" alt="">
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="sy" v-if="select===2">
                   <div class="one wow fadeInUp" v-html="info.CONTENT">
                   </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="pz" v-if="select===3">
                  <p class="title wow fadeInUp">质量是企业的生命</p>
                        <div class="acon">
                       <div class="item wow fadeInUp" >
                              <p class="p1">专注品质</p>
                           <i class="iconfont icon-zhiliangbz"></i>
                           <p class="p2">以质量求生存，以质量求发展，努力提高产品质量，是公司质量管理体系的核心</p>
                       </div>
                            <div class="item  wow fadeInUp" style="animation-delay: 0.2s">
                                <p class="p1">高效管理</p>
                                <i class="iconfont icon-guanli"></i>
                                <p class="p2">通过贯彻先进的质量理念，不断完善质量管理体系，持续推进产品过程质量控制与检测，强化供应链管理</p>
                            </div>
                            <div class="item  wow fadeInUp" style="animation-delay: 0.3s">
                                <p class="p1">值得信任</p>
                                <i class="iconfont icon-xin"></i>
                                <p class="p2">致力于为每个客户提供高质量的产品，赢得广大客户的信任</p>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import footComponent from '../components/foot'
    import {getContent} from '../util/lang'
    import Scrollbar from 'smooth-scrollbar'
    export default {
        name: "pro",
        data(){
            return{
                select:0,
                text:'产品研发',
           list:[
               "产品研发",
               "生产系统",
               "试验检测",
               "品质保证"
           ],
                info:{}
            }
        },
        components:{footComponent},
        mounted() {
            Scrollbar.initAll(document.getElementById("scroller-wrapper"));
            let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
            scrollbar.scrollTo(0,0)
            this.$nextTick(()=>{
                if(window.location.search.replace('?', '').split('=')[1]!==undefined){
                    this.getScroll(parseInt(this.getNid()))
                    this.text=this.list[parseInt(this.getNid())]
                }
                this.getContent('51')
            })
        },
        methods:{
            getContent(id){
                const url = `${getContent(id)}`
                this.$axios.get(url).then(res => {
                    this.info=res.data
                    console.log(this.info)
                })
            },
            aStyle(n){
                return {animationDelay:0.2*n+'s'}
            },
            change(n){
                const  link=`/sale.html?index=${n}`
                window.open(link,'_self')
            },
            getScroll(n){
                this.select=n
            },
            getNid () {
                return window.location.search.replace('?', '').split('=')[1].split('?')[0]
            },
        }
    }
</script>

<style lang="scss" scoped>
.con{
    width:100%;
    animation: run5 1s linear forwards;
    background-color: #F8F8F8;
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
            display: block;
            width:100%;
            object-fit: cover;
        }
        .text{
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            right:5%;
            bottom:0;
            p{
                animation-duration: 2s;
            }
            p:nth-child(1){
                color:white;
                font-size: 30px;
                font-weight: bolder;
            }
            p:nth-child(2){
                font-size: 60px;
                text-transform: uppercase;
                color:rgba(255,255,255,.1);
                margin-top: -30px;
                font-family: os;
                font-weight: bolder;
            }
            .scroll{
                width:1px;
                height:142px;
                background:rgba(255,255,255,0.15);
                position: relative;
                &::after{
                    content:'';
                    display: inline-block;
                    width:1px;
                    height:23px;
                    background:rgba(255,255,255,1);
                    position: absolute;
                    animation: down 2s infinite linear;
                    left:0;
                    top:0;
                }
                @keyframes down {
                    from{
                        top:0;
                    }
                    to{
                        top:100%;
                    }
                }
            }
        }
    }
    .main{
        width:1440px;
        margin: 30px auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .nav{
            width:223px;;
            .allItems{
                width:100%;
                display: flex;
                flex-direction: column;
                background:rgba(255,255,255,1);
                border:1px solid rgba(225, 225, 225, 1);
                box-shadow:0px 2px 10px 0px rgba(204,204,204,0.52);
                .item{
                    color:#666666;
                    font-family: "Fira Code Light";
                    font-weight: lighter;
                    border-bottom: 1px solid #E1E1E1;
                    text-align: center;
                    padding: 10px 0;
                    cursor: pointer;
                    transition: all 1s;
                    &:hover{
                        background-color: #227CCB;
                        color:white;
                    }
                }
                .active{
                    background-color: #227CCB;
                    color:white;
                }
            }
        }
        .content{
            width:75%;
            margin-left: 5%;
            margin-bottom: 60px;
            .link{
                width:100%;
                border-bottom: 2px solid #E1E1E1;
                display: flex;
                flex-direction: row;
                margin: 20px auto;
                padding-bottom: 15px;
                margin-bottom: 0;
                span,a{
                    color:#666666;
                    font-size: 13px;
                }
                a{
                    transition: all 1s;
                    &:hover{
                        color:#227CCB;
                    }
                }
            }
            .product{
            width:100%;
                .title{
                    font-size: 30px;
                    font-weight: bolder;
                    font-family: "Fira Code Medium";
                    margin: 30px auto;
                    text-align: center;
                    animation-duration: 2s;
                }
                .acon{
                    width:100%;
                    display: flex;
                    flex-direction: row;
                    margin: 20px auto;
                    animation-duration: 2s;
                    .left{
                        width:50%;
                        overflow: hidden;
                        cursor: pointer;
                        img{
                            display: block;
                            width:100%;
                            object-fit: cover;
                            transition: all 1s;
                            height:100%;
                        }
                        &:hover{
                            img{
                                transform: scale(1.05);
                            }
                        }
                    }
                    .right{
                        width:50%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        .one{
                            width:50%;
                            background-color: #227CCB;
                            -moz-box-align: center;
                            p{
                                color:white;
                                font-family: "Fira Code Light";
                                font-weight: lighter;
                                width:90%;
                                margin: 60px auto;
                                line-height: 30px;
                            }
                        }
                        .three{
                            p{
                                margin: 100px auto;
                            }
                        }
                        .two{
                            width:50%;
                            overflow: hidden;
                            cursor: pointer;
                            img{
                                width:100%;
                                height:100%;
                                object-fit: cover;
                                transition: all 1s;
                            }
                            &:hover{
                                img{
                                    transform: scale(1.05);
                                }
                            }
                        }
                    }
                }
            }
            .sc{
                width:100%;
                display: flex;
                margin: 30px auto;
                flex-direction: row;
                flex-wrap: wrap;
                background: url("../assets/yap/tech/tbg.png") no-repeat;
                background-size: cover;
                height:1200px;
                justify-content: space-between;
                .item{
                    width:30%;
                    cursor: pointer;
                    overflow: hidden;
                    height:324px;
                    transition: all 1s;
                    animation-duration: 2s;
                    img{
                        width:100%;
                        display: block;
                        transition: all 1s;
                        object-fit: cover;
                    }
                    &:hover{
                        img{
                            transform: scale(1.05);
                        }
                        box-shadow:0px 10px 10px 0px rgba(210,210,210,0.7);
                    }
                }
                .oItem{
                    background: url("../assets/yap/tech/5.png") no-repeat;
                    background-size: cover;
                    height:324px;
                    p{
                        width:70%;
                        margin: 80px auto;
                        color:white;
                        line-height:35px;
                        font-size: 14px;
                        font-family: "Fira Code Light";
                        font-weight: lighter;
                    }
                }
            }
            .sy{
                width:100%;
                margin: 30px auto;
                padding-bottom: 60px;
                .one{
                    width:100%;
                   font-size: 14px;
                    line-height: 30px;
                }
            }
            .pz{
                width:100%;
                margin: 30px auto;
                background: url("../assets/yap/tech/bg.png") no-repeat;
                height:600px;
                background-size: cover;
                .title{
                    padding: 60px 0;
                    text-align: center;
                    color:#010101;
                    font-weight: bolder;
                    font-size: 30px;
                }
                .acon{
                    width:100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-top: 30px;
                    .item{
                        width:30%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;
                        p,i{
                            color:#666666;
                        }
                        .p1{
                            margin: 30px auto;
                            transition: all 1s;
                        }
                        i{
                            font-size: 90px;
                            transition: all 1s;
                        }
                        .p2{
                            width:90%;
                            font-size: 13px;
                            margin: 10px auto;
                            line-height:25px;
                            text-align: center;
                            font-family: "Fira Code Light";
                            font-weight: lighter;
                        }
                        &:hover{
                            .p1,i{
                                color:#227CCB;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .banner{
            img{
                height:500px;
            }
        }
        .main{
            width:90%;
            .content{
                .sc{
                    .item{
                        height:274px;
                    }
                }
            }
        }
    }
    .foot{
        animation-name: polygon;
        animation-duration: 1s;
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
    @media screen and (max-width: 1000px){
        .main{
            width:90%;
            margin-left: 5%;
        }
    }
}
</style>
