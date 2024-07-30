<script setup>
import {ref} from "vue";

const pageCount = ref(1)
</script>
<template>
  <div>
    <button @click="pageCount = 1">1</button>
    <button @click="pageCount = 2">2</button>
    <button @click="pageCount = 3">3</button>
<!--    <header>-->
<!--      <slot name="header" :page-count="pageCount" />-->
<!--    </header>-->
    <main>
      <slot :page-count="pageCount"/>
    </main>
<!--    <footer>-->
<!--      <slot name="footer">-->
<!--        <p>Instructor: Anonymous</p>-->
<!--      </slot>-->
<!--    </footer>-->
  </div>
</template>
<style scoped>
div {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 16px;
}
</style>