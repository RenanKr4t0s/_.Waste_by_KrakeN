import React from 'react';
import { View, Text } from 'react-native';

export default function App(title,children,button) {

  return (
    <View style={styles.container}>
      <View style={styles.margin} />

      <View style={styles.topSection}>
        <Text>{title}</Text>
      </View>

      <View style={styles.middleSection}>
        {children}
      </View>

      <View style={styles.bottomSection}>
        {button}
      </View>
      <View style={styles.margin} />
    </View>
  );
}

const styles = {
    container: {
      flex: 1,
    },
    margin: {
      flex: 0.05, // 5% do espaço total
    },
    topSection: {
      flex: 0.2, // 20% do espaço total
      backgroundColor: '#ffcccb',
      justifyContent: 'center',
      alignItems: 'center',
    },
    middleSection: {
      flex: 0.4, // 40% do espaço total
      backgroundColor: '#add8e6',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomSection: {
      flex: 0.2, // 20% do espaço total
      backgroundColor: '#90ee90',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };