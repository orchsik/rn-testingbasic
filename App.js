import React from 'react';
import {StyleSheet, View} from 'react-native';

import Profile from './src/Profile';

const App = ({userName, name}) => {
  return (
    <View style={styles.container}>
      <Profile userName={userName || '액션가면'} name={name || '짱구'} />
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
