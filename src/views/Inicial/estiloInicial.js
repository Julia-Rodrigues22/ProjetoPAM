import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create ({

    
    titulo: {
        fontSize: 70,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Cochin",
        padding: 10
    },

    
    texto: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },
    imagem:{
        width: '100%',
        height: '100%',
        flex: 1 

    }
});

export default estiloInicial;
