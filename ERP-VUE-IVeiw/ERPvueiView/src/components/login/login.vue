<template>
  <div class="login-container">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <Form-item prop="nameOrMobile">
        <Input type="text" v-model="formInline.nameOrMobile" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>
import $api from '../../api/http.js'
export default {
  data() {
    return {
      formInline: {
        nameOrMobile: '',
        password: ''
      },
      ruleInline: {
        nameOrMobile: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  filters: {},
  computed: {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          // let param = this.formInline
          let param = {}
          param.day = 7
          param.a = 1
          // this.$api.user.login(param).then(res => {
          //   console.log(res)
          // })
          // this.$axios({
          //   methods: 'GET',
          //   url: '/cloudfactory/erp/user/login',
          //   params: param,
          //   headers: {
          //     'X-Requested-With': 'XMLHttpRequest'
          //   }
          // }).then(res => {
          //   console.log('then')
          // }).catch(res => {
          //   console.log('catch')
          // })

          $api.get('/cloudfactory/erp/user/logi', param, function () { console.log('成功') })
          // this.$Message.success('提交成功!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  },
  watch: {}
}
</script>

<style lang="stylus" scoped>
 .login-container
   width: 400px
   margin:0 auto
</style>
