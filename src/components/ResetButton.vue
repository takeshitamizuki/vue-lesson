<script setup>
const emit = defineEmits(['reset'])
function emitReset() {
  emit('resetCount', 100)
}
</script>
<template>
  <button @click="emitReset">Reset</button>
</template>
