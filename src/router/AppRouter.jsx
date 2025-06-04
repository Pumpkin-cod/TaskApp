import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import Homepage from "../pages/Homepage"
import AdminDashboard from "../pages/AdminDashboard"
import MemberDashboard from "../pages/MemberDashboard"

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/member" element={<MemberDashboard />} />

        </Route>
    )
)

export default AppRouter