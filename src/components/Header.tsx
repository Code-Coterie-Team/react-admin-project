import { useMemo } from "react";
import { useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation();    

    const handelTitle = useMemo(() => {
        const titlePages :Record<string,string> ={
            "/" : "Overview",
            "/products" :"Products",
            "/user" :"Users",
            "/sales" :"Sales Dashboard",
            "/orders" :"Orders",
            "/analytics" :"Analytics Dashboard",
            "/settings" :"Settings",

        };
        return titlePages[location.pathname]
    }, [location])
    return (
        <h1 className="font-semibold border-b-[1px] border-solid border-grayb py-4 px-8 text-[1.5rem]">{
            handelTitle
        }</h1>
    )
}

export default Header
