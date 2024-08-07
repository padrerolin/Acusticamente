import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av';

const TerceiroNivelScreen = ({ navigation }) => {
  // Define uma função para reproduzir um áudio quando o botão correspondente é pressionado
  const [resposta1, setResposta1] = useState(null);
  const [resposta2, setResposta2] = useState(null);
  const [resposta3, setResposta3] = useState(null);
  const [resposta4, setResposta4] = useState(null);
  const [resposta5, setResposta5] = useState(null);
  const [resposta6, setResposta6] = useState(null);

  const [respondeuCerto, setRespondeuCerto] = useState(null);

  const handleReproduzirAudio = async (uri) => {
    try {
      const { sound } = await Audio.Sound.createAsync(uri);
      await sound.playAsync();
    } catch (error) {
      console.log('Erro ao reproduzir o áudio:', error);
    }
  };

  const verificarResposta = () => {
    const correto = resposta1 === false && resposta2 === true && resposta3 === true && resposta4 === true && resposta5 === true && resposta6 === false;
    setRespondeuCerto(correto)
    if (correto) {
      setTimeout(() => {
        navigation.navigate("Quarto Nivel");    
      }, 3000)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ouça os audios e selecione se é igual ou diferente:</Text>
        <View style={styles.botoes}>
          <View style={[styles.containerBotoes, resposta1 !== null ? (resposta1 === true ? styles.certo : styles.errado) : '']}>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/ba.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/pa.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta1(true)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/certo.png')} style={styles.imagem} /></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta1(false)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/errado.png')} style={styles.imagem} /></TouchableOpacity>
          </View>
          <View style={[styles.containerBotoes, resposta2 !== null ? (resposta2 === true ? styles.certo : styles.errado) : '']}>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/ba.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/ba.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta2(true)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/certo.png')} style={styles.imagem} /></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta2(false)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/errado.png')} style={styles.imagem} /></TouchableOpacity>
          </View>
          <View style={[styles.containerBotoes, resposta3 !== null ? (resposta3 === true ? styles.certo : styles.errado) : '']}>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/pa.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/pa.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta3(true)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/certo.png')} style={styles.imagem} /></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta3(false)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/errado.png')} style={styles.imagem} /></TouchableOpacity>
          </View>
          <View style={[styles.containerBotoes, resposta4 !== null ? (resposta4 === true ? styles.certo : styles.errado) : '']}>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/ca.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/ca.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta4(true)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/certo.png')} style={styles.imagem} /></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta4(false)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/errado.png')} style={styles.imagem} /></TouchableOpacity>
          </View>
          <View style={[styles.containerBotoes, resposta5 !== null ? (resposta5 === true ? styles.certo : styles.errado) : '']}>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/ga.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/ga.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta5(true)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/certo.png')} style={styles.imagem} /></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta5(false)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/errado.png')} style={styles.imagem} /></TouchableOpacity>
          </View>
          <View style={[styles.containerBotoes, resposta6 !== null ? (resposta6 === true ? styles.certo : styles.errado) : '']}>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/ga.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => handleReproduzirAudio(require('./audios/atividade3/ca.mpeg'))} style={styles.button}><Image source={require('./audios/atividade3/botoes/sound.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta6(true)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/certo.png')} style={styles.imagem} /></TouchableOpacity>
            <TouchableOpacity onPress={() => setResposta6(false)} style={styles.buttonResposta}><Image source={require('./audios/atividade3/botoes/errado.png')} style={styles.imagem} /></TouchableOpacity>
          </View>
      
      </View>
      <TouchableOpacity onPress={verificarResposta} style={styles.buttonVerificar}>
        <Text style={styles.buttonVerificarText}>Verificar Resposta</Text>
      </TouchableOpacity>
      {respondeuCerto !== null && (
        <Text style={styles.resultado}>
          {respondeuCerto ? 'Resposta Correta!' : 'Resposta Incorreta!'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // Cor de fundo pode ser alterada conforme sua preferência
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botoes: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 100,
  },
  button: {
    backgroundColor: '#007bff', // Cor do botão pode ser alterada conforme sua preferência
    borderRadius: 8,
    width: 45,
    height: 45,
    margin: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16
  },
  buttonVerificar: {
      backgroundColor: '#007bff', // Cor do botão pode ser alterada conforme sua preferência
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 32,
      width: '80%'
  },
  buttonVerificarText: {
    color: '#fff', // Cor do texto do botão pode ser alterada conforme sua preferência
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
  },
  buttonResposta: {
    backgroundColor: 'transparent', // Cor do botão pode ser alterada conforme sua preferência
    borderRadius: 8,
    width: 45,
    height: 45,
    margin: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    fontSize: 16
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão pode ser alterada conforme sua preferência
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerBotoes: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 135,
    borderWidth: 2,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  certo: {
    backgroundColor: 'lightgreen'
  },
  errado: {
    backgroundColor: 'red'
  }
});

export default TerceiroNivelScreen;
