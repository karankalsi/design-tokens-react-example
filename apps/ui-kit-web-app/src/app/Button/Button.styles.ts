import {
  buttonSpacingHorizontal,
  buttonSpacingVertical,
  buttonBorderRadius,
  buttonPrimaryBgColor,
  buttonPrimaryTxtColor,
  buttonPrimaryBorder,
  buttonNegativeBgColor,
  buttonNegativeTxtColor,
  buttonNegativeBorder,
  buttonOutlineBgColor,
  buttonOutlineTxtColor,
  buttonOutlineBorder,
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
`;

const primaryButtonStyle = `
  ${baseButtonStyle}
  background-color: ${buttonPrimaryBgColor};
  border: ${buttonPrimaryBorder.width} ${buttonPrimaryBorder.style} ${buttonPrimaryBorder.color};
  color: ${buttonPrimaryTxtColor};
`;

const negativeButtonStyle = `
  ${baseButtonStyle}
  background-color: ${buttonNegativeBgColor};
  border: ${buttonNegativeBorder.width} ${buttonNegativeBorder.style} ${buttonNegativeBorder.color};
  color: ${buttonNegativeTxtColor};
`;

const outlineButtonStyle = `
  ${baseButtonStyle}
  background-color: ${buttonOutlineBgColor};
  border: ${buttonOutlineBorder.width} ${buttonOutlineBorder.style} ${buttonOutlineBorder.color};
  color: ${buttonOutlineTxtColor};
`;

export default {
  primaryButtonStyle,
  negativeButtonStyle,
  outlineButtonStyle,
};
