<template>
    <div>
        <h3>学校名称：{{ schoolName }}</h3>
        <h3>学校地址：{{ schoolAddress }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                schoolName: '清华大学',
                schoolAddress: '北京',
            }
        }
    }
</script>

<style>

</style>