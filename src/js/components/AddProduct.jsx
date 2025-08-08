import { useState } from "react";
import { addProductToApi } from "../api/api";
import useGlobalShows from "../hooks/useGlobalShows";

//create your first component
const AddProduct = () => {

    const { store, distpach } = useGlobalShows()
    const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" })



    const handleInput = (e) => {
        const input = e.target.name;
        const value = e.target.value
        setNewProduct({ ...newProduct, [input]: value })
    }
    const handleForm = async (ev) => {
        ev.preventDefault()
        const productapi = await addProductToApi(newProduct)
        distpach({ type: "ADD_PRODUCT", payload: productapi })

    }
    return (
        <div className="text-center">
            <form >
                Nueva Producto
                <input type="text" name="name" id="" onChange={handleInput} value={newProduct.name} />
                <input type="text" name="price" id="" onChange={handleInput} value={newProduct.price} />
                <input type="text" name="description" id="" onChange={handleInput} value={newProduct.description} />
                <input type="submit" onClick={handleForm} />
            </form>

        </div>
    );
};

export default AddProduct;

