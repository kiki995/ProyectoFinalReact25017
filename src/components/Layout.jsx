import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
    return (
        <div>
            <Navbar />
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
