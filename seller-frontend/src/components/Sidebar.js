import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">

            <h3 className="sidebar-title">
                Seller Menu
            </h3>

            <ul>

                <li>
                    <NavLink to="/">
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/products">
                        Products
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/add-product">
                        Add Product
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/orders">
                        Orders
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/inventory">
                        Inventory
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </li>

            </ul>

        </aside>
    );
}

export default Sidebar;