<script setup>
import { ref } from "vue";

const count = ref(2)
const count2 = ref(4)
</script>
<template>
  <div>{{ count + count2 }}</div>
  <div>{{ count > 3 ? 'Yes' : 'No' }}</div>
  <div>{{ count }}</div>
</template>
