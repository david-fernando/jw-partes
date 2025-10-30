import { TouchableOpacity, Image } from 'react-native';
import { BackButtonProps } from '../interface/interface'

import left from '../images/left.png';

import styles from '../styles/BackButton.style';

function BackButton({ onPress }: BackButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backButton}>
      <Image source={left} style={styles.backButtonImage}/>
    </TouchableOpacity> 
  ) 
}

export default BackButton;