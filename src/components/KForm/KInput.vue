<template lang="pug">
  div.k-input
    //- $attrs: 接收非props传入的属性
    input(:type="type" :value="value" v-bind="$attrs" @input="onInput" @blur="onBlur")
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
      this.$parent.$emit('validate');
    },
    onBlur() {
      this.$parent.$emit('validate');
    },
  },
};
</script>
