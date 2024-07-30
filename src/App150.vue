<script setup>
import { useCounterStore } from './store/counter.js'
import CounterComp from './components/CounterComp.vue'
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
<template>
  <h1>Pinia</h1>
  <button @click="counterStore.count++">+1</button>
  <button @click="counterStore.increment">increment</button>
  <p>{{ counterStore.count }}</p>
  <p>doubleCount: {{ counterStore.doubleCount }}</p>
  <CounterComp/>
</template>