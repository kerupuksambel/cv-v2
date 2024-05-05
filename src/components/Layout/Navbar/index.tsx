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
        <header className="w-full bg-white h-[80px] fixed top-0 z-50 flex items-center justify-center uppercase tracking-widest">
            {menus.map((menu, idx) => {
                return (
                    <div key={idx}>
                        {menu.link 
                            ? <Link to={menu.link}>{menu.name}</Link>
                            : (menu.onClick ? <span onClick={menu.onClick}>{menu.name}</span> : <div>{menu.name}</div>)
                        }
                    </div>
                )
            })}
        </header>
    )
}

export default Navbar