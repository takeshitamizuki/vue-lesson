<script setup>
import {ref} from "vue";
// import TmpCom from './components/TmpCom.vue'

const isShow = ref(true)
// function beforeEnter(el) {
//   console.log('beforeEnter', el)
//   el.style.transform = 'translateX(30px)'
// }
// let enterIntervalId;
// function enter(el, done) {
//   console.log('enter', el)
//   let translateXValue = 30
//   enterIntervalId = setInterval(() => {
//     translateXValue -= 1
//     el.style.transform = `translateX(${translateXValue}px)`
//     if (translateXValue === 0) {
//       clearInterval(enterIntervalId)
//       done()
//     }
//   }, 20)
// }
// function afterEnter(el) {
//   console.log('afterEnter', el)
// }
// function enterCancelled(el) {
//   console.log('enterCancelled', el)
//   clearInterval(enterIntervalId)
// }
// function beforeLeave(el) {
//   console.log('beforeLeave', el)
// }
// let leaveIntervalId;
// function leave(el, done) {
//   console.log('leave', el)
//   let translateXValue = 0
//   leaveIntervalId = setInterval(() => {
//     translateXValue += 1
//     el.style.transform = `translateX(${translateXValue}px)`
//     if (translateXValue === 30) {
//       clearInterval(leaveIntervalId)
//       done()
//     }
//   }, 20)
// }
// function afterLeave(el) {
//   console.log('afterLeave', el)
// }
// function leaveCancelled(el) {
//   console.log('leaveCancelled', el)
//   clearInterval(leaveIntervalId)
// }
const fruits = ref(['Apple', 'Banana', 'Grape'])
const newFruit = ref('')
</script>
<template>
  <h1>Animation</h1>
  <input v-model="newFruit" type="text"/>
  <button @click="fruits.unshift(newFruit)">Add</button>
  <TransitionGroup name="fade" tag="div">
    <div v-for="(fruit, index) in fruits" :key="fruit" @click="fruits.splice(index, 1)">
      {{ fruit }}
    </div>
  </TransitionGroup>
  <!--  <Transition-->
  <!--      name="custom-classes"-->
  <!--      enter-active-class="animate__animated animate__bounce"-->
  <!--      leave-active-class="animate__animated animate__shakeX"-->
  <!--  >-->
  <!--    <div v-if="isShow">Hello Fade</div>-->
  <!--  </Transition>-->
  <!--  <Transition name="slide" appear>-->
  <!--    <div v-if="isShow">Hello Slide</div>-->
  <!--  </Transition>-->
  <!--  <h1 class="animate__animated animate__bounce">An animated element</h1>-->
  <!--  <Transition name="fade" mode="out-in">-->
  <!--    <TmpCom :is-show="isShow" />-->
  <!--  </Transition>-->
  <!--  <Transition-->
  <!--      :css="false"-->
  <!--      @before-enter="beforeEnter"-->
  <!--      @enter="enter"-->
  <!--      @after-enter="afterEnter"-->
  <!--      @enter-cancelled="enterCancelled"-->
  <!--      @before-leave="beforeLeave"-->
  <!--      @leave="leave"-->
  <!--      @after-leave="afterLeave"-->
  <!--      @leave-cancelled="leaveCancelled"-->
  <!--  >-->
  <!--    <div :is-show="isShow">Hello</div>-->
  <!--  </Transition>-->
</template>
<style scoped>
.fade-enter-form {
  opacity: 0;
}
.hello {
  transition: opacity 1s;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-move {
  transition: transform 1s;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  position: absolute;
}
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide 1s;
}
.slide-leave-active {
  animation: slide 1s reverse;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>