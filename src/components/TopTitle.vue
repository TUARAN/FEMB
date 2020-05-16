<template>
  <div>
    <div class="title-direct">
        <span>|</span>
        <div @click="toREADME">开发日志</div>
        <span>|</span>
        <div>FEMB-DEV</div>
        <span>|</span>
        <div @click="showFrontendRoad">FE-Roadmap</div>
        <span>|</span>
        <div @click="changeColor"><svg-icon iconClass='changeclose'></svg-icon> 换肤</div>
        <span>|</span>
        <div style="width:10px"></div>
    </div>  
  </div>
</template>

<script>
export default {
    props:{
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
            },
            toREADME(){
                window.open('https://github.com/TUARAN/FEMB/blob/master/README.md')
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