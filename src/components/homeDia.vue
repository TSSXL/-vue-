<template>
  <div class="dialog" >
    <div style="height: 300px;overflow: hidden;text-align: left"  data-scrollbar>
      <span v-for="(item,index) in list" :key="index">
          {{item}}
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
          list:[
           "2001---公司成立",
              "2001---汽车继电器专用生产线建成并投入使用",
              "2001--汽车继电器专用生产线建成并投入使用",
              "2001---汽车继电器专用生产线建成并投入使用立",
              "2001---公司成立",
              "2001---公司成立",
              "2001---公司成立",
              "2001---公司成立",
              "2001---公司成立",
              "2001---公司成立",
              "2001---公司成立",
              "2001---公司成立",
              "2001---公司成立",
              "2001---公司成立"
          ]
      }
    },
    mounted(){
      Scrollbar.initAll();
    },
    methods:{
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
