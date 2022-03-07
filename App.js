import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

import firestore from '@react-native-firebase/firestore';

const App = () => {
  const ref = firestore().collection('users');
  const handleAddUser = () => {
    ref
      .add({
        name: 'Sunil Kumar Yadav',
        age: 24,
      })
      .then(() => {
        console.log('User Added');
      });
  };

  const handleGetUser = () => {
    ref.onSnapshot(res => {
      res.forEach(doc => {
        let {name, age} = doc.data();
        console.log(name, ' ', age, 'asdfghjkl;');
      });
    });
  };

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      {console.log(
        ref.get().then(res => {
          console.log('asdfghjkl;');
        }),
      )}
      <Button title="Add" onPress={handleAddUser} />
      <Text>Get User</Text>
      <Button title="Get" onPress={handleGetUser} />
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
