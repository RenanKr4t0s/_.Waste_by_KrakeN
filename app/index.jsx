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
      </View>
      <StatusBar style="auto" />
    </View>
  );
}