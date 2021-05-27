<template lang="pug">
  div.toast-container
    button(@click="onClick") 点击
    Toast
</template>

<script>
import Toast from '@/components/Toast/index'
export default {
  components: {Toast},
  methods: {
    onClick() {

    }
  }
}
</script>

<style>

</style>