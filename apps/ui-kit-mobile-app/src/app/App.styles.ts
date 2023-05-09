import {StyleSheet} from 'react-native';
import {
  gray100,
  dimen240,
} from '../tokens';


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
});
