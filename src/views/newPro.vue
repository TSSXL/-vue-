<template>
    <div class="con">
        <div class="main">
            <div class="nav">
                <div class="left wow">
                    <a href="/index.html">Home-</a>
                    <a href="">3D</a>
                </div>
            </div>
            <div class="allItems">
                <div class="item" v-for="(item,index) in list" :key="index" >
                    <div class="a1">
                        <img class="img1 wow" :src="`http://yibin.sansg.com/upload/${item.SMALLPIC}`" alt="">
                        <div class="bg">
                            <img  :src="`http://yibin.sansg.com/upload/${item.BIGIMG}`" alt="">
                            <img src="../assets/eye.png" alt="">
                        </div>
                    </div>
                    <div class="a2">
                        <p>{{item.PRONAME}}</p>
                        <p>{{item.TITLE2}}</p>
                    </div>
                </div>
            </div>
            <div class="load wow fadeInUp">
                <a @click="showMore">loading more series</a>
            </div>
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import footComponent from '../components/foot'
    import {getProductsUrl} from '../util/lang'
    export default {
        name: "newPro",
        data(){
            return{
                pid:'',
                totalPage:'',
                page:'',
                list:[],
            }
        },
        components:{footComponent},
        mounted(){
            this.$nextTick(()=>{
                this.getProducts('45')
            })
        },
        methods:{
            showMore(){
                if(this.page<=this.totalPage){
                    this.$nextTick(()=>{
                        const url = `${getProductsUrl('zh-CN',this.pid,6,this.page++)}`
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
            gotoInfo(){
                const link='/proInfo.html'
                window.open(link)
            },
            getProducts(id){
                this.pid=id
                this.page=2
                const url = `${getProductsUrl('zh-CN',id,6,1)}`
                this.$axios.get(url).then(res => {
                    this.list=res.data.proarr
                    this.totalPage=res.data.pagershow.totalPagers
                })
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
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding:20px 0;
            border-bottom: 1px solid rgba(0,0,0,.03);
            .left{
                display: flex;
                width:1440px;
                margin: 0 auto;
                flex-direction: row;
                animation-name: transition1;
                animation-duration: 1s;
                animation-fill-mode:forwards;
                a{
                    color:#6C6C6C;
                }
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
                width:32%;
                margin-left: 1%;
                margin-top: 30px;
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
                    .bg{
                        position: absolute;
                        left:0;
                        top:0;
                        width:100%;
                        height:100%;
                        background-color: rgba(0,0,0,.8);
                        opacity: 0;
                        transition: all 1s;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 140px;
                        img:nth-child(2){
                            margin-top: 15px;
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
                        color:#5D5D5D;
                        transition: all 1s;
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
                    .img1{
                        transform: scale(1.05);
                    }
                    .bg{
                        opacity: 1;
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
            .nav,.allItems{
                width:95%;
                margin: 0 auto;
            }
        }
    }
    @media screen and (max-width: 1000px){
        .main{
            .nav,.allItems{
                width:90%;
                margin: 0 auto;
            }
            .allItems{
                flex-direction: column;
                .item{
                    width:100%;
                    margin-left: 0;
                    .a1{
                        .bg{
                            padding-top: 60px;
                        }
                    }
                }
            }
        }
    }
}
</style>
