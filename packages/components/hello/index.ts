import { App } from 'vue';
import Hello from './hello';

Hello.install = function (app: App) {
  app.component(Hello.name, Hello);
  return app;
};

export default Hello;
