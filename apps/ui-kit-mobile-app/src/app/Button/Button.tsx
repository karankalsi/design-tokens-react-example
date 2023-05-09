import React from 'react';
import { Text, View } from 'react-native';
import { ButtonProps } from './Button.types';
import ButtonStyles from './Button.styles';

const ButtonBase: React.FC<ButtonProps> = (props) => {
  const { type = 'primary', title } = props;

  const styleType = type[0].toUpperCase() + type.substring(1);

  const buttonStyle = ButtonStyles[`button${styleType}`]
  const buttonTextStyle = ButtonStyles[`button${styleType}Text`]

  return (
    <View style={buttonStyle}>
      <Text style={buttonTextStyle}>{title}</Text>
    </View>
  );
};

const ButtonPrimary = (props: ButtonProps) => (
  <ButtonBase {...props} type={'primary'} />
);
const ButtonNegative = (props: ButtonProps) => (
  <ButtonBase {...props} type={'negative'} />
);
const ButtonOutline = (props: ButtonProps) => (
  <ButtonBase {...props} type={'outline'} />
);

const Button = ButtonBase as typeof ButtonBase & {
  Primary: typeof ButtonPrimary;
  Negative: typeof ButtonNegative;
  Outline: typeof ButtonOutline;
};

Button.Primary = ButtonPrimary;
Button.Negative = ButtonNegative;
Button.Outline = ButtonOutline;

export default Button;
