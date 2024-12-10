import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { CameraRead } from "./components/camera_read";

const Home = () => {
  const [isCameraVisible, setIsCameraVisible]= useState(false);
  const categories = ["Legumes", "Verduras", "Frutas", "Proteínas"];
  const products = [
    { id: 1, name: "Cebola Roxa", category: "Legumes", daysLeft: 2 },
    { id: 2, name: "Alface Mimosa", category: "Verduras", daysLeft: 3 },
    { id: 3, name: "Banana Verde", category: "Frutas", daysLeft: 5 },
    { id: 4, name: "Frango 1Kg", category: "Proteínas", daysLeft: 16 },
  ];

  const handleScan = () => {
    // Função que será chamada ao clicar no ícone
    setIsCameraVisible(true)
    console.log("Iniciar scanner de código de barras");
  };

  const renderCategory = (item) => (
    <TouchableOpacity style={styles.categoryButton}>
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <View style={styles.productInfo}>
        <View style={styles.imagePlaceholder} />
        <View>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productCategory}>{item.category}</Text>
          <Text style={styles.productDate}>Vence em: 22 Nov 24</Text>
        </View>
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.daysLeft}>{item.daysLeft}</Text>
        <Text style={styles.daysLeftLabel}>Dias</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações importantes</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar produto"
        placeholderTextColor="#A0A0A0"
      />
      <Text style={styles.subTitle}>Categorias</Text>
      <View style={styles.categories}>
        {categories.map((category) => renderCategory(category))}
      </View>
      <View style={styles.productsHeader}>
        <Text style={styles.subTitle}>Produtos</Text>
        <TouchableOpacity onPress={handleScan} style={styles.barcodeButton}>
          <MaterialCommunityIcons name="barcode-scan" size={20} color="black" />
        </TouchableOpacity>
        {isCameraVisible && <CameraRead/>}
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        style={styles.productList}
      />
      <View style={styles.footer}>
        {["Home", "Cadastrar", "Produtos", "Config", "Perfil"].map((tab) => (
          <TouchableOpacity key={tab} style={styles.footerButton}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.footerText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6A0DAD",
    textAlign: "center",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#D1C4E9",
    borderRadius: 8,
    marginVertical: 16,
    padding: 12,
    fontSize: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6A0DAD",
    marginVertical: 8,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#D1C4E9",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  categoryText: {
    fontSize: 14,
    color: "#6A0DAD",
  },
  productsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
    paddingRight: 0,  // Garantindo que o ícone não encoste na borda
  },
  barcodeButton: {
    padding: 8,
     borderWidth: 1,  // Removido
     borderColor: "#D1C4E9", // Removido
     borderRadius: 8, // Removido
  },
  productList: {
    flex: 1,
  },
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    marginRight: 16,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6A0DAD",
  },
  productCategory: {
    fontSize: 14,
    color: "#A0A0A0",
  },
  productDate: {
    fontSize: 12,
    color: "#A0A0A0",
  },
  productDetails: {
    alignItems: "center",
  },
  daysLeft: {
    fontSize: 24,
    fontWeight: "600",
    color: "#6A0DAD",
  },
  daysLeftLabel: {
    fontSize: 12,
    color: "#A0A0A0",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingTop: 8,
    paddingBottom: 16,
  },
  footerButton: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#6A0DAD",
    marginTop: 4,
  },
});

export default Home;
