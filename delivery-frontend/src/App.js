import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import DeliveryLayout from "./components/DeliveryLayout";

import Dashboard from "./pages/Dashboard";
import AssignedDeliveries from "./pages/AssignedDeliveries";
import DeliveryDetails from "./pages/DeliveryDetails";
import DeliveryHistory from "./pages/DeliveryHistory";
import Profile from "./pages/Profile";

function App() {
    return (
        <BrowserRouter>

            <DeliveryLayout>

                <Routes>

                    <Route path="/" element={<Dashboard />} />

                    <Route
                        path="/assigned-deliveries"
                        element={<AssignedDeliveries />}
                    />

                    <Route
                        path="/delivery-details"
                        element={<DeliveryDetails />}
                    />

                    <Route
                        path="/delivery-history"
                        element={<DeliveryHistory />}
                    />

                    <Route
                        path="/profile"
                        element={<Profile />}
                    />

                </Routes>

            </DeliveryLayout>

        </BrowserRouter>
    );
}

export default App;