import Vue from 'vue'
import App from './App.vue'
import vuetify from "@/plugins/vuetify";
import router from "./router"
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false;

Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA2GBRKWaNAgQgEWFXpDyXS9WyYhlPuaYA'
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
