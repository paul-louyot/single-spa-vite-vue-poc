import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue'
import App from './Layout.vue';

const vueLifecycles = singleSpaVue( {
  createApp,
  appOptions: {
    render() { return h( App ) },
    el: '#layout',
  },
  handleInstance: ( app ) => {
    // app.use(router);
  }
} );

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
