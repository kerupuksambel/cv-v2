import "@fontsource-variable/open-sans"
import "@fontsource-variable/inter"
import Footer from "./Footer"
// import Navbar from "./Navbar"

interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({children}) => {
    return (
        <div className="flex w-full flex-wrap font-subtext">
            {/* <Navbar/> */}
            <div className="w-full text-md">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout