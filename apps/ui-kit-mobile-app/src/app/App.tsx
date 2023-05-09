import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import AppStyles from './App.styles';
import Button from './Button';
import Card from './Card';
import { dimen240 } from '../tokens';
import { tnc } from './constants';

const App: React.FC = () => {
  return (
    <View style={AppStyles.container}>
      <Card>
        <View style={{ flex: 1, padding: dimen240, marginTop: dimen240 }}>
          <Text style={AppStyles.actionCardHeaderText}>
            In order to use the app, you need to accept terms and condition
          </Text>
          <ScrollView style={AppStyles.actionCardTncScrollContainer}>
            <Text style={AppStyles.actionCardTncText}>{tnc}</Text>
          </ScrollView>
        </View>
        <View
          style={AppStyles.cardActionContainer}
        >
          <Button.Negative title={'Decline'} />
          <Button.Primary title={'Accept'} />
        </View>
      </Card>
    </View>
  );
};

export default App;
