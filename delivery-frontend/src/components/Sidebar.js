import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">

            <h3 className="sidebar-title">
                Delivery Menu
            </h3>

            <ul>

                <li>
                    <NavLink to="/">
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/assigned-deliveries">
                        Assigned Deliveries
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/delivery-details">
                        Delivery Details
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/delivery-history">
                        Delivery History
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