import React from 'react';
import { ButtonProps } from './Button.types';
import ButtonStyles from './Button.styles';
import styled from 'styled-components';

const PrimaryButtonContainer = styled.a`
  ${ButtonStyles.primaryButtonStyle}
`;
const NegativeButtonContainer = styled.a`
  ${ButtonStyles.negativeButtonStyle}
`;
const OutlineButtonContainer = styled.a`
  ${ButtonStyles.outlineButtonStyle}
`;

const ButtonContainerVariants: Record<
  NonNullable<ButtonProps['type']>,
  React.ComponentType<React.PropsWithChildren>
> = {
  primary: PrimaryButtonContainer,
  negative: NegativeButtonContainer,
  outline: OutlineButtonContainer,
};

const ButtonBase: React.FC<ButtonProps> = (props) => {
  const { type = 'primary', title } = props;

  const ButtonContainer = ButtonContainerVariants[type];

  return <ButtonContainer>{title}</ButtonContainer>;
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
