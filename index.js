/**
 * @format
 */

import {applyPolyfills, defineCustomElements} from 'pixobe-coloring-book';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

applyPolyfills().then(() => {
  defineCustomElements();
});
AppRegistry.registerComponent(appName, () => App);
