<template>
<div class="printImg-container">
  <div v-show="show">
    <v-header></v-header>

  </div>
  <div class="header" v-show="show">
    <el-button @click="printImg()">打印图纸</el-button>
  </div>
  <div class="printImg-box">
    <img :src="imgUrl">
  </div>
</div>
</template>

<script>
import header from '../../../components/header/header.vue'
export default {
  data () {
    return {
      show: true,
      imgUrl: 'http://static.cnbetacdn.com/thumb/article/2017/0627/c2c8178a18051a9.jpg'
    }
  },
  created () {
    this.imgUrl = this.$route.query.imgUrl
  },
  mounted () {},
  components: {
    'v-header': header
  },
  methods: {
    printImg () {
      this.show = false
      setTimeout(() => {
        window.print()
        this.show = true
      }, 500)
    }
  }
}
</script>

<style lang="stylus">
   .printImg-container
     padding: 60px 0
     .header
      width: 902px
      margin: 0 auto
      text-align: right
      height: 75px
      line-height: 75px
    .printImg-box
        box-sizing: border-box
        width: 902px
        height: 1138px
        border: 1px solid #ccc
        margin: 0 auto
        display: flex
        justify-content: center
        align-items: center
        img
          width: 99.5%
</style>
