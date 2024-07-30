<script setup>
import {ref} from 'vue';
const ok = ref(false)
</script>
<template>
  <button @click="ok = !ok">toggle</button>
  <p v-show="ok">OK!</p>
</template>