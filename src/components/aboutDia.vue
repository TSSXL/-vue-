<template>
  <div class="dialog" >
    <div style="height: 300px;overflow: hidden;text-align: left"  data-scrollbar>
      <span>　　浙江亿安培电器有限公司是一家专业从事汽车继电器、新能源专用继电器、电器控制盒、高压配电盒、汽车电子控制模块等产品的研发、生产、销售、服务于一体的高新科技企业。产品广泛应用于汽车、新能源、工程机械、光伏、工业控制等领域。<br>
　　公司始创于2008年，经过十几年不断发展壮大，汇聚了一大批来自国内外知名企业的优秀人才，其核心技术成员拥有继电器和汽车电子行业20年研发制造经验。本着“技术领航，高效创新”的核心原则，已为公司取得50多项技术专利，并自主研制了国内领先的汽车继电器自动化生产线，以及汽车电器控制盒和高压配电盒生产线，继电器年生产能力达2亿只。<br>
　　公司秉承“优质服务，以质取胜”的经营方针，通过贯彻先进的质量理念，不断完善质量管理体系，严格按照ISO9001、ISO14001和IATF16949标准建立了完整的管理体系，并保持体系有效运行，实现精准、高效的管理，使产品质量已达到国际领先水平，赢得了国内外广大客户的一致赞誉。<br>
　　公司产品50%以上销往全世界80多个国家和地区，长期与德国、美国、加拿大、日本、韩国、印度等国家建立稳定的技术合作与产品供求关系。立足现在，放眼未来，亿安培愿与全体员工一起携手奋进，力争成为全球汽车电子领域一流企业。

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
      margin: 5px auto;
    span{
      line-height: 30px;
      text-align: left;
      font-size: 14px;
        color:#333333;
    }
  }
</style>
