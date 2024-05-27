import { ProjectT } from "@/components/Home/types";
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

export interface ProjectComponentT {
    project: ProjectT
}

const Project = ({project}: ProjectComponentT) => {    
    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
    <>
        <ProjectCard project={project} onClick={() => setOpenModal(true)}/>
        <Popup open={openModal} closeOnDocumentClick closeOnEscape onClose={() => setOpenModal(false)}>
            <ProjectModal project={project}/>
        </Popup>
    </>
    )
}

export default Project;