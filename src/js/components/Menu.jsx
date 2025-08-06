import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <div className="text-center">
           <ul>
            <li>
                <Link to="/"> Home</Link>
            </li>
            <li>
                <Link to="/favoritos">  Favorito</Link>
            </li>
           </ul>


        </div>
    );
};

export default Menu;