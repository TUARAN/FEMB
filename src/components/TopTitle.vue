<template>
  <div>
    <div class="title-direct">
        <span>|</span>
        <div>FEMB-DEV</div>
        <span>|</span>
        <div @click="showFrontendRoad">FE-Roadmap</div>
        <span>|</span>
        <div @click="changeColor"><svg-icon iconClass='changeclose'></svg-icon></div>
        <span>|</span>
    </div>  
    <div v-if="ifShowFrontendRoad">
        <img class="frontend" src='../assets/img/main/frontend.png'/>
        <span><a href="https://github.com/kamranahmedse/developer-roadmap">图片来源</a></span>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        ifShowFrontendRoad:Boolean
    },
    data(){
        return{
            
        }
    },
    methods:{
            showFrontendRoad(){
                this.$emit("showFrontendRoad")
            },
            changeColor(){
                this.$emit("changeColor")
            }
    }
}
</script>

<style lang='scss'>
.title-direct{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100vw;
    div{
        cursor: pointer;
        margin: 0 5px;
    }
    span{
        margin:0 5px;
    }
}
</style>