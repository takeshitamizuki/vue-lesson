<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: ${{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Students: {{ info.students }}</h2>
  <h2>Instructor age: {{ instructor.age }}</h2>
  <h2>Instructor bio: {{ instructor.bio }}</h2>
  <h2>Instructor SNS Twitter: {{ instructor.sns.twitter }}</h2>
  <h2>Instructor E-mail: {{ instructor.email }}</h2>
  <h2>Course Info Sections: {{ sections + 1 }}</h2>
</template>

<script setup>
import {reactive, ref} from 'vue'
  // let a = 1
  // let b = 2
  // let c = a + b // c = 3
  // a = 4
  // console.log(c)
  const title = ref('Vue.js Course!')
  let price = ref(9.99)
  console.log(price.value)
  function increment() {
    price.value += 1
    instructor.age += 1
    instructor.bio = 'hi'
    instructor.sns.twitter  = 'hello'
    instructor.email = 'info@example.com'
    console.log('click')
  }
  const info = ref({
    students: 1000,
    rating: 4,
  })
  const instructor = reactive({
    name: 'yoshipi',
    age: 25,
    sns: {
      twitter: '@__yoshipi__',
      youtube: '@yoshipi',
    },
    email: ref('yoshipi@example.com')
  })
  instructor.bio = 'hello'
  const item = reactive([ref(1), ref(2), ref(3)])
  item.reverse()
  const { sections } = {
    sections: ref(10),
    language: ref('Japanese')
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>