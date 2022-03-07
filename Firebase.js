import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

const Firebase = () => {
  const ref = firestore().collection('users');
  const [courseNumber, setCourseNumber] = useState('0');
  const [courseName, setCourseName] = useState('');
  const [avg, setAvg] = useState('0');

  const handleSubjectDetailsSubmit = () => {
    let deviceId = DeviceInfo.getUniqueId();
    ref.doc(deviceId).set({
      _id: deviceId,
      total: 100,
      avg: 30,
      'Strategic EnterPrise Operation': {
        total: 10,
        avg: 9,
      },
      Leadership: {
        total: 10,
        avg: 9,
      },
      'Culture Value': {
        total: 10,
        avg: 9,
      },
      'Culture Beliefs': {
        total: 10,
        avg: 9,
      },
      'Culture Assumptions': {
        total: 10,
        avg: 9,
      },
      Resillience: {
        total: 10,
        avg: 9,
      },
      Skill: {
        total: 10,
        avg: 9,
      },
    });
  };

  // get user Info
  const getUserInfo = () => {
    console.log(
      ref.get().then(res => {
        res.forEach(doc => {
          console.log(doc.data(), '-----');
        });
      }),
      'asdfghjkl;',
    );
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setCourseNumber}
        placeholder="Enter ur total scored number"
        value={courseNumber}
      />

      <TextInput
        style={styles.input}
        onChangeText={setCourseName}
        placeholder="Enter subject name Name"
        value={courseName}
      />

      <TextInput
        style={styles.input}
        onChangeText={setAvg}
        placeholder="Enter avg scrored number"
        value={avg}
      />

      <Button title="Submit" onPress={handleSubjectDetailsSubmit} />
      <Text>User Info</Text>
      <Button title="Get User Info" onPress={getUserInfo} />
    </View>
  );
};

export default Firebase;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

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
