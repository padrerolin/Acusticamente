import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from './InicioScreen';
import ReproduzirSons from './ReproduzirSons';
import NiveisScreen from './NiveisScreen';
import ImagensScreenAtv1 from './ImagensScreenAtv1';
import SegundoNivel from './SegundoNivel';
import ImagensSegundonivel from './ImagensSegundoNivel';
import TerceiroNivel from './TerceiroNivel';
import QuartoNivel from './QuartoNivel';
import ImagensQuartonivel from './ImagensQuartoNivel';
import InicioQuintoNivel from './InicioQuintoNivel';
import QuintoNivel from './QuintoNivel';
import SextoNivel from './SextoNivel';
import ImagensSextoNivel from './ImagensSextoNivel';
import SetimoNivel from './SetimoNivel';
import ImagensSetimonivel from './ImagensSetimoNivel';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Niveis" component={NiveisScreen}/>
        <Stack.Screen name="Primeiro Nivel" component={ReproduzirSons} />
        <Stack.Screen name="Segundo Nivel" component={SegundoNivel} />
        <Stack.Screen name="Imagens do Primeiro Nivel" component={ImagensScreenAtv1} />
        <Stack.Screen name="Imagens do Segundo Nivel" component={ImagensSegundonivel} />
        <Stack.Screen name="Terceiro Nivel" component={TerceiroNivel} />
        <Stack.Screen name="Quarto Nivel" component={QuartoNivel} />
        <Stack.Screen name="Imagens do Quarto Nivel" component={ImagensQuartonivel} />
        <Stack.Screen name="Inicio Quinto Nivel" component={InicioQuintoNivel} />
        <Stack.Screen name="Quinto Nivel" component={QuintoNivel} />
        <Stack.Screen name="Sexto Nivel" component={SextoNivel} />
        <Stack.Screen name="Imagens do Sexto Nivel" component={ImagensSextoNivel} />
        <Stack.Screen name="Setimo Nivel" component={SetimoNivel} />
        <Stack.Screen name="Imagens do Setimo Nivel" component={ImagensSetimonivel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
