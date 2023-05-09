import React from 'react';
import {Text, View} from 'react-native';
import AppStyles from './App.styles';
import Button from './Button';

const App: React.FC = () => {
  return (
    <View style={AppStyles.container}>
      <Button.Primary title='Button'/>
      <View style={AppStyles.spacer}/>
      <Button.Negative title='Button'/>
      <View style={AppStyles.spacer}/>
      <Button.Outline title='Button'/>
    </View>
  );
};

export default App;
