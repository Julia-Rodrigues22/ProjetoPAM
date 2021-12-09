import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicial from './src/views/Inicial/Inicial';
import Sobre from './src/views/Sobre/Sobre';
import Detalhes from './src/views/Detalhes/Detalhes';
import Campanhas from './src/views/Campanhas/Campanhas';
import Eventos from './src/views/Eventos/Eventos';
import Noticias from './src/views/Noticias/Noticias';
import Obras from './src/views/Obras/Obras';

const Tab = createBottomTabNavigator();



export default function App() {
  
  return(

   
    <NavigationContainer>

      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />

      <Tab.Navigator
      tabBarOptions={
        {
          labelStyle: { fontSize: 24 },
          style: {backgroundColor: '#4169E1'},
          activeTintColor: '#FFFFFF'
        }
      }
      >

        <Tab.Screen name="Inicial" component={Inicial} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Detalhes" component={Detalhes} />
        <Tab.Screen name="Campanhas" component={Campanhas} />
        <Tab.Screen name="Eventos" component={Eventos} />
        <Tab.Screen name="Noticias" component={Noticias} />
        <Tab.Screen name="Obras" component={Obras} />
      </Tab.Navigator>

    </NavigationContainer>

  );
}
