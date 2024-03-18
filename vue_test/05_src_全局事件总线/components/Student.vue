<template>
    <div>
        <button @click="notifyParent">Click me</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                msg: 'hello School'
            }
        },
        methods: {
            notifyParent() {
                console.log(this)
                // 发布全局事件
                this.$bus.$emit('student-event', this.msg)
                // this.$emit('msg-event', this.msg)
            }
        }

    }
</script>

<style>

</style>