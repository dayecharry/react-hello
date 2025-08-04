import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import { ShowsProvider } from './hooks/useGlobalShows';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ShowsProvider>
        <Home/> 
  </ShowsProvider>
  </React.StrictMode>,
)

/*
   1.- al cargar la pagina mostrar  los show de tv que contengan "girls"
   2.- El usuario escriba un nombre de un show y mostrar la lista con ese resultado
   3.- Guardar en un array nuevo --> favoritos series (useState fav, NO USAR PUSH, [...array]--> spreadOperator)
   4.- pintar la lista d emis favoritos
   
*/
