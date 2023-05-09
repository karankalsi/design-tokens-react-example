import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import AppStyles from './App.styles';
import Button from './Button';
import Card from './Card';
import { dimen240 } from '../tokens';
import { tnc, tnc_header } from './constants';

const App: React.FC = () => {
  return (
    <View style={AppStyles.container}>
      <Card>
        <View style={AppStyles.cardContainer}>
          <Text style={AppStyles.actionCardHeaderText}>
            {tnc_header}
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
