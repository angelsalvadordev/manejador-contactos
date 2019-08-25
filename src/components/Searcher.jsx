import React, { useContext } from 'react'
import ContactsContext from "../context/ContactsContext"

const Searcher = () => {
    const { searchContact } = useContext(ContactsContext)
    return (
        <div className="row">
            <div className="col ">
                <div className="col d-flex bg-secondary searcher mb-1">
                    <input onKeyUp={searchContact} className="col searcher__input bg-secondary text-white" type="text" placeholder="Buscar contacto" />
                </div>
            </div>
        </div>

    )
}

export default Searcher
