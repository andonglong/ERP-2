<template>
<div class="notfound">
  <h2 class="title">404错误：</h2>
  <p>您访问的页面被删除或不存在，您可以 <span class='link' @click='back'>返回上一级页面</span>或者
    <router-link :to="'/Track/order'" class='link'>回到首页</router-link>
  </p>
</div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="stylus">
	body
		background-color:#F8F8F8
	.notfound
		width:500px
		height:100px
		text-align:center
		font-size:14px
		color:#ccc
		margin:200px auto
		.title
			font-size:25px
			font-weight:700
			color:#000
		.link
			margin:0 5px
			color:#26499d
			&:hover
				cursor:pointer
</style>
