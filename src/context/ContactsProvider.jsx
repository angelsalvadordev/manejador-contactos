// Creando componente Provider
import React, { useEffect, useReducer } from "react"

import { contactsReducer, initialContacts } from "./store"
import ContactsContext from "./ContactsContext"
import { actionAPI } from "./actionsCreators";

// Componente Provider
const ContactsProvider = props => {

  const [state, dispatch] = useReducer(contactsReducer, initialContacts)

  // Conexion con API y actualizacion del store
  useEffect(() => {
    fetch('https://uinames.com/api/?amount=25&region=mexico&ext')
      .then(resp => resp.json())
      .then(resp => dispatch(actionAPI(resp)))
  }, [])

  return (
    // Envolver componentes para conexion con store global
    <ContactsContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactsContext.Provider>
  )
}

export default ContactsProvider
