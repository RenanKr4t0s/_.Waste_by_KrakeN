import { createContext, useEffect, useReducer } from "react";
import basketReducer, {CARREGA_BASKET_SALVO } from "../reducers/basketReducer";
import useStorageFunctions from "../functions/storageFunctions";

const {pegarObjeto } = useStorageFunctions();

export const BasketContext = createContext();
BasketContext.displayName = "Cesta";

export default function BasketProvider({ children }){
    const estadoInicial = [];
    const [basket, dispatch] = useReducer(basketReducer, estadoInicial)

    useEffect(()=>{
        async function carregarBasket(){
            const dadosSalvos = await pegarObjeto('basket');
            if (dadosSalvos){
                dispatch({type:CARREGA_BASKET_SALVO, payload:dadosSalvos})
            }
        }
        carregarBasket();
    },[]);

    return (
        <BasketContext.Provider value={{ basket, dispatch }} >
            {children}
        </BasketContext.Provider>
    )
}