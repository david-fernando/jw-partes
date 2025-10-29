import { useState, useContext } from 'react';
import { Animated, View, Text, Image, TouchableOpacity } from 'react-native';
import { DesignateContext } from '../context/DesignateContext';
import useAnimation from '../hooks/useAnimation';

import styles from '../styles/Designate.style';

import calendar from '../images/calendar.png';
import Select from '../components/Select';
import right from '../images/right.png';
import left from '../images/left.png';

function Designate() {
  const [month, setMonth] = useState<string>('');
  const { screenPosistion } = useContext(DesignateContext);

  const { closeDesignate, openDesignate, slideToClose } = useAnimation();

  return (
    <Animated.View style={[styles.container,  { transform: [{ translateX: screenPosistion }] }]} {...slideToClose.panHandlers}>
      <View style={styles.content}>
        <Image source={calendar} />
        <Text style={styles.text}>
        Quais os meses das designações?
        </Text>
        <Select setMonth={setMonth} month={month} />
      </View>
      <View style={styles.setOfButtons}>
      <TouchableOpacity onPress={closeDesignate} style={styles.backButton}>
          <Image source={left} style={styles.backButtonImage}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton}>
          <View style={styles.contentButton}>
            <Text style={styles.buttonText}>Continuar</Text>
            <Image source={right} style={styles.buttonImage}/>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export default Designate;