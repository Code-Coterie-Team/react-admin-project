import { useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation();

    const headeTitle  = () => {
        if (location.pathname === "/") {
            return "Overview"
        } else if (location.pathname === "/products") {
            return "Products"
        }else if (location.pathname === "/user") {
            return "Users"
        }else if (location.pathname === "/sales") {
            return "Sales Dashboard"
        }else if (location.pathname === "/orders") {
            return "Orders"
        }else if (location.pathname === "/analytics") {
            return "Analytics Dashboard"
        }else if (location.pathname === "/settings") {
            return "Settings"
        }

    }
    return (
        <h1 className="font-semibold border-b-[1px] border-solid border-grayb py-4 px-8 text-[1.5rem]">{headeTitle()}</h1>
    )
}

export default Header
