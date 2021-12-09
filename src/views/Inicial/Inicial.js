import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import estiloInicial from './estiloInicial';



function Inicial({ navigation }) {

    const abrirSobre = () => {
        navigation.navigate('Sobre')
    }
    const abrirDetalhes = () => {
        navigation.navigate('Detalhes')
    }
    const abrirEventos = () => {
        navigation.navigate('Eventos')
    }
    const abrirObras = () => {
        navigation.navigate('Obras')
    }
    const abrirNoticias = () => {
        navigation.navigate('Noticias')
    }
    const abrirCampanhas = () => {
        navigation.navigate('Campanhas')
    }
   

    return (
        <View style={{flex: 1, backgroundColor: '#B0E0E6'}}>

         <ImageBackground style={estiloInicial.imagem}
         source={require('../../../Imagens/sumare.jpg')}>

             </ImageBackground>

             <SafeAreaView style={estiloInicial.container}>
      <ScrollView style={estiloInicial.scrollView}>

                <Text style={estiloInicial.titulo}>Updated</Text>
                <Text style={estiloInicial.textinho}>Seja bem-vindo ao aplicativo de notícias da sua região!</Text><br></br>
                <br></br><br></br><br></br>
                <Text style={estiloInicial.subtitulo}>Principais notícias</Text><br></br>
                <Text style={estiloInicial.texto}> ` O Orquidário Sumaré vai reabrir ao público neste fim de semana para a tradicional Mostra de Orquídeas! (veja mais sobre na seção "Eventos"). </Text>
                <Text style={estiloInicial.texto}>` Estão abertas as inscrições gratuitas para o vestibulinho 2022 da EM Dr. Leandro Franceschini (veja mais na seção "Notícias").</Text>
                <Text style={estiloInicial.texto}>` Hoje começaram os trabalhos de dedetização contra pragas urbanas! (veja mais na seção "Obras").</Text>

            </ScrollView>
             </SafeAreaView>
             
             </View>
    
        
    )
}

export default Inicial;

