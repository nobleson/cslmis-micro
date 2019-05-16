import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
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
Vue.use(VueFormWizard)
Vue.use(BootstrapVue)