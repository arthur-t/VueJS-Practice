import '../assets/styles.css'
import Vue from 'vue'
import App from './App.vue'

Vue.component('app',App)

new Vue({
    el: '#app',
    render: h => h(App)
})