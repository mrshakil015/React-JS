import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <NavLink className="mr-3" to="/">Home</NavLink>            
            <NavLink to="/posts">Posts</NavLink>            
        </nav>
    );
};

export default NavBar;