import { ReactNode } from 'react';
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
  isSearchOpen: boolean;
}

interface ContextChildren {
  children: ReactNode;
}

interface Search {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  actionButtonWidth: number;
  gap: number;
  inputRef: React.RefObject<TextInput | null>;
}

export {
  SearchProps,
  ContextChildren,
  Search
}