
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const InicioScreen = ({ navigation }) => {
  const handleIniciarPress = () => {
    navigation.navigate("Niveis")
    // Aqui você pode navegar para a próxima tela do jogo
    // Por enquanto, vamos apenas exibir um log no console
    console.log('Iniciar o jogo...');
  };


  return (
    <View style={styles.container}>
         <Image
        source={require('./fotos/logo/logo01.jpeg')}
        style={styles.logo}
      />
      <Text style={styles.title}>VAMOS COMEÇAR ?</Text>
      <TouchableOpacity onPress={handleIniciarPress} style={styles.button}>
        <Text style={styles.buttonText}>INICIAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff1493', // Cor de fundo pode ser alterada conforme sua preferência
  },
  logo:{
    width:300,
    height:300,
    marginBottom:20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color:'white',
  },
  button: {
    backgroundColor: '#007bff', // Cor do botão pode ser alterada conforme sua preferência
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão pode ser alterada conforme sua preferência
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InicioScreen;