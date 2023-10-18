import { Outlet } from "react-router";
import HeaderClient from "../../components/HeaderClient";


export default function ClientHome(){
    return(
        <>
            <HeaderClient />
            <Outlet />
        </>
    );
}