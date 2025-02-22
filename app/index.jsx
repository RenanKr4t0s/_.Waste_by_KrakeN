import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Dimensions} from 'react-native';
import stylesMain from './styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');

export default function index() {
  async function handlePress (){
    await storeData('name',false)
    console.log("nome de usuário Apagado")
  }

  return (
    <SafeAreaView style={stylesMain.basicContainer}>
      <View style={styles.topSection}>
        <Text style={stylesMain.mainTitle}>Kraken está rodando!</Text>
        <Text style={stylesMain.mainButtonTextDisabled}>Essa é a tela de controle</Text>
      </View>
      <View style={styles.middleSection}>
        <Link href="/screens/splashScreen" style={stylesMain.mainButton}>
          <Text style={stylesMain.mainButtonText}>Rodar o App</Text>
        </Link>
        <Link href="/temporaryScreens/goToAll" style={stylesMain.mainButton}>
          <Text style={stylesMain.mainButtonText}>Ver todas as telas</Text>
        </Link>
        
        <TouchableOpacity onPress={handlePress} style={stylesMain.mainButton}>
            <Text style={stylesMain.mainButtonText}>Resetar DATA</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = {
  topSection: {
      height: height * 0.2,
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  middleSection: {
      height: height * 0.4,
      justifyContent: 'center',
      gap:20,
  },
  bottomSection: {
      height: height * 0.2,
      justifyContent: 'flex-start',
      gap:20,
  },
};