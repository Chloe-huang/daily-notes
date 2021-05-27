<template lang="pug">
  div.home-page
    ul.notes-content
      li.note-item(@click="jumpTo('more-if-else')") if else多层嵌套问题
      li.note-item(@click="jumpTo('kform')") form表单组件封装
      li.note-item(@click="jumpTo('toast')") 全局弹窗组件
    
</template>
<script>
export default {
  name: 'home',
  methods: {
    jumpTo(path) {
      this.$router.push({ path });
    },
  },
};
</script>
