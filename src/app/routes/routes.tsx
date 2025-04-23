import { BrowserRouter, Routes, Route, } from "react-router";
import DashBoard from "../dashboard";
import Login from "../login";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
        </BrowserRouter>
    )

}
