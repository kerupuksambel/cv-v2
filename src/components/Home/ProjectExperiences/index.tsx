import { Header } from '@/components/UI/Header/index';
import Project from './Project';
import { ProjectT } from '../types';

const ProjectExperiences = () => {
    const projects : ProjectT[] = [
        {
            name: "Example Project",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend urna ex. Fusce porta tellus diam. Cras laoreet, ante eu fringilla luctus, lorem turpis ullamcorper sapien, eu ullamcorper quam augue id erat. Suspendisse ut tellus quis eros volutpat tempor. Praesent feugiat, mauris accumsan pulvinar interdum, leo dolor commodo eros, sed semper dui leo id nibh.",
            image_url: "https://placehold.co/1024x768.png",
            tech_stacks: [
                {
                    name: "Laravel",
                    icon: "devicon:laravel",
                    link: "https://laravel.com/"
                },
                {
                    name: "Stripe",
                    icon: "logos:stripe",
                    link: "https://laravel.com/"
                },
                {
                    name: "Laravel",
                    // icon: "devicon:laravel",
                    link: "https://laravel.com/"
                },
                {
                    name: "ReactJS",
                    // icon: "devicon:laravel",
                    link: "https://laravel.com/"
                },
            ]
        }
    ]

    return (
        <div className='w-full flex flex-wrap justify-center' id="project-experiences">
            <Header>Projects</Header>
            <div className="flex w-full space-x-6">
                {
                    projects && projects.map((project, idx) => (
                        <Project project={project} key={idx}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectExperiences;