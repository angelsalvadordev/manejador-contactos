import React, { useContext } from 'react'
import ContactContext from "../context/ContactsContext"

const CounterContacts = () => {

  const [state] = useContext(ContactContext)

  return (
    <div className="row justify-content-center">
      <div className="col-6 col-md-2 bg-danger counter-contacts">
        Contactos:<span>{state.contacts.length}</span>
      </div>
    </div>
  )
}

export default CounterContacts
