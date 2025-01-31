# vue3-typewriter

Vue3 Component for typewriter effects.

[![npm version](https://img.shields.io/npm/v/@asasugar-use/vue3-typewriter.svg)](https://www.npmjs.com/package/@asasugar-use/vue3-typewriter)
[![npm downloads](https://img.shields.io/npm/dm/@asasugar-use/vue3-typewriter.svg)](https://www.npmjs.com/package/@asasugar-use/vue3-typewriter)

## Effects

![Vue3Typewriter Effects](./src/assets/preview.gif)

## Installation

- npm/yarn/pnpm

```shell
npm install @asasugar-use/vue3-typewriter
yarn add @asasugar-use/vue3-typewriter
pnpm add @asasugar-use/vue3-typewriter
```

## Use

- Import component

```js
import Vue3Typewriter from  "@asasugar-use/vue3-typewriter"; // Import component
import '@asasugar-use/vue3-typewriter/style'; // Import style

```

- Template

```vue
 <Vue3Typewriter text="打字机当前文本。" />
```

## Props

| Name | Type | Description | Required | Default |
| ------ | ------ | ------ | ------ | ------ |
| text | String | Text with typewriter effect | Yes | '' |
| typingSpeed | Number | Typing speed, the larger the value, the slower the speed | No | 100 |
| cursorShow | Boolean | Is the cursor at the end of the text flashing | No | true |
| cursorColor | String | Cursor color value | No | red |

## Methods

| Name | Type | Description |
| ------ | ------ | ------ |
| completed | Function | Callback for typing completion |
