import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, View, Modal, Alert } from 'react-native';

export function CameraRead() {
  const [permission, requestPermission] = useCameraPermissions();
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const barcodeLock = useRef(false)

  // Função para chamar a API
  const callApi = async (barcode: string) => {
    try {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
      const data = await response.json();
  
      if (data.status === 1) {
        console.log('Produto encontrado:', data.product);
      } else {
        console.log('Produto não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar informações do produto:', error);
    }
  };
  
  
  async function handleOpenCamera() {
    try {
        const {granted} = await requestPermission()

        if(!granted) {
            return Alert.alert("Camera", "Você precisa habilitar o uso da camera")
        }

        setModalIsVisible(true)
        barcodeLock.current = false
    } catch(error) {
        console.log(error)
    }
  }

  function handleBarcodeRead(data: string) {
    setModalIsVisible(false)
    console.log("Barcode", data)
    callApi(data)
  }

  return (
    <View style={styles.container}>
        <Button title='Ler Barcode' onPress={handleOpenCamera}/>

        <Modal visible={modalIsVisible} style={{ flex: 1 }}>
            <CameraView 
            style={{flex: 1}} 
            facing='back'
            barcodeScannerSettings={{
                barcodeTypes: ["ean13", "ean8"],
              }}
            onBarcodeScanned={({data}) => {
                if(data && !barcodeLock.current) {
                    barcodeLock.current = true 
                    setTimeout(() => handleBarcodeRead(data), 500)
                }
            }}
            />
            
            <View style={styles.footer}>
                <Button title='Cancelar' onPress={() => setModalIsVisible(false)}/>
            </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: "absolute",
    bottom: 32,
    left: 32,
    right: 32
  },
})
