// Estilos em comum utilizados para desenvolver as páginas

import { StyleSheet } from "react-native";
import stylesPattern from "./stylePatterns";

const stylesMain = StyleSheet.create({
    basicContainer: {
        flex: 1,
        backgroundColor: stylesPattern.clearColor,
        alignItems: 'center',
        justifyContent: 'center',
        gap:15,
        padding:10,
      },
    mainTitle:{
        color: stylesPattern.mainColor,
        fontSize: 26,
        fontFamily: stylesPattern.mainFont,
        fontWeight: 500,
    },
    testTitle:{
        color: stylesPattern.mainColor,
        fontSize: 26,
        fontWeight: 500,
    }
})


export default stylesMain