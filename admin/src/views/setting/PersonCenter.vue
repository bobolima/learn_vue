<template>
    <el-form :model="passwordInfo" status-icon :rules="rules" ref="passwordInfo" label-width="100px" class="demo-ruleForm">
        <h2>你好,{{userInfo.name}}同学</h2>
        <el-form-item label="旧密码" prop="oldPassword">
            <el-input type="password" v-model="passwordInfo.oldPassword"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="password">
            <el-input type="password" v-model="passwordInfo.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
            <el-input type="password" v-model="passwordInfo.checkPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('passwordInfo')">提交</el-button>
            <el-button @click="resetForm('passwordInfo')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    name: "PersonCenter",
    data() {
        var checkOldPass = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('旧密码不能为空'));
            }
            callback();
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.passwordInfo.checkPassword !== '') {
                    this.$refs.passwordInfo.validateField('checkPassword');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.passwordInfo.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            passwordInfo: {
                oldPassword: '',
                password: '',
                checkPassword: ''
            },
            userInfo: {
                id: '',
                name: 'test'
            },
            rules: {
                password: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                checkPassword: [
                    {  required: true, validator: validatePass2, trigger: 'blur' }
                ],
                oldPassword: [
                    {  required: true, validator: checkOldPass, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        openMessage() {
            this.$notify({
                title: '成功',
                message: '密码修改成功，已为您返回到登录页面',
                type: 'success'
            });
        },
        logout() {
            this.$axios.post('/logout').then(res => {
                if (res.code === 200) {
                    localStorage.clear()
                    this.$store.commit('LOGOUT')
                    this.$router.push('/')
                }
            })
        },
        updatePassword() {
            this.$axios.post('/updatePassword', this.passwordInfo).then(res => {
                if (res.code === 200) {
                    this.logout()
                    this.openMessage()
                }
            })
        },
        submitForm(passwordInfo) {
            this.$refs[passwordInfo].validate((valid) => {
                if (valid) {
                    this.showConfirmMessageBox()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        showConfirmMessageBox() {
            this.$confirm('修改成功后退出平台需重新登录，是否继续', '提示', {
                confirmButtonText: '继续',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
               this.updatePassword()
            }).catch(() => {
                console.log("已取消修改密码，不执行任何操作")
            });
        },
        resetForm(passwordInfo) {
            this.$refs[passwordInfo].resetFields();
        }
    }
}
</script>
<style scoped>
.el-form {
    width: 500px;
    text-align: center;
    margin: 0 auto;
}
h2 {
    height: 100px;
}
.el-button {
    margin: 5px;
}
</style>