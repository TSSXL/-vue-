<template>
    <div class="con">
        <div class="main">
            <div class="allItems">
                <div class="item wow" v-for="(item,index) in list" :key="index" @click="gotoInfo(item.ID)">
                    <div class="a1">
                        <img class="img1" :src="`http://yibin.sansg.com/upload/${item.SMALLPIC}`" alt="">
                        <div class="sc" :class="{'show':getNum(item.ID)}">
                            <img src="../assets/black.png" alt=""  @click.stop="reShop(item.ID)">
                            <img src="../assets/white.png" alt="" @click.stop="addShop(item.ID)">
                        </div>
                    </div>
                    <div class="a2">
                        <p>{{item.PRONAME}}</p>
                        <p>{{item.TITLE2}}</p>
                    </div>
                </div>
            </div>
<!--            <div class="load wow fadeInUp">-->
<!--                <a>loading more series</a>-->
<!--            </div>-->
        </div>
        <foot-Component class="foot wow"></foot-Component>
    </div>
</template>

<script>
    import footComponent from '../components/foot'
    import {getProductsUrl} from '../util/lang'
    export default {
        name: "pro",
        data(){
            return{
                arr:[],
                active:0,
                list:[]
            }
        },
        components:{footComponent},
        mounted(){
            this.getProList('42')
            if(localStorage.getItem('fbarr')!==null){
                this.arr=JSON.parse(localStorage.getItem('fbarr'))
            }
        },
        methods:{
            getProList(id){
                const url = `${getProductsUrl('zh-CN',id,10000,1)}`
                this.$axios.get(url).then(res => {
                    res.data.proarr.forEach(item=>{
                        if(this.arr.indexOf(item.ID)!==-1){
                            this.list.push(item)
                        }
                    })
                    // for循环实现
                    // for(let i=0;i<res.data.proarr.length;i++){
                    //    for(let j=0;j<this.arr.length;j++){
                    //        if(res.data.proarr[i].ID===this.arr[j]){
                    //            this.list.push(res.data.proarr[i])
                    //        }
                    //    }
                    // }
                })
            },
            gotoInfo(id){
                const link = `/proInfo.html?pid=${id}?text=All Product`
                window.open(link)
            },
            delete(i){
                var index = this.arr.indexOf(i);
                this.arr.splice(index, 1)
                localStorage.setItem('fbarr',JSON.stringify(this.arr))
            },
            getNum(n){
                if(this.arr.includes(n)){
                    return true
                }
            },
            reShop(n){
             this.delete(n)
                this.$message({
                    showClose: true,
                    message: '取消收藏',
                    type: 'warning'
                });
            },
            addShop(n){
                this.arr.push(n)
                this.$message({
                    showClose: true,
                    message: '成功收藏',
                    type: 'success'
                });
                localStorage.setItem('fbarr',JSON.stringify(this.arr))
            },
            showNav(){
                this.active=true
            },
            hideNav(){
                this.active=false
            }
        }
    }
</script>

<style lang="scss" scoped>
.con{
    width:100%;
    animation: run5 1s linear forwards;
    background-color: #F3F4F6;
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
        padding: 90px 0;
        .allItems{
            width:100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .item{
                position: relative;
                cursor: pointer;
                width:23.5%;
                margin-left: 1.2%;
                margin-top: 40px;
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
                    .sc{
                        position: absolute;
                        right:15px;
                        top:15px;
                        height:20px;
                        width:21px;
                        img{
                            position: absolute;
                            left:0;
                            top:0;
                            width:100%;
                            height:100%;
                            transition: all 1s;
                            object-fit: cover;
                            display: block;
                        }
                        img:nth-child(1){
                            opacity: 0;
                            z-index: 10;
                        }
                        img:nth-child(2){
                            z-index: 100;
                        }
                    }
                    .show{
                        img:nth-child(1){
                            opacity: 1;
                            z-index: 100;
                        }
                        img:nth-child(2){
                            opacity: 0;
                            z-index: 10;
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
    @media screen and (max-width: 1000px){
        .main{
            width:90%;
            margin-left: 5%;
            .allItems{
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
