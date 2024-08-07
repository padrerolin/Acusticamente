import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TelaSelecao = ({navigation}) => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [respostaCorreta, setRespostaCorreta] = useState(false);

  const handleSelecionarImagem = (imagem,nome) => {
    setImagemSelecionada(imagem);
    verificarResposta(nome);
  };
  const verificarResposta = (nome) => {
    const resposta = nome ==='acerola'
    setRespostaCorreta(resposta);
    if (resposta){
      setTimeout(() => {
        navigation.navigate("Setimo Nivel")
      }, 3000);
    }

  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione:</Text>
      <View style={styles.imagensContainer}>
        <TouchableOpacity onPress={() => handleSelecionarImagem(require('./fotos/atividade6/kiwi.jpeg'))}>
          <Image source={require('./fotos/atividade6/kiwi.jpeg')} style={styles.imagem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem(require('./fotos/atividade6/uva.jpeg'))}>
          <Image source={require('./fotos/atividade6/uva.jpeg')} style={styles.imagem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem(require('./fotos/atividade6/melancia.jpeg'))}>
          <Image source={require('./fotos/atividade6/melancia.jpeg')} style={styles.imagem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem(require('./fotos/atividade6/acerola.jpeg'),'acerola')}>
          <Image source={require('./fotos/atividade6/acerola.jpeg')} style={styles.imagem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem(require('./fotos/atividade6/laranja.jpeg'))}>
          <Image source={require('./fotos/atividade6/laranja.jpeg')} style={styles.imagem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem(require('./fotos/atividade6/banana.jpeg'))}>
          <Image source={require('./fotos/atividade6/banana.jpeg')} style={styles.imagem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem(require('./fotos/atividade6/maca.jpeg'))}>
          <Image source={require('./fotos/atividade6/maca.jpeg')} style={styles.imagem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem(require('./fotos/atividade6/naosei.jpeg'))}>
          <Image source={require('./fotos/atividade6/naosei.jpeg')} style={styles.imagem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem(require('./fotos/atividade6/pera.jpeg'))}>
          <Image source={require('./fotos/atividade6/pera.jpeg')} style={styles.imagem} />
        </TouchableOpacity>
      </View>
      {imagemSelecionada && (
        <View style={styles.imagemSelecionadaContainer}>
          <Image source={imagemSelecionada} style={styles.imagemSelecionada} />
          {respostaCorreta ? (
            <Text style={styles.respostaCorreta}>Resposta: Correta!</Text>
          ) : (
            <Text style={styles.respostaIncorreta}>Resposta: Incorreta!</Text>
          )}
        </View>
      )}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagensContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 100,
    height: 100,
    margin: 5,
  },
  imagemSelecionadaContainer: {
    alignItems: 'center',
  },
  textoSelecionado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagemSelecionada: {
    width: 150,
    height: 150,
  },
});

export default TelaSelecao;
