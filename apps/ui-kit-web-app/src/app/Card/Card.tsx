import React from 'react';
import { CardProps } from './Card.types';
import { View } from 'react-native';
import CardStyles from './Card.styles';
import styled from 'styled-components';
// import CardStyles from './Card.styles';

const CardContainer = styled.div`${CardStyles.container}`

const Card: React.FC<CardProps> = (props) => {
  const { children } = props;

  return <CardContainer>{children}</CardContainer>;
};

export default Card;
