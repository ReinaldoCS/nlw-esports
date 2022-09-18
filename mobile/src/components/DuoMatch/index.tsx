import { useState } from "react";
import { Modal, ModalProps, Text, View, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import * as Clipboard from 'expo-clipboard';

import { Heading } from "../Heading";

import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';

import { styles } from "./styles";
import { THEME } from "../../theme";

interface DuoMatchProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...reset}: DuoMatchProps) {

  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscordToClipboard(discord: string) {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord)
    setIsCopping(false);
    Alert.alert('Discord cópiado!', 'Agora você pode colar no Discord.')
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...reset}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name="close" size={24} color={THEME.COLORS.CAPTION_500}/>
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

          <Heading 
            title="Let’s play!" 
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          />

          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity 
            style={styles.discordButton}
            onPress={() => handleCopyDiscordToClipboard(discord)}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}