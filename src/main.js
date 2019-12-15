import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import OpenElectionCompass from './OpenElectionCompass.vue';
import Icon from '@/components/elements/Icon.vue';
import PageSection from '@/components/elements/PageSection.vue';
import router from './router/index';
import store from './store/index';
import numberFormats from './locales/numberFormats';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  numberFormats,

  // When accessing root locales in single file components with their own locales, vue-i18n will
  // print a fallback warning in the console. This gets quite annoying, since we do that a lot and
  // there is nothing wrong about it. Thankfully, we can disable that.
  // For more information see: https://github.com/kazupon/vue-i18n/issues/201
  silentTranslationWarn: true,
});

Vue.component('icon', Icon);
Vue.component('open-election-compass', OpenElectionCompass);
Vue.component('page-section', PageSection);

new Vue({
  router,
  store,
  i18n,
  el: '#open-election-compass',
}).$mount();
