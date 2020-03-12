<template>
  <div id="app">
    <first-Component page="index" ></first-Component>
      <home-Component></home-Component>
  </div>
</template>

<script>
  import  {WOW} from 'wowjs'
  import firstComponent from '@/components/first.vue'
  import homeComponent from '@/views/home.vue'
  export default {
    name: 'home',
    data(){
      return{
        wow:''
      }
    },
    // watch:{
    //   '$route':'init'
    // },
    components:{firstComponent,homeComponent},
    mounted() {
      this.$nextTick(()=>{
        this.wow=new WOW();
        this.wow.init()
      })
    },
    methods:{
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
  input:focus {
    border-color: #DCDFE6 !important;
    outline: 0;
  }
  textarea:focus{
    border-color: #DCDFE6 !important;
    outline: 0;
    resize: none !important;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  overflow: hidden;
}
</style>
