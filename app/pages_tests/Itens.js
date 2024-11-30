import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import stylesMain from '../components/styles';

const products = require('../components/mockups/products')

export default function App() {
  return (
    <View>
        <Text style={styles.textTitle}>Página de Produtos</Text>
          <View style={styles.subView}>
            <Text style={styles.textBody}> Aqui mostraremos os produtos</Text>
            <Text style={stylesMain.mainTitle}>Aqui um texto editado</Text>
            <Text style={styles.textBody}> {products[0].name}</Text>
          </View>

          {/* Trecho que transforma a barra de status em transparente: */}
          <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  textTitle:{
    color: 'yellow',
    fontSize: 45,
    fontWeight: 'bold',
  },
  subView:{
    height: 70,
    backgroundColor: 'yellow',
    margin: 10,
    paddingHorizontal: 30,
    justifyContent:'center', 
    borderRadius: 15,
  },
  textBody:{
    color: 'purple',
    fontSize: 25,
    fontWeight: 'bold',
  }
});