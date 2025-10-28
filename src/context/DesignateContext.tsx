import { createContext, useState, useRef, useEffect, use } from 'react'
import { TextInput, Animated, Dimensions } from 'react-native';
import { Designate, ContextChildren } from '../interface/interface'

const DesignateContext = createContext<Designate>({
  screenPosistion: new Animated.Value(0),
  screenWidth: 0
})

function DesignateProvider({ children }: ContextChildren) {
  const { width: screenWidth } = Dimensions.get('window');
  const screenPosistion = useRef(new Animated.Value(screenWidth)).current;
  
  const contextValue = {
    screenPosistion,
    screenWidth
  }

  return (
    <DesignateContext.Provider value={contextValue}>
      {children}
    </DesignateContext.Provider>
  )
}

export {
  DesignateContext,
  DesignateProvider
}