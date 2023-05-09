import {StyleSheet} from 'react-native';
import {
  cardCaptionColor,
  cardTitleColor,
  dimen120,
  dimen240,
  screenBgColor,
} from '../tokens';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: screenBgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    height: dimen240,
  },
  cardContainer: { flex: 1 },
  cardActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: dimen120,
  },
  actionCardHeaderText: { fontWeight: 'bold', color: cardTitleColor },
  actionCardTncText: { textAlign: 'justify', color: cardCaptionColor },
  actionCardTncScrollContainer: { flex: 1, marginTop: dimen240 }
});
