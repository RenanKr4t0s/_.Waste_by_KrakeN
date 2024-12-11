import React from 'react'
import { TextInput, View, Text, Image } from 'react-native'

import stylesMain from '../styles';
import stylesPattern from '../stylePatterns';

import EyeToLoginToggle from './eyeToLoginToggle';

 function InputToLogin({ label, hideable=false, ...inputProps }) {
    const [number, setNumber] = React.useState('');
    const [hidePass, setHidePass] = React.useState(hideable)

    function handleChange(text) {
        console.log(text); 
        setNumber(text);
    }
    function handleTouch(){
        setHidePass(!hidePass)
    }

    return (
        <View>
            {label && <Text style={stylesMain.inputLabel}>{label}</Text>}
            <View style={stylesMain.inputArea}>
            <Image style={stylesMain.inputPhoto} source={require('../mockups/BenJhonson.jpg')} />
            <View style={stylesMain.inputContainerToIcon} >
                <TextInput
                    style={stylesMain.inputMain}
                    placeholderTextColor={stylesPattern.main20Color}
                    secureTextEntry={hidePass}
                    {...inputProps} // Espalha as props passadas para o TextInput    
                />
                {hideable && <EyeToLoginToggle handleTouch={handleTouch}/>}
                
            </View>

            </View>
        </View>
    );
}

export default InputToLogin
