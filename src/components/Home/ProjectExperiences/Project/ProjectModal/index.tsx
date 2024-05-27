import { ProjectT } from "@/components/Home/types";

interface ProjectModalT {
    project: ProjectT
}

const ProjectModal = ({project}: ProjectModalT) => {
    return (
        <div className="p-3">
            <h2 className='text-2xl font-bold font-header'>{project.name}</h2>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectModal;