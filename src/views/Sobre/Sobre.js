import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloSobre from './estiloSobre';

function Sobre({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    const abrirInicial = () => {
        navigation.navigate('Inicial')
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

        
           
            <Text style={estiloSobre.titulo}>Sobre</Text>
            <Text style={estiloSobre.texto}> 
            Esse aplicativo visa notificar os moradores de Sumaré dos principais acontecimentos nessa cidade, como por exemplo: campanhas, novas obras, eventos, etc.
            </Text>
            <Text style={estiloSobre.texto}> Sendo assim, na tela inicial o usuário poderá ver as notícias mais recentes, e futuramente as áreas "campanhas", "novas obras", "eventos" e "mais notícias" serão atualizadas com as informações da cidade.</Text>
            <Text style={estiloSobre.texto}> ~ Júlia Rodrigues Siqueira - DS 2ºB </Text>
       

    </View>

    )
}

export default Sobre;
