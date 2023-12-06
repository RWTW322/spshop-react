
export interface Products {
    id: number;
    name: string;
    img: string;
    price: number;
}

export const products: Products[] = [
    {
        id: 0,
        name: "Amet minim mollit non deserunt ullamco est sit",
        img: "./img/jacket.png",
        price: 525
    },
    {
        id: 1,
        name: "Amet minim mollit non",
        img: "./img/shoes.png",
        price: 525 
    }
];