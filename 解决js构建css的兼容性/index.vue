<template>
    <p>解决使用js构建的css兼容性问题</p>
    <p ref="demo">修改我的颜色</p>
</template>

<script>
    import {prefixStyle} from './prefixStyle'
    const transform = prefixStyle('transform')
    export default {
        name: 'prefixStyle',
        methods: {
            _changeStyle() {
                this.$refs.demo.style[transform] = `translate3d(x,x,x) scale(x)`
            }
        }
    }
</script>

<style scoped>

</style>