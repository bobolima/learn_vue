<template>
    <el-container>
        <Aside></Aside>
        <el-container>
            <el-header>
                <strong>admin超级牛逼管理系统</strong>
                <div class="person-menu">
                    <el-avatar size="medium"
                               src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    <el-dropdown>
                    <span class="el-dropdown-link">
                        用户xxx<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="toPersonCenter">个人中心</el-dropdown-item>
                            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-link href="https://www.baidu.com" target="_blank">网站</el-link>
                    <el-link href="https://www.bilibili.com" target="_blank">B站</el-link>
                </div>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Aside from './module/Aside.vue'

    export default {
        name: "Home",
        components: {
            Aside
        },
        data() {
            return {};
        },
        methods: {
            logout() {
                this.$axios.post('/logout').then(res => {
                    if (res.code === 200) {
                        localStorage.clear()
                        this.$store.commit('LOGOUT')
                        this.$router.push('/')
                    }
                })
            },
            toPersonCenter() {
                this.$router.push('/personCenter')
            }
        },
    }
</script>

<style scoped>
    .el-container {
        padding: 0;
        margin: 0;
        height: 100%;
    }

    .el-header {
        background-color: #a6af5e;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .person-menu {
        width: 210px;
        float: right;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .el-dropdown-link {
        cursor: pointer;
    }
    .person-center {
        //background-color: #42b983;
        color: #606266;
    }
</style>