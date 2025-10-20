import { useContext } from 'react';
import { View, Image, TouchableOpacity, TextInput, Animated } from 'react-native';
import { SearchContext } from '../context/SearchContext';
import { SearchProps } from '../interface/interface';
import styles from '../styles/Search.style';

import colors from '../utils/colors';

import search from '../images/search.png';
import close from '../images/close.png';

function Search(searchProps: SearchProps){

  const { actionButtonWidth, gap } = useContext(SearchContext);

  const {
    openSearch,
    closeSearch,
    searchInputWidth,
    searchInputOpacity,
    searchButtonOpacity,
    closeButtonOpacity,
    inputRef,
    isSearchOpen
  } = searchProps;

  const OpenInputSearch = () => (
    <Animated.View style={{ opacity: searchButtonOpacity }}>
      <TouchableOpacity onPress={openSearch} style={styles.searchButton} disabled={isSearchOpen}>
          <Image source={search} style={styles.searchIcon}/>
      </TouchableOpacity>
    </Animated.View>
  )

  const CloseInputSearch = () => (
    <Animated.View style={[{ opacity: closeButtonOpacity, position: 'absolute' }]}>
      <TouchableOpacity onPress={closeSearch} style={styles.closeButton} disabled={!isSearchOpen}>
          <Image source={close} style={styles.closeIcon}/>
      </TouchableOpacity>
    </Animated.View>
  )

  return (
    <>
      <Animated.View style={[styles.searchInputContainer, { width: searchInputWidth, opacity: searchInputOpacity, right: actionButtonWidth - gap }]}>
        <Image source={search} style={styles.searchInputIcon}/>
        <TextInput
            ref={inputRef}
            style={styles.searchInput}
            placeholder="Pesquisar..."
            placeholderTextColor={colors.white}
            editable={isSearchOpen}
        />
      </Animated.View>
      <View style={styles.actionButtonContainer}>
        <OpenInputSearch />
        <CloseInputSearch />
      </View>
    </>
  )
}

export default Search;