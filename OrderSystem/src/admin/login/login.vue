<template>
  <div class="login" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="bg-color1"></div>
    <div class="bg-color2"></div>
    <div class="login-box">
      <div class="login-logo">
        <p>订单跟踪系统</p>
      </div>
      <section class="login-form">
        <p class="login-title">管理员登录</p>
        <el-form :model="loginForm" ref="loginForm">
          <el-form-item class='login-input' prop="moblie">
            <el-input v-model.number="loginForm.moblie" auto-complete="off" placeholder="手机"></el-input>
          </el-form-item>
          <el-form-item prop="password" class='login-input'>
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <div class="login-tip">
            <el-checkbox v-model="checked">一周内自动登录</el-checkbox>
          </div>
          <div class="submit-box">
            <el-button class="submit-btn" type="primary" :loading="load" @click='submit("loginForm")' @keyup.enter='submit("loginForm")'>登录</el-button>
          </div>
        </el-form>
      </section>
    </div>
  </div>
</template>

<script>
import api from '../../api/request'
export default {
  data() {
    var checkMoblie = (rule, value, callback) => {

    }
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        moblie: '',
        password: '',
        checked: false
      },
      rules: {
        moblie: [{
          validator: checkMoblie,
          trigger: 'blur'
        }],
        password: [{
          validator: checkPassword,
          trigger: 'blur'
        }]
      },
      checked: false,
      load: false,
      fullscreenLoading: false
    }
  },
  methods: {
    submit(loginForm) {
      var _t = this
      this.load = true
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          this.load = false
          let data = {
            username: _t.loginForm.moblie,
            password: _t.loginForm.password,
            day: 7
          }
          if (!_t.checked) {
            data.day = 1
          }
          // 18680357414 654321
          _t.Login(data)
        } else {
          this.load = false
        }
      })
    },
    Login(data) {
      var _t = this
      // 登录接口
      api.user.adminLogin(data).then(res => {
        if (res.data.code == 200) {
          _t.fullscreenLoading = false
          let userInfo = {
            companyid: res.data.data.companyid,
            factoryid: res.data.data.factoryid,
            username: res.data.data.username,
            companyname: res.data.data.companyname,
            roleid: res.data.data.roleid,
            issystemuser: res.data.data.issystemuser
          }
          if (_t.checked) {
            _t.setCookie('sessionid', res.data.data.sessionid, 7)
          }
          sessionStorage.setItem('token', res.data.data.sessionid)
          sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
          _t.setCookie('userInfo', JSON.stringify(userInfo), 7)

          // this.getAuthoritys()
          this.$router.push({ path: '/adminAuthority/menu' })
        } else {
          this.$util.isError(res.data)
        }
      })
    },
    setCookie(name, value, expiredays) {
      var exdate = new Date()
      exdate.setDate(exdate.getDate() + expiredays)
      document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
    },
    getCookie(name) {
      if (document.cookie.length > 0) {
        let start = document.cookie.indexOf(name + '=')
        if (start != -1) {
          start = start + name.length + 1
          let end = document.cookie.indexOf(';', start)
          if (end == -1) end = document.cookie.length
          return unescape(document.cookie.substring(start, end))
        }
      }
      return ''
    },
    checkCookie() {
      let sessionid = this.getCookie('sessionid')
      let userInfo = this.getCookie('userInfo')
      if (sessionid != null && sessionid != '' && userInfo != null && userInfo != '') {
        sessionStorage.setItem('token', sessionid)
        sessionStorage.setItem('userInfo', userInfo)
        this.getAuthoritys()
      }
    },
    // 获取权限
    getAuthoritys() {
      api.user.getAuthoritys().then(res => {
        if (res.data.code == 200) {
          // let Route = true
          this.$store.state.Authoritys = res.data.data

          for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].menupath && res.data.data[i].checked == true) {
              this.$router.push({
                path: res.data.data[i].menupath
              })
              break
            }
            if (i >= (res.data.data.length - 1) && res.data.data[i].checked == false) {
              this.$router.push({
                path: '/Authority/roles'
              })
            }
          }
        } else {
          this.$alert('获取权限信息失败', '错误提示')
        }
      })
    }
  },
  created() {
    let _t = this
    window.onkeydown = function(event) {
      var e = event ? event : (window.event ? window.event : null)
      if (e && e.keyCode == 13) {
        _t.submit('loginForm')
      }
    }
    this.checkCookie()
  }
}
</script>

<style lang="stylus">
	.login
		position:absolute
		top:0
		left:0
		bottom:0
		right:0
		background:url('login-bg.png') no-repeat
		background-size:100% 100%
		.login-box
			width: 400px
			margin:0 auto
			padding-top:12%
			.login-logo
				p
					font-size:46px
					font-weight:700
					color:#fff
					letter-spacing:15px
			.login-form
				background-color: #fff
				margin-top: 55px
				box-shadow:0 0 10px rgba(0,0,0,0.7)
		    .login-title
				  background-color: #8492a6
				  color: #ffffff
				  height:60px
				  font-weight:100
				  line-height:60px
				  font-size: 24px
				  text-align: center
				  letter-spacing:10px
			.login-input
				margin: 30px 36px 20px
				&:nth-child(2)
					margin: 0px 36px 20px
			.login-tip
				margin:0 36px
				text-align: left
				font-size:12px
				color:#333333
				.el-checkbox__label
					padding-left:10px
			.submit-box
				padding:30px 36px 20px
			  .submit-btn
				  width: 100%
</style>
