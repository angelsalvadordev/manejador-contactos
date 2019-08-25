import React, { useContext } from 'react'
import ContactsContext from "../context/ContactsContext"

const Contact = ({ contact }) => {

    const { deleteContact } = useContext(ContactsContext)

    return (
        <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
            <div className="row no-gutters contact bg-light pt-2 pb-2" onClick={() => deleteContact(contact.name)}>
                <div className="col-3 ml-2 d-flex align-items-center justify-content-end contact-image">
                    <img className="contact-image__photo" src={contact.photo} alt={`Imagen de ${contact.name}`} />
                </div>
                <div className="col contact-info">
                    <h6 className="contact-info__name">{`${contact.name} ${contact.surname}`}</h6>
                    <span className="contact-info__phone">{contact.phone}</span>
                    <span className="contact-info__mail">{contact.email}</span>
                </div>
            </div>
        </div>
    )
}

export default Contact
