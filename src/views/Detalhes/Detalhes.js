import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhes from './estiloDetalhes';

function Detalhes({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    const abrirSobre = () => {
        navigation.navigate('Sobre')
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
    const abrirInicial = () => {
        navigation.navigate('Inicial')
    }

    return (
        <View style={{flex: 1, backgroundColor: '#B0E0E6'}}>

        
        
            <Text style={estiloDetalhes.titulo}>Detalhes</Text>
           <Text style={estiloDetalhes.texto}> Na área "Campanhas", pretendo colocar imagens do local onde ela será realizada, com o endereço, o tempo de duração, e outras informações. </Text>
           <Text style={estiloDetalhes.texto}> Na área "Novas Obras", assim como na área anterior, colocarei fotos das obras, o local onde ela está (ou estará) sendo realizada, quais serão os benefícios dela, etc.</Text>
           <Text style={estiloDetalhes.texto}> Como nas outras áreas, a área "Eventos" também contará com imagens e informações detalhadas.</Text>
           <Text style={estiloDetalhes.texto}> Por fim, na área "Mais notícias", buscarei outras coisas de destaque na cidade, para que o usuário possa ser informado das pequenas coisas que estão acontecendo nela também </Text>

    </View>

    )
}
export default Detalhes;
