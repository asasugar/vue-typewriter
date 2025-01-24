import type { App } from 'vue';
import VueTypewriter from './components/vue-typewriter.vue';

declare global {
  interface Window {
    Vue?: App;
  }
}

let installed = false;
export function install (app: App) {
  if (installed) return;
  installed = true;
  app.component('VueTypewriter', VueTypewriter);
}

const plugin = {
  install
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}


// 导出插件对象
export default VueTypewriter;