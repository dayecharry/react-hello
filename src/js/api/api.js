const base_url = "https://api.tvmaze.com/";


async function getDataApi(search) {
			const data = await fetch(`${base_url}/search/shows?q=${search}`);
			const response =  await data.json()
            return  response
	}
async function addShowapi() {
			
	}

export {getDataApi, addShowapi}