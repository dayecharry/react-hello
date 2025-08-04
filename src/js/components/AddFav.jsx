
//create your first component

import { useState } from "react";

const AddFav = (addToFavorites) => {
	return (
		<>
			<button type="button" class="btn btn-outline-warning ms-5" onClick={addToFavorites}>
				💗
			</button>
		</>
	);
};

export default AddFav;