import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function SellerLayout({ children }) {
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

export default SellerLayout;