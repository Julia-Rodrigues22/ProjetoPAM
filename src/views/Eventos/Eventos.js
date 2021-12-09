import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, SafeAreaView, ScrollView } from 'react-native';
import estiloEventos from './estiloEventos';



function Eventos({ navigation }) {

    const abrirSobre = () => {
        navigation.navigate('Sobre')
    }
    const abrirDetalhes = () => {
        navigation.navigate('Detalhes')
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
          <SafeAreaView style={estiloEventos.container}>
      <ScrollView style={estiloEventos.scrollView}>

                <Text style={estiloEventos.titulo}>Eventos</Text><br></br>
                <Text style={estiloEventos.subtitulo}>Próximos eventos</Text><br></br>
                <Text style={estiloEventos.texto}>O Orquidário Sumaré vai reabrir ao público neste fim de semana para a tradicional Mostra de Orquídeas! De 10 a 12 de dezembro, das 8h às 17h, com entrada gratuita. Participe! O evento acontece em conformidade com todas as medidas de prevenção contra o coronavírus.</Text>
                <View style={estiloEventos.imagem}>
          <View>
        <Image
          style={{
            resizeMode: "center", 
            height: 900,
            width: 700
          }}
          source={require("../../../Imagens/orquidario.jpg")}
        />
        </View>
      </View>
             
<Text style={estiloEventos.subtitulo}>Eventos passados</Text><br></br>
<Text style={estiloEventos.texto}>No dia 8 desse mês, a orquestra Tocando Brasil se apresentou na Praça Macarenko, da região central, e contou com o apoio da Secretaria Municipal de Cultura, Esporte e Lazer. O espetáculo faz parte do projeto contemplado pela lei de incentivo cultural Proac ICMS e tem como objetivo mostrar a diversidade musical brasileira em suas performances pelo interior paulista.</Text>

<View style={estiloEventos.imagem2}>
          <View>
        <Image
          style={{
            resizeMode: "center", 
            height: 900,
            width: 700
          }}
          source={require("../../../Imagens/orquestra.jpg")}
        />
        </View>
      </View>






</ScrollView>
             </SafeAreaView>
             </View>
             
    )
}

export default Eventos;

