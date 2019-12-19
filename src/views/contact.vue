<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/pro/banner.png" alt="">
        </div>
        <div class="nav">
            <p>HOME > <span>CONTACT US</span> </p>
        </div>
        <div class="main">
            <p class="title">NINGBO TOMAN IMP. & EXP. CO.,LTD</p>
            <img src="../assets/contact.png" alt="">
        </div>
        <div class="mainCon">
            <div class="item">
                <p>Email<br>
                    inquiry@craftsorganizer.com
                </p>
            </div>
            <div class="item">
                <p>
                    Website<br>
                    www.craftsorganizer.com
                </p>
            </div>
            <div class="item">
                <p>
                    Phone<br>
                    86-0574-88329041
                </p>
            </div>
            <div class="item">
                <p>
                    Rm 1306, Jinhui Bldg., NO.1, Lane 42,<br>
                    Xingning Road, Ningbo, China 315040
                </p>
            </div>
        </div>

        <div class="main2">
         <p class="t">
             Do you have any questions about our packaging solutions and services, or any other requests?<br>
             Then simply contact us – we’ll be happy to help. Please use our contact form.<br>
             We will respond as soon as possible.
         </p>
            <div class="all">
                <el-input  placeholder="First Name*"></el-input>
                <el-input  placeholder="Last Name"></el-input>
                <el-input  placeholder="Company*"></el-input>
                <el-input  placeholder="Phone"></el-input>
                <el-input  placeholder="Email*"></el-input>
                <el-input  placeholder="Subject*"></el-input>
                <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="If you have any suggestions or question for us .Please contact us."
                       >
                </el-input>
            </div>
            <div class="btn">
                <span>Submit</span>
            </div>
        </div>
        <foot-Component></foot-Component>
    </div>
</template>

<script>
    import  footComponent from '../components/foot'
    export default {
        name: "contact",
        components:{footComponent}
    }
</script>

<style lang="scss" scoped>
.con{
    width:100%;
    .banner{
        width:100%;
        img{
            width:100%;
            object-fit: cover;
        }
    }
    .nav{
        width:1280px;
        margin: 0 auto;
        border-bottom: 1px solid #E8E8E8;
        padding: 30px 0;
        p{
            font-size: 14px;
            color:#BABABA;
            span{
                color:#F7BC30;
            }
        }
    }
    .main{
        width:1000px;
        margin: 0 auto;
      padding-top: 60px;
        padding-bottom: 30px;
        .title{
            font-size: 25px;
            font-weight: bolder;
            text-align: center;
            margin-left: 10%;
            padding-bottom: 60px;
        }
        img{
            width:100%;
            cursor: pointer;
            transition: all 2s;
        }
        img:hover{
            transform: rotateY(180deg);
        }
    }
    .mainCon{
        width:1250px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        .item{
            text-align: center;
            width:25%;
            cursor: pointer;
            p{
                line-height: 35px;
                padding-left: 30px;
                font-family: "Fira Code Medium";
                font-weight: lighter;
                color:#1C1C1C;
                transition: all 2s;
                font-family: 'tsd';
            }
        }
        .item:hover{
        p{
            color:#F7BC30;
        }
        }
    }
    .main2{
        width:1250px;
        margin: 60px auto;
        .t{
            text-align: center;
            color:#1C1C1C;
            line-height: 30px;
            font-size: 18px;
            font-family: 'tsd';
        }
        .all{
            width:100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 40px;
        }
        .btn{
            width:90%;
            margin-left: 5%;
            margin-top: 30px;
            span{
                padding: 10px 28px;
                background-color: black;
                color:white;
                transition: all 1s;
                cursor: pointer;
                font-size: 14px;
            }
            span:hover{
                background-color: #F7BC30;
            }
        }
    }
}
</style>