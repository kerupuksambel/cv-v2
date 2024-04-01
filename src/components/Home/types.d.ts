export type WorkExperience = {
    name: string;
    position: string;
    description: string;
    date: {
        start: Date;
        end: Date|null;
    }
    tech_stacks: TechStack[]
};

export interface TechStack {
    name: string,
    icon: string,
    link?: string
}