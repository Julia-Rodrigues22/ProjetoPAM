import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Image} from 'react-native';
import estiloObras from './estiloObras';
import estiloCampanhas from '../Campanhas/estiloCampanhas';


function Obras({ navigation }) {

    const abrirSobre = () => {
        navigation.navigate('Sobre')
    }
    const abrirDetalhes = () => {
        navigation.navigate('Detalhes')
    }
    const abrirEventos = () => {
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
                  <SafeAreaView style={estiloObras.container}>
      <ScrollView style={estiloObras.scrollView}>
               
             
                    <Text style={estiloObras.titulo}>Obras</Text><br></br>
                    <Text style={estiloObras.texto}>Hoje, nas Ruas dos jardins Paulistano, João Paulo II, Consteca, Palmeiras, São João, Santa Madalena, Zilda Natel, Parque João de Vasconcellos, Vila Yolanda Costa e Silva e Residencial Vaughan 
                    começaram os trabalhos de dedetização contra pragas urbanas. Promovida pela secretaria municipal de Saúde, por meio do Centro de Controle de Zoonoses, esta ação tem o objetivo de prevenir a proliferação de insetos, ratos, escorpiões e outros animais peçonhentos, que podem transmitir doenças e trazer sérios riscos à saúde da população. </Text>
                    <View style={estiloObras.imagem2}>
          <View>
        <Image
          style={{
            resizeMode: "center", 
            height: 900,
            width: 700
          }}
          source={require("../../../Imagens/detetizacao.jpg")}
        />
        </View>
      </View>
                    <Text style={estiloObras.texto}>No dia 7 desse mês, iniciaram-se as melhorias no asfalto da Rua Vilma Vieira Cardoso (antiga Rua 1), no Jardim Denadai, que serão de grande ajuda para os moradores da região.</Text>
                   
                    
                <View style={estiloObras.imagem}>
          <View>
        <Image
          style={{
            resizeMode: "center", 
            height: 900,
            width: 700
          }}
          source={require("../../../Imagens/asfalto.jpg")}
        />
        </View>
      </View>
                 
               
                </ScrollView>
             </SafeAreaView>
             
             </View>
    
    
    )
    }
        
        
    export default Obras;
    
    