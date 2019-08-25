import React, { useContext } from 'react'
import Contact from './Contact';
import ContactsContext from "../context/ContactsContext"

const ContactsGroup = () => {

    const { contacts, search } = useContext(ContactsContext)

    const normalizeName = name => {
        name = name.replace(/á/gi, "a");
        name = name.replace(/é/gi, "e");
        name = name.replace(/í/gi, "i");
        name = name.replace(/ó/gi, "o");
        name = name.replace(/ú/gi, "u");
        name = name.replace(/ñ/gi, "n");
        console.log(name)
        return name;
    }

    const filterContacts = contact => {
        let completeName = contact.name + contact.surname
        completeName = normalizeName(completeName)
        return completeName.includes(search)
    }

    return (
        <div className="row">
            {contacts.filter(filterContacts).map((contact, index) => <Contact key={index} contact={contact} />)}
        </div>
    )
}

export default ContactsGroup
