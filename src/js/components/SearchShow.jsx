

//create your first component
const SearchShow = ({search, setSearch}) => {
	

    const handleInput=(ev)=>{
        setSearch(ev.target.value)
    }

	return (
		<div className="text-center">
            <form action="">
                <input type="text" placeholder="Indica la serie" onChange={handleInput} value={search}/>
            
            </form>
		</div>
	);
};

export default SearchShow;