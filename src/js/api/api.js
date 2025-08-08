const base_url = "https://api.tvmaze.com";
const base_url_product = "https://6895b381039a1a2b288ffdcf.mockapi.io/api"


async function getDataApi(search) {
			const data = await fetch(`${base_url}/search/shows?q=${search}`);
			const response =  await data.json()
            return  response
	}
async function addProductToApi(product) {
			const data = await fetch(`${base_url_product}/product`, {
				method: "POST", 
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(product)
			})
			const response =  await data.json()
			console.log(response)
            return  response

	}
	async function getProductApi() {
			const data = await fetch(`${base_url_product}/product`)
			const response =  await data.json()
            return  response

	}
	async function deleteProductApi(id) {
			const data = await fetch(`${base_url_product}/product/${id}`, {
				method:"DELETE",
				headers: {
					"Content-type": "application/json"
				}
			})
			const response =  await data.json()
            return  response

	}

export {getDataApi, addProductToApi, getProductApi, deleteProductApi}