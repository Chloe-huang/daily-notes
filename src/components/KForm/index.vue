<template lang="pug">
  div.container
    K-Form(:model="model" :rules="rules" ref="loginForm")
      KFormItem(label="用户名：" prop="name")
        KInput(type='text' v-model="model.name" placeholder="请输入用户名")
      KFormItem(label="密码：" prop="password")
        KInput(type='text' v-model="model.password" placeholder="请输入密码")
        //- 等价于 
        //- KInput(type='text' :value="value" @input="e => value = e" placeholder="请输入用户名")
      KFormItem
        button(@click="onLogin") 登录
</template>
<script>
import KInput from './KInput';
import KFormItem from './KFormItem';
import KForm from './KForm';
export default {
  components: { KInput, KFormItem, 'K-Form': KForm },
  data() {
    return {
      model: {
        password: '',
        name: '',
      },
      rules: {
        name: [{ required: true, message: '用户名必填' }],
        password: [{ required: true, message: '密码必填' }],
      },
    };
  },
  methods: {
    onLogin() {
      this.$refs.loginForm.validate(isValidate => {
        console.log('isValidate=', isValidate);
        if (isValidate) {
          alert('成功');
        } else {
          alert('失败');
        }
      });
    },
  },
};
</script>
