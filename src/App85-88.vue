<script setup>
import BaseCard from './components/BaseCard.vue'
</script>
<template>
  <h1>Slot</h1>
  <BaseCard v-slot="{ pageCount }">
<!--    <template #header="{ pageCount }">-->
      <h2 v-if="pageCount === 1">Vue.js Course</h2>
      <h2 v-if="pageCount === 2">HTML Course</h2>
      <h2 v-if="pageCount === 3">CSS Course</h2>
<!--    </template>-->
<!--    <template #default="{ pageCount }">-->
      <p v-if="pageCount === 1">This is a Vue.js Course. You can learn Vue.js</p>
      <p v-if="pageCount === 2">This is a HTML Course. You can learn HTML</p>
      <p v-if="pageCount === 3">This is a CSS Course. You can learn CSS</p>
<!--    </template>-->
<!--    <template #footer>-->
      <p>Instructor: Yoshipi</p>
<!--    </template>-->
  </BaseCard>
  <BaseCard/>
</template>