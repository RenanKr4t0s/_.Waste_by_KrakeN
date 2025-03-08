import { createContext, useEffect, useReducer } from "react";
import userReducer, {LOAD_MEMORY_USER} from "../reducers/userReducer";
import useStorageFunctions from "../functions/storageFunctions";

const { pegarObjeto } = useStorageFunctions();

export const UserContext = createContext();
UserContext.displayName = "Usuário";

export default function UserProvider({ children }) {

    const userInicial = {
        name: "Usuário",
        alertaValidade: 15,
        preferencias: [
            { itemName: "Aves", selected: false },
            { itemName: "Peixes e frutos do mar", selected: false },
            { itemName: "Sopas", selected: false },
            { itemName: "Saladas", selected: false },
            { itemName: "Bolos e tortas", selected: false },
            { itemName: "Massas", selected: false },
            { itemName: "Lanches", selected: false },
            { itemName: "Saudável", selected: false },
            { itemName: "Carnes", selected: false },
            { itemName: "Doces e sobremesas", selected: false }
        ]
    }

    const [user, dispatch] = useReducer(userReducer, userInicial)

    useEffect(()=>{
        async function carregarUser(){
            const userSalvo = await pegarObjeto('user');
            if (userSalvo){
                dispatch({type: LOAD_MEMORY_USER, payload:userSalvo})
            }
        }
        carregarUser();
    }, [])

    return (
        <UserContext.Provider value={{user, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}