import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import styles from '../styles/BackupButton.style';

import cloud from '../images/cloud.png';

function BackupButton() {
  const isAndroid = Platform.OS === 'android';
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      {isAndroid ? (
        <TouchableOpacity style={styles.buttonAndroid} onPress={() => setShowMenu(previousState => !previousState)}>
          <Image source={cloud} style={styles.image}/>
          <Text style={styles.buttonText}>Backup</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => setShowMenu(previousState => !previousState)}>
          <BlurView intensity={80} tint="light" style={styles.blurBox}>
            <Image source={cloud} style={styles.image}/>
            <Text style={styles.buttonText}>Backup</Text>
          </BlurView>
        </TouchableOpacity>
      )} 
      {showMenu && (
        (isAndroid)? (
          <View style={styles.menuAndroid}>
              <Text style={styles.menuText}>Fazer backup</Text>
              <Text style={styles.menuText}>Restaurar backup</Text>
          </View>
        ) : (
          <View style={styles.menu}>
            <BlurView intensity={80} tint="light" style={styles.blurMenu}>
              <Text style={styles.menuText}>Fazer backup</Text>
              <Text style={styles.menuText}>Restaurar backup</Text>
            </BlurView>
          </View>
        )
      )}
    </View>
  );
}

export default BackupButton;
