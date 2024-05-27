import { Header } from '@/components/UI/Header/index';
const ProjectExperiences = () => {
    return (
        <div className='w-full flex flex-wrap justify-center' id="project-experiences">
            <Header>Projects</Header>
            <div className="flex w-full">
                <div className='md:w-1/3 w-full group'>
                    <div className='rounded-md border-gray-300 border-[1px]'>
                        <div className="w-full h-full overflow-hidden">
                            <img src='https://placehold.co/1024x768.png' className='group-hover:scale-125 transition-all duration-600 ease-in-out'/>
                        </div>
                        <div className='px-3 py-4 space-y-2'>
                            <h2 className='text-2xl font-bold font-header'>Example Project</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend urna ex. Fusce porta tellus diam. Cras laoreet, ante eu fringilla luctus, lorem turpis ullamcorper sapien, eu ullamcorper quam augue id erat. Suspendisse ut tellus quis eros volutpat tempor. Praesent feugiat, mauris accumsan pulvinar interdum, leo dolor commodo eros, sed semper dui leo id nibh.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectExperiences;