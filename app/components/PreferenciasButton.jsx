import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import stylesMain from '../styles/styles';

export default function PreferenciasButton({onPress, children}){

    const [isActive, setIsActive]=React.useState(false)

    function handleButtonBasics({children}){
        console.log(`${children} Apertado`)
        onPress()
        setIsActive((prev)=>!prev)     
    }
    return(
        <TouchableOpacity  style={[
            !isActive ? stylesMain.preferencesInativeButton : stylesMain.preferencesActiveButton,
            ]} onPress={handleButtonBasics}>                    
                <Text style={[
                !isActive ? stylesMain.preferencesInactiveText : stylesMain.preferencesActiveText,
            ]}>{children}</Text>
        </TouchableOpacity>
    )
}