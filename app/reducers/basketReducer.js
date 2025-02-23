import useStorageFunctions from "../functions/storageFunctions";

export const CREATE_ITEM = "CREATE_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"
export const CHANGE_ITEM_QUANT = "CHANGE_ITEM_QUANT"
export const CARREGA_BASKET_SALVO = "CARREGA_BASKET_SALVO"

const { guardarObjeto } = useStorageFunctions();

export default function basketReducer(state, action) {
    let newBasket
    switch (action.type) {
        case CARREGA_BASKET_SALVO:
            return action.payload
            
        case CREATE_ITEM:
            const novoItem = action.payload;
            newBasket = [...state, novoItem]
            guardarObjeto('basket',newBasket)
            return newBasket;

        case DELETE_ITEM:
            const deleteId = action.payload
            newBasket = state.filter(produto => produto.id !== deleteId);
            guardarObjeto('basket',newBasket)
            return newBasket;

        case CHANGE_ITEM_QUANT:
            const { id, quantity } = action.payload
            newBasket = state.map(produto =>
                produto.id === id ?
                    { ...produto, quantity: produto.quantity + quantity } :
                    produto
            );
            guardarObjeto('basket',newBasket)
            return newBasket;

        default:
            console.warn(`Action "${action.type}" não encontrada.`);
            return state;
    }
}
