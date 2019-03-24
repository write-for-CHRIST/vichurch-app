import '@babel/polyfill';
import {ComponentType} from 'react';
import {AppRegistry} from 'react-native-web';

import App from '@vichurch/components/src/App';

const render = (AppComponent: ComponentType) => {
  AppRegistry.registerComponent('vichurch', () => AppComponent);
  AppRegistry.runApplication('vichurch', {
    rootTag: document.getElementById('root'),
  });
};

render(App);
