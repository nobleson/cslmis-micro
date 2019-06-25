import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import "bootstrap/scss/bootstrap.scss";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import "vue-wysiwyg/dist/vueWysiwyg.css";
import wysiwyg from "vue-wysiwyg";
import FlashMessage from '@smartweb/vue-flash-message';


Vue.use(FlashMessage);
Vue.use(wysiwyg, {
    hideModules: { "link":true,
                   "code":true,
                   "table":true,
                   "image":true,
                   "bold":true,
                   "italic":true,
                   "underline":true,
                   "removeFormat":true
                 },
});
library.add(faSpinner, faAlignLeft)
Vue.config.productionTip = false
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(datePicker);
Vue.use(VueFormWizard)
Vue.use(BootstrapVue)