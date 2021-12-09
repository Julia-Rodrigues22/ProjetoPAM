import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image,  SafeAreaView, ScrollView } from 'react-native';
import estiloNoticias from './estiloNoticias';



function Noticias({ navigation }) {

    const abrirSobre = () => {
        navigation.navigate('Sobre')
    }
    const abrirDetalhes = () => {
        navigation.navigate('Detalhes')
    }
    const abrirObras = () => {
        navigation.navigate('Obras')
    }
    const abrirEventos = () => {
        navigation.navigate('Eventos')
    }
    const abrirCampanhas = () => {
        navigation.navigate('Campanhas')
    }
    const abrirInicial = () => {
        navigation.navigate('Inicial')
    }

    return (
        <View style={{flex: 1, backgroundColor: '#B0E0E6'}}>
          <SafeAreaView style={estiloNoticias.container}>
      <ScrollView style={estiloNoticias.scrollView}>

                <Text style={estiloNoticias.titulo}>Notícias</Text><br></br>
                <Text style={estiloNoticias.texto}>Nesta quarta-feira, 8 de dezembro, alunos e colaboradores das escolas municipais Maria Aparecida de Jesus Segura e Dona Augusta Ravagnani Basso, no Assentamento II de Sumaré, e a EM Professora Neusa de Sousa Campos, no Parque Rosa e Silva, participam do lançamento do livro “Um novo mundo: quem sou eu neste novo normal?”.</Text>
                <Text style={estiloNoticias.texto}>A obra, de autoria dos alunos do quinto ano, é resultado do projeto “Como Nasce um Livro”, da secretaria de Educação da Prefeitura de Sumaré. Uma importante iniciativa em que o aluno é o protagonista do processo de aprendizagem! </Text>

                <View style={estiloNoticias.imagem}>
          <View>
        <Image
          style={{
            resizeMode: "center", 
            height: 900,
            width: 700
          }}
          source={require("../../../Imagens/livro.jpg")}
        />
        </View>
      </View>

      <Text style={estiloNoticias.texto}>Estão abertas as inscrições gratuitas para o vestibulinho 2022 da EM Dr. Leandro Franceschini, que oferece cursos técnicos gratuitos.Os interessados podem se inscrever pelo site da instituição até o dia 17 de dezembro. </Text>
      <Text style={estiloNoticias.texto}> Neste ano, devido à pandemia do coronavírus, a seleção dos candidatos será por meio da análise do histórico escolar. A lista dos aprovados será divulgada no site a partir do dia 18 de janeiro.</Text>
            
            
      <View style={estiloNoticias.imagem2}>
          <View>
        <Image
          style={{
            resizeMode: "center", 
            height: 900,
            width: 700
          }}
          source={require("../../../Imagens/vestibulinho.jpg")}
        />
        </View>
      </View>
             
</ScrollView>
             </SafeAreaView>
             </View>  
            
          

        
    )
}

export default Noticias;
