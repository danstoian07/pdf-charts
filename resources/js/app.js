import Vue from "vue";
import Chart from "./components/Chart";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { Chart },
  template: "<Chart/>"
});