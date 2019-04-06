import Vue from 'vue';
import VueDisqus from 'vue-disqus';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(VueDisqus);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
