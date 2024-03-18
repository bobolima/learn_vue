<template>
    <div>
        <!--   通过v-on/监听事件     -->
        <Student @msg-event="handleMsgEvent"></Student>
    </div>
</template>

<script>

import Student from "@/components/User.vue";
export default {
    name: 'School',
    components :{
        Student
    },
    data() {
        return {
            msg: '学生信息'
        }
    },
    methods: {
        handleMsgEvent(data) {
            console.log("父组件School已收到数据", data)

            // 绑定事件给父组件
            this.$emit("school-event", data)
        }
    }
}
</script>

<style>

</style>