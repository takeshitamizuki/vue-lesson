<script setup>
import {ref} from "vue";
import ShowCount from "@/components/ShowCount.vue";
const count = ref(0)
</script>
<template>
  <ShowCount :total-score="count", :bar="'hello'" />
  <button @click="count++">+1</button>
</template>