import React from 'react';
import {Button} from 'react-native';

const Greeting = ({title, onPress}) => {
  return <Button title={title} onPress={onPress} />;
};

export default Greeting;
