/** @format */

/*
import 'es6-symbol/implement';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.log('Build');

AppRegistry.registerComponent(appName, () => App);
*/


import 'es6-symbol/implement';
// import { YellowBox } from 'react-native';

import './src/services';
import './src/defaultStyle';
import mobileNavigation from 'nav';
import mobileUtils from 'common/utils/mobile';

// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
mobileNavigation.startSingleScreen(mobileUtils.constants.screen.login);
