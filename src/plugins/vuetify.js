import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

const options = {
  icons: {
    defaultSet: 'mdi',
  },
};

export default new Vuetify(options);
