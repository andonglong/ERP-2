<template lang="html">
<div class="detail-box add-supplier-box">
	<el-card class="box-card">
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Quotation/quotation' }">报价需求单</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Quotation/quotationDetail/'+$route.params.demandNumber }">{{$route.params.demandNumber}}</el-breadcrumb-item>
				<el-breadcrumb-item>
					<div class="suppliername" @click.stop="stop">
						<el-input v-model="supplierName" placeholder="请输入供应商名称" class="nav-input" @focus="handleFocus" @blur="handleBlur"></el-input>
						<v-supplierList v-if="supplierNameShow" :supplierData='supplierName' v-on:listenKeyWord="listenSupplierList"></v-supplierList>
					</div>
				</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </el-card>
  <div class="main">
    <div class="btn-box">
      <el-button @click="Quotation" type="primary">报价</el-button>
      <span class="icon-slide icon-silde-down" v-show="!InfoShow" @click="InfoShow = !InfoShow"><span>展开</span><i class="icon-silde-arrow el-icon-d-arrow-left"></i></span>
    </div>
    <transition name="el-zoom-in-top">
      <div class="tabs-box" v-show="InfoShow">
				<p class="add-supplier-title">基本信息</p>
				<el-card class="tabs-box-card">
					<div class="info-box info-box-lh">
						<ul class="info-lists">
							<li class="info-list"><span>询价单号：报价后自动生成</span></li>
							<li class="info-list"><span>状态：{{orderstatus | Formatstatus}}</span></li>
							<li class="info-list"><span>联系人：{{linkname | checkNull}}</span></li>
							<li class="info-list"><span>联系电话：{{telephone | checkNull}}</span></li>
						</ul>
						<ul class="info-lists">
							<li class="info-list"><span>询价时间：{{createtime | checkNull}}</span></li>
							<li class="info-list"><span>要求报价时间：{{asktime | checkNull}}</span></li>
							<li class="info-list"><span>提醒报价时间：{{remindtime | checkNull}}</span></li>
							<li class="info-list"><span>实际报价时间：{{facktime | checkNull}}</span></li>
						</ul>
					</div>
				</el-card>
        <span class="icon-slide icon-silde-up" @click="InfoShow = !InfoShow">收起<i class="icon-silde-arrow el-icon-d-arrow-right"></i></span>
      </div>
    </transition>
		<div class="main-tabs">
			<p class="add-supplier-title">明细信息</p>
			<div class="main-info">
				<div class="btn-box">
					<div class="info-pos">
						<el-button class='upload-btn' type="primary" @click="handleImport">导入导出</el-button>
						<el-button class='upload-btn' @click="handleDownload">下载图纸</el-button>
					</div>
				</div>
				<div class="table-box">
					<el-table v-loading="listLoading" :data="tableData" border style="width: 100%" height="600"  @selection-change="handleSelectionChange">
						<el-table-column align="center" type="selection" width="55"></el-table-column>
						<el-table-column align="center" type="index" width="65" label="序号">
						</el-table-column>
						<el-table-column align="center" prop="productcode" label="产品编码" width="153">
							<template scope="scope">
								<span  class="span-font c20a0ff" @click="showaddDetail(scope.row)">{{scope.row.productcode}}</span>
							</template>
						</el-table-column>
						<el-table-column align="center" prop="productname" label="产品名称" width="153">
							<template scope="scope">
								<span  class="span-font">{{scope.row.productname}}</span>
							</template>
						</el-table-column>
						<el-table-column align="center" prop="unit" label="询价单位" width="120">
						</el-table-column>
						<el-table-column align="center" prop="orderamount" label="询价数量" width="120">
						</el-table-column>
						<el-table-column align="center" prop="iscando" label="是否能做" width="137">
							<template scope="scope">
								<el-checkbox v-model="scope.row.iscando" true-label="1" false-label="0">能做</el-checkbox>
							</template>
						</el-table-column>
						<el-table-column align="center" prop="minamount" label="最小订购量" width="137">
							<template scope="scope">
								<el-input-number v-model="scope.row.minamount" :debounce="100" :controls="false" class="table-input"></el-input-number>
							</template>
						</el-table-column>
						<el-table-column align="center" prop="deliverytime" label="货期（天 ）" width="137">
							<template scope="scope">
										<el-input-number v-model="scope.row.deliverytime" :debounce="100" :controls="false" class="table-input"></el-input-number>
									</template>
						</el-table-column>
						<el-table-column align="center" prop="pricenotax" label="未税单价" width="137">
							<template scope="scope">
								<div @click="openpricenotax(scope.row)" class="pricenotax-disable">
									<el-input-number v-model="scope.row.pricenotax" :disabled="true" :controls="false" class="table-input"></el-input-number>
								</div>
							</template>
						</el-table-column>
						<el-table-column align="center" prop="taxrate" label="税率" width="115">
							<template scope="scope">
								<el-select v-model="scope.row.taxrate" placeholder="请选择" class="duty-select">
									<el-option
										v-for="item in dutyRate" :key="item.name" :label="item.text" :value="item.name">
									</el-option>
								</el-select>
							</template>
						</el-table-column>
						<el-table-column align="center" prop="pricewithtax" label="含税单价" width="137">
							<template scope="scope">
										<el-input-number v-model="scope.row.pricewithtax" :debounce="100" :controls="false" class="table-input"></el-input-number>
									</template>
						</el-table-column>
						<el-table-column align="center" prop="taxamount" label="含税金额" width="137">
						</el-table-column>
						<el-table-column align="center" prop="issendcost" label="是否包含运费" width="137">
							<template scope="scope">
								<el-checkbox v-model="scope.row.mark">包含</el-checkbox>
							</template>
						</el-table-column>
						<el-table-column align="center" prop="remark" label="备注" width="260">
							<template scope="scope">
								<el-input type="textarea" autosize v-model="scope.row.remark" class="table-input table-input-price"></el-input>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
	<div class="pricenotax-box" v-if="dialogVisible">
		<el-dialog
		  :visible.sync="dialogVisible"
		  size="tiny"
		  :before-close="handleClose" class="pricenotax-dialog">
			<span slot="title">{{dialogTitle}}</span>
		  <div class="form">
				<el-form label-position="right" label-width="90px" :model="formPricenotax">
				  <el-form-item label="材料费" prop="materialcost">
				    <el-input v-model="formPricenotax.materialcost" class="pricenotax-input" @blur="blur($event, 'materialcost')" @keyup.native="checkValue($event, 'materialcost')"></el-input><span class="mar-r10">元</span>
				  </el-form-item>
				  <el-form-item label="加工费" prop="workcost">
				    <el-input v-model="formPricenotax.workcost" class="pricenotax-input" @blur="blur($event, 'workcost')" @keyup.native="checkValue($event, 'workcost')"></el-input><span class="mar-r10">元</span>
				  </el-form-item>
				  <el-form-item label="标明处理费" prop="dealwithcost">
				    <el-input v-model="formPricenotax.dealwithcost" class="pricenotax-input" @blur="blur($event, 'dealwithcost')" @keyup.native="checkValue($event, 'dealwithcost')"></el-input><span class="mar-r10">元</span>
				  </el-form-item>
				</el-form>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="Result">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
	<el-dialog title="导入导出" :visible.sync="dialogUploadorder" class="dialog-upload">
		<v-uploadorder :uploadPrams='uploadPrams' v-on:listenaddUploadorder="Uploadorder"></v-uploadorder>
	</el-dialog>
	<!-- 详情 -->
	<transition name="el-fade-in-linear">
      <div v-if="quotationDetailShow">
        <div class="shade-box" @click="close('quotationDetailShow')"></div>
        <v-addquotationDetail :quotationDetailObject='quotationDetailObject' v-on:listenquotationDetail="listenquotationDetail"></v-addquotationDetail>
      </div>
  </transition>
