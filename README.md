# vue3-typewriter

Vue3 Component for typewriter effects.

## Effects

<video src="./src/assets/preview.mov" autoplay="true" controls="controls" width="800" height="600" />

[![npm version](https://img.shields.io/npm/v/vue3-typewriter.svg)](https://www.npmjs.com/package/vue3-typewriter)
[![npm downloads](https://img.shields.io/npm/dm/vue3-typewriter.svg)](https://www.npmjs.com/package/vue3-typewriter)

## Installation

- npm/yarn/pnpm

```shell
npm install vue3-typewriter
yarn add vue3-typewriter
pnpm add vue3-typewriter
```

## Use

- Import component

```js
import VueTypewriter from  "vue3-typewriter";
```

- Template

```vue
 <VueTypewriter text="您准备用打字机效果的文字" />
```

## Props

| Name | Type | Description | Required | Default |
| ------ | ------ | ------ | ------ | ------ |
| text | String | Text with typewriter effect | Yes | 打字机文本。 |
| typingSpeed | Number | Typing speed, the larger the value, the slower the speed | No | 100 |
| cursorShow | Boolean | Is the cursor at the end of the text flashing | No | true |
| cursorColor | String | Cursor color value | No | red |

## Methods

| Name | Type | Description |
| ------ | ------ | ------ |
| completed | Function | Callback for typing completion |
