<script setup>
import {ref} from "vue";
const count = ref(0)
</script>
<template>
  <p>{{ count }}</p>
  <div @click="count++">
    <button @click.stop="count = 30">button</button>
  </div>
  <a href="https://vuejs.org" @click.prevent.stop=""></a>
</template>
