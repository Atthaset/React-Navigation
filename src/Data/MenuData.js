import { FaHome, FaUserAlt, FaShoppingCart, FaUserShield } from "react-icons/fa";

const MenuData = [
    {
        title: "Homepage",
        path: "/",
        icon: <FaHome />
    },
    {
        title: "Member",
        path: "/member",
        icon: <FaUserAlt />
    },
    {
        title: "Product",
        path: "/product",
        icon: <FaShoppingCart />
    },
    {
        title: "Admin",
        path: "/admin",
        icon: <FaUserShield />
    }
]

export default MenuData