<template>
    <input type="text" @keydown="KeydownNumber" />
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    KeydownNumber() {
        let code = event.keyCode
        if (!(code >= 48 && code <= 57) && !(code >= 96 && code <= 105) && code != 110 && code != 190 && code != 8 && code != 37 && code != 39) {
            event.returnValue = false
        } else {
            event.returnValue = true
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
