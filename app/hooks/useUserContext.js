import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { CHANGE_USER_DATA } from "../reducers/userReducer";

export default function useUserContext(){
    const {user, dispatch} = useContext(UserContext);

    if(!user) {
        throw new Error ("useUserContext deve ser usado dentro de um UserProvider");
    }

    function mudarNome(nome){
        dispatch({type: CHANGE_USER_DATA, payload:{whatChange:'name', newData:nome}})
    }
    function mudarAlerta(dias){
        dispatch({type: CHANGE_USER_DATA, payload:{whatChange:'alertaValidade', newData:dias}})
    }
    function mudarPreferencias(arrayPreferencias){
        dispatch({type: CHANGE_USER_DATA, payload:{whatChange:'preferencias', newData:arrayPreferencias}})
    }
}