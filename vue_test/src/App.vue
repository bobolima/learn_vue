<template>
    <div>
            <el-container>
                <el-header>
                    哈喽，世界！
                </el-header>
                <el-container>
                    <el-aside width="400px">
                        <el-col :span="12">
                            <el-menu
                                    default-active="2"
                                    class="el-menu-vertical-demo"
                                    @open="handleOpen"
                                    @close="handleClose"
                                    background-color="#545c64"
                                    text-color="#fff"
                                    active-text-color="#ffd04b"
                            >
                                <el-menu-item index="1"
                                              :route="{ path: '/about' }"
                                >
                                    <i class="el-icon-location"></i>
                                    <span slot="title">关于</span>
                                </el-menu-item>
                                <el-menu-item index="2"
                                              :route="{ path: '/home' }"
                                >
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">首页</span>
                                </el-menu-item>
                                <el-menu-item index="3" disabled>
                                    <i class="el-icon-document"></i>
                                    <span slot="title">导航三</span>
                                </el-menu-item>
                                <el-menu-item index="4">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">导航四</span>
                                </el-menu-item>
                            </el-menu>
                        </el-col>
                    </el-aside>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
    </div>
</template>

<script>


    export default {
        name: 'App',
        components: {},
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted() {
            console.log(this)
        }
    }
</script>

<style>
</style>
