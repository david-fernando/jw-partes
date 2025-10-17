import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 14,
    width: 145,
    height: 70,
    borderRadius: 50,
    backgroundColor: colors.blueLotus,
    paddingVertical: 4,
    paddingHorizontal: 4,
    position: 'absolute',
    bottom: 32,
    left: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 61,
    height: 61,
    borderRadius: 50,
    gap: 3,
  },
  tabActive : {
    backgroundColor: colors.lightCobaltBlue,
    borderRadius: 50
  },
  tabText: {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '400',
    color: colors.white,
  },
  image: {
    maxWidth: 18,
    maxHeight: 18
  }
});

export default styles;
