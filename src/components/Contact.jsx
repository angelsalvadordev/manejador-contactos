import React, { useContext, useState } from 'react'

import ContactsContext from "../context/ContactsContext"
import { actionRemoveContact } from '../context/actionsCreators';

const Contact = ({ contact }) => {

    const [options, setOptions] = useState(false)

    const showOptions = (e) => {
        e.stopPropagation()
        setOptions(true)
    }


    const hideOptions = (e) => {
        e.stopPropagation()
        setOptions(false)
    }


    const [state, dispatch] = useContext(ContactsContext)
    return (
        <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
            <div className="row no-gutters contact bg-light pt-2 pb-2" onClick={showOptions}>
                <div className="col-3 ml-2 d-flex align-items-center justify-content-end contact-image">
                    <img className="contact-image__photo" src={contact.photo} alt={`Imagen de ${contact.name}`} />
                </div>
                <div className="col contact-info">
                    <h6 className="contact-info__name">{`${contact.name} ${contact.surname}`}</h6>
                    <span className="contact-info__phone">{contact.phone}</span>
                    <span className="contact-info__mail">{contact.email}</span>
                </div>

                <div className={`row no-gutters bg-light contact-options ${options && "show-options"}`}>
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                        <span className="contact-options__edit d-flex align-items-center">Editar</span>
                    </div>
                    <div className={"col-6 d-flex justify-content-center align-items-center"}>
                        <span className="contact-options__delete d-flex align-items-center"
                            onClick={(e) => {
                                dispatch(actionRemoveContact(contact.id))
                                hideOptions(e) // evita que el siguiente elemento muestre las opciones
                            }}>Eliminar</span>
                    </div>
                    <div className="contact-options__back f-icon" onClick={hideOptions}>settings_backup_restore</div>
                </div>

                <div className="contact-edit d-flex align-items-center row no-gutters bg-light">
                    <div className="col-10">
                        <form action="#" className="contact-edit-form">
                            <div className="d-flex">
                                <label className="f-icon">account_circle</label>
                                <input type="text" placeholder="Name" defaultValue={`${contact.name} ${contact.surname}`} />
                            </div>
                            <div className="d-flex">
                                <label className="f-icon">phone</label>
                                <input type="text" placeholder="Name" defaultValue={contact.phone} />
                            </div>
                            <div className="d-flex">
                                <label className="f-icon">email</label>
                                <input type="text" placeholder="Name" defaultValue={contact.email} />
                            </div>
                        </form>
                    </div>
                    <div className="col-2">confirm</div>
                </div>
            </div>
        </div>
    )
}

export default Contact
