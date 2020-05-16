<template>
  <div class='content-wrap' ref="contentRef">
    <TopTitle class="top-title" ref="topRef" @changeColor='handleChangeColor("change")'
      @showFrontendRoad='handleShowFrontendRoad'></TopTitle>
    <div>
      <!-- 大纲级别目录 -->
      <TopBar ref="barRef" @swith1stBar='handleSwith1stBar'  @mouseOverBar="handleMouseOverBar" :catalogArr='catalogArr' :curentIndex='swiperIndex'></TopBar>
      <div class='list-tags'>
        <swiper class='swiper-page' ref='mySwiper' :options='swiperOptions' @slideChange='handleSlideChange'>
          <swiper-slide v-for='arrItem in catalogArr' :key='arrItem.key1st'>
            <!-- 标签级别目录 -->
            <div class="tag-box" v-if="showTagBox" ref="tagBoxRef">
              <div class='tag-cell' v-for='tagItem in arrItem.arr1st' :key='tagItem.key2nd'>
                <TagCell :name='tagItem.name2nd' :key2nd='tagItem.key2nd' @switchTag='handleSwitchTag'
                  :class="tagItem.key2nd===tagIndex?'tag-cell-text':''"></TagCell>
              </div>
            </div>
            <!-- 链接级别目录 -->
            <div class="link-box" v-for='tagItem in arrItem.arr1st' :key='tagItem.key2nd'>
              <div class="show-link-cell" v-if="tagItem.key2nd===tagIndex">
                <div class='link-cell' v-for='linkItem in tagItem.arr2nd' :key='linkItem.name'>
                  <LinkCell :name='linkItem.name' :imgSrc='linkItem.imgSrc' :des='linkItem.des' :href='linkItem.href'>
                  </LinkCell>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
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
    chinaColor
  } from '@/utils/chinaColor.js'
  import randomNum from '@/utils/random.js'
  import {
    Swiper,
    SwiperSlide,
    directive
  } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import catalogArr from '@/data/data.js'
  export default {
    name: 'list',
    components: {
      TopTitle,
      TopBar,
      TagCell,
      LinkCell,
      SideBar,
      Swiper,
      SwiperSlide,
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        catalogArr: [],
        linkArr: [],
        swiperOptions: {
          // Some Swiper option/callback...
        },
        swiperIndex: 0, // 一级目录 key
        tagIndex: 0, // 二级目录 key
        showTagBox:true
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
      this.swiper.slideTo(0, 1000, false)
      this.handleChangeColor('init')
    },
    methods: {
      handleShowFrontendRoad() {
        window.open('/admin.html')
      },
      handleSwith1stBar(val) {
        // 点击一级目录
        this.swiperIndex = val
        this.swiper.slideTo(this.swiperIndex, 1000, false)
      },
      handleMouseOverBar(val){
        // hover 一级目录
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
      },
      handleChangeColor(rgb) {
        // 换肤
        var bgColorTopRef
        var bgColorBarRef
        var bgColorTagBoxRef
        if(rgb==='init'){
          bgColorTopRef='rgb(86, 152, 195)'
          bgColorBarRef='rgb(86, 152, 195)'
          bgColorTagBoxRef='rgb(86, 152, 195,0.29)'
        }else{
          bgColorTopRef=chinaColor[randomNum(0, chinaColor.length)].hex
          bgColorBarRef=chinaColor[randomNum(0, chinaColor.length)].hex
          bgColorTagBoxRef=chinaColor[randomNum(0, chinaColor.length)].hex
        }
        this.$refs.topRef.$vnode.elm.style.background=bgColorTopRef;
        this.$refs.barRef.$vnode.elm.style.background=bgColorBarRef;
        this.$refs.tagBoxRef.forEach(item=>{
          item.style.background = bgColorTagBoxRef;
        })
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .content-wrap {
     overflow-x: hidden;
    .top-title {
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

      .tag-box,
      .link-box,
      .show-link-cell {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
      }

      .tag-cell,
      .link-cell {
        cursor: pointer;
        .tag-cell-text {
          padding: 2px 5px;
        }
        margin: 5px;
      }
      .tag-box{
        color: #333;
      }
    }
  }
</style>
<style >
.swiper-slide{
    height: calc(100vh - 100px);
    overflow-y: auto;
}
</style>