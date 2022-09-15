import { ImageBackground } from "react-native";

import img from '../../assets/background-galaxy.png'
// const image = { uri: "https://reactjs.org/logo-og.png" };


import { styles } from './styles';

interface BackgroundProps {
  children: React.ReactNode
}

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground 
      source={img}
      defaultSource={img}
      style={styles.container}
    >
      { children }
    </ImageBackground>
  )
}