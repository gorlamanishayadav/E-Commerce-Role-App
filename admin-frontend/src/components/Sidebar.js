import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">

            <h3 className="sidebar-title">
                Admin Menu
            </h3>

            <ul>

                <li>
                    <NavLink to="/">
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/users">
                        Users
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/sellers">
                        Sellers
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/delivery-partners">
                        Delivery Partners
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/products">
                        Products
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/categories">
                        Categories
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/orders">
                        Orders
                    </NavLink>
                </li>

            </ul>

        </aside>
    );
}

export default Sidebar;