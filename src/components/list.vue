<template>
  <div>
    <div>FEMB-DEV</div>
    <div class="list-cell">
        <div><a href="47.107.72.184/index.html">首页</a></div>
        <div><a href="https://juejin.im/post/5de798126fb9a016121b209b">搭建指导</a></div>
        <div><a href="http://47.107.72.184:8080">jenkins构建</a></div>
        <div><a href="https://www.aliyun.com">aliyun</a></div>
        <div><a href="https://github.com/TUARAN/FEMB">github/FEMB</a></div>
        <div><a href="https://www.yiibai.com/git">Git教程-易百</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
.list-cell{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px;
    div{
        margin: 0 5px;;
    }
}
</style>
