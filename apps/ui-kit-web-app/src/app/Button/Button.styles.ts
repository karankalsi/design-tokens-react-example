import {
  buttonSpacingHorizontal,
  buttonSpacingVertical,
  buttonPrimaryBgColor,
  buttonPrimaryTxtColor,
  buttonNegativeBgColor,
  buttonNegativeTxtColor,
  buttonOutlineBgColor,
  buttonOutlineTxtColor,
  buttonBorderWidth,
  buttonBorderRadius,
  buttonPrimaryBorderColor,
  buttonNegativeBorderColor,
  buttonOutlineBorderColor
} from '../../tokens';

const baseButtonStyle = `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: ${buttonBorderRadius};
padding-left: ${buttonSpacingHorizontal};
padding-right: ${buttonSpacingHorizontal};
padding-top: ${buttonSpacingVertical};
padding-bottom: ${buttonSpacingVertical};
font-family: sans-serif;
`;

const primaryButtonStyle = `
  ${baseButtonStyle}
  background-color: ${buttonPrimaryBgColor};
  border: ${buttonBorderWidth} solid ${buttonPrimaryBorderColor};
  color: ${buttonPrimaryTxtColor};
`;

const negativeButtonStyle = `
  ${baseButtonStyle}
  background-color: ${buttonNegativeBgColor};
  border: ${buttonBorderWidth} solid ${buttonNegativeBorderColor};
  color: ${buttonNegativeTxtColor};
`;

const outlineButtonStyle = `
  ${baseButtonStyle}
  background-color: ${buttonOutlineBgColor};
  border: ${buttonBorderWidth} solid ${buttonOutlineBorderColor};
  color: ${buttonOutlineTxtColor};
`;

export default {
  primaryButtonStyle,
  negativeButtonStyle,
  outlineButtonStyle,
};
