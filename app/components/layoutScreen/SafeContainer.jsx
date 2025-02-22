import React from 'react';
import {Dimensions, SafeAreaView } from 'react-native';

const { height } = Dimensions.get('window');

export default function SafeContainer({children}) {

    return (
        <SafeAreaView style={containerStyle}>
            {children}
        </SafeAreaView>
    );
}
const containerStyle = {
    flex: 1,
}