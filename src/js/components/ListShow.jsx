import { useEffect, useState } from "react";
import Show from "./Show";
import { getDataApi } from "../api/api";

//create your first component
const ListShow = ({ search }) => {
	const [list, setList] = useState([])


	useEffect(() => {
		try {
			const fetchData = async () => {
				const data = await getDataApi(search)
				setList(data)
			}
			fetchData();
		} catch (error) {
		}

	},
		[search]) // ejecutar cada vez que search cambie
	/*
	[]-> 1 vez sola vez al cargar el componente
	[var1, var2] --> ejecutar cada vez que cambia var1, var2 ...
	*/
	return (
		<div className="text-center">
			{list.length > 0 ?
				list.map((item, i) => <Show item={item} key={i} />)
				:
				null
			}


		</div>
	);
};

export default ListShow;