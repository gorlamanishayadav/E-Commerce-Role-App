import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLayout from "./components/AdminLayout";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Sellers from "./pages/Sellers";
import DeliveryPartners from "./pages/DeliveryPartners";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";

function App() {
    return (
        <BrowserRouter>

            <AdminLayout>

                <Routes>

                    <Route path="/" element={<Dashboard />} />

                    <Route path="/users" element={<Users />} />

                    <Route path="/sellers" element={<Sellers />} />

                    <Route
                        path="/delivery-partners"
                        element={<DeliveryPartners />}
                    />

                    <Route path="/products" element={<Products />} />

                    <Route
                        path="/categories"
                        element={<Categories />}
                    />

                    <Route path="/orders" element={<Orders />} />

                </Routes>

            </AdminLayout>

        </BrowserRouter>
    );
}

export default App;