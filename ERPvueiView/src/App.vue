<template>
  <div id="app">
    <div class="menu">
      <Menu :theme="theme" active-name="1" @on-select="select">
        <Menu-item name="1">
          <Icon type="document-text"></Icon>
          员工管理
        </Menu-item>
        <Menu-item name="2">
          <Icon type="chatbubbles"></Icon>
          客户管理
        </Menu-item>
        <Menu-item name="3">
          <Icon type="heart"></Icon>
          设备管理
        </Menu-item>
        <Menu-item name="4">
          <Icon type="heart-broken"></Icon>
          设备列表
        </Menu-item>
      </Menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      theme: 'light',
      spanLeft: 5,
      spanRight: 19
    }
  },
  computed: {
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    toggleClick() {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    },
    select(val) {
      if (val == 1) {
          this.$router.push({path: '/Employee', query: { plan: 'private' }})
      }
      if (val == 2) {
          this.$router.push({path: '/Customer', query: { plan: 'private' }})
      }
      if (val == 3) {
          this.$router.push({path: '/Equipment', query: { plan: 'private' }})
      }
      if (val == 4) {
          this.$router.push({path: '/EquipmentList', query: { plan: 'private' }})
      }
    }
  }
}
</script>

<style>
html,
body {
  height: 100%
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex
}
</style>
