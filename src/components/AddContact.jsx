import React, { useContext } from 'react'

import ContactsContext from '../context/ContactsContext';
import { actionFormAddContact, actionDisabledSearcher } from '../context/actionsCreators';


const AddContact = () => {
  const [state, dispatch] = useContext(ContactsContext)

  const handlerClickAdd = () => {
    dispatch(actionFormAddContact(true)) // Habilitar Formulario nuevo contacto
    dispatch(actionDisabledSearcher(true)) // Deshabilitar buscador
  }

  return (
    <div className="col-2 col-md-1 add-contact">
      <div
        className="f-icon add-contact__icon bg-action text-white"
        onClick={handlerClickAdd}
      >add</div>
    </div>
  )
}

export default AddContact
