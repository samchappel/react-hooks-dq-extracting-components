import ContactCard from "./ContactCard";
import { contacts } from "../data";

function ContactList() {

    function renderContact() {
        {contacts.map((contact) => (
            <ContactCard key={contact.id} name={contact.name}/>
        ))}
    }
    return <ul className="contacts">{renderContact()}</ul>
}

export default ContactList