import { useRef, useContext } from 'react';
import { View, Text, Image, TextInput, Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { SearchContext } from '../context/SearchContext';
import useAnimation from '../hooks/useAnimation';
import Search from './Search';

import styles from '../styles/Tabs.style';

import home from '../images/home.png';
import add from '../images/add.png';

function Tabs() {
  const inputRef = useRef<TextInput>(null);

  const { isSearchOpen, actionButtonWidth, gap } = useContext(SearchContext);

  const {
    openSearch,
    closeSearch,
    tabsWidth,
    tabsOpacity,
    searchInputWidth,
    searchInputOpacity,
    searchButtonOpacity,
    closeButtonOpacity,
  } = useAnimation(inputRef);

  const searchProps = {
    openSearch,
    closeSearch,
    searchInputWidth,
    searchInputOpacity,
    searchButtonOpacity,
    closeButtonOpacity,
    inputRef,
    actionButtonWidth,
    gap,
    isSearchOpen,
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingContainer}
    >
      <View style={styles.container}>
        <Animated.View style={[styles.tabsContent, { width: tabsWidth, opacity: tabsOpacity }]}>
          <View style={[styles.tab, styles.tabActive]}>
            <Image source={home} style={styles.image} />
            <Text style={styles.tabText}>Home</Text>
          </View>
          <View style={styles.tab}>
            <Image source={add} style={styles.image} />
            <Text style={styles.tabText}>Designar</Text>
          </View>
        </Animated.View>

        <Search {...searchProps} />
      </View>
    </KeyboardAvoidingView>
  );
}

export default Tabs;
