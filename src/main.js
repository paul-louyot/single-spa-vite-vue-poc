import { registerApplication, start } from 'single-spa';

registerApplication(
  // Name of our single-spa application
  'layout',
  // loadingFunction
  () => import( './layout/layout.app.js' ),
  // activityFunction
  () => true
);

console.log( 'Layout app registered' )

start();
