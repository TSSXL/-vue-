<template>
    <div class="con">
        <div class="banner">
            <img src="../assets/pro/banner.png" alt="">
        </div>
        <div class="nav">
            <p>HOME > <span>FAQ</span> </p>
        </div>
        <div class="main">
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="one">
                <div class="im">
                    <img src="../assets/faq/w.png" alt="">
                </div>
                <p>{{item.a}}</p>
            </div>
            <div class="two">
                <div class="im">
                    <img src="../assets/faq/d.png" alt="">
                </div>
                <p>{{item.b}}</p>
            </div>
        </div>
        </div>
        <foot-Component></foot-Component>
    </div>
</template>

<script>
    import  footComponent from '../components/foot'
    export default {
        name: "faq",
        data(){
            return{
                list:[
                    {
                        a:'Q: What\'s your major products/business? ',
                        b:'A: We are main manufacturer and leading exporter of Beads storage box, Beads Divider, Bead Organizer, Plasic Canvas, Doll Display Case and so on.  '
                    },
                    {
                        a:'Q: Where are you located? ',
                        b:'Our business office is located in Ningbo City, the address in details:\n' +
                            'Rm1306, Jinhui Bldg.,No.1, Lane 42,\n' +
                            'Xingning Road,Ningbo,China 315040\n'
                    },
                    {
                        a:'\n' +
                            '                            Q: What\'s your minimum order amount\n' +
                            '                        ',
                        b:'A: No Minimum Order. You can feel free to buy anything, even one item, because we also have Amazon shop. https://www.amazon.com/s?k=jdonow&dc&ref=a9_sc_1If you want place bulk order, please contact us directly by email.'
                    },
                    {
                        a:'Q:If the items I want are not in your product list, can I ask you to find or produce them for me? ',
                        b:'A: Yes, please feel free to send email to inquiry@craftsorganizer.com with the PICTURE and SPECIFICATION of the goods you expect us to find, we will try our best to find them out. In some case, we will produce them for you specially.\n'
                    },
                    {
                        a:'Q:What makes NINGBO TOMAN different from any other sellers? ',
                        b:'\n' +
                            '                            At TOMAN,We would always offer our customers a world-class shopping experience.\n' +
                            'All of the products you bought from TOMAN are first-class quality. \n' +
                            'Because we have a strong and professional QC(Quality Control Department) to ensure the product quality. We are confident of our products quality compared with other sellers.\n' +
                            'Also,our FREE SAMPLE policy is there. We are ready to send samples for your evaluation in case.\n' +
                            '                        '
                    },
                    {
                        a:'Q:Is any stock of your products available? If I place my order,what\'s the delivery? ',
                        b:'\n' +
                            '                            Yes, most of our popular products are in stock normally. \n' +
                            'Please kindly contact us for more information.\n' +
                            '\n' +
                            '                        '
                    }
                ]
            }
        },
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
        width:1280px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding-bottom: 60px;
        .item{
            width:100%;
            display: flex;
            flex-direction: column;
            .one,.two{
                width:100%;
                display: flex;
                flex-direction: row;
                margin-top: 30px;
                align-items: center;
                .im{
                    height:60px;
                    width:60px;
                    border: 1px solid rgba(154, 154, 154, .3);
                    border-radius: 50%;
                    text-align: center;
                    img{
                        margin-top: 14px;
                    }
                }
            }
            p{
                padding-left: 20px;
                width:80%;
                font-size: 18px;
            }
            .one{
                p{
                    color:#2D2D2D;
                }
            }
            .two{
                p{
                  color:#7E7E7E;
                    font-size: 16px;
                    line-height: 30px;
                }
            }
        }
    }
}
</style>