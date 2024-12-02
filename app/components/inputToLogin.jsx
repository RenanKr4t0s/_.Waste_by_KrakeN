import React from 'react'
import { TextInput, StyleSheet, View, Text, Image } from 'react-native'
import stylesMain from './styles';

export function InputToLogin({ label, ...inputProps }) {
    const [number, setNumber] = React.useState('');

    function handleChange(text) {
        console.log(text); 
        setNumber(text);
    }

    return (
        <View>

            {label && <Text style={stylesMain.inputLabel}>{label}</Text>}
            <View style={stylesMain.inputArea}>
            <Image style={stylesMain.inputPhoto} source={require('./mockups/BenJhonson.jpg')} />

            <TextInput
                style={stylesMain.inputMain}
                {...inputProps} // Espalha as props passadas para o TextInput
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: '#333',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default InputToLogin
