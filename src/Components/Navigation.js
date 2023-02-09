import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";

const Navigation = () => {
    return (
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to="#" className="menubar">
                        <FaBars />
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default Navigation