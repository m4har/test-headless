// @flow
import firebase from 'react-native-firebase';
// Optional flow type
import type { RemoteMessage } from 'react-native-firebase';

export default async (message: RemoteMessage) => {
  // handle your message
    console.log('headless', {message})
    return Promise.resolve(message);
}