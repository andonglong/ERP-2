<template lang="html">
  <div class="financial">
    
    <div class="bussiness-table">
      <el-table :data="custbusinesslist" border  max-height="600">
        <el-table-column type="index" align="center" label="序号" width="50" label-class-name="tableIndex" class-name="tableIndex"></el-table-column>
        <el-table-column prop="number" align="center" label="编码" min-width="167"></el-table-column>
        <el-table-column prop="businessnumber" align="center" label="事业部" min-width="168" show-overflow-tooltip></el-table-column>
        <el-table-column prop="sellername" align="center" label="销售员" min-width="168" show-overflow-tooltip></el-table-column>
        <el-table-column prop="quotename" align="center" label="报价员" min-width="168" show-overflow-tooltip></el-table-column>
        <el-table-column prop="isdefault" align="center" label="默认" min-width="80">
          <template scope="scope">
            <el-checkbox v-model="scope.row.isdefault" disabled></el-checkbox> 是
          </template>
        </el-table-column>
       
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
	name: 'financial',
  props: {
    custbusinesslist: {
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
