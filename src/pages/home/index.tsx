// import { Link } from "react-router-dom"

import Profile from "@/components/Home/Profile"
import ProjectExperiences from "@/components/Home/ProjectExperiences"
import WorkingExperiences from "@/components/Home/WorkingExperiences"
import Layout from "@/components/Layout"

const Home: React.FC = () => {
    return (
        <Layout>
            <Profile/>
            <div className="w-full p-3 flex content-center justify-center flex-wrap">
                <WorkingExperiences/>
                <ProjectExperiences/>
            </div>
        </Layout>
    )
} 

export default Home