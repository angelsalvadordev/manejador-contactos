import React, { useContext } from 'react'

import ContactsContext from "../context/ContactsContext"
import { actionSearch } from '../context/actionsCreators';

const Searcher = () => {
    const [state, dispatch] = useContext(ContactsContext)
    return (
        <div className="row">
            <div className="col ">
                <div className="col d-flex bg-secondary searcher mb-1">
                    <input onKeyUp={e => dispatch(actionSearch(e.target.value))} className="col searcher__input bg-secondary text-white" type="text" placeholder="Buscar contacto" />
                </div>
            </div>
        </div>

    )
}

export default Searcher
