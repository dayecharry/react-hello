//crear el contexto --> useContext
//crear las funcionalidades para modificar el estado global --> useReducer

import { createContext, useContext, useReducer } from "react";

const initialState = {token:"", user:null, shows : []}; //state

function showsReducer (state, action){
    //action: {type:"cada caso", payload: "nuevo valor"}
    console.log(action.type, action.payload)
    switch (action.type) {
        case "ADD_SHOW":
            return {
                ...state,
                shows:[...state.shows, action.payload ] 
            }
            break;
        case "UPDATE_SHOW":
            break;
    
        default:
            return state;
    }
}

const ShowsContext = createContext()

export function ShowsProvider ({children}){
    //storee s el almacen de mi contexto
    //distpach, la funcion que permitira ejecutar  las acciones del showReducer
   const[store, distpach] = useReducer(showsReducer,initialState )

   //ShowsContext.provider --> asignar al contexto los datos 
   return <ShowsContext.Provider value={{store, distpach}}>
        {children}
   </ShowsContext.Provider>
}

export default function useGlobalShows (){
    return useContext(ShowsContext)
}