import ReusableComponent from './ReusableComponent.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('reusable-vue-component', ReusableComponent);
  }
};
