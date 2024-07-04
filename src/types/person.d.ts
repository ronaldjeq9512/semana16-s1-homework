
interface Company {
    name: string;
    catchPhrase : string;
    bs: string;
}

interface Geo {
    lat: string;
    lng: string;
}


interface AddressPerson {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo : Geo
}

export interface Person {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressPerson;
    phone: string;
    website: string;
    company : Company;
}

export type People = Person[]