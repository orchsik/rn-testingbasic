import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Profile from './src/Profile';

const App = () => {
  return (
    <View style={styles.container}>
      <Profile userName={'samslow'} name={'서현석'} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
