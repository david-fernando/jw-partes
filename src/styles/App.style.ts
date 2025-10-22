import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  content: {
    flex: 2,
    width: '100%',
    maxHeight: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  contentSearch: {
    flex: 2,
    width: '100%',
    maxHeight: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    position: 'relative'
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: '400',
    color: colors.mobster,
  },
  instruction: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.mobster,
    textAlign: 'center',
    width: '70%',
  },
  image: {
    maxWidth: 154,
    maxHeight: 154
  }
});

export default styles;
