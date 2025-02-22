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
    height: height * 0.25,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 20,
}