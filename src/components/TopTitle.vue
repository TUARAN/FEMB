<template>
  <div>
    <div class="title">FEMB-DEV</div><span @click="showFrontendRoad">frontend-roadmap</span>
    <div v-if="ifShowFrontendRoad">
        <img class="frontend" src='../assets/img/main/frontend.png'/>
        <!-- <span><a href="https://github.com/kamranahmedse/developer-roadmap">图片来源</a></span> -->
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
            }
    }
}
</script>

<style>

</style>