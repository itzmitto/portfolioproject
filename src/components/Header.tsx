import "./Header.css";
import { NavLink } from "react-router";

function Header() {
    return (
        <header>
            <h1><NavLink to="/" style={{ textDecoration: "none", color: "lightgray" }}>
                portfolio</NavLink></h1>
            <nav>
                <NavLink to="/" end>1. Home</NavLink> 
                <NavLink to="/AboutMe">2. AboutMe </NavLink>
                <NavLink to="/Projects">3. Projects </NavLink>
                <NavLink to="/skills">4. Skills </NavLink>
                <NavLink to="/contact">5. Contact </NavLink>
            </nav>
        </header>
    )
}

export default Header;






































