<template>
  <div id="app">
    <first-Component page="job"></first-Component>
    <div id="scroller-wrapper" data-scrollbar >
      <home-Component></home-Component>
    </div>

  </div>
</template>

<script>
  import  {WOW} from 'wowjs'
  import Scrollbar from 'smooth-scrollbar';
  import firstComponent from '@/components/first.vue'
  import homeComponent from '@/views/job.vue'
  export default {
    name: 'contact',
    data(){
      return{
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
      // this.$router.beforeEach((to, from, next) => {
      //   Scrollbar.destroyAll()
      //   next()
      // })
    },
    methods:{
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
  .el-carousel__arrow--left,  .el-carousel__arrow--right{
    top:45% !important;
    background-color: #F37041 !important;
  }
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
    background-color:#F37041!important;
  }
  .scrollbar-track-y{
    width:3px !important;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
