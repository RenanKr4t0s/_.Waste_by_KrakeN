import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router"; // Expo Router
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import stylesPattern from "./components/stylePatterns";

const wasteLogo = require("../assets/Waste_Logo.png");
const krakenLogo = require("../assets/Kraken_Logo.png");

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/inputName"); // Navega para a próxima página
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.images} source={wasteLogo} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.developed}>developed by</Text>
        <Image style={styles.images} source={krakenLogo} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 300,
    padding: 135,
    backgroundColor: stylesPattern.mainColor,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  images: {
    width: 135,
    height: 30,
    resizeMode: "contain",
  },
  developed: {
    color: stylesPattern.clearColor,
    fontSize: 20,
    marginBottom: 5,
  },
});
