import React, { useContext } from 'react'
import Contact from './Contact';
import ContactsContext from "../context/ContactsContext"

const ContactsGroup = () => {

    const [state] = useContext(ContactsContext)

    const filterContacts = contact => {
        // concatenar nombre: Ángel Salvador => ángelsalvador 
        let completeName = `${contact.name} ${contact.surname}`
        completeName = completeName.toLowerCase()

        // Quitar tildes y ñ
        completeName = normalizeName(completeName)

        // Buscar coincidencias de la busqueda
        return completeName.includes(state.search)
    }

    //Normalizar nombre: ángelsalvador => angelsalvador
    const normalizeName = name => {
        name = name.replace(/á/gi, "a");
        name = name.replace(/é/gi, "e");
        name = name.replace(/í/gi, "i");
        name = name.replace(/ó/gi, "o");
        name = name.replace(/ú/gi, "u");
        name = name.replace(/ñ/gi, "n");
        return name;
    }

    return (
        <div className="row">
            {state.contacts.filter(filterContacts).map((contact, index) => <Contact key={index} contact={contact} />)}
        </div>
    )
}

export default ContactsGroup
