import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";

import { Entypo } from '@expo/vector-icons';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from "../../components/Background";

import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard/Index";
import { DuoMatch } from '../../components/DuoMatch';

import { GameParams } from "../../@types/natigation";

import { THEME } from "../../theme";
import { styles } from "./styles";

export function Game() {
  const route = useRoute();
  const natigation = useNavigation();
  const game = route.params as GameParams;

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelect] = useState('');

  function handleGoBack() {
    natigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.1.6:3333/ads/${adsId}/discord`)
    .then(response => response.json())
    .then(data => setDiscordDuoSelect(data.discord));
  }

  useEffect(() => {
    fetch(`http://192.168.1.6:3333/games/${game.id}/ads`)
    .then(response => response.json())
    .then(data => setDuos(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => handleGoBack()}>
            <Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={20}/>
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo}/>
          {/* View para centralizar logo na tela */}
          <View style={styles.right}/>
        </View>
        <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode="cover" />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!"/>


        
        <FlatList 
          data={duos}
          keyExtractor={duo => duo.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          contentContainerStyle={ duos.length > 0 ? styles.contentList : styles.emptyListContent}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />

        <DuoMatch 
          visible={discordDuoSelected.length > 0}
          onClose={() => setDiscordDuoSelect('')}
          discord={discordDuoSelected}
        />
      </SafeAreaView>
    </Background>
  )
}