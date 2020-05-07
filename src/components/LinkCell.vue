<template>
    <div class="link-cell">
        <img v-if="imgSrc!==''" class="img-cell" :src='imgSrc' />
        <div class="txt-cell">
            <a v-if="href!==''" :href="href">{{name}}</a>
            <a class="nohref" href='#' title="链接丢失" v-else>{{name}}</a>
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
    }
</script>

<style lang='scss' scoped>
    .link-cell {
        margin: 0 10px;
        padding: 3px 5px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        box-shadow:
            inset 0 -3em 3em rgba(0, 0, 0, 0.05),
            0 0 0 2px rgb(255, 255, 255),
            0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
        border-radius: 2px;

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
            a {
                max-width: 249px;
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
                max-width: 249px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 0.8em;
            }
        }
    }
</style>>