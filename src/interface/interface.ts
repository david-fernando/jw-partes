import { Animated, TextInput } from 'react-native';

type AnimatedValueOrInterpolation =
  | Animated.Value
  | Animated.AnimatedInterpolation<string | number>;

interface SearchProps {
  openSearch: () => void;
  closeSearch: () => void;
  searchInputWidth: AnimatedValueOrInterpolation;
  searchInputOpacity: AnimatedValueOrInterpolation;
  searchButtonOpacity: AnimatedValueOrInterpolation;
  closeButtonOpacity: AnimatedValueOrInterpolation;
  inputRef: React.RefObject<TextInput | null>; 
  actionButtonWidth: number;
  gap: number;
  isSearchOpen: boolean;
}

export {
  SearchProps
}