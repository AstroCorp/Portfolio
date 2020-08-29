import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import './assets/css/styles.css';
import VuePaginate from 'vue-paginate';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

Vue.config.productionTip = false;
Vue.use(VuePaginate);
Vue.use(VueAxios, axios);

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faFacebookF, faTwitter, faGithub, faLinkedinIn, faTwitch, faYoutube, faChevronUp);

new Vue({
  render: h => h(App),
}).$mount('#app');
