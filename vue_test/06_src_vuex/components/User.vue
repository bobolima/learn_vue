<template>
    <div>
        <span>{{ userInfo.name }}</span><br>
        <span>{{ userInfo.age }}</span><br>
        <span>{{ computeUser }}</span><br>
        <span>{{ msg }}</span><br>
        <button @click="getUserInfo(id)">点击获取姓名</button>
        <br>
        <button @click="addAge(n)">点击增加年龄</button>
        <br>
    </div>
</template>


<script>

    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: 'User',
        data() {
            return {
                id: '666',
                n: 5,
                msg: 'hello School'
            }
        },
        computed: {
            ...mapState('user', [
                'userInfo'
            ]),
            ...mapGetters('user', ['computeUser'])
        },
        methods: {
            ...mapActions('user', ['getUserInfo']),
            ...mapMutations('user', ['addAge']),
        },
        mounted() {
            console.log(this.$store)
        }

    }
</script>

<style>

</style>