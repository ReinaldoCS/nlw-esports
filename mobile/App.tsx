import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { StatusBar, SafeAreaView, ScrollView } from 'react-native';

import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';

import { Home } from './src/screens/Home';


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

      <SafeAreaView>
        <ScrollView>
          {/* Exibe loading enquanto a fonte é carregada */}
          { fontsLoaded ? <Home/> : <Loading /> }
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

