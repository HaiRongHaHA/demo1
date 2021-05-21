import { createApp } from 'vue';
import App from './App';
import router from './router';
import store, { key } from './store';

import '@/styles/index.scss';

createApp(App)
  .use(router)
  .use(store, key)
  .mount('#app');
