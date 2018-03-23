# reusable-vue-component

This is a reusable UI component based in Vue.js

## Installation

```js
npm i --save-dev reusable-vue-component
```

### Browser

Include the script file, then install the component with `Vue.use(ReusableComponent);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-clock-simple/dist/reusable-vue-component.min.js"></script>
<script type="text/javascript">
  Vue.use(ReusableComponent);
</script>
```

### Module

```js
import ReusableComponent from 'reusable-vue-component';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<reusable-vue-component msg='your string' onUpdate="function to be triggered"></reusable-vue-component>
```
