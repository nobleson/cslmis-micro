import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
<<<<<<< HEAD
import VuejsClipper from 'vuejs-clipper'
// install
Vue.use(VuejsClipper ,{
    components: {
        clipperBasic: 'image-clipper-basic',
        clipperPreview: 'clipper-preview',
        clipperUpload: 'clipper-upload'
    }
})
Vue.use(datePicker); 
=======
import "bootstrap/scss/bootstrap.scss";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'


library.add(faSpinner, faAlignLeft)
Vue.config.productionTip = false
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(datePicker);
>>>>>>> 5dd587c6647464ea3f38bf0e2e576cc8ec43c1e0
Vue.use(VueFormWizard)
Vue.use(BootstrapVue)