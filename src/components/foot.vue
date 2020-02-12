<template>
    <div class="con">
        <div class="mone">
            <div class="main">
            <div class="left">
              <p>浙江亿安培电器有限公司</p>
                <div class="icons">
                    <i class="iconfont icon-xinlang"></i>
                    <i class="iconfont icon-QQ"></i>
                    <i class="iconfont icon-weixin"></i>
                </div>
                <div class="im">
                    <img src="../assets/yap/home/Eanper.png" alt="">
                </div>
            </div>
                <div class="center">
                   <p>地址：宁波市海曙区望春工业园区杉杉路197号</p>
                   <p> 电话：0574-2786 9883</p>
                   <p>  传真：0574-2786 9883</p>
                </div>
                <div class="right">
                    <p>邮编：712300</p>
                    <p> 手机：18763941562</p>
                    <p> 邮箱：yianpei@163.com</p>
                </div>
            </div>
        </div>
        <div class="mtwo">
            <div class="mcon">
                <p>
                    COPYRIGHT (©) 2019   宁波亿安培电器有限公司 -版权所有
                </p>
                <a href="http://www.sansg.com/" target="_blank">网站建设：三盛网络</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "foot",
        data(){
            return{
            }
        }
    }
</script>

<style lang="scss" scoped>
.con{
    width:100%;
    .mone{
        width:100%;
        background-color: #505050;
        padding: 30px 0;
        .main{
            width:1440px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 20px 0;
            .left{
                width:33%;
                display: flex;
                flex-direction: column;
                p{
                    color:#E7E7E7;
                    font-family: "Fira Code Medium";
                    font-size: 30px;
                    font-weight: bolder;
                }
                .icons{
                    display: flex;
                    flex-direction: row;
                    width:30%;
                    margin: 30px 0;
                    justify-content: space-between;
                    i{
                        color:black;
                        font-size: 18px;
                        cursor: pointer;
                        transition: all 1s;
                        &:hover{
                            color:#227CCB;
                        }
                    }
                }
            }
            .center{
                p{
                    line-height: 45px;
                    color:#E7E7E7;
                    font-family:"Fira Code Light";
                    font-weight: lighter;
                }
            }
            .right{
                @extend .center;
                p{
                    text-align: right;
                }
            }
        }
    }
    .mtwo{
        width:100%;
        background-color: #262626;
        padding: 30px 0;
        .mcon{
            width:1440px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            p,a{
                color:#8A8A8A;
                font-size: 14px;
                cursor: pointer;
                transition: all 1s;
            }
            p:hover,a:hover{
                color:#227CCB;
            }
            a{
                margin-right: 5%;
            }
        }
    }
    @media screen and (max-width: 1440px) and (min-width: 1000px){
        .mone{
            .main{
                width:90%;
            }
        }
       .mtwo{
           .mcon{
               width:90%;
           }
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
