<template>
    <div class="tag-cell">
            <div @click="handleSelectTag(key2nd)">{{name}}</div>
            <slot name="linkArr"></slot>
    </div>
</template>

<script>
    export default {
        props: {
            tagItem:Object,
            name:String,
            key2nd:Number
        },
        mounted(){
        },
        methods:{
            handleSelectTag(key2nd){
                this.$emit('switchTag',key2nd)
            }
        }
    }
</script>

<style lang='scss' scoped>
.tag-cell{
    div{
        font-size: 0.98em;
        font-family: '-webkit-pictograph';
    }
}
</style>>