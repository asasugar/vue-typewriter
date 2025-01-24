<template>
  <div v-if="displayedText">
    <span v-bind="{ ...attrs }" class="text" :class="{ 'cursor-hidden': isCursorHidden }">{{
      displayedText
    }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onUnmounted, computed, useAttrs } from 'vue';
interface Props {
  text: string;
  typingSpeed?: number;
  cursorColor?: string;
  cursorShow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  typingSpeed: 100,
  cursorColor: 'red',
  cursorShow: true,
});

const emit = defineEmits<{
  (e: 'completed'): void;
}>();
const attrs = useAttrs();

const displayedText = ref(''); // 定义用于展示的文本
const isFinished = ref(false); // 打字机效果是否执行完毕

const isCursorHidden = computed(() => !props.cursorShow || isFinished.value);

let currentIndex = 0;
let lastTime = 0;
let animationFrameId: number;

// 打字机效果函数
const typeWriterEffect = (time: number) => {
  if (currentIndex < props.text.length) {
    if (!lastTime) lastTime = time;
    const timeDifference = time - lastTime;

    if (timeDifference > props.typingSpeed) {
      displayedText.value += props.text.charAt(currentIndex);
      currentIndex++;
      lastTime = time;
    }
    animationFrameId = requestAnimationFrame(typeWriterEffect);
  } else {
    isFinished.value = true;
    emit('completed');
  }
};

// 监听属性变化
// 监听 text 属性的变化并重新运行打字效果
watch(
  () => props.text,
  (newText, oldText) => {
    // 如果新文本短于旧文本，则调整显示文本以匹配较短的新文本
    if (newText.length < oldText.length) {
      displayedText.value = newText.slice(0, currentIndex);
    }
    isFinished.value = false;
    animationFrameId = requestAnimationFrame(typeWriterEffect);
  }
);

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId); // 取消未完成的动画帧请求
});
</script>

<style scoped>
.text {
  border-right: 2px solid v-bind('props.cursorColor');
  /* 这个效果表现光标 */
  padding-right: 2px;
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  0%,
  100% {
    border-color: transparent;
  }

  50% {
    border-color: v-bind('props.cursorColor');
  }
}

.cursor-hidden {
  border-right: none;
}
</style>
