import { useState } from 'react';
import { Animated, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../styles/Designate.style';

import calendar from '../images/calendar.png';
import Select from './Select';
import right from '../images/right.png';

function Designate() {
  const [month, setMonth] = useState<string>('');

  return (
    <Animated.View style={styles.container}>
      <View style={styles.content}>
        <Image source={calendar} />
        <Text style={styles.text}>
        Quais os meses das designações?
        </Text>
        <Select setMonth={setMonth} month={month} />
      </View>

      <TouchableOpacity style={styles.continueButton}>
          <View style={styles.contentButton}>
            <Text style={styles.buttonText}>Continuar</Text>
            <Image source={right} style={styles.buttonImage}/>
          </View>
        </TouchableOpacity>
    </Animated.View>
  )
}

export default Designate;