<template lang="html">
  <div class="contact">
    <el-table :data="custcontactlist" border style="width: 100%" max-height="600">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column type="index" align="center" label="序号" width="50" label-class-name="tableIndex" class-name="tableIndex"></el-table-column>
      <el-table-column prop="name" align="center" label="姓名" min-width="106"></el-table-column>
      <el-table-column prop="sex" align="center" label="性别" min-width="78">
        <template scope="scope">
          <span>{{scope.row.sex | checkSex}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="department" align="center" label="部门" min-width="137"></el-table-column>
      <el-table-column prop="post" align="center" label="职务" width="173"></el-table-column>
      <el-table-column prop="bizlocation" align="center" label="业务地点" min-width="304"></el-table-column>
      <el-table-column prop="tel" align="center" label="固定电话" min-width="152"></el-table-column>
      <el-table-column prop="mobile" align="center" label="移动电话" min-width="153">></el-table-column>
      <el-table-column prop="fax" align="center" label="传真" min-width="162"></el-table-column>
      <el-table-column prop="email" align="center" label="电子邮箱" min-width="214"></el-table-column>
      <el-table-column prop="im" align="center" label="QQ" min-width="144"></el-table-column>
      <el-table-column prop="isdefault" align="center" label="默认" width="80">
        <template scope="scope">
          <el-checkbox v-model="scope.row.isdefault" true-label="1" false-label="0" disabled :checked="scope.row.isdefault==1" >是</el-checkbox>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
	name: 'contact',
  props: {
    custcontactlist: {
      type: Array
    }
  },
	data() {
		return { }
	},
  filters: {
    checkSex(val) {
      if (val == 'SEX02_SYS') {
        return '男'
      } else if (val == 'SEX01_SYS') {
        return '女'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
