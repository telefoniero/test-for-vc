import './styles/main.scss'
import './assets/img/images.js'
const Vue = require('vue')
import App from './App.vue'

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
