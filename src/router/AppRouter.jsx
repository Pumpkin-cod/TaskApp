import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import Homepage from "../pages/Homepage"

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
        </Route>
    )
)

export default AppRouter