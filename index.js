/** @format */

import 'es6-symbol/implement';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.log('Build');

AppRegistry.registerComponent(appName, () => App);
