<template>
    <div>
        <h3>姓名：{{ studentName }}</h3>
        <h3>年龄：{{ studentAge }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                studentName: '张六',
                studentAge: '20',
            }
        }
    }
</script>

<style>

</style>