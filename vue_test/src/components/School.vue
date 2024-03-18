<template>
    <div>
        <Student @student-event="handleMsgEvent" ref="student"></Student>
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
            this.$emit("school-event", data)
        }
    },
    mounted() {
        this.$off("msg-event")
    }
}
</script>

<style>

</style>