import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./components/Home"
import AddFav from "./components/AddFav"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route  path="/" element={<Home/>}/>
            <Route path="/favoritos" element={<AddFav/>} />
        </>
    )
)