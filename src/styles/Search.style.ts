import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  searchInputContainer: {
    height: 49,
    borderRadius: 35,
    backgroundColor: colors.blueLotus,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    position: 'absolute',
    top: 50
  },
  searchInputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain'
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontFamily: 'Inter',
    fontSize: 16,
    color: colors.white,
  },
  actionButtonContainer: {
    position: 'absolute',
    right: 0,
    width: 70,
    height: 70,
  },
  searchButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.blueLotus,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  closeButton: {
    width: 49,
    height: 49,
    borderRadius: 35,
    backgroundColor: colors.blueLotus,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    position: 'absolute',
    top: 50,
    left: 49
  },
  closeIcon: {
    maxWidth: 18,
    maxHeight: 18,
    resizeMode: 'contain',
  },
})

export default styles;