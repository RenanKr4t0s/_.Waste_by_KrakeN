import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import stylesMain from './components/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={stylesMain.mainTitle}>Kraken está rodando!</Text>
      <Link href="/kraken" style={stylesMain.testTitle}>Veja o monstro</Link>
      <Link href="/splashScreen" style={stylesMain.testTitle}>Ver Splashscreen</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});