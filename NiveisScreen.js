import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NiveisScreen = ({ navigation }) => {
  const handleNivelPress = (nivel) => {
    navigation.navigate(nivel)

    console.log(`Nível selecionado...`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a atividade:</Text>
      <TouchableOpacity onPress={() => handleNivelPress("Primeiro Nivel")} style={styles.button}>
        <Text style={styles.buttonText}>Atividade 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNivelPress("Segundo Nivel")} style={styles.button}>
        <Text style={styles.buttonText}>Atividade 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNivelPress("Terceiro Nivel")} style={styles.button}>
        <Text style={styles.buttonText}>Atividade 3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNivelPress("Quarto Nivel")} style={styles.button}>
        <Text style={styles.buttonText}>Atividade 4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNivelPress("Inicio Quinto Nivel")} style={styles.button}>
        <Text style={styles.buttonText}>Atividade 5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNivelPress("Sexto Nivel")} style={styles.button}>
        <Text style={styles.buttonText}>Atividade 6</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNivelPress("Setimo Nivel")} style={styles.button}>
        <Text style={styles.buttonText}>Atividade 7</Text>
      </TouchableOpacity>
      {/* Adicione mais botões conforme necessário */}
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

export default NiveisScreen;
