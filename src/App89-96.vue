<script setup>
import {defineAsyncComponent, ref, shallowRef} from "vue";
import CompA from './components/CompA.vue'
// import CompB from './components/CompB.vue'
import BaseLoader from './components/BaseLoader.vue'
import ErrorMessage from './components/ErrorMessage.vue'
const CompB = defineAsyncComponent({
  loader: () => import('./components/CompB.vue'),
  loadingComponent: BaseLoader,
  delay: 200,
  errorComponent: ErrorMessage,
  timeout: 2000
})
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
const isShow = ref(false)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <KeepAlive>
    <component :is="currentComp"/>
  </KeepAlive>
  <button @click="isShow = true">Open Modal</button>
  <Teleport to="body">
    <dialog v-if="isShow" open>
      <p>This is a Modal!</p>
      <button @click="isShow = false">Close</button>
    </dialog>
  </Teleport>
  <Teleport to="body"><p>A</p></Teleport>
  <Teleport to="body"><p>B</p></Teleport>
</template>