import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import DeviceInfo from 'react-native-device-info';

import firestore from '@react-native-firebase/firestore';
import Firebase from './Firebase';

const App = () => {
  // const ref = firestore().collection('users');
  // console.log(DeviceInfo.getUniqueId(), 'asdfghjkl;');

  // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // const handleAddUser = () => {
  //   ref
  //     .add({
  //       name: 'Sunil Kumar Yadav',
  //       age: 24,
  //     })
  //     .then(() => {
  //       console.log('User Added');
  //     });
  // };

  // const handleGetUser = () => {
  //   ref.onSnapshot(res => {
  //     res.forEach(doc => {
  //       let {name, age} = doc.data();
  //       console.log(name, ' ', age, 'asdfghjkl;');
  //     });
  //   });
  // };

  // useEffect(() => {
  //   auth()
  //     .signInAnonymously()
  //     .then(() => console.log('User Signed in anonymously'))
  //     .catch(err => {
  //       if (err.code === 'auth/operation-not-allowed') {
  //         console.log('Enable anonymous in your firebase console.');
  //       }
  //       console.log(err);
  //     });
  // }, []);

  // if (initializing) return null;
  return (
    <SafeAreaView>
      <Text>Hello, Welcome Back {}</Text>
      {/* {console.log(
        ref.get().then(res => {
          console.log('asdfghjkl;');
        }),
      )} */}
      {/* <Button title="Add" onPress={handleAddUser} />
      <Text>Get User {DeviceInfo.getUniqueId()}</Text>
      <Button title="Get" onPress={handleGetUser} /> */}
      <Firebase />
    </SafeAreaView>
  );
};

export default App;

const user = {
  name: 'sunil',
};

const DataFormate = {
  'Strategic EnterPrise Operation': {total: 10, avg: 6},
  Leadership: {total: 10, avg: 6},
  'Culture Value': {total: 10, avg: 6},
  'Culture Beliefs': {total: 10, avg: 6},
  'Culture Assumptions': {total: 10, avg: 6},
  Resillience: {total: 10, avg: 6},
  Skill: {total: 10, avg: 6},
};

const COURSE = [
  'Strategic EnterPrise Operation',
  'Leadership',
  'Culture Value',
  'Culture Beliefs',
  'Culture Assumptions',
  'Resillience',
  'Skill',
];
