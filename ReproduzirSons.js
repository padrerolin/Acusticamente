import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av';

const TelaJogo = ({ navigation }) => {
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./audios/atividade1/audioatv1.mpeg')
    );
    setSound(sound);
    await sound.playAsync();
  };

  const handleProximaTela = () => {
    // Navega para a próxima tela ao clicar no botão "Próxima Tela"
    navigation.navigate('Imagens do Primeiro Nivel');
  };
  const onPressPlaySoundAndNextTela = () => {
    playSound();
    handleProximaTela();
  };

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu animal preferido é...</Text>
      <TouchableOpacity onPress={onPressPlaySoundAndNextTela} style={styles.button}>
        <Text style={styles.buttonText}>Reproduzir Áudio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Cor de fundo pode ser alterada conforme sua preferência
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff', // Cor do botão pode ser alterada conforme sua preferência
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão pode ser alterada conforme sua preferência
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaJogo;
