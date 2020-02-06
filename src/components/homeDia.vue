<template>
  <div class="dialog" >
    <div style="height: 140px;overflow: hidden;text-align: left"  data-scrollbar>
      <span>宁波镇明转轴有限公司地处中国沿海开放城市——美丽的宁波，是国内最具专业水准的轴类产品公司。公司现拥有员工500余人，其中各类专业技术人员100余人，拥有先进的数控成套设备和专业的轴类产品生产流水线及新组成的花键轴生产线、大轴生产线、机加生产线和汽车零部件生产线，年销售额达2亿元，生产实力达到国际先进水平……
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
    span{
      line-height: 35px;
      text-align: left;
      font-size: 14px;
    }
  }
</style>
