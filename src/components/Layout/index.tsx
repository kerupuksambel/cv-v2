import Navbar from "./Navbar"
import "@fontsource/ubuntu"

interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({children}) => {
    return (
        <div className="flex w-full flex-wrap font-ubuntu">
            <Navbar/>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout