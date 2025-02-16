import React from 'react';
import { View, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default function FooterSection({ children }) {

    return (
        <View style={footerStyle}>
            {children}
        </View>
    );
}
const footerStyle = {
    height: height * 0.2,
    justifyContent: 'flex-start',
    gap: 20,
}