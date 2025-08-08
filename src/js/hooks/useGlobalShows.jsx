//crear el contexto --> useContext
//crear las funcionalidades para modificar el estado global --> useReducer

import { createContext, useContext, useReducer } from "react";

const initialState = { token: "", user: null, shows: [], products: [] }; //state

function showsReducer(state, action) {
    //action: {type:"cada caso", payload: "nuevo valor"}
    console.log(action.type, action.payload)
    switch (action.type) {
        case "ADD_SHOW":
            return {
                ...state,
                shows: [...state.shows, action.payload]
            }
            break;
        case "UPDATE_SHOW":
            break;
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "DELETE_PRODUCTS":
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

const ShowsContext = createContext()

export function ShowsProvider({ children }) {
    //storee s el almacen de mi contexto
    //distpach, la funcion que permitira ejecutar  las acciones del showReducer
    const [store, distpach] = useReducer(showsReducer, initialState)

    //ShowsContext.provider --> asignar al contexto los datos 
    return <ShowsContext.Provider value={{ store, distpach }}>
        {children}
    </ShowsContext.Provider>
}

export default function useGlobalShows() {
    return useContext(ShowsContext)
}

/*
    1.- Modificar el initial state con el array de productos
    2.- Crear case para añadir un producto nuevo un producto nuevo
    3.- Crear el componente con el form para solicitar los datos del nuevo producto
    4.- Crear la funcion con la peticion al servidor del tipo post con el newProduct 
    5.- Ejecutar la peticion al servidor cuando el usuario envie el form
*/