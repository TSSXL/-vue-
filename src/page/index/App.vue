<template>
  <div id="app">
    <first-Component page="home" v-if="!loader"></first-Component>
    <transition name="el-fade-in">
      <div class="loader-wrap" v-if="loader">
        <img class="logo" v-if="loading" src="../../assets/ablack.png" alt="">
        <div class="loadingbar" v-if="loading">
          <div class="processbar" id="processbar"></div>
        </div>
        <div class="num" id="loadingratio" v-if="loading">0%</div>
      </div>
    </transition>
    <div id="scroller-wrapper" data-scrollbar >
      <home-Component></home-Component>
    </div>

  </div>
</template>

<script>
  import  {WOW} from 'wowjs'
  import Scrollbar from 'smooth-scrollbar';
  import firstComponent from '@/components/first.vue'
  import homeComponent from '@/views/Home.vue'
  import { setTimeout } from 'timers';
  export default {
    name: 'home',
    data(){
      return{
        loader:true,
        loading:false,
        noShow:{},
        wow:'',
        scrollbar:''
      }
    },
    // watch:{
    //   '$route':'init'
    // },
    components:{firstComponent,homeComponent},
    mounted() {
      this.wow=new WOW();
      this.init()
      this.$nextTick(() => {
        setTimeout(()=>{
          this.loading=true
          this.loadingAddNum(0, 10);
        },1000)
      });
      // this.$router.beforeEach((to, from, next) => {
      //   Scrollbar.destroyAll()
      //   next()
      // })
    },
    methods:{
      loadingAddNum(num, step) {
        setTimeout(() => {
          const processbar = document.getElementById('processbar');
          const loadingratio = document.getElementById('loadingratio');
          processbar.style.width = num + '%';
          loadingratio.innerText = num + '%';

          if (num < 99) {
            let startNum = Math.ceil(num + step);
            if (startNum > 100) {
              startNum = 100;
            }
            this.loadingAddNum(startNum, step);
          } else {
            setTimeout(()=>{
              this.loader=false
              this.wow.init()
            },1000)

          }
        }, 200);
      },
      init(){
        this.$nextTick(()=>{
          this.scrollbar = Scrollbar.init(document.getElementById('scroller-wrapper'));
          this.wow.init()
          this.noShow={display:'block'}
          let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
          scrollbar.scrollTo(0,0)
          window.pageYOffset=this.scrollbar.scrollTop
          this.scrollbar.addListener(() => {
            this.wow.scrollHandler()
            window.pageYOffset=this.scrollbar.scrollTop
            if(window.pageYOffset>0){
              this.noShow={display:'none'}
            }
          });
        })
      }
    }
  }
</script>
<style>
  body{
    margin: 0;
    padding: 0;
  }
  ul,li,p,a{
    margin: 0;
    padding: 0;
    text-decoration: none;
    color:black;
  }
  .el-input{
    width:45% !important;
    margin-left:5%;
    margin-top: 30px;
  }
  .el-textarea{
    width:95%;
    margin-left: 5%;
    margin-top: 30px;
  }
  input:focus {
    border-color: #DCDFE6 !important;
    outline: 0;
  }
  textarea:focus{
    border-color: #DCDFE6 !important;
    outline: 0;
    resize: none !important;
  }
  .donghua{
    height:100vh;
    width:100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 999;
    color:white;
    background-color: black;
    animation-duration: 600ms;
    animation-delay: 100ms;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  overflow: hidden;
}
  #scroller-wrapper{
    position: relative;
    height: 100vh;
    overflow: hidden;
    /* z-index: 101; */
  }
  .scrollbar-thumb{
    width:3px !important;
    background-color: black!important;
  }
  .scrollbar-track-y{
    width:3px !important;
  }
  .loader-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 111;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loader-wrap::before{
    content: '';
    position: absolute;
    left: 0;
    top:0;
    width: 50%;
    height: 100%;
    background-color: black;
    animation-name: zoom;
    animation-duration: 4s;
    animation-fill-mode:forwards;
  }
  .loader-wrap::after{
    content: '';
    position: absolute;
    right: 0;
    top:0;
    width: 50%;
    height: 100%;
    background-color:black;
    animation-name: zoom2;
    animation-duration: 4s;
    animation-fill-mode:forwards;
  }
  @keyframes zoom {
    0% {
     width:50%;
    left:0;
    }
    25% {
      width: 0;
      left: 0;
    }
    75% {
      width: 0;
      left: 50%;
    }
    100% {
      width: 50%;
      left: 50%;
    }
  }
  @keyframes zoom2 {
    0% {
      width: 50%;
      right: 0;
    }
    25% {
      width: 0;
      right: 0;
    }
    75% {
      width: 0;
    }
    100% {
      width: 50%;
      right: 50%;
    }
  }
  .loader-wrap .logo{
    position: absolute;
    bottom: 50%;
    margin-bottom: 32px;
    z-index: 100;
  }
  .loader-wrap .num{
    position: absolute;
    top: 50%;
    margin-top: 20px;
    font-size: 19px;
    color: black;
    font-family: 'Embassy BT';
    z-index: 100;
  }
  .loader-wrap .loadingbar{
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    z-index: 1000;
    background-color: #ececec;
  }
  .loader-wrap .loadingbar .processbar{
    width: 0;
    height: 1px;
    background-color: black;
  }
  @media(max-width: 768px){
    .loader-wrap{
      border-width: 20px;
    }
  }
</style>
