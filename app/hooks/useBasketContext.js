import { BasketContext } from "../contexts/BasketContext";
import { useContext } from "react";
import { CREATE_ITEM, DELETE_ITEM, CHANGE_ITEM_QUANT } from "../reducers/basketReducer";

export default function useBasketContext() {
    const { basket, dispatch } = useContext(BasketContext);

    function criarProduto(produto) {
        dispatch({ type: CREATE_ITEM, payload: produto })
    }

    function adicionarProduto(produtoId) {
        dispatch({ type: CHANGE_ITEM_QUANT, payload: { id: produtoId, quantity: 1 } })
    }

    function subtrairProduto(produtoId) {
        const produto = basket.find(produto => produto.id === produtoId)

        if (!produto) return;
        if (produto.quantity > 1) {
            dispatch({ type: CHANGE_ITEM_QUANT, payload: { id: produtoId, quantity: -1 } })
        } else {
            // Ideal seria exibir um aviso de deletar produto
            dispatch({ type: DELETE_ITEM, payload: produtoId })
        }
    }

    function deletarProduto(produtoId) {
        dispatch({ type: DELETE_ITEM, payload: produtoId })
    }

    return {
        basket,
        criarProduto,
        adicionarProduto,
        subtrairProduto,
        deletarProduto
    }
}