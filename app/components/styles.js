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
    },
    icon:{},
    button:{},
    inputArea:{
        flexDirection:'row',
        alignItems: 'center',
    },
    inputLabel:{
        color: stylesPattern.mainColor,
        fontSize: 16,
        marginLeft: 45,
    },
    inputPhoto:{
        backgroundColor: stylesPattern.main20Color,
        borderRadius: 4,
        width:35,
        height: 35,
    },
    inputMain:{
        height: 40,
        width: 280,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputForgotButton:{},

})


export default stylesMain