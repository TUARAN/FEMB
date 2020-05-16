<template>
  <div class='stickybar'>
      <div class="bar-line">
          <div @click='swith1stBar(item.key1st)'  @mouseover="mouseOverBar(item.key1st)" v-for="item in catalogArr" :key='item.key1st'>
              <span :class="item.key1st==curentIndex?'active':'default'">{{item.name1st}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        catalogArr:Array,
        curentIndex:Number
    },
    data(){
        return {
        }
    },
    mounted(){
    },
    methods:{
        swith1stBar(val){
            this.$emit("swith1stBar",val)
        },
        mouseOverBar(val){
            this.$emit("mouseOverBar",val)
        }
    }
}
</script>

<style lang='scss' scoped>
    .stickybar{
        position: sticky;
        top: 0;
        z-index: 999;
    }
    .bar-line{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        font-family: fantasy;
        padding: 20px 0px;
        .default,.active{
            cursor: pointer;
            margin: 0 5px;
        }
        .active{
            border-bottom: 3px solid #efefef;
        }
    }
</style>