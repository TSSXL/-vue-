<template>
    <div class="con">
        <div class="main">
         <div class="one">
          <div class="l1">
              <p>Links</p>
              <p>富邦旗下品牌</p>
          </div>
             <div class="l11">
                 <div class="l2">
                     <img class="img1" src="../assets/fb/1.png" alt="" >
                     <img class="img2" src="../assets/fb/c1.png" alt="" >
                 </div>
                 <div class="l2">
                     <img class="img1" src="../assets/fb/2.png" alt="">
                     <img class="img2" src="../assets/fb/c2.png" alt="">
                 </div>
                 <div class="l2">
                     <img class="img1" src="../assets/fb/3.png" alt="">
                     <img class="img2" src="../assets/fb/c3.png" alt="">
                 </div>
                 <div class="l2">
                     <img class="img1" src="../assets/foot/4.png" alt="">
                     <img class="img2" src="../assets/foot/44.png" alt="">
                 </div>
                 <div class="l2">
                     <img class="img1" src="../assets/foot/5.png" alt="">
                     <img class="img2" src="../assets/foot/55.png" alt="">
                 </div>
             </div>
         </div>
            <div class="two">
               <div class="left">
                  <div class="list" v-for="(item,index) in list" :key="index">
                      <div class="item" v-for="(i,idx) in item.con" :key="idx" @click="goto(index,idx)">
                     {{i}}
                      </div>
                  </div>
               </div>
                <div class="right">
                  <p>We Try Our Best To Give It The Best A Good Products Is So Natural</p>
                    <p>cs@fb1952.com</p>
                    <p>
                        <i class="iconfont icon-xinlang"></i>
                        <i class="iconfont icon-weixin"></i>
                        <i class="iconfont icon-ins"></i>
                    </p>
                    <p>
                       <span> © Copyright 2019  EBIN CASA All Rights Reserved.</span>
<!--                        <a href="https://www.sansg.com/" target="_blank">Design In By :sunsem</a>-->
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "foot",
        data(){
            return{
              list:[
                  {con:[
                      "所有商品",
                          "生活方式",
                          "3D云设计"
                      ]},
                  {con:[
                          "居家案例",
                          "设计方案",
                          "我的收藏",
                          // "加盟优势",
                          // "培训支持",
                          // "加盟细则",
                          // "门店形象"
                      ]},
                  {con:[
                      "关于我们",
                          "联系我们",
                          "加盟合作"
                      ]}
              ]
            }
        },
        methods:{
            goto(i,n){
                console.log(i,n)
                if(i===0 && n===0){
                    const link='/pro.html'
                   window.open(link,'_self')
                }else if(i===0 && n===1){
                        const link='/lifestyle.html'
                        window.open(link,'_self')
                }else if(i===0 && n===2){
                    const link='/newPro.html'
                    window.open(link,'_self')
                }else if(i===1 && n===0){
                    const link='/homecase.html'
                    window.open(link,'_self')
                }else if(i===1 && n===1){
                    const link='/design.html'
                    window.open(link,'_self')
                }else if(i===1 && n===2){
                    const link='/collect.html'
                    window.open(link,'_self')
                }else if(i===2 && n===0){
                    const link='/about.html'
                    window.open(link,'_self')
                }else if(i===2 && n===1){
                    const link='/cooperation.html'
                    window.open(link,'_self')
                }else if(i===2 && n===2){
                    const link='/cooperation.html'
                    window.open(link,'_self')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.con{
    width:100%;
    background-color: white;
    .main{
        width:1440px;
        margin: 0 auto;
        .one{
            width:100%;
            display: flex;
            flex-direction:column;
            .l1{
                width:100%;
                display: flex;
                flex-direction: row;
                margin: 30px 0;
                p:nth-child(1){
                    font-family: play;
                    font-size: 30px;
                    color:#131313;
                    text-transform: uppercase;
                }
                p:nth-child(2){
                    color:#3B3B3B;
                  font-family: "Fira Code Medium";
                    font-size: 18px;
                    padding-top: 10px;
                    margin-left: 10px;
                }
            }
            .l11{
                width:100%;
                display: flex;
                flex-direction: row;
           padding-bottom: 30px;
                border-bottom: 1px solid rgba(0,0,0,.03);
                .l2{
                    position: relative;
                    cursor: pointer;
                    .img1{
                        opacity: 1;
                        transition: all 1s;
                    }
                    .img2{
                        position: absolute;
                        left:0;
                        top:0;
                        width:100%;
                        height:100%;
                        opacity: 0;
                        transition: all 1s;
                        transform: rotateX(180deg);
                    }
                }
                .l2:hover{
                    .img1{
                        opacity: 0;
                        transform: rotateX(180deg);
                    }
                    .img2{
                        opacity: 1;
                        transform: rotateX(0);
                    }
                }
                div:nth-child(1){
                    margin-left: 0;
                }
                div{
                    margin-left: 5%;
                }
            }
        }
        .two{
            width:100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 30px 0;
            .left{
                width:60%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .list{
                    width:33%;
                    text-align: center;
                    border-left: 1px solid rgba(0,0,0,.05);
                    .item{
                        color:#7C7C7C;
                   font-family: "Fira Code Medium";
                        font-weight: lighter;
                        font-size: 14px;
                        margin-top: 15px;
                        cursor: pointer;
                        transition: color 1s;
                    }
                    .item:hover{
                        color:black;
                    }
                    .item:nth-child(1){
                        font-size: 16px;
                        color:black;
                        margin-top: 0;
                      font-family: "Fira Code Medium";
                        font-weight: lighter;
                    }
                }
                .list:last-child{
                    border-right: 1px solid rgba(0,0,0,.05);
                }
            }
            .right{
                width:35%;
                margin-left: 5%;
                p{
                    color:#131313;
                }
                p:nth-child(1){
                   font-family: it;
                    font-weight: bold;
                    font-size: 18px;
                    margin: 20px 0;
                    text-transform: capitalize;
                }
                p:nth-child(2){
                    font-family: it;
                    font-weight: bolder;
                    display: inline-block;
                    width:auto;
                    padding-bottom: 2px;
                    border-bottom: 1px solid black;
                }
                p:nth-child(3){
                    color:#A6A6A6;
                    margin: 20px 0;
                    i{
                        margin-left: 20px;
                        font-size: 20px;
                        cursor: pointer;
                        transition: all 1s;
                    }
                    i:nth-child(1){
                        margin-left: 0;
                    }
                    i:hover{
                        color:black;
                    }
                }
                p:nth-child(4){
                    position: relative;
                    width:auto;
                    display: inline-block;
                    span{
                        display: inline-block;
                        font-family: it;
                        font-weight: bold;
                    }
                    a{
                        text-align: right;
                        display: inline-block;
                        position: absolute;
                        right:0;
                        bottom:-30px;
                        transition: all 1s;
                        color:#7C7C7C;
                        font-family: it;
                        font-weight: bold;
                    }
                    a:hover{
                    color:black;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .main{
            width:95%;
        }
    }
    @media screen and (max-width: 1000px){
        .main{
            width:90%;
            .one{
                .l1{
                    justify-content: center;
                }
                .l11{
                    flex-direction: column;
                    align-items: center;
                    div{
                        margin-top: 30px;
                    }
                    div:nth-child(1){
                        margin-top: 0;
                    }
                }
            }
            .two{
                .left{
                    display: none;
                }
                .right{
                    margin-left: 0;
                    width:100%;
                    p{
                        text-align: center;
                        line-height: 30px;
                    }
                    p:nth-child(2){
                        width:100%;
                    }
                }
            }
        }
    }
}
</style>
