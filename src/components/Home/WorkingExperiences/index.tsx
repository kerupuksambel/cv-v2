// import { WorkExperience } from '../types';

import { Header } from "@/components/UI/Header";
import { WorkExperienceT } from "../types";
import dateFormat from "dateformat";
import { fetchAPI } from "@/lib/api";

// TODO: Dynamic to BE
// const workExperiences: WorkExperienceT[] = [
//     {
//         name: "Company Name",
//         position: "Full Stack Web Developer",
//         achievements: [
//             "Achievement 1",
//             "Achievement 2",
//             "Achievement 3",
//             "Achievement 4"
//         ],
//         date: {
//             start: new Date(),
//             end: null
//         },
//         tech_stacks:[]
//     },
//     {
//         name: "Another Company Name",
//         position: "Lead Developer",
//         achievements: [
//             "Achievement 1",
//             "Achievement 2",
//             "Achievement 3",
//             "Achievement 4"
//         ],
//         date: {
//             start: new Date(),
//             end: null
//         },
//         tech_stacks:[]
//     }
// ]

const workExperiences = (await fetchAPI('works')).data as WorkExperienceT[]

const WorkingExperiences = () => {
    return (
        <div className="flex flex-wrap justify-center" id="working-experiences">
            <Header>Work Experiences</Header>
            <div className="w-full">
                {
                    workExperiences.map((workExperience, idx) => (
                        <div key={idx} className={`
                            flex 
                            w-full 
                            flex-row 
                            flex-wrap md:flex-nowrap 
                            py-3
                            px-3 md:px-0
                        `}>
                            <div className="hidden md:flex w-full md:w-1/3">
                                <div>{dateFormat(workExperience.date.start, "mmmm yyyy")} - {workExperience.date.end ? dateFormat(workExperience.date.end, "mmmm yyyy") : "Now"}</div>
                            </div>
                            <div className={`flex w-full md:w-2/3 justify-start space-x-3`}>
                                <div className={`space-y-2`}>
                                    <div className="font-bold text-xl">{workExperience.name}</div>
                                    <div className="flex md:hidden">{dateFormat(workExperience.date.start, "mmmm yyyy")} - {workExperience.date.end ? dateFormat(workExperience.date.end, "mmmm yyyy") : "Now"}</div>
                                    <div className="font-bold">{workExperience.position}</div>
                                    <ul className="space-y-3">
                                    {
                                        workExperience.achievements.map((ach, idx) => (
                                            <li key={idx} className="list-disc">{ach}</li>
                                        ))
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WorkingExperiences;