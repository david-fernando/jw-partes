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
    position: 'absolute',
    minHeight: '100%',
    minWidth: '100%',
    zIndex: 2,
  },
  content: {
    flex: 2,
    width: '100%',
    maxHeight: '53%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    position: 'relative',
    top: -80
  },
  optionText: {
    fontSize: 16,
    color: colors.blueLotus,
  },
  text: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: colors.mobster, 
    fontFamily: 'Inter', 
    marginTop: 10 
  },
  continueButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blueLotus,
    borderRadius: 50,
    height: 49,
    maxHeight: 49,
    width: 144,
    maxWidth: 144
  },
  contentButton: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    maxHeight: 30,
    maxWidth: 115,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
  },
  buttonImage: {
    maxHeight: 13,
    maxWidth: 20,
  },
  setOfButtons: {
    width: '83%',
    height: 49,
    marginBottom: 0, 
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    top: 126
  }
})

export default styles;