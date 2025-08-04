import { useState } from "react";
import useGlobalShows from "../hooks/useGlobalShows";
import ListShowContext from "./ListShowContext";

//create your first component
const AddShow = () => {

    const {store, distpach}  = useGlobalShows()
    const [newShow, setNewShow] = useState("")

    const handleInput = (ev)=>{
        ev.preventDefault()
        //funcion manejadora del evento
        distpach({type:"ADD_SHOW", payload: newShow })
    }
	return (
		<div className="text-center">
            <form action="">
                Nueva series
                <input type="text" name="" id="" onChange={(ev)=>setNewShow(ev.target.value)} />
                <input type="submit"  onClick={handleInput} />
            </form>

        <ListShowContext/>
		
		</div>
	);
};

export default AddShow;
//funciones callback addEventeLISTEner("click", funcion)
