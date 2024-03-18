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
                console.log("子组件Student已发布事件")
                this.$emit('msg-event', this.msg)
            }
        }

    }
</script>

<style>

</style>