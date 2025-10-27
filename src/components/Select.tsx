import { View, Image } from 'react-native';
import Dropdown from 'react-native-input-select';
import { SelectProps } from '../interface/interface';

import colors from '../utils/colors';
import options from '../utils/monthsOptions';

import selectIcon from '../images/select.png';

import { 
  styles,
  dropdownStyle,
  selectedItemStyle,
  modalControls,
  checkboxControls,
  dropdownIconStyle,
  placeholderStyle,
  listComponentStyles
} from '../styles/Select.style'


function Select({ setMonth, month }: SelectProps) {
  return (
    <View>
      <Dropdown
        placeholder="Escolha o mês"
        options={options}
        optionValue={'value'}
        checkboxControls={checkboxControls}
        placeholderStyle={placeholderStyle}
        selectedValue={month}
        onValueChange={(value:any) => setMonth(value)}
        primaryColor={colors.blueLotus}
        dropdownIcon={
          <Image source={selectIcon} style={styles.selectIcon} />
        }
        listComponentStyles={listComponentStyles}
        dropdownIconStyle={dropdownIconStyle}
        dropdownStyle={dropdownStyle}
        selectedItemStyle={selectedItemStyle}
        modalControls={modalControls}
      />
    </View>
  )
}

export default Select;