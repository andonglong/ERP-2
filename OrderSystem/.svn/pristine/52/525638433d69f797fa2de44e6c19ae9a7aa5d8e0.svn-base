<template lang="html">
	<div class="willorderInfo-box">
		<h3 class="willorderInfo-title">{{supplierDetailObject.productmodel}}</h3>
		<div class="btn-box">
			<el-button type="primary" class="btn-w80" @click="result" :disabled="supplierDetailObject.iscando=='0'">采用报价</el-button>
			<el-button class="btn-w80" @click="close">取消</el-button>
		</div>
		<div class="info-item">
			<h4>询价信息</h4>
			<div class="left">
				<ul class="info">
					<li>产品编码：<span class="font-color-5">{{supplierDetailObject.productcode}}</span></li>
					<li>产品型号/SKU：<span class="font-color-5">{{supplierDetailObject.productmodel}}</span></li>
					<li>附件名/图纸号：<span class="font-color-5">{{supplierDetailObject.attachmentindex | checkNull}}</span></li>
					<li>询价数量：<span class="font-color-5">{{supplierDetailObject.orderamount | checkNull}}</span></li>
				</ul>
			</div>
			<div class="right">
				<ul class="info">
					<li>品牌：<span class="font-color-5">{{supplierDetailObject.productbrand | checkNull}}</span></li>
					<li>产品名称：<span class="font-color-5">{{supplierDetailObject.productname | checkNull}}</span></li>
					<li>询价单位：<span class="font-color-5">{{supplierDetailObject.unit | checkNull}}</span></li>
				</ul>
			</div>
		</div>
		<div class="info-item margin-bottom0">
			<h4>报价信息</h4>
			<div class="left">
				<ul class="info">
					<li>供应商名称：<span class="font-color-5">{{supplierDetailObject.suppliername | checkNull}}</span></li>
					<li>最小订购量：<span class="font-color-5">{{supplierDetailObject.minamount | checkNull}}</span></li>
					<li>未税单价：<span class="font-color-5">{{supplierDetailObject.pricenotax | checkNull}}</span></li>
					<li>加工费：<span class="font-color-5">{{supplierDetailObject.workcost | checkNull}}</span></li>
					<li>税率：<span class="font-color-5">{{supplierDetailObject.taxrate | checkNull}}%</span></li>
					<li>含税金额：<span class="font-color-5">{{supplierDetailObject.taxamount | checkNull}}</span></li>
					<li>备注：<span class="font-color-5">{{supplierDetailObject.remark | checkNull}}</span></li>
				</ul>
			</div>
			<div class="right">
				<ul class="info">
					<li>是否能做：<span class="font-color-5"><el-checkbox v-model="supplierDetailObject.iscando" :disabled="true" true-label='1' false-label='0'>能做</el-checkbox></span></li>
					<li>货期（天）：<span class="font-color-5">{{supplierDetailObject.deliverytime | checkNull}}</span></li>
					<li>材料费：<span class="font-color-5">{{supplierDetailObject.materialcost | checkNull}}</span></li>
					<li>表面处理费：<span class="font-color-5">{{supplierDetailObject.dealwithcost | checkNull}}</span></li>
					<li>含税单价：<span class="font-color-5">{{supplierDetailObject.pricewithtax | checkNull}}</span></li>
					<li>是否包含运费：<span class="font-color-5"><el-checkbox v-model="supplierDetailObject.issendcost" :disabled="true" true-label='1' false-label='0'>包含</el-checkbox></span></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import api from 'api/request'
export default {
	name: 'supplierDetail',
	props: {
		supplierDetailObject: {
			type: Object
		}
	},
	data() {
		return {
			issendcost: '0',
			iscando: '1'
		}
	},
	methods: {
		// 取消
		close() {
			this.$emit('listensupplierDetail', 'supplierDetailShow')
		},
		result() {
			let arr = []
			arr.push(this.supplierDetailObject.inquiryorderdetailid)
			api.willorders.usesupplierquote({inquiryDetailIdList: arr}).then(res => {
					this.$emit('listensupplierDetail', 'supplierDetailShow')
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
		checkNull(val) {
			val = val == null ? '--' : val
			return val
		}
	}
}
</script>

<style lang="stylus">
.margin-bottom0
	border-bottom:0!important
</style>
