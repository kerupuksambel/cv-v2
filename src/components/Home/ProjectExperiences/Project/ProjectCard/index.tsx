import { ProjectT } from "@/components/Home/types";
import { BASE_URL } from "@/lib/api";
import { substrWords } from '@/lib/utils';
// import { substrWords } from '';

interface ProjectCardT {
    project: ProjectT,
    onClick: () => void
}

const ProjectCard = ({project, onClick}: ProjectCardT) => {
    return (
        <div className='md:w-1/3 w-full hover:cursor-pointer group' onClick={onClick}>
            <div className='rounded-md border-gray-300 border-[1px]'>
                <div className="w-full h-full overflow-hidden">
                    <img src={BASE_URL + "/../" + project.image_url} className='group-hover:scale-125 transition-all duration-600 ease-in-out'/>
                </div>
                <div className='p-4 space-y-2'>
                    <h2 className='text-2xl font-bold font-header'>{project.name}</h2>
                    <p>{project.summary ??  substrWords(project.description ?? "", 100)}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard