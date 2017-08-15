<template lang="html">
  <div class="business">
    <el-form :inline="true" :model="BusinessData" class="demo-form-inline" label-position="left">
	  	<div class="left">
          <el-form-item label="收款条件" label-width="83px">
            	<el-select v-model="BusinessData.reccondition" placeholder="" disabled class="info-select">
             <el-option v-for="item in option" :key="item.number" :label="item.name" :value="item.number"></el-option> 
					</el-select>
  				</el-form-item>
           <el-form-item label="默认税率" label-width="83px">
            	<el-select v-model="BusinessData.taxrate" placeholder="" disabled class="info-select">
             <el-option v-for="item in option" :key="item.number" :label="item.name" :value="item.number"></el-option> 
					</el-select>
  				</el-form-item>
           <el-form-item label="定性等级" label-width="83px">
           	<el-select v-model="BusinessData.qualitativegradeid" placeholder=""  class="info-select">
             <el-option v-for="item in BusinessOptions.custqualitativegrade" :key="item.id" :label="item.grade" :value="item.id"></el-option> 
					</el-select>
  				</el-form-item>
           <el-form-item label="默认折扣率" label-width="83px">
           	<el-select v-model="BusinessData.purchaseuse" placeholder="" disabled class="info-select">
             <el-option v-for="item in option" :key="item.number" :label="item.name" :value="item.number"></el-option> 
					</el-select>
  				</el-form-item>
	  	</div>
      <!-- v-model="BusinessData.sellproduct" -->
			<div class="right">
        <el-form-item label="大客户经理" label-width="83px" class="product-item">
          	<el-select v-model="BusinessData.customermanagernumber" placeholder="" disabled class="info-select">
             <el-option v-for="item in option" :key="item.number" :label="item.name" :value="item.number"></el-option> 
					</el-select>
				</el-form-item>
        <el-form-item label="定量等级" label-width="83px">
           	<el-select v-model="BusinessData.quantifygradeid" placeholder=""  class="info-select">
             <el-option v-for="item in BusinessOptions.custquantifygrade" :key="item.id" :label="item.grade" :value="item.id"></el-option> 
					</el-select>
  				</el-form-item>
          <el-form-item label="信用等级" label-width="83px">
           	<el-select v-model="BusinessData.purchaseuse" placeholder="" disabled class="info-select">
             <el-option v-for="item in option" :key="item.number" :label="item.name" :value="item.number"></el-option> 
					</el-select>
  				</el-form-item>
          <el-form-item label="折扣率" label-width="83px">
           	<el-select v-model="BusinessData.discountid" placeholder=""  class="info-select">
             <el-option v-for="item in BusinessOptions.custdiscount" :key="item.id" :label="item.discount" :value="item.id"></el-option> 
					</el-select>
  				</el-form-item>
			</div>
		</el-form>
  </div>
</template>

<script>
// import api from 'api/request'
export default {
  name: 'business',
  props: {
    BusinessData: {
      type: Object
    },
    BusinessOptions: {
      type: Object
    }
  },
  data() {
    return {
      option: [{ name: '1', number: 2 }]
    }
  },
  methods: {
  },
  created() {
  }
}
</script>

<style lang="stylus">
.business
  overflow:hidden
  .demo-form-inline
    &:after
      content:''
      clear:both
    // overflow:hidden
  .bussiness-table
    margin-top:10px
  .product-item
    position: relative
    .product-tree
      min-width:260px
      position: absolute
      top:34px
      left:0
      z-index:99
      height: 270px
      overflow-y: auto
  .brand-box
    .brand-btn-box
      margin-left:50px!important
    .brand-btn
      width:80px
      height:32px
      padding:0
      line-height:32px
      margin-left:20px
    .brand-list
      .cell
        padding:0
      .brand-introduction
        .el-textarea__inner
          border:0
          background-color:transparent
  .dialog
    .el-dialog--small
      width:900px
    .page-warrpe
      height:40px
      line-height:40px
      .page-box
        margin-top:5px
        .el-input__inner
          height:28px
          line-height:28px
</style>
