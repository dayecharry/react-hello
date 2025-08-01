import AddFav from "./AddFav";

//create your first component
const Show = ({item}) => {
	
	return (
		<div className="text-center">
		<section>
			<h2>{item.show.name}</h2>
			{item.show.image ? 
			<img src={item?.show.image.medium} alt="algo"  />
			:
			null
			}
			{/* <AddFav/> */}
			<button>Añadir fav</button>
		</section>
		
		</div>
	);
};

export default Show;