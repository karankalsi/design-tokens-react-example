import { StyleSheet } from "react-native";

import {
    buttonSpacingHorizontal,
    buttonSpacingVertical,
    buttonBorderRadius,
    buttonPrimaryBgColor,
    buttonPrimaryTxtColor,
    buttonPrimaryBorderColor,
    buttonNegativeBgColor,
    buttonNegativeTxtColor,
    buttonNegativeBorderColor,
    buttonOutlineBgColor,
    buttonOutlineTxtColor,
    buttonOutlineBorderColor,
    buttonBorderWidth,
  } from '../../tokens';
  
  const baseButtonStyle = {
    paddingVertical: buttonSpacingVertical,
    paddingHorizontal: buttonSpacingHorizontal,
    borderRadius: buttonBorderRadius,
  }
  

export default StyleSheet.create({

  buttonPrimary: {
    ...baseButtonStyle,
    backgroundColor: buttonPrimaryBgColor,
    borderWidth: buttonBorderWidth,
    borderColor: buttonPrimaryBorderColor,
  },
  buttonPrimaryText: {
    color: buttonPrimaryTxtColor
  },

  buttonNegative: {
    ...baseButtonStyle,
    backgroundColor: buttonNegativeBgColor,
    borderWidth: buttonBorderWidth,
    borderColor: buttonNegativeBorderColor,
  },
  buttonNegativeText: {
    color:buttonNegativeTxtColor
  },

  buttonOutline: {
    ...baseButtonStyle,
    backgroundColor: buttonOutlineBgColor,
    borderWidth: buttonBorderWidth,
    borderColor: buttonOutlineBorderColor,
  },
  buttonOutlineText: {
    color:buttonOutlineTxtColor
  },
})