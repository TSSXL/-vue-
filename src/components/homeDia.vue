<template>
  <div class="dialog" >
    <div style="height: 300px;overflow: hidden;text-align: left"  data-scrollbar>
      <span v-for="(item,index) in list" :key="index">
          {{item.TITLE}}
      </span>
    </div>
  </div>
</template>

<script>
  import Scrollbar from 'smooth-scrollbar';
  import { getNewsUrl} from '../util/lang'
  export default {
    name: "aboutDia",
    data(){
      return{
          list:[]
      }
    },
    mounted(){
      Scrollbar.initAll();
      this.$nextTick(()=>{
        this.getNews('26')
      })
    },
    methods:{
      getNews(id){
        const url = `${getNewsUrl('zh-CN',id,10000,1)}`
        this.$axios.get(url).then(res => {
          this.list=res.data.newsArr
          console.log(this.list)
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .dialog{
    width:100%;
      display: flex;
      flex-direction: column;
    span{
      line-height: 30px;
      text-align: left;
      font-size: 14px;
        display: inline-block;
        width:70%;
        position: relative;
        margin-left: 15%;
        margin-top: 10px;
        &::after{
            width:8px;
            height:8px;
            background:rgba(34,124,203,1);
            content:'';
            display: inline-block;
            position: absolute;
            left:-20px;
            top:30%;
        }
    }
  }
</style>
