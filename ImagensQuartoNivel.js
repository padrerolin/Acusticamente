import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const SegundoNivelScreen = ({navigation}) => {
  const [imagensSelecionadas, setImagensSelecionadas] = useState([]);
  const [respostaCorreta, setRespostaCorreta] = useState(false);

  const handleSelecionarImagem = (imagem) => {
    if (!imagensSelecionadas.includes(imagem)) {
      if (imagensSelecionadas.length < 4) {
        setImagensSelecionadas([...imagensSelecionadas, imagem]);
      }
    }else{
        setImagensSelecionadas(imagensSelecionadas.filter((selecionada)=>selecionada != imagem))
    }
  };
  
  const imagensCorretas = ["bolsa","vestido","perfume","oculos"];
  const verificarResposta = () => {
   
    const resposta = imagensSelecionadas.length === 4 &&
    imagensSelecionadas.every((imagem, index) => imagensCorretas.includes(imagem))
      setRespostaCorreta(resposta);
      setImagensSelecionadas([]);
      if (resposta){
        setTimeout(() => {
          navigation.navigate("Inicio Quinto Nivel")
        }, 3000);
      }
      };
    


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione:</Text>
      <View style={styles.imagensContainer}>
        <TouchableOpacity onPress={() => handleSelecionarImagem("bola")}>
          <Image source={require('./fotos/atividade4/bola.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('bola') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("blusa")}>
          <Image source={require('./fotos/atividade4/blusa.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('blusa') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("bolsa")}>
          <Image source={require('./fotos/atividade4/bolsa.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('bolsa') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("bone")}>
          <Image source={require('./fotos/atividade4/bone.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('bone') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("calca")}>
          <Image source={require('./fotos/atividade4/calca.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('calca') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("chinelo")}>
          <Image source={require('./fotos/atividade4/chinelo.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('chinelo') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("oculos")}>
          <Image source={require('./fotos/atividade4/oculos.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('oculos') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("perfume")}>
          <Image source={require('./fotos/atividade4/perfume.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('perfume') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("vestido")}>
          <Image source={require('./fotos/atividade4/vestido.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('vestido') ? styles.imagensSelecionadas:""]} />
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
     {respostaCorreta === false && imagensSelecionadas.length === 4 && !imagensSelecionadas.every((imagem) => imagensCorretas.includes(imagem)) && (
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
