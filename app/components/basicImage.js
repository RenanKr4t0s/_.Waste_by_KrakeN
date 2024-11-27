import React from "react";
import { Image, StyleSheet, Text, SafeAreaView} from "react-native";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
const krakenLogo = require("../../assets/KrakenSliced.webp")

export default function BasicImage(){
    const styles = StyleSheet.create({
        image:{
            resizeMode:'cover'
        }
    })
    return(
        <SafeAreaView>
            <Image source={krakenLogo} style={styles.image}/>
        </SafeAreaView>
        
    )
}