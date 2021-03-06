import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU'
import './assets/styles.css'
import App from './App.vue'

Vue.use(ElementUI, { locale })

new Vue({
  render: h => h(App),
}).$mount('#app')