<script setup>
import { ref } from "vue"
const message = ref('<h1>Password</h1><input>')
</script>
<template>
  <div v-html="message"></div>
</template>
