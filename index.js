/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BgMessage from './BgMessage';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => BgMessage);
