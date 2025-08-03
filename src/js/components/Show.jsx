import AddFav from "./AddFav";

//create your first component
const Show = ({item, addToFavorites}) => {
	
	return (
		<div className="text-center">
		<section>
			<h2>{item.show.name}</h2>
			{item.show.image ? 
			<img src={item?.show.image.medium} alt="algo"  />
			:
			null
			}
			<AddFav addToFavorites={addToFavorites}/> 
		</section>
		
		</div>
	);
};

export default Show;