import { StyleSheet } from 'react-native';
import { cardBgColor, cardShadowColor, dimen240, cardBorderRadius } from '../../tokens';

export default StyleSheet.create({
  container: {
    width: 360,
    minHeight: 380,
    flexDirection: 'column',
    marginHorizontal: dimen240,
    backgroundColor: cardBgColor,
    borderRadius: cardBorderRadius,
    shadowColor: cardShadowColor,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
});
