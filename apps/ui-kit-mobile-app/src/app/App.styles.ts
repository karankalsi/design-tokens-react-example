import {StyleSheet} from 'react-native';
import {
  gray100,
  dimen240,
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
  buttonOutlineBorder
} from '../tokens';

const baseButtonStyle = {
  paddingVertical: buttonSpacingVertical,
  paddingHorizontal: buttonSpacingHorizontal,
  borderRadius: buttonBorderRadius,
}


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    height: dimen240,
  },
  buttonPrimary: {
    ...baseButtonStyle,
    backgroundColor: buttonPrimaryBgColor,
    borderWidth: buttonPrimaryBorder.width,
    borderColor: buttonPrimaryBorder.color,
  },
  buttonPrimaryText: {
    color: buttonPrimaryTxtColor
  },

  buttonNegative: {
    ...baseButtonStyle,
    backgroundColor: buttonNegativeBgColor,
    borderWidth: buttonNegativeBorder.width,
    borderColor: buttonNegativeBorder.color,
  },
  buttonNegativeText: {
    color:buttonNegativeTxtColor
  },

  buttonOutline: {
    ...baseButtonStyle,
    backgroundColor: buttonOutlineBgColor,
    borderWidth: buttonOutlineBorder.width,
    borderColor: buttonOutlineBorder.color,
  },
  buttonOutlineText: {
    color:buttonOutlineTxtColor
  },
});
