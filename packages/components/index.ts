import { App } from 'vue';
import * as components from './components';
export * from './components';
export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    console.log(key);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
};

export default { install };
