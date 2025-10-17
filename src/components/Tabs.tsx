import { View, Text, Image } from 'react-native';

import styles from '../styles/Tabs.style';

import home from '../images/home.png';
import add from '../images/add.png';

function Tabs() {
  return (
    <View style={styles.container}>
      <View style={[styles.tab, styles.tabActive]}>
        <Image source={home} style={styles.image}/>
        <Text style={styles.tabText}>Home</Text>
      </View>
      <View style={styles.tab}>
        <Image source={add} style={styles.image}/>
        <Text style={styles.tabText}>Designar</Text>
      </View>
    </View>
  )
}

export default Tabs;