import {View, Text} from 'react-native';
import React from 'react';

const ComponentA = () => {
  return Array(500)
    .fill(0)
    .map((e, index) => {
      return (
        <View>
          <Text>{index + 1}</Text>
        </View>
      );
    });
};

export default ComponentA;
