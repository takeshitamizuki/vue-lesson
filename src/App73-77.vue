<script setup>
import {ref} from 'vue'
import FoodCard from './components/FoodCard.vue'

const foods = ref([
  {name: '寿司', emoji: '🍣'},
  {name: 'ハンバーガー', emoji: '🍔'},
  {name: '焼肉', emoji: '🥩'},
  {name: '麺系', emoji: '🍜'},
  {name: 'たこ焼き', emoji: '🐙'},
  {name: 'おでん', emoji: '🍢'},
  {name: '丼系', emoji: '🍚'},
  {name: 'オムライス', emoji: '🥚'},
])
const pickedFoodIndex = ref(0)
const newFoodIndex = ref(1)
function pickFood(index) {
  pickedFoodIndex.value = index
  newFoodIndex.value++
}
</script>
<template>
  <main>
    <h1 class="title">今日何食べる？</h1>
    <FoodCard
        :name="foods[0].name"
        :emoji="foods[0].emoji"
        @click="pickFood(pickedFoodIndex)"
    />
    <template v-if="newFoodIndex < foods.length">
      <p>VS</p>
      <FoodCard
          :name="foods[1].name"
          :emoji="foods[1].emoji"
          @click="pickFood(pickedFoodIndex)"
      />
    </template>
  </main>
</template>
<style scoped>
main {
  width: 350px;
  margin: 100px auto;
  text-align: center;
}
.title {
  margin-bottom: 60px;
}
</style>