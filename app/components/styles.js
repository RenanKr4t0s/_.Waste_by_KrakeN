// Estilos em comum utilizados para desenvolver as páginas

import { StyleSheet } from "react-native";
import stylesPattern from "./stylePatterns";

const stylesMain = StyleSheet.create({
    basicContainer: {
        flex: 1,
        backgroundColor: stylesPattern.clearColor,
        gap:20,
        padding: 30,
    },
    basicInnerContainer:{
        textAlign: 'center',
    },
    mainTitle:{
        color: stylesPattern.textColor,
        fontSize: 26,
        fontFamily: stylesPattern.mainFont,
        fontWeight: stylesPattern.wMedium,
    },
    mainButton:{
        backgroundColor:stylesPattern.mainColor,
        borderRadius: 10,
        width: 360,
    },
    mainButtonDisabled:{
        backgroundColor:stylesPattern.enabeledColor,
        borderRadius: 10,
        width: 360,
    },
    mainButtonText:{
        color:stylesPattern.clearColor,
        fontSize:16,
        fontWeight:600,
        lineHeight:40,
        textAlign:'center',
        fontFamily:stylesPattern.mainFont,
    },
    mainButtonTextDisabled:{
        color:stylesPattern.mainColor,
        fontSize:16,
        fontWeight:600,
        lineHeight:40,
        textAlign:'center',
        fontFamily:stylesPattern.mainFont,
    },
    nameInput:{
        borderRadius: 10,
        borderColor: stylesPattern.main20Color,
        borderWidth: 2,
        height: 40,
        padding: 10,
        margin: 5,
        placeholderTextColor: stylesPattern.main20Color,
    },



    //estilos deprecated
 
    mainSubtitle:{
        color: stylesPattern.mainColor,
        fontSize: 18,
        fontFamily: stylesPattern.mainFont,
        fontWeight: 500,
    },
    mainImage:{
        backgroundColor: stylesPattern.main20Color,
        borderRadius: 8,
        width:200,
        height: 200,
        fontWeight: 400,
    },
    mainButtonContainer:{
        flexDirection: 'column',
        justifyContent: 'center', // centraliza no eixo vertical
        alignItems: 'center', // centraliza no eixo horizontal
        gap: 15,
    },

    mainButtonClear:{
        borderRadius: 10,
        borderColor: stylesPattern.mainColor,
        borderWidth: 2,
        width: 360,   
        backgroundColor:stylesPattern.clearColor,
    },

    mainButtonTextClear:{
        color:stylesPattern.mainColor,
        fontSize:16,
        fontWeight:600,
        lineHeight:40,
        textAlign:'center',
        fontFamily:stylesPattern.mainFont,
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
        borderWidth: 2,
        height: 40,
        width: 310,
        margin: 5,
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
    loginSetOfButtons:{
        flexDirection:"row",
        gap:5,
    },

})


export default stylesMain