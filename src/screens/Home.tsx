import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Platform  } from 'react-native';
import { SearchContext } from '../context/SearchContext'
import BackupButton from '../components/BackupButton';
import Tabs from '../components/Tabs';

import styles from '../styles/Home.style';

import spotlight from '../images/spotlight.png';

function Main() {
  const { isSearchOpen } = useContext(SearchContext);

  return (
    <View style={styles.container}>
      {(!isSearchOpen)? <BackupButton /> : null }
        {(isSearchOpen)? (
          <View style={[styles.contentSearch, { top: (Platform.OS === 'ios')? -100 : 50}]}>
            <Text style={styles.text}>Hmm… nada por aqui!</Text>
            <Text style={[styles.instruction, { width: '70%' }]}>Verifique se a palavra está certa, ou tente de novo!</Text>
          </View>
        ) : (
          <View style={styles.content}>
            <Image source={spotlight} style={styles.image} />
            <Text style={styles.text}>Ainda não há nada aqui!</Text>
            <Text style={styles.instruction}>Comece a fazer designações ou restaure um backup</Text>
          </View>
        )}
      <Tabs />
      <StatusBar style="auto" />
    </View>
);
  
}

export default Main;