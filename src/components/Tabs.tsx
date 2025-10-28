import { useRef, useContext } from 'react';
import { View, Text, Image, TextInput, Animated, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { SearchContext } from '../context/SearchContext';
import useAnimation from '../hooks/useAnimation';
import Search from './Search';

import styles from '../styles/Tabs.style';

import home from '../images/home.png';
import add from '../images/add.png';

function Tabs() {

  const { isSearchOpen, actionButtonWidth, gap } = useContext(SearchContext);

  const {
    openSearch,
    closeSearch,
    openDesignate,
    tabsWidth,
    tabsOpacity,
    searchInputWidth,
    searchInputOpacity,
    searchButtonOpacity,
    closeButtonOpacity,
  } = useAnimation();

  const searchProps = {
    openSearch,
    closeSearch,
    searchInputWidth,
    searchInputOpacity,
    searchButtonOpacity,
    closeButtonOpacity,
    actionButtonWidth,
    gap,
    isSearchOpen,
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingContainer}
    >
      <View style={styles.container}>
        <Animated.View style={[styles.tabsContent, { width: tabsWidth, opacity: tabsOpacity }]}>
          <View style={[styles.tab, styles.tabActive]}>
            <Image source={home} style={styles.image} />
            <Text style={styles.tabText}>Home</Text>
          </View>
          <TouchableOpacity style={styles.tab} onPress={openDesignate}>
            <Image source={add} style={styles.image} />
            <Text style={styles.tabText}>Designar</Text>
          </TouchableOpacity>
        </Animated.View>

        <Search {...searchProps} />
      </View>
    </KeyboardAvoidingView>
  );
}

export default Tabs;
