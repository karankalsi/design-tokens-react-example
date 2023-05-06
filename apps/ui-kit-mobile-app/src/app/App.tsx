import React from 'react';
import {Text, View} from 'react-native';
import AppStyles from './App.styles';

const App: React.FC = () => {
  return (
    <View style={AppStyles.container}>
      <View style={AppStyles.buttonPrimary}>
        <Text style={AppStyles.buttonPrimaryText}>Button</Text>
      </View>
      <View style={AppStyles.spacer}/>
      <View style={AppStyles.buttonNegative}>
        <Text style={AppStyles.buttonNegativeText}>Button</Text>
      </View>
      <View style={AppStyles.spacer}/>
      <View style={AppStyles.buttonOutline}>
        <Text style={AppStyles.buttonOutlineText}>Button</Text>
      </View>
    </View>
  );
};

export default App;
