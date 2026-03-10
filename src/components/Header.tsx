import "./Header.css";
import { NavLink } from "react-router";

function Header() {  
    return (
        <header>

            <h1><NavLink to="/" style={{ textDecoration: "none", color: "#03ed9d" }}>
                PORTFOLIO</NavLink></h1>

            <nav>
                <NavLink to="/" end>
                    <span className="nav-number">01.</span>Home
                </NavLink>
                <NavLink to="/AboutMe">
                    <span className="nav-number">02. </span>AboutMe
                </NavLink>
                <NavLink to="/Projects">
                    <span className="nav-number">03. </span>Projects
                </NavLink>
                <NavLink to="/skills">
                    <span className="nav-number">04. </span>skills
                </NavLink><NavLink to="/contact">
                    <span className="nav-number">05. </span>contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;
