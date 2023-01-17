import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

require('./bootstrap');
window.Vue = require('vue').default;

import numeral from 'numeral';
import VueWait from 'vue-wait';
import moment from 'moment-timezone';
import VueSweetalert2 from 'vue-sweetalert2';

import store from './store';
import router from './routes';
import Mixin from './mixins/global';
import Vue from 'vue';
import PageLoader from './components/PageLoader.vue';

moment().tz("America/Mexico_City").format();
require('moment/locale/es');

Vue.component('PageLoader', PageLoader);
Vue.prototype.$moment = moment;
Vue.prototype.$numeral = numeral;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueWait);
Vue.use(VueSweetalert2);

Vue.filter('formatNumber', value => {
    return numeral(value).format('0,0');
});

Vue.filter('moment', (value, format = 'DD/MM/YYYY') => {
    const date = moment(value);
    return date.isValid() ? date.format(format) : '-';
});

Vue.mixin(Mixin);

const app = new Vue({
    store,
    router,
    wait: new VueWait({
        useVuex: false
    })
}).$mount('#app');
