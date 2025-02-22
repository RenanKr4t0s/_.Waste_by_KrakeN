import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import useBasketContext from '../hooks/useBasketContext';
import stylesMain from '../styles/styles';

export default function BasketControls(){
    const {
        basket,
        criarProduto,
        adicionarProduto,
        subtrairProduto,
        deletarProduto
    } = useBasketContext();


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Eu sou o Basket Controls</Text>
            {basket.map((item) => (
                <View key={item.id} style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>subtrairProduto(item.id)} style={stylesMain.mainButton}>
                        <Text style={stylesMain.mainButtonText}>  -  </Text>
                    </TouchableOpacity>
                    <Text style={styles.item}>
                        {item.name}
                    </Text>
                    <Text style={styles.item}>
                        {item.quantity}
                    </Text>
                    <TouchableOpacity onPress={()=>adicionarProduto(item.id)} style={stylesMain.mainButton}>
                        <Text style={stylesMain.mainButtonText}>  +  </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

// Estilos opcionais para organizar a UI
const styles = StyleSheet.create({
    container: {
        padding: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    innerContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: 300,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    item: {
        fontSize: 16,
        marginVertical: 1,
    },
});