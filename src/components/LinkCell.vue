<template>
    <div class="link-cell">
        <img v-if="imgSrc!==''" class="img-cell" :src='imgSrc' />
        <div class="txt-cell">
            <span @click="handleOpen(href)"  v-if="href!==''" :href="href">{{name}}</span>
            <span class="nohref" href='#' title="链接丢失" v-else>{{name}}</span>
            <div v-if="des!==''">{{des}}</div>
            <div v-else>暂无描述</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            imgSrc: String,
            des: String,
            href: String
        },
        methods:{
            handleOpen(url){
                 window.open(url , '_blank');
            }
        }
    }
</script>

<style lang='scss' scoped>
    .link-cell {
        margin: 0 10px;
        padding: 3px 5px;
        width: 200px;
        height: 60px;
        overflow: hidden;
        
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        box-shadow:
            inset 0 -3em 3em rgba(0, 0, 0, 0.05),
            0 0 0 2px rgb(255, 255, 255),
            0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
        border-radius: 2px;
         text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                color: #42b983;
                text-decoration: none;    
        .img-cell {
            width: 1em;
            height: 1em;
            margin-right: 5px;
        }

        .txt-cell {
            display: flex;
            flex-direction: column;
            padding: 0 5px;
            height: 50px;
            span {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                color: #42b983;
                text-decoration: none;
            }

            .nohref {
                color: #97e9c4;
            }

            div {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 0.8em;
            }
        }
    }
</style>>