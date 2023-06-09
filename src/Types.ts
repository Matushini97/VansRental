export type VansType = {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
    type: string
    hostId?: string
}

export type VanCardPropsType = {
    id : string
    name: string
    imageUrl: string
    price: number
    type: string
    search: string
    typeFilter: string | null
}
export type LoaderDataType = {
    vans: Promise<VansType[]>
}


