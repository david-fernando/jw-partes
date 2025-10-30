import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  backButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 49,
    height: 49,
    maxHeight: 49,
    maxWidth: 49,
    backgroundColor: colors.blueLotus,
    borderRadius: 50,
  },
  backButtonImage: {
    position: 'relative',
    left: -2,
  }
})

export default styles;