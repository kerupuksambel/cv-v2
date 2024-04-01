import { Link } from "react-router-dom"
import { TypeMenu } from "../types"
// import { TypeMenu } from '../types';

const menus : TypeMenu[] = [
    {
        name: "Home",
        link: "/",
        isCurrent: true,
        isExternal: false
    }
]

const Navbar: React.FC = () => {
    return (
        <header className="w-full bg-white h-[80px] sticky top-0 z-50 flex items-center justify-center uppercase tracking-wide">
            {menus.map((menu, idx) => {
                return (
                    <div key={idx}>
                        <Link to={menu.link}>{menu.name}</Link>
                    </div>
                )
            })}
        </header>
    )
}

export default Navbar