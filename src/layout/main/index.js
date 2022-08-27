import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

export default function MainLayout(){
    return (
        <>
        <MainHeader/>
        <Outlet/>
        </>
    )
}