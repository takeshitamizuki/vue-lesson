<script setup>
import { onMounted, ref } from "vue";
const userInput = ref(null)
onMounted(() => {
  userInput.value.focus()
})
</script>
<template>
  <input ref="userInput" type="text">
</template>