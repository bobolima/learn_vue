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
    created() {
        this.$bus.$on('student-event', this.handleSchoolEvent)

    },
    methods: {
        handleSchoolEvent(data) {
            console.log("收到了Student组件传递过来的数据",data)

        }
    },
    beforeDestroy() {
        this.$bus.$off('student-event')
    }
}
</script>

<style>
</style>
