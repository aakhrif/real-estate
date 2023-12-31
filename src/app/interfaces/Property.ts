export interface Property {
    id: number,
    name: string,
    description: string,
    location: {
        city: string | null
        neighborhood?: string,
        postalCode?: number
    },
    price?: number,
    bedrooms?: number,
    bathrooms?: number,
    size?: number,
    amenities?: Array<string>,
    images: Array<string>,
    contact?: {
        name: string,
        email: string,
        phone: string
    }
}