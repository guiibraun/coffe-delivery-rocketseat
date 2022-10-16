export interface ProductsType {
    id: string,
    image: string,
    name: string,
    quantity?: number,
    description: string,
    price: number,
    type: string[]
}