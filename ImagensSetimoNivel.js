import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const SegundoNivelScreen = ({navigation}) => {
  const [imagensSelecionadas, setImagensSelecionadas] = useState([]);
  const [respostaCorreta, setRespostaCorreta] = useState(false);

  const handleSelecionarImagem = (imagem) => {
    if (!imagensSelecionadas.includes(imagem)) {
      if (imagensSelecionadas.length < 3) {
        setImagensSelecionadas([...imagensSelecionadas, imagem]);
      }
    }else{
        setImagensSelecionadas(imagensSelecionadas.filter((selecionada)=>selecionada != imagem))
    }
  };
  
  const imagensCorretas = ["lapis","estojo","fita"];
  const verificarResposta = () => {
   
    const resposta = imagensSelecionadas.length === 3 &&
    imagensSelecionadas.every((imagem, index) => imagensCorretas.includes(imagem))
      setRespostaCorreta(resposta);
      setImagensSelecionadas([]);
      if (resposta){
        setTimeout(() => {
          navigation.navigate("Niveis")
        }, 3000);
      }
      };
    


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione:</Text>
      <View style={styles.imagensContainer}>
        <TouchableOpacity onPress={() => handleSelecionarImagem("mochila")}>
          <Image source={require('./fotos/atividade7/mochila.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('mochila') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("tesoura")}>
          <Image source={require('./fotos/atividade7/tesoura.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('tesoura') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("estojo")}>
          <Image source={require('./fotos/atividade7/estojo.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('estojo') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("borracha")}>
          <Image source={require('./fotos/atividade7/borracha.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('borracha') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("caneta")}>
          <Image source={require('./fotos/atividade7/caneta.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('caneta') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("lapis")}>
          <Image source={require('./fotos/atividade7/lapis.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('lapis') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("regua")}>
          <Image source={require('./fotos/atividade7/regua.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('regua') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("caderno")}>
          <Image source={require('./fotos/atividade7/caderno.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('caderno') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("fita")}>
          <Image source={require('./fotos/atividade7/fita.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('fita') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>

      </View>
      <TouchableOpacity onPress={verificarResposta} style={styles.button}>
        <Text style={styles.buttonText}>Verificar Resposta</Text>
      </TouchableOpacity>
      {respostaCorreta && (
        <Text style={styles.resultado}>
          Resposta Correta!
        </Text>
     )}
     {respostaCorreta === false && imagensSelecionadas.length === 3 && !imagensSelecionadas.every((imagem) => imagensCorretas.includes(imagem)) && (
       <Text style={styles.resultado}>
         Resposta Incorreta!
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
    borderRadius: 8,
    margin: 5,
  },
  imagensSelecionadas: {
    borderWidth: 3,
    borderColor: 'green',
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
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SegundoNivelScreen;
