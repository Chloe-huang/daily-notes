<template lang="pug">
  div.k-form-item
    label {{label}}
    slot
    p.error-msg(v-if="error") {{error}}
</template>
<script>
import Validator from 'async-validator';
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: String,
  },
  data() {
    return {
      error: '',
    };
  },
  mounted() {
    this.$on('validate', () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];

      // 传入规则
      const validator = new Validator({ [this.prop]: rules });

      // 验证输入值
      return new Promise((resolve, reject) => {
        validator.validate({ [this.prop]: value }, err => {
          console.log('err', err);
          if (err) {
            this.error = err[0].message;
            reject();
          } else {
            this.error = '';
            resolve();
          }
        });
      });
    },
  },
};
</script>
<style lang="scss">
.error-msg {
  color: red;
}
</style>
