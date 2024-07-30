<script setup>
import {ref} from "vue";
const count = ref(0)
function countUp(event, times) {
  count.value = event.clientX * times
}
</script>
<template>
  <p>{{ count }}</p>
  <button @click="count = $event.clientX">button</button>
  <button @click="countUp($event, 5)">button</button>
</template>
