function Dashboard() {
    return (
        <div>

            <h1>Admin Dashboard</h1>

            <p>
                Overview of the E-Commerce platform.
            </p>

            <div className="dashboard-cards">

                <div className="dashboard-card">
                    <h3>Total Users</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Sellers</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Products</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Orders</h3>
                    <p>0</p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;
