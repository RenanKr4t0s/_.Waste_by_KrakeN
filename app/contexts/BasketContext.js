import { createContext, useReducer } from "react";
import basketReducer from "../reducers/basketReducer";
import products from "../components/mockups/products";

export const BasketContext = createContext();
BasketContext.displayName = "Cesta";

export default function BasketProvider({ children }){
    const estadoInicial = [];
    const [basket, dispatch] = useReducer(basketReducer, estadoInicial, () => products)

    return (
        <BasketContext.Provider value={{ basket, dispatch }} >
            {children}
        </BasketContext.Provider>
    )
}