import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import VuejsClipper from 'vuejs-clipper';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import 'mdbvue/build/css/mdb.css';
import 'nuxt-dropzone/dropzone.css'
import VueTimeago from 'vue-timeago';
import {Tabs, Tab} from 'vue-tabs-component';
import FlashMessage from '@smartweb/vue-flash-message';
import Notifications from 'vue-notification'

Vue.use(FlashMessage);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
Vue.use(Notifications)
// install
Vue.use(VuejsClipper ,{
    components: {
        clipperBasic: 'image-clipper-basic',
        clipperPreview: 'clipper-preview',
        clipperUpload: 'clipper-upload'
    }
})
Vue.use(VueTimeago, {
    name: 'Timeago', // Component name, `Timeago` by default
    locale: 'en', // Default locale
    // We use `date-fns` under the hood
    // So you can use all locales from it
    locales: {
      'zh-CN': require('date-fns/locale/zh_cn'),
      ja: require('date-fns/locale/ja')
    }
  })

Vue.use(datePicker); 
Vue.use(VueFormWizard)
Vue.use(BootstrapVue)