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

    const newTestObject={
        'id':'a04',
        'name': 'Produto Adicional',
        'quantity': 1,
        'created': '2024-11-11',
        'validTo': '2025-09-09',
    }


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
                    <TouchableOpacity onPress={()=>deletarProduto(item.id)} style={stylesMain.mainButton}>
                        <Text style={stylesMain.mainButtonText}> Delete </Text>
                    </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity onPress={()=>criarProduto(newTestObject)} style={stylesMain.mainButton}>
                <Text style={stylesMain.mainButtonText}>Criar Produto Adicional</Text>
            </TouchableOpacity>

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