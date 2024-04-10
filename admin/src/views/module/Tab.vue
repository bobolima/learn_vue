<template>
    <el-tabs v-model="tabsValue" type="card" closable  @tab-remove="removeTab"  @tab-click="handleClick" >
        <el-tab-pane v-for="item in levelList" :key="item.name" :name="item.path" >
            <span slot="label" >{{item.title}}</span>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
    name: "Tab",
    data() {
        return {
            tabsValue: this.$route.path,
            levelList: JSON.parse(sessionStorage.getItem("tabs")) || [],
        }
    },
    created(){
        this.start()
    },
    watch: {
        $route() {
            this.start()
        },
        levelList(value) {
            if (value.length <= 0) {
                this.$router.push('/index')
            }
            sessionStorage.setItem('tabs', JSON.stringify(value));
        },
    },
    methods: {
        start() {
            let matched = this.$route.matched;
            if (!(this.levelList.length === 0 && matched[1].path === '/index')) {
                const found = this.levelList.some((item) => item.path === matched[1].path);
                this.tabsValue = matched[1].path
                if (!found) {
                    this.$set(this.levelList, this.levelList.length, {
                        name: matched[1].name,
                        path: matched[1].path,
                        title: matched[1].meta.title
                    });
                }
            }
        },
        handleClick(tab) {
            this.$router.push(tab.name);
        },
        removeTab(targetName) {
            let tabs = this.levelList;
            let activeName = this.tabsValue;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.path === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            this.tabsValue = nextTab.path;
                            this.$router.push(nextTab.path)
                        }
                    }
                });
            }
            this.levelList = this.levelList.filter(tab => tab.path !== targetName);
        }
    }
}
</script>
<style scoped>

</style>