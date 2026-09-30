import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AdminLayout({ children }) {
    return (
        <div className="app-container">

            <Navbar />

            <div className="main-layout">

                <Sidebar />

                <main className="content">
                    {children}
                </main>

            </div>

        </div>
    );
}

export default AdminLayout;