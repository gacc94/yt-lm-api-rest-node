export interface ICar {
    color: string;
    gas: Gas;
    year: number;
    description: string;
    price: number;
    name: string;
}

export type Gas = 'gasoline' | 'electric';