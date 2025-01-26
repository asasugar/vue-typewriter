import type { App } from 'vue';
import Vue3Typewriter from './components/vue3-typewriter.vue';

declare global {
  interface Window {
    Vue?: App;
  }
}

let installed = false;
export function install (app: App) {
  if (installed) return;
  installed = true;
  app.component('Vue3Typewriter', Vue3Typewriter);
}

const plugin = {
  install
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}


// 导出插件对象
export default Vue3Typewriter;