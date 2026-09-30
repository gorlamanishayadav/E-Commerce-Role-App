function Dashboard() {
    return (
        <div>

            <h1>Delivery Dashboard</h1>

            <p>
                Overview of delivery activities.
            </p>

            <div className="dashboard-cards">

                <div className="dashboard-card">
                    <h3>Assigned Deliveries</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Pending Deliveries</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Completed Deliveries</h3>
                    <p>0</p>
                </div>

                <div className="dashboard-card">
                    <h3>Today's Deliveries</h3>
                    <p>0</p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;