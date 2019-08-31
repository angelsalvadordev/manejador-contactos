import React, { useContext } from 'react'

import ContactsContext from "../context/ContactsContext"
import { actionEditContact, actionDisabledSearcher } from '../context/actionsCreators';

const EditorContact = ({ contact, setShowEditor, setShowOptions }) => {

  const { id, name, phone, email } = contact

  // Store global
  const [store, dispatch] = useContext(ContactsContext)

  const handlerEditContact = e => {
    e.preventDefault()
    const elements = Array.from(e.target.querySelectorAll('div > input'))

    const contactData = {} // Almacena datos de modificacion
    elements.forEach(element => contactData[element.name] = element.value) // {name:"angel",...}

    // Enviando data al reducer
    dispatch(actionEditContact({ id, ...contactData }))

    setShowEditor(false) // Cerrando editor
    setShowOptions(false) // Cerrando opciones
    dispatch(actionDisabledSearcher(false)) // Habilitando buscador
  }

  const handlerCloseEditor = e => {
    if (window.confirm('Seguro que deseas salir del modo editar?')) {
      e.stopPropagation()
      setShowEditor(false)
      dispatch(actionDisabledSearcher(false)) // Habilitando buscador
      setShowOptions(false)
    }
  }

  return (
    <div className="contact-edit d-flex align-items-center row no-gutters bg-light">
      <div className="col-12">
        <form action="#" className="contact-edit-form" onSubmit={handlerEditContact}>

          <div className="d-flex">
            <label className="f-icon">account_circle</label>
            <input type="text" name="name" placeholder="Name" defaultValue={name} />
          </div>

          <div className="d-flex">
            <label className="f-icon">phone</label>
            <input type="text" name="phone" placeholder="Telefono" defaultValue={phone} />
          </div>

          <div className="d-flex">
            <label className="f-icon">email</label>
            <input type="text" name="email" placeholder="Email" defaultValue={email} />
          </div>

          <input
            type="button"
            value="close"
            className="contact-edit-form__close bg-danger f-icon"
            onClick={handlerCloseEditor} />
          <input
            type="submit"
            value="check"
            className="contact-edit-form__send f-icon bg-confirm" />

        </form>
      </div>
    </div>
  )
}

export default EditorContact
