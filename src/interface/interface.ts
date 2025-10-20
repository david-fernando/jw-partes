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
  inputRef: React.RefObject<TextInput | null>;
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
}

export {
  SearchProps,
  ContextChildren,
  Search
}