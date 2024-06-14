export type MenuItems = {
    id: number,
    name : string,
    price : number
}


export type Order = MenuItems & {
    quantity : number
}