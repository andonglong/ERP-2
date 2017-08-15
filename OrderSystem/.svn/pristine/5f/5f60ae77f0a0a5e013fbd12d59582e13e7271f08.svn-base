<template lang="html">
	<div class="brand-box">
		<el-form :inline="true" :model="brandFrom" class="demo-form-inline">
			<el-form-item label="供应商编码">
				<el-input v-model="brandFrom.suppliernumber" placeholder="请输入" class="input-w184"></el-input>
			</el-form-item>
			<el-form-item label="供应商名称" label-width="85px">
				<el-input v-model="brandFrom.suppliername" placeholder="请输入名称" class="input-w184"></el-input>
			</el-form-item>
			<el-form-item class="brand-btn-box">
				<el-button type="primary" class="brand-btn marL30" @click="onSubmit">查询</el-button>
			</el-form-item>
			<el-form-item class="brand-btn-box">
				<el-button type="primary" class="brand-btn" @click="Result">确认询价</el-button>
				<el-checkbox v-model="skiphasquote" class="brand-check">跳过半年内有历史报价的供应商</el-checkbox>
			</el-form-item>
		</el-form>
		<el-table :data="brandList" max-height="400" border v-loading="loading" class="brand-list" ref="singleTable" @row-click="handleClickChange" @selection-change="handleSelectionChange" highlight-current-row>
			<el-table-column type="selection" width="45"  align="center"></el-table-column>
			<el-table-column property="number" label="供应商编码" width="120"  align="center"></el-table-column>
			<el-table-column property="name" label="供应商名称" width="248"  align="center"></el-table-column>
			<el-table-column property="brandsimply" label="品牌" width="125"  align="center"></el-table-column>
			<el-table-column property="description" label="备注" width="160"  align="center">
				<template scope="scope">
					<span class="span-font">{{scope.row.description}}</span>
				</template>
			</el-table-column>
		</el-table>
		<div class="page-warrpe">
			<el-pagination class="page-box" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="brandFrom.pageindex" :page-sizes="page_sizes" layout="prev, pager, next,sizes, jumper" :total="Total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import api from 'api/request'
export default {
	name: 'getSupplierList',
	props: {
		getsuppliersParms: {
			type: Object
		}
	},
	data() {
		return {
			brandFrom: {
				willorderid: '',
				detailIdList: [],
				suppliernumber: '',
				suppliername: '',
				pagesize: 10,
				pageindex: 1
			},
			skiphasquote: true,
			Total: 0,
			page_sizes: [10, 20, 30, 40],
			//  Table
			brandList: [],
			loading: false,
			multipleSelection: []
		}
	},
	methods: {
		// 查询
		onSubmit() {
			this.getsuppliers(this.brandFrom)
		},
		// 确认询价
		Result() {
			let _t = this
			if (this.multipleSelection.length > 0) {
				let parms = {}
					parms.willorderid = this.brandFrom.willorderid
					parms.skiphasquote = this.skiphasquote
					parms.detailIdList = this.brandFrom.detailIdList
					parms.supplierIdList = this.getSupplierIdList()
				api.willorders.buildsupplierquote(parms).then(res => {
					_t.$emit('listenSuppliers', 'true')
						if (res.data.code == 200) {
							_t.$message({
								message: '操作成功',
								type: 'success'
							})
						} else {
							_t.$alert(res.data.message, '操作失败', {
	              confirmButtonText: '确定'
	            })
						}
				})
			} else {
				this.$notify({
          title: '温馨提示',
          message: '请勾选供应商',
          type: 'warning',
          duration: 3000,
          offset: 60
        })
			}
		},
		// 获取选中供应商ID
		getSupplierIdList() {
			let arr = []
			for (var i = 0; i < this.multipleSelection.length; i++) {
				arr.push(this.multipleSelection[i].id)
			}
			return arr
		},
		//
		handleClickChange(val) {
			this.$refs.singleTable.toggleRowSelection(val)
		},
		handleSelectionChange(val) {
			this.multipleSelection = val
		},
		// 分页
    handleSizeChange(val) {
      this.brandFrom.pagesize = val
      this.getsuppliers(this.brandFrom)
    },
    handleCurrentChange(val) {
      this.brandFrom.pageindex = val
      this.getbrandslist(this.brandFrom)
    },
		// 获取供应商列表
		getsuppliers(prams) {
			api.willorders.getsuppliers(prams).then(res => {
				if (res.data.code == 200) {
					this.brandList = res.data.datalist
				}
			})
		}
	},
	created() {
		this.brandFrom.willorderid = this.getsuppliersParms.willorderid
		this.brandFrom.detailIdList = this.getsuppliersParms.detailIdList
		let prams = this.brandFrom
		this.getsuppliers(prams)
	}
}
</script>

<style lang="stylus">
.brand-box
	.brand-btn
		width:80px
		height:32px
		padding:0
		line-height:32px
	.marL30
		margin-left:20px
	.input-w184
		width:184px
	.brand-check
		margin-left:20px
</style>
