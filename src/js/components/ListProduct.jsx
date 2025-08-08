import { useEffect } from "react";
import { deleteProductApi, getProductApi } from "../api/api";
import useGlobalShows from "../hooks/useGlobalShows";


//create your first component
const ListProduct = () => {
	const { store, distpach } = useGlobalShows()

	useEffect(() => {
		const getFetchApi = async () => {
			const listProduct = await getProductApi();
			distpach({ type: "GET_PRODUCTS", payload: listProduct })
		}
		getFetchApi();
	},
		[])

	const handleDelete = async (ev) => {
		const id = ev.target.id;
		const data = await deleteProductApi(id);
		
		distpach({type: "DELETE_PRODUCTS", payload:data.id})
	}
	return (
		<div className="text-center">

			<ul>
				{store.products.map(item => <li key={item.id}>
					{item.name}  {item.price}
					<button onClick={handleDelete} id={item.id}> X </button>
				</li>)}
			</ul>

		</div>
	);
};

export default ListProduct;

/*
	1.- Crear un componente para mostrar todos los productos, y aqui hacer un map para cada elemento del array de producto
	2.- En el map añadir un boton  por cada producto 
	4.- Peticion a la api de tipo DELETE,  enviando el id del producto que deseo eliminar
	3.- Crear  un caso  DELETE_PRODUCT
	
*/