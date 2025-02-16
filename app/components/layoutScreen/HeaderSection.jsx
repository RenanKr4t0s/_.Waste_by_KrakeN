import React from 'react';
import { View, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default function HeaderSection({children}){
    return (     
            <View style={headerStyle}>
                {children}
            </View>
    );
}     
const headerStyle = {
        height: height * 0.2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }