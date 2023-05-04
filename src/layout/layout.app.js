import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue'
import App from './Layout.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/about', component: () => import( "./About.vue" ) },
]

const router = createRouter( {
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
} )

const vueLifecycles = singleSpaVue( {
  createApp,
  appOptions: {
    render() { return h( App ) },
    el: '#layout',
  },
  handleInstance: ( app ) => {
    app.use( router );
  }
} );

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
