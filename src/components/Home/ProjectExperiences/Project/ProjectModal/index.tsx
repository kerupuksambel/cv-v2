import { ProjectT } from "@/components/Home/types";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ProjectModalT {
    project: ProjectT
}

const ProjectModal = ({project}: ProjectModalT) => {
    return (
        <div className="modal max-h-[80vh] overflow-y-auto">
            <div className="flex">
                <div className="w-2/3 justify-center flex">
                    <img src={project.image_url}/>
                </div>
                <div className="w-1/3 space-y-3 p-6">
                    <h2 className='text-3xl font-bold font-header'>{project.name}</h2>
                    <p className="text-gray-500 italic">{project.summary}</p>
                    <p>{project.description}</p>
                    <div className="w-full space-y-3">
                        {/* <div className="font-bold text-center font-header">Tech Stacks</div> */}
                        <div className="flex space-x-3 w-full items-center justify-center">
                        {
                            project.tech_stacks.filter((p) => p.icon).map((tech, idx) => (
                                <a href={tech.link ?? "#"} key={idx}>
                                    {
                                        tech.icon?.substring(0, 4) !== "http" 
                                        ? <Icon className="text-3xl" icon={tech.icon ?? ""}/> 
                                        : <img src={tech.icon}/>
                                    }
                                </a>
                            ))
                        }
                        </div>
                        <div className="w-full items-center justify-center text-center">
                        {
                            project.tech_stacks
                                .filter((p) => !(p.icon))
                                .map<React.ReactNode>((tech, idx) => (
                                    <a key={idx} className="hover:underline text-cyan-800" href={tech.link ?? "#"}>{tech.name}</a>
                                ))
                                .reduce((prev, curr) => [prev, ' - ', curr])
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;