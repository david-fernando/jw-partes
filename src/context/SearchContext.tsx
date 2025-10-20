import { createContext, useState, useRef, useEffect, use } from 'react'
import { TextInput } from 'react-native';
import { Search, ContextChildren } from '../interface/interface'

const SearchContext = createContext<Search>({
  isSearchOpen: false,
  setIsSearchOpen: () => {},
  actionButtonWidth: 49,
  gap: 23,
  inputRef: { current: null },
})

function SearchProvider({ children }: ContextChildren) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const actionButtonWidth = 49;
  const gap = 23;
  
  const contextValue = {
    isSearchOpen,
    setIsSearchOpen,
    actionButtonWidth,
    gap,
    inputRef,
  }

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
}

export {
  SearchContext,
  SearchProvider
}