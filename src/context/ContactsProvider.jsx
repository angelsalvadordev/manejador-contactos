// Creando componente Provider
import React, { useState, useEffect } from "react"
import ContactsContext from "./ContactsContext"

const ContactsProvider = props => {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')

  // Conexion con API y actualizacion de contacts
  useEffect(() => {
    fetch('https://uinames.com/api/?amount=25&region=mexico&ext')
      .then(resp => resp.json())
      .then(resp => setContacts(resp))
  }, [])

  const searchContact = e => {
    let word = e.target.value
    word = word.toLowerCase()
    setSearch(word)
  }

  // Filtrar elemento a eliminar, confirmar y actualizar contacts
  const deleteContact = contactName => {
    const confirmation = window.confirm('Seguro que desea eliminar este contacto ?')
    if (confirmation) {
      const contactFiltered = contacts.filter(contact => contact.name !== contactName)
      setContacts(contactFiltered)
    }
  }

  return (
    // Envolver componentes para conexion con store global
    <ContactsContext.Provider value={{ contacts, search, searchContact, deleteContact }}>
      {props.children}
    </ContactsContext.Provider>
  )
}

export default ContactsProvider
