<template lang="html">
<div class="willorderInfo-box history-box">
	<div v-loading="loading"  element-loading-text="拼命加载中">
		<h3 class="willorderInfo-title">{{historyQuotationObject.productmodel}}</h3>
		<div class="btn-box">
			<el-button type="primary" class="btn-w80" @click="result">采用报价</el-button>
			<el-button class="btn-w80" @click='close'>取消</el-button>
		</div>
		<div class="history-item" v-for="(item, index) in data">
			<div class="history-title disable-bg">
				<span class="title-check"><el-checkbox v-model="item.checked" :disabled="item.iscando==0"></el-checkbox></span>
				<span class="title-inquiryorderid">{{item.inquiryorderid}}</span>
				<span class="title-line">/</span>
				<span class="title-suppliername">
					<el-tooltip effect="dark" :content="item.suppliername" placement="top">
					   <span>{{item.suppliername}}</span>
					</el-tooltip>
				</span>
				<span class="title-line">/</span>
				<span class="title-facktime">{{item.facktime | formdata}}</span>
				<span class="title-line">/</span>
				<span class="title-linkname">
					<el-tooltip effect="dark" :content="item.linkname" placement="top" :disabled="item.linkname==null">
						<span>{{item.linkname==null ? '--':item.linkname}}</span>
					</el-tooltip>
				</span>
				<span class="title-line">/</span>
				<span class="title-telephone">{{item.telephone}}</span>
			</div>
			<div class="history-list-box">
				<ul class="history-list">
					<li>
						<span>是否能做：</span><span class="font-color"><el-checkbox v-model="item.iscando" true-label="1" :disabled="true" false-label="0">能做</el-checkbox></span>
					</li>
					<li>
						<span>最小订购量：</span><span class="font-color">{{item.minamount | checkNull}}</span>
					</li>
					<li>
						<span>货期（天）：</span><span class="font-color">{{item.deliverytime | checkNull}}</span>
					</li>
					<li>
						<span>未税单价：</span><span class="font-color">{{item.pricenotax | checkNull}}</span>
					</li>
				</ul>
				<ul class="history-list">
					<li><span>材料费：</span><span class="font-color">{{item.materialcost | checkNull}}</span></li>
					<li><span>加工费：</span><span class="font-color">{{item.workcost | checkNull}}</span></li>
					<li><span>表面处理费：</span><span class="font-color">{{item.dealwithcost | checkNull}}</span></li>
					<li><span>税率：</span><span class="font-color">{{item.taxrate}}%</span></li>
				</ul>
				<ul class="history-list">
					<li><span>含税单价：</span><span class="font-color">{{item.pricewithtax | checkNull}}</span></li>
					<li><span>含税金额：</span><span class="font-color">{{item.taxamount | checkNull}}</span></li>
					<li>
						<span>是否包含运费：</span><span class="font-color"><el-checkbox v-model="item.issendcost" :disabled="true" true-label="1" false-label="0">包含</el-checkbox></span>
					</li>
				</ul>
				<ul class="history-list">
					<li class="history-list-remark"><span>备注：</span><span class="font-color">{{item.remark | checkNull}}</span></li>
				</ul>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import api from 'api/request'
import $util from 'common/js/util.js'
export default {
	name: 'historyQuotation',
	props: {
		historyQuotationObject: {
			type: Object
		}
	},
	data() {
		return {
			loading: false,
			data: []
		}
	},
	methods: {
		// 取消
		close() {
			this.$emit('listenhistoryDetail', 'historyQuotationShow')
		},
		result() {
			let parms = {
				willorderdetailid: this.historyQuotationObject.willorderdetailid,
				inquiryorderdetailid: ''
			}
			for (var i = 0; i < this.data.length; i++) {
				if (this.data[i].checked) {
					parms.inquiryorderdetailid = this.data[i].inquiryorderdetailid
				}
			}
			this.usesupplierquote(parms)
		},
		usesupplierquote(data) {
			api.willorders.usehistorysupplierquote(data).then(res => {
				this.$emit('listenhistoryDetail', 'historyQuotationShow')
				if (res.data.code == 200) {
					this.$message({
						message: '操作成功',
						type: 'success'
					})
				} else {
					this.$alert(res.data.message, '提示')
				}
			})
		}
	},
	filters: {
		formdata(val) {
			let date = new Date(val)
			return $util.formatDate.format(date, 'yyyy-MM-dd hh:mm:ss')
		},
		checkNull(val) {
			val = val == null ? '--' : val
			return val
		}
	},
	created() {
		let _t = this
		let parms = this.historyQuotationObject
		this.loading = true
		api.inquiryorder.getinquiryordershistory(parms).then(res => {
			_t.loading = false
			if (res.data.code == 200) {
				_t.data = res.data.data
			}
		})
	}
}
</script>

<style lang="stylus">
.willorderInfo-box.history-box
	width:950px
.history-box .tip-msg
	text-align:center
	font-size:16px
.history-item
	border:1px solid #e5e5e5
	margin:0 20px 30px
	.history-title
		background-color:#f8f8f8
		font-size:0
		height:40px
		line-height:40px
		padding-left:10px
		border-bottom:1px solid #e5e5e5
		&.disable-bg
			background-color:#e9e9e9
		span
			font-size:14px
			color:#1f2d3d
			display:inline-block
			vertical-align: middle
			overflow:hidden
			text-overflow:ellipsis
			white-space: nowrap
			&.title-line
				margin:0 10px
			&.title-check
				margin-right:7px
			&.title-inquiryorderid
				max-width:180px
			&.title-suppliername
				max-width:190px
			&.title-telephone
				max-width:100px
			&.title-linkname
				max-width:100px
			&.title-mobile
				max-width:90px
	.history-list-box
		padding:9px 0 20px 20px
		.history-list
			overflow:hidden
			li
				float:left
				width:215px
				line-height:36px
				color:#99a9bf
				&.history-list-remark
					width:100%
					line-height:20px
					span
						display:inline-block
						vertical-align: top
						&.font-color
							width:93%
				span.font-color
					color:#5e6d82
					.el-checkbox
						color:#5e6d82
</style>
