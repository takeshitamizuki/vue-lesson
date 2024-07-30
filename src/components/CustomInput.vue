<script setup>
const [model, modifiers] = defineModel({
  type: String,
  default: 'default',
  set(value) {
    if (modifiers.uppercase) {
      return value.toUpperCase()
    }
    return value
  }
})
const titleName = defineModel('titleName', {
  type: String,
  required: true
})
</script>
<template>
  <h2>CustomInput</h2>
  <input v-model="model" type="text">
  <p>model: {{ model }}</p>
  <p>modifiers: {{ modifiers }}</p>
  <input v-model="titleName" type="text">
  <p>model: {{ titleName }}</p>
</template>