</div>
</template>

<script>
import api from 'api/request'
import axios from 'axios'
import uploadorder from './addUploadQuotation'
import addquotationDetail from './addquotationDeatil'
import supplierList from './supplierList'
import $util from 'common/js/util.js'
export default {
	data() {
		return {
			focus: false,
			InfoShow: true,
			supplierName: '',
			id: '',
			supplierid: '',
			Name: '',
			supplierNameShow: false,
			supplierData: [],  // 搜索结果
			listLoading: false,
			dutyRate: [],
			orderstatus: '',
			linkname: '',
			telephone: '',
			createtime: '',
			asktime: '',
			remindtime: '',
			facktime: '',
			tableData: [],
			// 未税单价组合
			dialogTitle: '',
			dialogVisible: false,
			formPricenotax: {
				materialcost: '',
				workcost: '',
				dealwithcost: ''
			},
			row: {},
			dialogUploadorder: false,    // 导入导出
			uploadPrams: {},
			// quotationDetail
			quotationDetailObject: {},
			quotationDetailShow: false
		}
	},
	methods: {
		stop() { },
		handleFocus() {
			this.supplierNameShow = true
		},
		handleBlur() {
			this.supplierName = this.Name
		},
		checkValue(e, id) {
			let value = e.target.value
			if (isNaN(value) || value != '') {
				this.formPricenotax[id] = value.replace(/[^\d|.]/g, '')
			}
		},
		blur(e, id) {
			let value = e.target.value
			if (value == '' || isNaN(value)) {
				return
			}
			this.formPricenotax[id] = parseFloat(value).toFixed(2)
		},
		// 报价
		Quotation() {
			let data = this.getParms()
      let _t = this
      axios.post('cloudfactory/inquiryorder/addsupplierquote', data).then(res => {
        if (res.data.code == 200) {
          _t.$message({
            message: '报价成功',
            type: 'success'
          })
        } else {
          _t.$alert(res.data.message, '报价失败', {
            confirmButtonText: '确定'
          })
        }
      })
		},
		// 报价参数
    getParms() {
      let data = {}
      data.willorderid = this.$route.params.demandNumber
			data.suppliername = this.Name
			data.supplierid = this.supplierid
      data.detailList = []
      for (var i = 0; i < this.tableData.length; i++) {
        let obj = {}
        obj.willorderdetailid = this.tableData[i].willorderdetailid
        obj.iscando = parseInt(this.tableData[i].iscando)
				obj.minamount = this.tableData[i].minamount
        obj.materialcost = this.tableData[i].materialcost
        obj.deliverytime = this.tableData[i].deliverytime
				obj.materialcost = this.tableData[i].materialcost
        obj.workcost = this.tableData[i].workcost
				obj.dealwithcost = this.tableData[i].dealwithcost
        obj.taxrate = this.tableData[i].taxrate
        obj.pricewithtax = this.tableData[i].pricewithtax
				obj.taxprice = this.tableData[i].taxprice
				obj.issendcost = this.tableData[i].issendcost
				obj.remark = this.tableData[i].remark
        data.detailList.push(obj)
      }
      return data
    },
		handleImport() {
			this.uploadPrams.willorderid = this.$route.params.demandNumber
      this.dialogUploadorder = true
		},
		Uploadorder(bool) {
	    this.dialogUploadorder = false
			if (!bool) {
				this.getNewsupplierquote()
			}
		},
		handleDownload () {
      let willorderid = this.$route.params.demandNumber
      api.willorders.downloadattachment({willorderid: willorderid}).then(res => {
        if (res.data.code == 200) {
          location.href = JSON.parse(res.data.data).data
        } else {
          this.$alert(res.data.message, '提示')
        }
      })
    },
		handleSelectionChange() { },
		openpricenotax(row) {
			this.row = row
			this.dialogTitle = row.productcode + '价格组成'
			this.dialogVisible = true
		},
		Result() {
			let arr = this.tableData
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == this.row) {
					arr[i].materialcost = parseFloat(this.formPricenotax.materialcost)
					arr[i].workcost = parseFloat(this.formPricenotax.workcost)
					arr[i].dealwithcost = parseFloat(this.formPricenotax.dealwithcost)
					arr[i].pricenotax = (this.formPricenotax.materialcost * 10000 + this.formPricenotax.dealwithcost * 10000 + this.formPricenotax.workcost * 10000) / 10000
				}
			}
			this.dialogVisible = false
		},
		handleClose() {
			this.dialogVisible = false
		},
		// quotationDetail
		close(show) {
      this[show] = !this[show]
      $util.forbiddenScroll(false)
    },
		listenquotationDetail() {
			this.quotationDetailShow = !this.quotationDetailShow
      $util.forbiddenScroll(false)
		},
		showaddDetail (val) {
			this.quotationDetailShow = !this.quotationDetailShow
			this.quotationDetailObject = val
			$util.forbiddenScroll(true)
		},
		listenSupplierList(val) {
			this.supplierNameShow = false
			this.supplierName = val.name
			this.Name = val.name
			this.supplierid = val.id
		},
		getNewsupplierquote() {
			let willorderid = this.$route.params.demandNumber
			api.inquiryorder.newsupplierquote({willorderid: willorderid}).then(res => {
					if (res.data.code == 200) {
						this.orderstatus = res.data.data.orderstatus
						this.linkname = res.data.data.linkname
						this.telephone = res.data.data.telephone
						if (res.data.data.createtime != undefined) {
	            this.createtime = $util.DateFormat(res.data.data.createtime, 'yyyy-MM-dd hh:mm:ss')
	          }
						if (res.data.data.asktime != undefined) {
	            this.asktime = $util.DateFormat(res.data.data.asktime, 'yyyy-MM-dd hh:mm:ss')
	          }
						if (res.data.data.remindtime != undefined) {
	            this.remindtime = $util.DateFormat(res.data.data.remindtime, 'yyyy-MM-dd hh:mm:ss')
	          }
						if (res.data.data.facktime != undefined) {
	            this.facktime = $util.DateFormat(res.data.data.facktime, 'yyyy-MM-dd hh:mm:ss')
	          }
						for (var i = 0; i < res.data.data.detailList.length; i++) {
							res.data.data.detailList[i].taxrate = res.data.data.detailList[i].taxrate == null ? 17 : res.data.data.detailList[i].taxrate
						}
						this.tableData = res.data.data.detailList
					}
			})
		}
	},
	filters: {
    Formatstatus (status) {
      let statusTxt = ''
      switch (status) {
        case '0':
          statusTxt = '待报价'
          break
        case '1':
          statusTxt = '已向供应商询价'
          break
        case '2':
          statusTxt = '供应商已报价'
          break
        case '3':
          statusTxt = '已筛选供应商报价'
          break
        case '4':
          statusTxt = '已确认建议售价'
          break
        case '5':
          statusTxt = '已作废'
          break
      }
      return statusTxt
    },
		checkNull(val) {
			val = val == null || val == '' ? '--' : val
			return val
		}
  },
	created() {
		this.$store.state.adminleftnavnum = '/Quotation/quotation'
		this.getNewsupplierquote()
		// 税率
		api.supplier.getDictByTypeNumbers({ typenumbers: 'TaxRate' }).then(res => {
			if (res.data.code == 200) {
				for (var i = 0; i < res.data.data.TaxRate.length; i++) {
					res.data.data.TaxRate[i].name = parseInt(res.data.data.TaxRate[i].name)
					res.data.data.TaxRate[i].text = res.data.data.TaxRate[i].name + '%'
				}
				this.dutyRate = res.data.data.TaxRate
			}
		})
	},
	components: {
    'v-uploadorder': uploadorder,
		'v-addquotationDetail': addquotationDetail,
		'v-supplierList': supplierList
	}
}
</script>

