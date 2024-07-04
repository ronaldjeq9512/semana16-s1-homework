import { Person } from "../../types/person"
import './PersonDetails.css'
interface PersonProps {
    person: Person
}

export const PersonDetails = ({person}:PersonProps) => {
    const {name, username, email, address, phone, company} = person
    const {street, suite, city} = address
    const {name: CompanyName} = company
    return (
        <article className="personContainer">
            <div className="containerInfo">
                <h2 className="title">Datos personales</h2>
                <p>{name}</p>
                <p>Alias: {username}</p>
                <p>Email: {email}</p>
                <p>Teléfono: {phone}</p>
            </div>
            <div className="containerInfo">
                <h2 className="title">Dirección</h2>
                <p>{street} {suite} {city}</p>
            </div>
            <div className="containerInfo">
                <h2 className="title">Compañía</h2>
                <p>{CompanyName}</p>
            </div>
        </article>
    )
}