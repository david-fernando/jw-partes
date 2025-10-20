import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  container: {
    width: '83%',
    height: 70,
    marginBottom: 0, 
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    top: -105
  },
  tabsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    minWidth: 150,
    borderRadius: 35,
    backgroundColor: colors.blueLotus,
    padding: 4,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    overflow: 'hidden',
    position: 'absolute',
    left: 0
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 61,
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
    width: 18,
    height: 18,
    resizeMode: 'contain',
  }
});

export default styles;
