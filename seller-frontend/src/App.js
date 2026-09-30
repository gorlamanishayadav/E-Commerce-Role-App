import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import SellerLayout from "./components/SellerLayout";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProducts";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import Profile from "./pages/Profile";

function App() {
    return (
        <BrowserRouter>

            <SellerLayout>

                <Routes>

                    <Route path="/" element={<Dashboard />} />

                    <Route path="/products" element={<Products />} />

                    <Route
                        path="/add-product"
                        element={<AddProduct />}
                    />

                    <Route path="/orders" element={<Orders />} />

                    <Route
                        path="/inventory"
                        element={<Inventory />}
                    />

                    <Route
                        path="/profile"
                        element={<Profile />}
                    />

                </Routes>

            </SellerLayout>

        </BrowserRouter>
    );
}

export default App;