<template>
  <div>
    <TopTitle :ifShowFrontendRoad='ifShowFrontendRoad' @showFrontendRoad='handleShowFrontendRoad'></TopTitle>
    <!-- 大纲级别目录 -->
    <TopBar @swith1stBar='handleSwith1stBar' :catalogArr='catalogArr' :curentIndex='swiperIndex'></TopBar>
    <div class='list-tags'>
      <swiper class='swiper-page' ref='mySwiper' :options='swiperOptions' @slideChange='handleSlideChange'>
        <swiper-slide v-for='arrItem in catalogArr' :key='arrItem.key1st'>
          <!-- 标签级别目录 -->
          <div class="tag-box">
            <div class='tag-cell' v-for='tagItem in arrItem.arr1st' :key='tagItem.key2nd'>
              <TagCell :name='tagItem.name2nd' :key2nd='tagItem.key2nd' @switchTag='handleSwitchTag' :class="tagItem.key2nd===tagIndex?'tag-cell-text':''"></TagCell>
            </div>
          </div>
          <!-- 链接级别目录 -->
          <div class="link-box" v-for='tagItem in arrItem.arr1st' :key='tagItem.key2nd'>
            <div class='link-cell' v-for='linkItem in tagItem.arr2nd' :key='linkItem.name'>
              <LinkCell v-if="tagItem.key2nd===tagIndex" :name='linkItem.name' :imgSrc='linkItem.imgSrc'
                :des='linkItem.des' :href='linkItem.href'></LinkCell>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <SideBar>
    </SideBar>
  </div>
</template>

<script>
  import TopTitle from '@/components/TopTitle'
  import TopBar from '@/components/TopBar'
  import TagCell from '@/components/TagCell'
  import LinkCell from '@/components/LinkCell'
  import SideBar from '@/components/SideBar'
  import {
    Swiper,
    SwiperSlide,
    directive
  } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import {
    catalogArr
  } from '@/mock/data.js'
  export default {
    name: 'list',
    components: {
      TopTitle,
      TopBar,
      TagCell,
      LinkCell,
      SideBar,
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        ifShowFrontendRoad: false,
        catalogArr: [],
        linkArr: [],
        swiperOptions: {
          // Some Swiper option/callback...
        },
        swiperIndex: 0, // 一级目录 key
        tagIndex: 0 // 二级目录 key
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    watch: {
      swiperIndex() {
        this.tagIndex = 0
      }
    },
    created() {
      this.catalogArr = catalogArr
    },
    mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    },
    methods: {
      handleShowFrontendRoad() {
        this.ifShowFrontendRoad = !this.ifShowFrontendRoad
      },
      handleSwith1stBar(val) {
        // 点击一级目录
        this.swiperIndex = val
        this.swiper.slideTo(this.swiperIndex, 1000, false)
      },
      handleSlideChange() {
        // 滑动一级目录
        this.swiperIndex = this.swiper.realIndex
      },
      handleSwitchTag(val) {
        // 选择二级目录
        this.tagIndex = val
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .title {
    cursor: pointer;
  }
  .frontend {
    max-width: 1200px;
    width: 100vw;
    height: auto;
  }
  .list-tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 10px;
    .tag-box,
    .link-box {
      display: flex;
      flex-wrap: wrap;
    }
    .tag-cell,
    .link-cell {
      margin: 5px;
      cursor: pointer;
      .tag-cell-text{
        color: red;
        background: yellow;
      }
    }
  }
</style>