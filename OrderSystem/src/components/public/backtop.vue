<template>
    <transition name="el-fade-in-linear">
        <div class="fix-Top" v-show="scollTop" @click="goTop">
            <i class="icon iconfont icon-totop"></i>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        scollTop: { type: Boolean }
    },
    methods: {
        goTop() {
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style lang="stylus" scoped>
	.fix-Top
		position: fixed
		bottom:100px
		right:100px
		z-index: 9999
		cursor:pointer
		width:50px
		height:50px
		line-height:50px
		border-radius:50%
		background-color:#20a0ff
		text-align:center
		.icon-totop
			font-size:24px
			color:#fff
			vertical-align: middle
</style>