import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAsw5EFt-Ed8AcOoTOS4FxDoDnCvQ0THKY",
    libraries: "places" // necessary for places input
  }
});