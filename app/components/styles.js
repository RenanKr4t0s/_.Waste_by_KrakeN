import { StyleSheet } from "react-native";
import stylesPattern from "./stylePatterns";

const stylesMain = StyleSheet.create({
    mainTitle:{
        color: stylesPattern.mainCollor,
        fontSize: 26,
        fontFamily: stylesPattern.mainFont,
        fontWeight: 500,
    },
    testTitle:{
        color: stylesPattern.mainCollor,
        fontSize: 26,
        fontWeight: 500,
    }
})


export default stylesMain