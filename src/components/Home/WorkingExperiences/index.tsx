// import { WorkExperience } from '../types';

import { WorkExperience } from "../types";

// TODO: Dynamic to BE
const workExperiences: WorkExperience[] = [
    {
        name: "Ammar Alifian Fahdan",
        position: "Full Stack Web Developer",
        description: "Full Stack Web Developer",
        date: {
            start: new Date(),
            end: null
        },
        tech_stacks:[]
    }
]

const WorkingExperiences = () => {
    return (
        <div className="w-full flex flex-wrap justify-center">
            <h1 className="text-2xl font-bold">Working Experiences</h1>
            {
                workExperiences.map((workExperience, idx) => (
                    <div key={idx}>{workExperience.name}</div>

                ))
            }
        </div>
    )
}

export default WorkingExperiences;