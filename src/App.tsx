import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { SearchProvider } from './context/SearchContext'
import BackupButton from './components/BackupButton';
import Tabs from './components/Tabs';

import styles from './styles/App.style';

import spotlight from './images/spotlight.png';

export default function App() {
  return (
    <SearchProvider>
      <View style={styles.container}>
        <BackupButton />
        <View style={styles.content}>
          <Image source={spotlight} style={styles.image} />
          <Text style={styles.text}>Ainda não há nada aqui!</Text>
          <Text style={styles.instruction}>Comece a fazer designações ou restaure um backup</Text>
        </View>
        <Tabs />
        <StatusBar style="auto" />
      </View>
    </SearchProvider>
  );
}
