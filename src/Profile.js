import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Greeting from './Greeting';

const Profile = ({userName, name}) => {
  const [msg, setMsg] = useState('Select your status');

  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>
        {userName}({name})
      </Text>
      <Text style={styles.textBox}>{msg}</Text>
      <Greeting title="Bye!" onPress={() => setMsg('Seeya!')} />
      <Greeting title="Hello!" onPress={() => setMsg('Welcome!')} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textBox: {
    marginBottom: 15,
  },
});
