import colors from '../utils/colors';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  selectIcon: {
    width: 12,
    height: 20,
    position: 'relative',
    top: 3,
  }
})

const dropdownStyle: any = {
  flex: 1,
  justifyContent: 'center',
  paddingVertical: 0,
  maxHeight: 50,
  minWidth: '77%',
  borderWidth: 0,
  borderRadius: 0,
  borderBottomWidth: 1,
  borderBottomColor: colors.blueLotus,
  backgroundColor: colors.white,
  paddingLeft: 35,
}

const selectedItemStyle = {
  color: colors.blueLotus,
}

const modalControls: any = {
  modalOptionsContainerStyle: {
    padding: 10,
    maxHeight: '315',
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  modalProps: {
    supportedOrientations: [
      'portrait',
      'portrait-upside-down',
      'landscape',
      'landscape-left',
      'landscape-right',
    ],
    transparent: true,
  }
}

const checkboxControls:any = {
  checkboxStyle: {
    display: 'none',
  },
}

const dropdownIconStyle = { top: 18, left: 10 }

const placeholderStyle={ fontFamily: 'Inter', fontSize: 16, color: colors.blueLotus }

const listComponentStyles = {
  itemSeparatorStyle: {
    opacity: 0,
    borderColor: colors.white,
    borderWidth: 2,
  }
}

export {
  styles,
  dropdownStyle,
  selectedItemStyle,
  modalControls,
  checkboxControls,
  dropdownIconStyle,
  placeholderStyle,
  listComponentStyles
}