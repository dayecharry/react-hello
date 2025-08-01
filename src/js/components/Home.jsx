import { useState } from "react";
import ListShow from "./ListShow";
import SearchShow from "./SearchShow";

//create your first component
const Home = () => {

	const [search, setSearch] = useState("girl")
	return (
		<div className="text-center">
          <SearchShow search={search} setSearch={setSearch}/>
		  <ListShow  search={search}/>
		</div>
	);
};

export default Home;