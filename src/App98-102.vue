<script setup>
import {ref} from "vue";

const userInput = ref('')
const message = ref('')
const checked = ref(false)
const fruits = ref([])
const gender = ref('male')
const selected = ref([])
</script>
<template>
  <h1>v-model</h1>
  <h2>Text</h2>
  <input v-model.lazy.trim.number="userInput" type="text">
  <p>{{ userInput }}</p>
  <textarea v-model.trim="message"></textarea>
  <p style="shite-space: pre">{{ message }}</p>
  <h2>Checkbox</h2>
  <input id="checkbox" v-model="checked" type="checkbox" true-value="checked" false-value="not checked"/>
  <label for="checkbox">{{ checked }}</label>
  <input id="Apple" type="checkbox" value="Apple">
  <label for="Apple">Apple</label>
  <input id="Banana" type="checkbox" value="Banana">
  <label for="Banana">Banana</label>
  <input id="Grape" type="checkbox" value="Grape">
  <label for="Grape">Grape</label>
  <p>{{ fruits }}</p>
  <h2>Radio</h2>
  <input id="male" type="radio"/>
  <label for="male">male</label>
  <input id="female" type="radio"/>
  <label for="female">gemale</label>
  <p>{{ gender }}</p>
  <h2>Select</h2>
  <select v-model="selected" multiple>
    <option value="" disabled>Select one</option>
    <option v-for="option in ['A', 'B', 'C']" :key="option">{{ option }}</option>
  </select>
  <p>{{ selected }}</p>
</template>


<style scoped>

</style>