<template>
  <div class="dialog" >
    <div style="height: 300px;overflow: hidden;text-align: left"  data-scrollbar>
      <span>宁波镇明转轴有限公司位于浙江省宁波市，其前身为宁波销子厂， 成立于1958年，是国内最具专业化生产轴类产品的公司之一。公司现拥有员工300余人，其中各类专业技术人员100余人。公司引进先进的数控成套设备和专业的轴类产品生产流水线，产品具体稳定性强、噪音低等特点，已是国内生产家用电机类转轴，汽车、新能源汽车轴、飞机轴、游艇起动电机轴，电动工具类的串激电机转轴，泵业、阀门类轴、电梯、发电机轴及内燃机车飞机等特殊轴类产品的龙头企业。
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
