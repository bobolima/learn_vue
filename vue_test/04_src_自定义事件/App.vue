<template>
    <div>
        <School/>
    </div>
</template>

<script>
import School from './components/School.vue';

export default {
    name: 'App',
    components: {
        School,
    },
    methods: {
        handleSchoolEvent(data) {
            console.log("收到了School组件传递过来的数据",data)
        }
    },
    // 通过this.$on()监听事件，但是需要手动销毁监听器
    mounted() {
        this.$on('school-event', this.handleSchoolEvent)
    },
    beforeDestroy() {
        this.$off('school-event')
    }

}
</script>

<style>
</style>
