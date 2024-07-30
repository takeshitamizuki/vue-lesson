<script setup>
defineProps({
  isShow: {
    type: Boolean,
    required: true
  }
})
</script>
<template>
  <div v-if="isShow">ON</div>
  <div v-else>OFF</div>
</template>