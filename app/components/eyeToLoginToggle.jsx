import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import stylesMain from './styles'

function EyeToLoginToggle({handleTouch}){
    return (
        <TouchableOpacity onPress={handleTouch}>
        <Text style={stylesMain.mainTitle}>👁️</Text>
        </TouchableOpacity>
    )
}

export default EyeToLoginToggle
