<template>
    <div>
        <h1 ref="hello">你好啊</h1>
        <button @click="showRef">点击查看ref属性</button>
        <School ref="sch"></School>
        <Student></Student>
    </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue'

export default {
    name: 'App',
    components: {
        School,
        Student
    },
    methods: {
        showRef() {
            console.log(this.$refs) // 所有ref属性列表
            console.log(this.$refs.hello) // 真实DOM元素（id的代替者）
            console.log(this.$refs.sch) // 子组件的实例对象
        }
    }
}
</script>

<style>
</style>
