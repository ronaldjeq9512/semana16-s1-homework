import { People } from "../../types/person"
import { PersonDetails } from "../personDetails"

interface ListPersonProps {
    people: People
}
export const ListPerson = ({people}: ListPersonProps) => {
    return (
        <section>
            {people.map(person => (
                <PersonDetails person={person} key={person.id} />
            ))}
        </section>
    )
}