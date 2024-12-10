import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import stylesMain from './components/styles';

export default function App() {
  return (
    <View style={stylesMain.basicContainer}>
      <Text style={stylesMain.mainTitle}>Kraken está rodando!</Text>
      <View style={stylesMain.mainButtonContainer}>
        <Link href="/splashScreen" style={stylesMain.mainButton}>
          <Text style={stylesMain.mainButtonText}>Splashscreen</Text>
        </Link>
        <Link href="/loginPages/primeiraTela" style={stylesMain.mainButton}>
          <Text style={stylesMain.mainButtonText}>PrimeiraTela</Text>
        </Link>
        <Link href="/loginPages/login" style={stylesMain.mainButton}>
          <Text style={stylesMain.mainButtonText}>Login</Text>
        </Link>
        <Link href="/loginPages/dataTest" style={stylesMain.mainButton}>
          <Text style={stylesMain.mainButtonText}>Teste de Dados</Text>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}