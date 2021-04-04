import './styles/main.scss'
const Vue = require('vue')
import App from './App.vue'

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
