<script setup>
import {ref, watchEffect, watch} from "vue";
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref({
  a:0
})
watch(
    () => {
      console.log('watch first argment')
      return count3.value.a
    },
    (newValue, oldValue) => {
      console.log('watch')
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    }
)
watchEffect(() => {
  console.log('watchEffect')
  console.log(count1.value, count2.value, count3.value)
})
</script>
<template>
  <p>{{ count1 }}(count1)</p>
  <p>{{ count2 }}(count2)</p>
  <p>{{ count3 }}(count3)</p>
  <button @click="count1++">count1++</button>
  <button @click="count2++">count2++</button>
  <button @click="count3++">count3++</button>
</template>