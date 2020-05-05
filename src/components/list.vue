<template>
  <div>
    <div @click="handleShowFrontendRoad" class="title">FEMB-DEV</div>
    <div v-if="ifShowFrontendRoad">
      <img class="frontend" src='../assets/img/main/frontend.png'/>
      <span><a href="https://github.com/kamranahmedse/developer-roadmap">图片来源</a></span>
    </div>
    <div class="list-cell">
      <div v-for="item in linkArr1" :key='item.name'>
        <LinkCell :name='item.name' :imgSrc='item.imgSrc' :des='item.des' :href='item.href'></LinkCell>
      </div>
    </div>
  </div>
</template>

<script>
import LinkCell from '@/components/LinkCell'
  export default {
    name: 'list',
    components:{LinkCell},
    data(){
      return {
        ifShowFrontendRoad:false,
        linkArr1:[
          {name:'首页',imgSrc:'',des:'This in homepage.',href:"http://47.107.72.184/index.html"},
          {name:'FEMB',imgSrc:'',des:'github 仓库地址',href:"https://github.com/TUARAN/FEMB"},
          {name:'搭建指导',imgSrc:'',des:'nginx+jenkins+github 一条龙建站',href:"https://juejin.im/post/5de798126fb9a016121b209b"},
          {name:'jenkins构建',imgSrc:'',des:'jenkins构建地址',href:"http://47.107.72.184:8080"},
          {name:'aliyun',imgSrc:'',des:'选购 ESC 服务器',href:"https://www.aliyun.com/product/ecs"},
          {name:'Git教程-易百',imgSrc:'',des:'你真的了解 Git 吗？',href:"https://www.yiibai.com/git"},
        ]
      }
    },
    methods:{
      handleShowFrontendRoad(){
        this.ifShowFrontendRoad=!this.ifShowFrontendRoad
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.title{
  cursor: pointer;
}
.frontend{
  width: 100vh;
  height: auto;
}
  .list-cell {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 10px;
    div{
      margin: 5px;
    }
  }
</style>