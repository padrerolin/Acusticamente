import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const TelaJogo = ({ navigation }) => {
  const [sound1, setSound1] = useState();
  const [sound2, setSound2] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./audios/atividade7/audioatv7.mpeg')
    );
    setSound1(sound);
    await sound.playAsync();
  };
  const playSound2 = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./audios/atividade7/ruidoatv7.mpeg')
    );
    setSound2(sound);
    await sound.playAsync();
  };
  


  const handleProximaTela = () => {
    navigation.navigate('Imagens do Setimo Nivel');
  };

  const onPressPlaySoundAndNextTela = async () => {
    await playSound();
    await playSound2();

    handleProximaTela();
  };

  React.useEffect(() => {
    return () => {
      if (sound1) {
        sound1.unloadAsync();
      }
      if (sound2) {
        sound2.unloadAsync();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>João precisa comprar...</Text>
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
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaJogo;
