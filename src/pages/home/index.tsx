// import { Link } from "react-router-dom"

import Profile from "@/components/Home/Profile"
import SidebarProfile from "@/components/Home/SidebarProfile"
// import ProjectExperiences from "@/components/Home/ProjectExperiences"
import WorkingExperiences from "@/components/Home/WorkingExperiences"
import Layout from "@/components/Layout"
import { useRef, useState } from "react"
import { Icon } from "@iconify/react"
import ProjectExperiences from "@/components/Home/ProjectExperiences"
import { useWindowDimensions } from "@/lib/utils"

const Home: React.FC = () => {
    const screenDimension = useWindowDimensions();
    const [openSidebar, setOpenSidebar] = useState(screenDimension.width > 768);
    const mainRef = useRef<HTMLDivElement|null>(null)

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    // }, [])

    // const handleScroll = () => {
    //     if (mainRef && mainRef.current) {
    //         const element = mainRef.current
    //         if(element !== null && Math.abs(element.scrollHeight - (element.scrollTop + element.clientHeight)) <= 1){
    //             if(!openSidebar){
    //                 setOpenSidebar(true)
    //             }
    //         }
    //     }
    // }

    return (
        <Layout>
            <Profile/>
            <div className="w-full flex" ref={mainRef}>
                <div className={`${openSidebar ? "w-full md:w-[30vw]" : "w-0"} min-h-[100vh] h-full transition-all duration-1000 ease-in-out fixed md:sticky z-20 md:z-0 left-0 top-0`}>
                    <SidebarProfile openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
                </div>
                <div className="p-3 px-6 flex-grow space-y-6 w-full md:w-[70vw]">
                    <WorkingExperiences/>
                    <ProjectExperiences/>
                </div>
                <div className={`w-[48px] h-[48px] rounded-full bg-primary text-white text-2xl flex justify-center items-center fixed bottom-8 left-8 hover:cursor-pointer ${openSidebar ? "z-[-999]" : "z-0 transition-all duration-1000 ease-in-out"}`}  onClick={() => setOpenSidebar(!openSidebar)}>
                    <Icon icon="mdi:menu"/>
                </div>
            </div>
        </Layout>
    )
} 

export default Home