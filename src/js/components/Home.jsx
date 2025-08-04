import { useState } from "react";
import ListShow from "./ListShow";
import SearchShow from "./SearchShow";

import FavList from "./FavList"
import AddShow from "./AddShow";


//create your first component
const Home = () => {

	const [search, setSearch] = useState("girl");
	const [favorites, setFavorites] = useState([]);

	const addToFavorites = (show) => {
		if (favorites.some(fav => fav.id === show.id)) {
			setFavorites([...favorites, show]);
		}
	};

	return (
		<div className="text-center">
			<SearchShow search={search} setSearch={setSearch} />
			<ListShow search={search} />
			<FavList favorites={favorites} />
			<AddShow/>
          <SearchShow search={search} setSearch={setSearch}/>
		  <ListShow  search={search}/>
		</div>
	);
};

export default Home;