import { StyleSheet, StatusBar} from 'react-native';

const estiloEventos = StyleSheet.create ({

    
    titulo: {
        fontSize: 70,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Cochin",
        padding: 10
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },

    scrollView: {
        marginHorizontal: 5
    },

    subtitulo: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Cochin",
        padding: 10
    },

    
    texto: {
        fontSize: 20,
        color: '#000000',
        textAlign: "justify",
        padding: 10,
        marginLeft: 50,
        marginRight: 50
    },
    imagem:{
        
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "space-around",
        alignItems: "center",
        height: "35%",
        textAlign: "center"

    },
    imagem2: {

        display: "flex",
        flexDirection: "vertical",
        justifyContent: "space-around",
        alignItems: "center",
        height: "25%",
        textAlign: "center"


    }

});

export default estiloEventos;
