import useGlobalShows from "../hooks/useGlobalShows";

//create your first component
const ListShowContext = () => {
     const {store}  = useGlobalShows()

	return (
		<div className="text-center">
            <ul>
                {store.shows.map(item => <li>{item} <button>X</button></li>)}
            </ul>
		</div>
	);
};

export default ListShowContext;
//crear un nuevo caso para eliminar el show clicado