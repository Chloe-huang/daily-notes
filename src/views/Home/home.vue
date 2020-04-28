<template lang="pug">
  div.home-page
    ul.notes-content
      li.note-item(@click="jumpTo") if else多层嵌套问题
    
</template>
<script>
export default {
  name: 'home',
  methods: {
    jumpTo() {
      this.$router.push({ path: '/more-if-else' });
    },
  },
};
</script>
