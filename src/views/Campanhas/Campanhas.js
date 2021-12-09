import compareVersions from 'compare-versions';
import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image,  SafeAreaView, ScrollView} from 'react-native';
import estiloCampanhas from './estiloCampanhas';



function Campanhas({ navigation }) {

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
    const abrirEventos = () => {
        navigation.navigate('Eventos')
    }
    const abrirInicial = () => {
        navigation.navigate('Inicial')
    }

    return (
        <View style={{flex: 1, backgroundColor: '#B0E0E6'}}>
             <SafeAreaView style={estiloCampanhas.container}>
      <ScrollView style={estiloCampanhas.scrollView}>
           
         
                <Text style={estiloCampanhas.titulo}>Campanhas</Text><br></br>
                <Text style={estiloCampanhas.texto}>A campanha que está acontecendo agora em Sumaré é a de vacinação contra a Covid-19.</Text>
                <Text style={estiloCampanhas.texto}><b>Locais:</b> Em todas as unidades de saúde (exceto no Centro de Saúde II e no Ângelo Tomazin), e no Centro Esportivo.</Text>
                <Text style={estiloCampanhas.texto}><b>Horário:</b> Das 9h às 15h, com exceção da Vila Soma, onde a vacinação acontece das 9h às 13h.</Text>
             
                <View style={estiloCampanhas.imagem}>
          <View>
        <Image
          style={{
            resizeMode: "center",
            height: 700,
            width: 500
          }}
          source={require("../../../Imagens/vacinacao.jpg")}
        />
        </View>
      </View>
             
            
             </ScrollView>
             </SafeAreaView>
             
             </View>
             
             


)
}
    
    
export default Campanhas;

