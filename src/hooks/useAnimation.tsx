import { useRef, useContext } from 'react';
import { Animated, Dimensions, Easing, PanResponder } from 'react-native';
import { SearchContext } from '../context/SearchContext';
import { DesignateContext } from '../context/DesignateContext';

function useAnimation() {
  const animation = useRef(new Animated.Value(0)).current;
  const { width: screenWidth } = Dimensions.get('window');
  const containerWidth = (screenWidth || 390) * 1.01;
  const initialTabsWidth = 15;

  const { setIsSearchOpen, actionButtonWidth, gap, inputRef } = useContext(SearchContext);
  const { screenPosistion } = useContext(DesignateContext);

  const openSearch = () => {
    setIsSearchOpen(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 350,
      easing: Easing.bezier(0.65, 0, 0.35, 1),
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    inputRef.current?.blur();
    Animated.timing(animation, {
      toValue: 0,
      duration: 350,
      easing: Easing.bezier(0.65, 0, 0.35, 1),
      useNativeDriver: false,
    }).start();
  };

  const openDesignate = () => {
    Animated.timing(screenPosistion, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }

  const closeDesignate = () => {
    Animated.timing(screenPosistion, {
      toValue: screenWidth,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }

  const slideToClose = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        gestureState.dx > 10,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx > 0) {
          screenPosistion.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        const isGreaterThanThirtyPercent = gestureState.dx > screenWidth * 0.3
        if (!isGreaterThanThirtyPercent) {
          return openDesignate();
        }
        closeDesignate();
      },
    })
  ).current;

  const tabsWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [initialTabsWidth, 0],
    extrapolate: 'clamp',
  });

  const tabsOpacity = animation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  
  const searchInputWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, containerWidth - actionButtonWidth - gap],
    extrapolate: 'clamp',
  });

  const searchInputOpacity = animation.interpolate({
    inputRange: [0.5, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const searchButtonOpacity = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const closeButtonOpacity = animation.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });

  return {
    openSearch,
    closeSearch,
    openDesignate,
    closeDesignate,
    slideToClose,
    tabsWidth,
    tabsOpacity,
    searchInputWidth,
    searchInputOpacity,
    searchButtonOpacity,
    closeButtonOpacity,
    screenPosistion,
  };
}

export default useAnimation;