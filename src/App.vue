<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Vue3Typewriter from './components/vue3-typewriter.vue';
const dynamicText = ref('打字机当前文本。');

// 模拟动态数据更新
onMounted(() => {
  // 使用 setInterval 来定期更新响应式变量
  setInterval(() => {
    dynamicText.value += `突然，增加了新的数据`;
  }, 1000); // 每秒更新一次
});
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Vue3Typewriter :text="dynamicText"  cursor-color="blue" />

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
