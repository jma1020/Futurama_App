export interface Character {
    age: number,
    gender: string,
    homePlanet: string,
    id: number,
    images: {
        "head-shot": string,
        main: string,
    },
    name: {
        first: string,
        last: string,
        middle:string,
    },
    occupation: string,
    saying: [string],
}