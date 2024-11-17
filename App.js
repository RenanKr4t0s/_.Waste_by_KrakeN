import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import BasicImage from './components/basicImage';

const krakenLogo = require('./assets/KrakenSliced.webp')

export default function App() {
  return (
    <ImageBackground style={styles.krakenBox} source={krakenLogo}>
        <Text style={styles.textTitle}>KrakeN</Text>
          <View style={styles.subView}>
            <Text style={styles.textBody}> Boa Tarde Kraken Team!</Text>
          </View>

          {/* Trecho que transforma a barra de status em transparente: */}
          <StatusBar style="auto" />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  krakenBox:{
    flex:1,
    padding: 10,
    alignItems: 'center',
    justifyContent:'flex-end', 
  },
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
