import React from 'react';
import { View } from 'react-native';

export default function BoddySection({children}) {

    return (
        <View style={boddyStyle}>
            {children}
        </View>
    );
}
const boddyStyle = {

    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 10,
}