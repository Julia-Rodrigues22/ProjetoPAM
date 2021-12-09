import { StyleSheet, StatusBar } from 'react-native';

const estiloCampanhas = StyleSheet.create ({

    
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
        textAlign: "justify",
        fontFamily: "Arial",
        padding: 10,
        marginLeft: 50,
        marginRight: 50
    },

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },

    scrollView: {
        marginHorizontal: 5
    },

    imagem:{
      
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "space-around",
        alignItems: "center",
        height: "75%",
        textAlign: "center"
          }
});

export default estiloCampanhas;
