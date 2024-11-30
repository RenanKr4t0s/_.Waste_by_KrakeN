import React from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'

export function InputToLogin({ label, ...inputProps }) {
    const [number, setNumber] = React.useState('');

    function handleChange(text) {
        console.log(text); 
        setNumber(text);
    }

    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                {...inputProps} // Espalha as props passadas para o TextInput
            />
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
