<script setup>
import {useRoute, onBeforeRouteUpdate, onBeforeRouteLeave} from 'vue-router'
import {onMounted, onUnmounted, watch} from "vue";
onBeforeRouteUpdate(() => {
  console.log('onBeforeUpdate')
})
onBeforeRouteLeave(() => {
  console.log('onBeforeRouteLeave')
  // window.confirm('本当にこのページを離れますか？')
})
const route = useRoute()
console.log(route)
watch(
    () => route.params.id,
    () => {
      console.log('watch')
    }
)
onMounted(() => {
  console.log('onMounted')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
</script>
<template>
  <h2 id="blog">Blog(id: {{ $route.params.id }})</h2>
  <p>ver: {{ $route.params.version }}</p>
  <RouterLink
      :to="{ name: 'blog', params: { id: Number($route.params.id) + 1, hash: '#blog' } }">
  </RouterLink>
</template>