<template>
    <el-aside width="200px">
        <div class="home-logo">
        </div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
        >
            <el-menu-item index="0">
                <template slot="title">
                    <i class="el-icon-s-home"></i>
                    <span>首页</span>
                </template>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-operation"></i>
                    <span>系统管理</span>
                </template>
                <el-menu-item index="user" route="/user">
                    <template slot="title">
                        <i class="el-icon-s-custom"></i>
                        <span>用户管理</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="role" route="/role">
                    <template slot="title">
                        <i class="el-icon-rank"></i>
                        <span>角色管理</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="menu" route="/menu">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>菜单管理</span>
                    </template>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-tools"></i>
                    <span>系统工具</span>
                </template>
                <el-menu-item index="2-1">
                    <template slot="title">
                        <i class="el-icon-s-order"></i>
                        <span>数据字典</span>
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
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: left;
        line-height: 200px;
    }
    .el-menu-vertical-demo {
        height: 100%;
    }
</style>