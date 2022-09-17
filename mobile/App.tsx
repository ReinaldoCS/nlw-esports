import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';

import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  });
  
  return (
    <Background>
      <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
        {/* Exibe loading enquanto a fonte é carregada */}
        { fontsLoaded ? <Routes /> : <Loading /> }
    </Background>
  );
}

