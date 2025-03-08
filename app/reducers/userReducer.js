import useStorageFunctions from "../functions/storageFunctions";

export const CHANGE_USER_DATA = "CHANGE_USER_DATA";
export const LOAD_MEMORY_USER = "LOAD_MEMORY_USER"

const { guardarObjeto } = useStorageFunctions();

export default function userReducer(state, action) {
    let newUser
    switch (action.type){
        case LOAD_MEMORY_USER:
            return action.payload
            
        case CHANGE_USER_DATA:
            const {whatChange, newData} = action.payload
            newUser = {...state, [whatChange]: newData}
            guardarObjeto('user', newUser)
            return newUser
    }
}
