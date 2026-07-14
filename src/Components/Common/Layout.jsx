import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Ticker from "./Ticker";

function Layout(){
    return (
        <>
            <Navbar/>

            <main>
                <Outlet/>
            </main>
            <Footer/>
            <Ticker/>
        </>
    );
} export default Layout