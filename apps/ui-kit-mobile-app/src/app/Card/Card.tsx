import React from 'react';
import { CardProps } from './Card.types';
import { View } from 'react-native';
import CardStyles from './Card.styles';

const Card: React.FC<CardProps> = (props) => {
  const { children } = props;

  return <View style={CardStyles.container}>{children}</View>;
};

export default Card;
