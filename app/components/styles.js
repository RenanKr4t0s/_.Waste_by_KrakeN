// Estilos em comum utilizados para desenvolver as páginas

import { StyleSheet } from "react-native";
import stylesPattern from "./stylePatterns";

const stylesMain = StyleSheet.create({
    basicContainer: {
        flex: 1,
        backgroundColor: stylesPattern.clearColor,
        alignItems: 'center',
        justifyContent: 'space-around',
        gap:20,
        padding:50,
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
        borderRadius: 8,
        width:40,
        height: 40,
        fontWeight: 400,
    },
    inputContainerToIcon:{
        borderRadius: 10,
        borderColor: stylesPattern.main20Color,
        height: 40,
        width: 310,
        margin: 5,
        borderWidth: 2,
        flexDirection:'row',
        alignItems: 'center',
    },
    inputMain:{
        placeholderTextColor: stylesPattern.main20Color,
        padding: 10,
        width: 260,
    },
    loginForgotButton:{
        alignSelf:'flex-end',
        marginEnd: 40,
    },
    loginButtonSection:{
        alignItems:'center',
        width:380,
    },
    loginEnterButton:{
        backgroundColor:stylesPattern.mainColor,
        borderRadius: 10,
        width: 360,
    },
    loginEnterText:{
        color:stylesPattern.clearColor,
        fontSize:16,
        fontWeight:600,
        lineHeight:40,
        textAlign:'center',
        fontFamily:stylesPattern.mainFont,
    },
    loginSetOfButtons:{
        flexDirection:"row",
        gap:5,
    },

})


export default stylesMain