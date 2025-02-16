import React from 'react';
import { View, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default function BoddySection({children}) {

    return (
        <View style={boddyStyle}>
            {children}
        </View>
    );
}
const boddyStyle = {
    height: height * 0.4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
}