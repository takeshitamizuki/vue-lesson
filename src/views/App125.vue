<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// function toAbout() {
//   console.log('toAbout')
//   router.push({ path: 'about' })
// }
</script>
<template>
  <h1>Vue Router</h1>
  <RouterView/>
  <p style="margin-top: 1000px">bottom</p>
  <RouterLink :to="{ name: 'home' }" replace>Home</RouterLink> |
  <RouterLink :to="{ name: 'posts', params: { id: 'yoshipi' } }">Profile</RouterLink> |
<!--  <RouterLink :to="{ name: 'about' }">About</RouterLink>-->
<!--  <RouterView v-slot="{ Component, route}">-->
<!--    <Transition name="fade" :key="route.path">-->
<!--      <component :is="Component" />-->
<!--    </Transition>-->
<!--  </RouterView>-->

<!--  <div class="container">-->
<!--    <main>-->
<!--      <RouterView />-->
<!--    </main>-->
<!--    <RouterView name="Sidebar"/>-->
<!--  </div>-->
<!--  <RouterView name="Footer"/>-->
</template>
<style scoped>
/*.container {*/
/*  display: flex;*/
/*  justify-content: space-evenly;*/
/*}*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>