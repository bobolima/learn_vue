<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xl="6" :lg="7">
            <h2>欢迎来到admin超级牛逼管理系统</h2>
            <el-image class="qrcode" :src="require('@/assets/logo.png')"></el-image>
            <p>第一个管理系统</p>
            <p>各位路过的大叔大妈过来看看吧</p>
        </el-col>
        <el-col :span="1">
            <el-divider direction="vertical"></el-divider>
        </el-col>
        <el-col :span="6">
            <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="loginId" style="width: 380px">
                    <el-input v-model="loginForm.loginId"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" style="width: 380px">
                    <el-input v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input v-model="loginForm.code" style="width: 172px; float: left"></el-input>
                    <el-image class="verifyCode" :src="captchaImg"></el-image>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitInfo('loginForm')">登录</el-button>
                    <el-button @click="resetInfo('loginForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                loginId: '',
                password: '',
                code: '',
                codeId: '',
            },
            captchaImg: '',
            rules: {
                loginId: [
                    {required: true, message: '请输入用户名', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'}
                ],
                code: [
                    {required: true, message: '请输入验证码', trigger: 'blur'},
                    {min: 5, max: 5, message: '长度为 5 个字符', trigger: 'blur'}
                ]
            }
        };
    },
    methods: {
        submitInfo(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.post('/login', this.loginForm).then(res => {
                        this.$store.commit('SET_TOKEN', res.data.token)
                        this.$router.push('/index')
                    }, error => {
                        this.$message.error(error)
                        }
                    )
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetInfo(formName) {
            this.$refs[formName].resetFields();
        },
        getCaptchaImg() {
            this.$axios.get('/captchaImg').then(res => {
                this.loginForm.codeId = res.data.codeId
                this.captchaImg = res.data.captchaImg
            }, error => {
                this.$message.error(error)
            })
        }
    },
    created() {
        this.getCaptchaImg()
    }

}
</script>
<style scoped>
.el-row {
    display: flex;
    background-color: #fafafa;
    height: 100%;
    align-items: center;
}

.el-divider {
    height: 300px;
}

.qrcode {
    width: 180px;
    height: 180px;
}

.verifyCode {
    float: left;
    width: 100px;
    height: 40px;
    margin-left: 8px;
    border-radius: 4px;
    background-color: #42b983;
}
</style>