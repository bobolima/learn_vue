<template>
    <el-aside width="200px">
        <div class="home-logo">
        </div>
        <el-menu
                :default-active="this.$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
        >
            <el-menu-item index="/index" route="/index">
                <template slot="title">
                    <i class="el-icon-s-home"></i>
                    <span>首页</span>
                </template>
            </el-menu-item>
            <el-submenu :index="menu.name" v-for="menu in menuList" :key="menu.name">
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{ menu.title }}</span>
                </template>
                <el-menu-item :index="item.path" v-for="item in menu.children" :key="item.name">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{ item.title }}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "Aside",
        data() {
            return {
            }
        },
        computed: {
            menuList() {
                return this.$store.state.menus.nav;
            },
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }
</script>

<style scoped>
    .el-aside {
        background-color: #D3DCE6;
        text-align: left;
        line-height: 200px;
    }
    .el-menu-vertical-demo {
        height: 100%;
    }
    .el-menu {
        border: none !important;
    }
</style>