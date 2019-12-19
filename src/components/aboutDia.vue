<template>
  <div class="dialog" >
    <div style="height: 300px;overflow: hidden;text-align: left"  data-scrollbar>
      <span v-html="info.CONTENT"></span>
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
            info:''
        }
      },
      props:['id'],
    mounted(){
      Scrollbar.initAll();
      this.getInfo()
    },
      methods:{
          getInfo(){
              const url = `${getNewsUrl('zh-CN',this.id+24,1000,1)}`
              this.$axios.get(url).then(res => {
                  this.info=res.data.newsArr[0]
              })
          },
      }
  }
</script>

<style lang="scss" scoped>
  .dialog{
    width:80%;
    margin-left: 10%;
    margin-top: 60px;
    span{
      line-height: 30px;
      text-align: left;
      font-size: 14px;
    }
  }
</style>
