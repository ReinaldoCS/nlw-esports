import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";

import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from "./styles";
import { Background } from "../../components/Background";


export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();


  function handleOpenGaming({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch('http://192.168.1.6:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={logoImg} />
        <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />
        <FlatList
          data={games}
          keyExtractor={game => game.id}
          renderItem={({ item }) => (
            <GameCard 
              id={item.id}
              title={item.title}
              _count={item._count}
              bannerUrl={item.bannerUrl}
              onPress={() => handleOpenGaming(item)}
            />
          )}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </SafeAreaView>
    </Background>
  )
}