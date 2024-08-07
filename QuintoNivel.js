import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuintoNivelScreen = ({navigation}) => {
  const [respostaCorreta, setRespostaCorreta] = useState(null);

  const handleSelecionarNumero = (numero) => {
    verificarResposta(numero);
    if (numero === 50) {
      setRespostaCorreta(true);
    } else {
      setRespostaCorreta(false);
    }
  };

  const verificarResposta = (numero) => {
    const resposta = numero === 50
    setRespostaCorreta(resposta);
    if (resposta){
      setTimeout(() => {
        navigation.navigate("Sexto Nivel")
      }, 3000);
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione:</Text>
      <View style={styles.numbersContainer}>
        <TouchableOpacity onPress={() => handleSelecionarNumero(10)} style={styles.button}>
          <Text style={styles.buttonText}>10</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarNumero(30)} style={styles.button}>
          <Text style={styles.buttonText}>30</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarNumero(100)} style={styles.button}>
          <Text style={styles.buttonText}>100</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarNumero(80)} style={styles.button}>
          <Text style={styles.buttonText}>80</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarNumero(50)} style={styles.button}>
          <Text style={styles.buttonText}>50</Text>
        </TouchableOpacity>
      </View>
      {respostaCorreta !== null && (
        <Text style={[styles.resultado, respostaCorreta ? styles.correto : styles.incorreto]}>
          {respostaCorreta ? 'Correto!' : 'Incorreto!'}
        </Text>
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
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff', // Cor do botão pode ser alterada conforme sua preferência
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 5,
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão pode ser alterada conforme sua preferência
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  correto: {
    color: 'green',
  },
  incorreto: {
    color: 'red',
  },
});

export default QuintoNivelScreen;
