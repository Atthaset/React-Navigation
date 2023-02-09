import { Link } from "react-router-dom"
import { FaBars, FaHome } from "react-icons/fa";
import { useState } from "react";
import './Navigation.css'

const Navigation = () => {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to="#" className="menubar">
                        <FaBars onClick={toggleMenu} />
                    </Link>
                </div>
            </div>
            <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-item">
                    <li className="menu-text">
                        <Link to="#">
                            <FaHome /><span>หน้าแรก</span>
                        </Link>
                    </li>
                    <li className="menu-text">
                        <Link to="#">
                            <FaHome /><span>หน้าแรก</span>
                        </Link>
                    </li>
                    <li className="menu-text">
                        <Link to="#">
                            <FaHome /><span>หน้าแรก</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navigation