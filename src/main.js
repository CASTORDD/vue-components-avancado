import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

/*Vue.component('Assincrono', (resolve, reject) => {
  setTimeout(() => {
    resolve({
      template: '<h2>Component Assincrono</h2>'
    })
  }, 2000)

  //Llamar rejetc en caso de error
  
})*/

Vue.component(
  'Assincrono',
  () => import('./components/Assincrono.vue')
)

new Vue({
  render: h => h(App)
}).$mount("#app");
