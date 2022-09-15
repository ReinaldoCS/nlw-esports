import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, ImageBackground, ImageSourcePropType, Text } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

interface GameCardProps {
  id: string,
  name: string,
  ads: string,
  cover: ImageSourcePropType
}

export function GameCard({ id, name, ads, cover }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground  style={styles.cover} source={cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.ads}>{ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}