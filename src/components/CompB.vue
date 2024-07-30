<script setup>
import {onActivated, onDeactivated, onMounted, onUnmounted, ref} from "vue";
import CompChild from './CompBChild.vue'
onMounted(() => {
  console.log('CompB onMounted')
})
onUnmounted(() => {
  console.log('CompB onUnmounted')
})
onActivated(() => {
  console.log('CompB onActivated')
})
onDeactivated(() => {
  console.log('CompB onDeactivated')
})
const count = ref(0)
</script>
<template>
  <div>
    <h2>CompB</h2>
    <p>{{ count }}</p>
    <button @click="count++">+1</button>
    <CompChild />
  </div>
</template>