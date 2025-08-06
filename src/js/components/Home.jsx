import { useState } from "react";
import ListShow from "./ListShow";
import SearchShow from "./SearchShow";
import AddShow from "./AddShow";
import Menu from "./Menu";


//create your first component
const Home = () => {

	const [search, setSearch] = useState("girl")
	return (
		<div className="text-center">
		 <Menu/>
		  <AddShow/>
          <SearchShow search={search} setSearch={setSearch}/>
		  <ListShow  search={search}/>
		</div>
	);
};

export default Home;