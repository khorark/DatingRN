/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { appStore as store } from 'src/stores/index.ts';

function renderApp() {
  AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
}

renderApp();

if (module.hot) {
  if (module.hot.data && module.hot.data.store) {
    applySnapshot(store, module.hot.data.store);
    renderApp();
  }

  module.hot.dispose((data) => {
    data.store = getSnapshot(store);
  });
}
