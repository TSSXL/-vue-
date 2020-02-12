<template>
    <div class="con">
        <div class="main">
            <div class="content">
             <div class="info">
                 <div class="minfo wow fadeInUp">
                     <div class="left">
                         <map-Component class="map"></map-Component>
                     </div>
                     <div class="right">
                       <div class="title">
                           <i class="iconfont icon-loufang"></i>
                           <p>our  office</p>
                       </div>
                         <div class="text">
                             <p class="p1">浙江亿安培电器有限公司</p>
                             <div class="title2">
                                 <i class="iconfont icon-dizhi"></i>
                                 <p>浙江省宁波市梁祝文化公园高新街道高薪大楼5幢1508室</p>
                             </div>
                             <div class="title2">
                                 <i class="iconfont icon-dianhua"></i>
                                 <p>+86-(026)-123 234</p>
                             </div>
                             <div class="title2">
                                 <i class="iconfont icon-youxiang"></i>
                                 <p>18519651235@163.com</p>
                             </div>
                             <div class="title2">
                                 <i class="iconfont icon-fax-fill"></i>
                                 <p>234-567-000</p>
                             </div>
                         </div>
                     </div>
                     <div class="btn" @click="send">
            <span>
                <i class="iconfont icon-liuyan"></i>  在线留言
            </span>
                     </div>
                 </div>
             </div>
            </div>
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import  footComponent from '../components/foot'
    import  mapComponent from '../components/map'
    import Scrollbar from 'smooth-scrollbar'
    export default {
        name: "contact",
        data(){
            return{

            }
        },
        components:{footComponent,mapComponent},
        mounted() {
            Scrollbar.initAll(document.getElementById("scroller-wrapper"));
            let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
            scrollbar.scrollTo(0,0)
        },
        methods:{
            send(){
                const link='mailto:admin@admin.com'
                window.open(link,'_blank')
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
        padding-top: 240px;
        .content{
            background: url("../assets/yap/contact.png") no-repeat;
            background-size: cover;
            height:1268px;
            animation-duration: 2s;
              position: relative;
            .info{
                width:100%;
                height:100%;
                background-color: rgba(0,0,0,.4);
                .minfo{
                    width:1440px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: row;
                    padding: 240px 0;
                    flex-wrap: wrap;
                    .left{
                        width:65%;
                        height:760px;
                        .map{
                            height:100%;
                        }
                    }
                    .right{
                        width:35%;
                        background: -webkit-linear-gradient(top, #A4CAEB 25%,white 100%) ;
                        box-shadow:0px 20px 30px 0px rgba(24,33,42,0.7);
                        .title{
                            width:90%;
                          padding: 20px 0;
                            margin: 0 auto;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            border-bottom: 1px solid rgba(0,0,0,.1);
                            position: relative;
                            i{
                                color:#227CCB;
                                font-size: 20px;
                            }
                            p{
                                color:#0A4F8C;
                                font-size: 14px;
                                text-transform: uppercase;
                                margin-left: 10px;
                                font-family: univer;
                            }
                            &::after{
                                content:'';
                                display: inline-block;
                                width:26px;
                                height:1px;
                                background:rgba(34,124,203,1);
                                left:0;
                                bottom:-1px;
                                position: absolute;

                            }
                        }
                        .text{
                            width:80%;
                            margin: 60px auto;
                            .p1{
                                font-size: 20px;
                                color:#227CCB;
                                font-weight: bolder;
                                text-align: center;
                            }
                            .title2{
                                width:100%;
                                display: flex;
                                flex-direction: row;
                                margin-top: 30px;
                                i{
                                    color:#0A4F8C;
                                    font-size: 25px;
                                }
                                p{
                                    margin-left: 10px;
                                    font-size: 14px;
                                    font-family: "Fira Code Light";
                                    font-weight: lighter;
                                    line-height: 25px;
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
                        background-color: white;
                        margin: 60px auto;
                        span{
                            position: absolute;
                            left:0;
                            top:0;
                            display:flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            width:100%;
                            height:100%;
                            transition: all 1s;
                            line-height: 50px;
                            color:#227CCB;
                            font-family: "Fira Code Light";
                            font-weight: lighter;
                            i{
                                font-size: 30px;
                                margin-right: 20px;
                            }
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
        }
    }
    .foot{
        animation-name: polygon;
        animation-duration: 2s;
    }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
.main{
    .content{
        .info{
            .minfo{
                width:90%;
            }
        }
    }
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
}
</style>