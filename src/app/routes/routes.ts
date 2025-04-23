import { BrowserRouter, Route, Routes } from "react-router";
import DashBoard from "../dashboard/dashboard";

export default function Routes() {
    return (
        <Routes>
           <Route path="/" element={<DashBoard />} />
        </Routes>
    )
}
