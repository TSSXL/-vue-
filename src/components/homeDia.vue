<template>
  <div class="dialog" >
    <div style="height: 800px;overflow: hidden;text-align: left"  data-scrollbar>
      <div class="info" v-html="info.CONTENT">
      </div>
    </div>
  </div>
</template>

<script>
  import Scrollbar from 'smooth-scrollbar';
  import { getProductsInfo} from '../util/lang'
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
            const url = `${getProductsInfo( 'zh-CN',this.id)}`
            this.$axios.get(url).then(res => {
              this.info=res.data.proarr
              console.log(this.info)
            })
          }
      }
  }
</script>

<style lang="scss" scoped>
  .dialog{
    width:100%;
    div{
      line-height: 30px;
      text-align: left;
      font-size: 14px;
    }
  }
</style>
<style scoped>
    .info >>>  p{
      width:90%;
      margin-left: 5%;
    }
</style>
