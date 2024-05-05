export type WorkExperienceT = {
    name: string;
    position: string;
    achievements: string[];
    date: {
        start: Date;
        end: Date|null;
    }
    tech_stacks: TechStackT[]
};

export interface TechStackT {
    name: string,
    icon: string,
    link?: string
}