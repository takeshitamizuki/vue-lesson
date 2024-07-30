<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  nextTick
} from 'vue'

const count = ref(0)
console.log('script setup')
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
function countUp() {
  count.value++
  nextTick(() => {
    console.log('nextTick')
  })
}
</script>
<template>
  <p>count: {{ count }}</p>
  <button @click="countUp">+1</button>
</template>