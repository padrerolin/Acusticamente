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
      setImagensSelecionadas(imagensSelecionadas.filter((selecionada)=>selecionada !=imagem))
    }
  };
  
  const imagensCorretas = [
    "banana","biscoito","pao"
  ];
  const verificarResposta = () => {
   
    const resposta = imagensSelecionadas.length === 3 &&
    imagensSelecionadas.every((imagem, index) => imagensCorretas.includes(imagem))
      setRespostaCorreta(resposta);
      setImagensSelecionadas([]);
      if (resposta){
        setTimeout(() => {
          navigation.navigate("Terceiro Nivel")
        }, 3000);
      }
      };
    


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione:</Text>
      <View style={styles.imagensContainer}>
        <TouchableOpacity onPress={() => handleSelecionarImagem("arroz")}>
          <Image source={require('./fotos/atividade2/arroz.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('arroz') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("cenoura")}>
          <Image source={require('./fotos/atividade2/cenoura.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('cenoura') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("banana")}>
          <Image source={require('./fotos/atividade2/banana.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('banana') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("biscoito")}>
          <Image source={require('./fotos/atividade2/biscoito.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('biscoito') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("laranja")}>
          <Image source={require('./fotos/atividade2/laranja.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('laranja') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("maca")}>
          <Image source={require('./fotos/atividade2/maca.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('maca') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("milho")}>
          <Image source={require('./fotos/atividade2/milho.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('milho') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("pao")}>
          <Image source={require('./fotos/atividade2/pao.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('pao') ? styles.imagensSelecionadas:""]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelecionarImagem("refrigerante")}>
          <Image source={require('./fotos/atividade2/refrigerante.jpeg')} style={[styles.imagem, imagensSelecionadas.includes('refrigerante') ? styles.imagensSelecionadas:""]} />
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
