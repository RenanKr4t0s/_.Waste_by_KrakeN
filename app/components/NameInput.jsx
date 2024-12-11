import React from 'react'
import { TextInput, View, Text } from 'react-native'
import stylesMain from '../components/styles';


 function NameInput({...inputProps }) {
    return (
        <View style={stylesMain.inputContainerToIcon} >
            <TextInput
                style={stylesMain.nameInput}
                {...inputProps}  
            />
        </View>
    );
}

export default NameInput
