import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'https://guarded-headland-11685.herokuapp.com/'

export { http }
