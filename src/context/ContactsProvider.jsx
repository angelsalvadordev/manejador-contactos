// Creando componente Provider
import React, { useState, useEffect } from "react"
import ContactsContext from "./ContactsContext"

const ContactsProvider = props => {
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://uinames.com/api/?amount=25&region=mexico&ext')
            .then(resp => resp.json())
            .then(resp => setContacts(resp))
    }, [])

    const searchContact = e => {
        const word = e.target.value
        const upperFirstLetter = word.charAt(0).toUpperCase()
        const remainingWord = word.slice(1)
        setSearch(upperFirstLetter + remainingWord)
    }

    const deleteContact = contactName => {
        const confirmation = window.confirm('Seguro que desea eliminar este contacto ?')
        if (confirmation) {
            const contactFiltered = contacts.filter(contact => contact.name !== contactName)
            setContacts(contactFiltered)
        }
    }

    return (
        <ContactsContext.Provider value={{ contacts, search, searchContact, deleteContact }}>
            {props.children}
        </ContactsContext.Provider>
    )
}

export default ContactsProvider
