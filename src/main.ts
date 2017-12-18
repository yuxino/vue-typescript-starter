// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './components/App.vue';
// use vue router here
import router from './router/index';

Vue.config.productionTip = false;

const v = new Vue({
  el: '#app',
  components: { App },
  template: `
    <App/>
  `,
  router
});