// import { Link } from "react-router-dom"

import Profile from "@/components/Home/Profile"
// import ProjectExperiences from "@/components/Home/ProjectExperiences"
import WorkingExperiences from "@/components/Home/WorkingExperiences"
import Layout from "@/components/Layout"
import { useRef } from "react"
import ProjectExperiences from "@/components/Home/ProjectExperiences"
import Navbar from "@/components/Home/Navbar"
import Contact from "@/components/Home/Contact"

const Home: React.FC = () => {
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

    interface SidebarMenuT {
        name: string,
        id: string,
        isHidden?: boolean
    }

    const menus: SidebarMenuT[] = [
        {
            name: "Profile",
            id: "profile",
            isHidden: true
        },
        {
            name: "Experiences",
            id: "working-experiences",
        },
        {
            name: "Volunteerships",
            id: "",
        },
        {
            name: "Projects",
            id: "project-experiences",
        },
    ]

    return (
        <Layout>
            <Navbar menus={menus}/>
            <Profile/>
            <div className="w-full flex" ref={mainRef}>
                <div className="p-6 space-y-6 w-full flex justify-center">
                    <div className="w-4/5">
                        <WorkingExperiences/>
                        <ProjectExperiences/>
                    </div>
                </div>
            </div>
            <Contact/>
        </Layout>
    )
} 

export default Home