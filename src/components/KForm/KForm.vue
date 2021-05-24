<template lang="pug">
  div.k-form
    slot
</template>
<script>
export default {
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      require: true,
    },
    rules: Object,
  },
  data() {
    return {};
  },
  methods: {
    validate(cb) {
      // 获取表单里所有的必填选项，统一处理
      const results = this.$children.filter(item => item.prop).map(item => item.validate());
      Promise.all(results)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>
