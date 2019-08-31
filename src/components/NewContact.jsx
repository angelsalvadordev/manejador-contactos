import React, { useContext } from 'react'
import ContactsContext from '../context/ContactsContext';
import { actionDisabledSearcher, actionFormAddContact, actionAddContact } from '../context/actionsCreators';

const NewContact = () => {

  const [store, dispatch] = useContext(ContactsContext)

  const handlerNewContact = e => {
    e.preventDefault()
    e.stopPropagation()
    const elements = Array.from(e.target.querySelectorAll('div > input'))

    const contactData = {} // Almacena datos de modificacion
    elements.forEach(element => contactData[element.name] = element.value) // {name:"angel",...}

    // Enviando data al reducer
    dispatch(actionAddContact(contactData)) // Envio de info al reducer
    dispatch(actionDisabledSearcher(false)) // Habilitando buscador
    dispatch(actionFormAddContact(false)) // deshabilitar formulario de nuevo contacto
  }

  const handlerCloseEditor = e => {
    if (window.confirm('Seguro que no desea agregar un contacto?')) {
      e.stopPropagation()
      dispatch(actionDisabledSearcher(false)) // Habilitando buscador
      dispatch(actionFormAddContact(false)) // deshabilitar formulario de nuevo contacto
    }
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
      <div className="new-contact d-flex align-items-center row no-gutters bg-light pt-2 pb-2">
        <form action="#" className="new-contact-form" onSubmit={handlerNewContact}>

          <div className="d-flex">
            <label className="f-icon">account_circle</label>
            <input type="text" name="name" placeholder="Name" />
          </div>

          <div className="d-flex">
            <label className="f-icon">phone</label>
            <input type="text" name="phone" placeholder="Telefono" />
          </div>

          <div className="d-flex">
            <label className="f-icon">email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>

          <input
            type="button"
            value="close"
            className="new-contact-form__close bg-danger f-icon"
            onClick={handlerCloseEditor} />
          <input
            type="submit"
            value="check"
            className="new-contact-form__send f-icon bg-confirm" />
        </form>
      </div>
    </div>
  )
}

export default NewContact
