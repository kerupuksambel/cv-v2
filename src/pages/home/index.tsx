// import { Link } from "react-router-dom"

import Profile from "@/components/Home/Profile"
import SidebarProfile from "@/components/Home/SidebarProfile"
// import ProjectExperiences from "@/components/Home/ProjectExperiences"
import WorkingExperiences from "@/components/Home/WorkingExperiences"
import Layout from "@/components/Layout"
import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"

const Home: React.FC = () => {
    const [openSidebar, setOpenSidebar] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        // if () {
            
        // }
    }

    return (
        <Layout>
            <Profile/>
            <div className="w-full flex flex-wrap min-h-[100vh]">
                <div className={`${openSidebar ? "w-1/3" : "w-0"} transition-all duration-1000 ease-in-out`}>
                    <SidebarProfile openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
                </div>
                <div className="p-3 px-6 flex-grow">
                    <WorkingExperiences/>
                </div>
                <div className={`w-[48px] h-[48px] rounded-full bg-primary text-white text-2xl flex justify-center items-center fixed bottom-8 left-8 hover:cursor-pointer ${openSidebar ? "z-[-999]" : "z-0 transition-all duration-1000 ease-in-out"}`}  onClick={() => setOpenSidebar(!openSidebar)}>
                    <Icon icon="mdi:menu"/>
                </div>
                {/* <ProjectExperiences/> */}
            </div>
        </Layout>
    )
} 

export default Home