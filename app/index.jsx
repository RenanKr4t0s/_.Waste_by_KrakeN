import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import stylesMain from './components/styles';

export default function App() {
  return (
    <View style={stylesMain.basicContainer}>
      <Text style={stylesMain.mainTitle}>Kraken está rodando!</Text>
      <Link href="/kraken" style={stylesMain.testTitle}>Veja o monstro</Link>
      <Link href="/splashScreen" style={stylesMain.testTitle}>Ver Splashscreen</Link>
      <Link href="/loginPages/login" style={stylesMain.testTitle}>Login</Link>
      <StatusBar style="auto" />
    </View>
  );
}