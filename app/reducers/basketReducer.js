export const CREATE_ITEM = "CREATE_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"
export const CHANGE_ITEM_QUANT = "CHANGE_ITEM_QUANT"

export default function basketReducer(state, action) {
    switch (action.type) {
        case CREATE_ITEM:
            const novoItem = action.payload;
            return [...state, novoItem];

        case DELETE_ITEM:
            const deleteId = action.payload
            return state.filter(produto => produto.id !== deleteId);

        case CHANGE_ITEM_QUANT:
            const { id, quantity } = action.payload
            const newState = state.map(produto =>
                produto.id === id ?
                    { ...produto, quantity: produto.quantity + quantity } :
                    produto
            );
            return newState
        default:
            console.warn(`Action "${action.type}" não encontrada.`);
            return state;
    }
}
