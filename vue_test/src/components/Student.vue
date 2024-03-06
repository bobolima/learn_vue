<template>
    <div>
        <h2>{{ msg }}</h2>
        <h3>姓名：{{ name }}</h3>
        <h3>性别：{{ sex }}</h3>
        <h3>年龄：{{ age + 1 }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: '学生信息'
        }
    },
    // 第一种：简写式接收
    // props: ['name', 'sex', 'age']

    // 第二种：根据类型接受
    // props: {
    //     name:String,
    //     sex:String,
    //     age:Number
    // }

    // 第三种：根据类型，填写条件，默认值配置接受
    props: {
        name: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            default: '男',
        },
        age: {
            type: Number,
            default: 66
        }
    }

}
</script>

<style>

</style>