<style lang="stylus">
@import '~common/style/quotatil.styl'
.detail-box.add-supplier-box .main .tabs-box .info-box .info-lists .info-list:nth-child(4)
	width:200px
.detail-box.add-supplier-box .box-card .nav .el-breadcrumb
	line-height:36px
.detail-box.add-supplier-box .nav .nav-input
	width:260px
	height:36px
.detail-box.add-supplier-box .main .icon-silde-up
	bottom:-20px
.add-supplier-box	.el-card
	overflow:inherit
.add-supplier-box	.el-card.box-card .el-card__body
	padding:13px
.detail-box.add-supplier-box .main .tabs-box .info-box.info-box-lh .info-lists .info-list
	line-height: 28px
	height: 28px
.add-supplier-box
	.dialog-upload .el-dialog--small
		max-width: 620px
	.add-supplier-title
		font-size: 16px
		line-height: 56px
		height: 56px
		padding-left:25px
		border-bottom: 1px solid #d1dbe5
		margin-bottom: 30px
.detail-box
	.suppliername
		position: relative
	.pricenotax-box
		font-size:14px
		.el-dialog.el-dialog--tiny
			width:450px
		.el-dialog__body
			padding-bottom:0
		.form
			width:410px
			height:125px
			padding:20px 0
			border:1px solid #e5e5e5
			background-color:#f8f8f8
			.pricenotax-input
				width:200px
				height:30px
			.mar-r10
				margin-left:10px
			.el-form-item
				margin-bottom:10px
	.pricenotax-disable .is-disabled .el-input__inner
		cursor:text
	.upload-btn-a
		text-decoration: none
		color:#20a0ff
</style>
