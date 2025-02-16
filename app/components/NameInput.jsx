import React from 'react'
import { TextInput, View, Text } from 'react-native'
import stylesMain from '../styles/styles';


 function NameInput({...inputProps }) {
    return (
        <TextInput
            style={stylesMain.nameInput}
            {...inputProps}  
        />
    );
}

export default NameInput
