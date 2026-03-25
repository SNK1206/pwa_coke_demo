import { RouterProvider } from "react-router-dom";
import SecurityRouter from "./navigation/NaviRoutesSecurity";
import Footer from "./share/footer/components/Footer";
export default function AppAllModules() {
    return (
        <>
            <div id='div-app'>
                <h1>Main App - All Modules</h1>
                <RouterProvider router={SecurityRouter} />
                <div id='div-footer'>
                    <Footer />
                </div>
            </div>
        </>
    );
}