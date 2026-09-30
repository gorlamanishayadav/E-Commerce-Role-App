function Dashboard() {
    return (
        <div>

            <h1>Seller Dashboard</h1>

            <p>
                Overview of seller activities.
            </p>

            <div className="dashboard-cards">

                <div className="dashboard-card">
                    <h3>Total Products</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Pending Orders</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Completed Orders</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Low Stock Items</h3>
                    <p>0</p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;