import { FlatList, Image, View } from "react-native";
import { styles } from "./styles";

import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

import { GAMES } from '../../utils/games';

import logoImg from '../../assets/logo-nlw-esports.png'
import lolImg from '../../assets/games/game-1.png'

export function Home() {
  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={logoImg} />
      <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

      <FlatList
        data={GAMES}
        keyExtractor={game => game.id}
        renderItem={({ item }) => (
          <GameCard id={item.id} name={item.name} ads={item.ads} cover={item.cover} />
        )}
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  )
}