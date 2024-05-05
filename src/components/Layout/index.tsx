import "@fontsource-variable/open-sans"
import "@fontsource-variable/inter"
// import Navbar from "./Navbar"

interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({children}) => {
    return (
        <div className="flex w-full flex-wrap font-subtext">
            {/* <Navbar/> */}
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout