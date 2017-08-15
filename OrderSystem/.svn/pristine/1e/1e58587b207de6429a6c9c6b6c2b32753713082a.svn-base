<template lang="html">
  <div class="financial">
    <el-form :inline="true" :model="supplierfinance" class="demo-form-inline" label-position="left">
	  	<div class="left">
        <el-form-item label="结算币别" label-width="80px">
          <el-select v-model="supplierfinance.paycurrency" disabled class="info-select">
            <el-option v-for="item in supplierfinanceBase.PayCurrency" :key="item.number" :label="item.name" :value="item.number"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结算方式" label-width="80px">
          <el-select v-model="supplierfinance.paymenttype" disabled class="info-select">
            <el-option v-for="item in supplierfinanceBase.SettleType" :key="item.number" :label="item.name" :value="item.number"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="付款条件" label-width="80px">
          <el-select v-model="supplierfinance.paycondition" disabled class="info-select">
            <el-option v-for="item in supplierfinanceBase.PaymentCondition" :key="item.number" :label="item.name" :value="item.number"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结算方" label-width="80px">
          <el-select v-model="supplierfinance.settlename" disabled class="info-select">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述" label-width="80px" class="info-item-address">
					<el-input  type="textarea" :rows="2" v-model="supplierfinance.financedesc" :disabled="true" placeholder="" class="info-input info-input-address"></el-input>
				</el-form-item>
	  	</div>
			<div class="right">
        <el-form-item label="税分类" label-width="83px">
					<el-select v-model="supplierfinance.taxtype" placeholder="活动区域" disabled class="info-select">
						<el-option v-for="item in supplierfinanceBase.TaxClassify" :key="item.number" :label="item.name" :value="item.number"></el-option>
					</el-select>
				</el-form-item>
        <el-form-item label="税务登记号" label-width="83px">
          <el-input v-model="supplierfinance.taxregistercode" placeholder="" :disabled="true" class="info-input"></el-input>
        </el-form-item>
        <el-form-item label="发票类型" label-width="83px">
          <el-select v-model="supplierfinance.invoicetype" placeholder="活动区域" disabled class="info-select">
            <el-option label="增值税专用发票" value="1"></el-option>
            <el-option label="普通发票" value="2"></el-option>
            <el-option label="无" value="3"></el-option>
					</el-select>
        </el-form-item>
        <el-form-item label="默认税率" label-width="83px">
					<el-select v-model="supplierfinance.taxrate" placeholder="活动区域" disabled class="info-select">
						<el-option v-for="item in supplierfinanceBase.TaxRate" :key="item.number" :label="item.desc" :value="item.number"></el-option>
					</el-select>
				</el-form-item>
			</div>
		</el-form>
    <div class="bussiness-table">
      <el-table :data="supplierfinanceList" border style="width: 1130px" max-height="600">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" align="center" label="序号" width="65"></el-table-column>
        <el-table-column prop="country" align="center" label="国家" width="106"></el-table-column>
        <el-table-column prop="name" align="center" label="开户银行" width="214"></el-table-column>
        <el-table-column prop="code" align="center" label="银行账户" width="185"></el-table-column>
        <el-table-column prop="holder" align="center" label="账户名称" width="250"></el-table-column>
        <el-table-column prop="currency" align="center" label="币种" width="125">
          <template scope="scope">
            <el-select v-model="scope.row.currency" disabled class="table-currency-select">
              <el-option v-for="item in supplierfinanceBase.PayCurrency" :key="item.number" :label="item.name" :value="item.number"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="isdefault" align="center" label="默认" width="80">
          <template scope="scope">
            <el-checkbox v-model="scope.row.isdefault" disabled></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="description" align="center" label="描述 " width="300"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
	name: 'financial',
  props: {
    supplierfinance: {
      type: Object
    },
    supplierfinanceBase: {
      type: Object
    },
    supplierfinanceList: {
      type: Array
    }
  },
	data() {
		return {
      tableData: [],
      formInline: {

      }
    }
	},
  filters: { }
}
</script>

<style lang="stylus">
.financial
  overflow:hidden
  .demo-form-inline
    overflow:hidden
  .bussiness-table
    margin-top:10px
  .info-item-address
    height:74px
    .el-form-item__content
      height:74px!important
    .info-input-address
      height:74px!important
      .el-textarea__inner
        height:70px!important
  .table-currency-select
    background-color:transparent
    width:80px
    height:30px
    border:0
    .el-input.is-disabled .el-input__inner
      background-color:transparent
      border:0
      padding-right:0
    .el-input .el-input__icon
      display:none
</style>
