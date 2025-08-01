import { useEffect, useState } from "react";
import Show from "./Show";

//create your first component
const ListShow = ({search}) => {
	const [list, setList] = useState([])
	
	async function getDataApi() {
			const data = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
			const response =  await data.json()
			setList(response) // es un proceso asincrono
	}

	useEffect(()=>{
		getDataApi()
	}, 
	[search]) // ejecutar cada vez que search cambie
	/*
	[]-> 1 vez sola vez al cargar el componente
	[var1, var2] --> ejecutar cada vez que cambia var1, var2 ...
	*/
	return (
		<div className="text-center">
        	{ list.length > 0 ? 
				list.map((item )=> <Show  item={item} />)
			:
				null
		}
			
		
		</div>
	);
};

export default ListShow;