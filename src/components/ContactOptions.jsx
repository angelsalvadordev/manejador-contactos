import React, { useState, useContext } from "react";
import EditorContact from "./EditorContact";

import ContactsContext from "../context/ContactsContext";
import {
  actionRemoveContact,
  actionDisabledSearcher,
} from "../context/actionsCreators";

const ContactOptions = ({ contact, setShowOptions }) => {
  const [showEdit, setShowEditor] = useState(false);

  const [state, dispatch] = useContext(ContactsContext);

  const handleEdit = (e) => {
    e.stopPropagation();
    setShowEditor(true);
    dispatch(actionDisabledSearcher(true));
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm("Seguro que deseas eliminar este contacto?")) {
      dispatch(actionRemoveContact(contact.id));
      setShowOptions(false);
    }
  };

  const handleCloseOptions = (e) => {
    e.stopPropagation();
    setShowOptions(false);
  };

  return (
    <>
      <div className="row no-gutters d-flex bg-light contact-options">
        <div className="col-6 d-flex justify-content-center align-items-center ">
          <span
            className="contact-options__edit d-flex align-items-center"
            onClick={handleEdit}
          >
            Editar
          </span>
        </div>
        <div
          className={"col-6 d-flex justify-content-center align-items-center"}
        >
          <span
            className="contact-options__delete d-flex align-items-center"
            onClick={handleDelete}
          >
            Eliminar
          </span>
        </div>
        <div
          className="contact-options__back f-icon"
          onClick={handleCloseOptions}
        >
          settings_backup_restore
        </div>
      </div>
      {showEdit ? (
        <EditorContact
          contact={contact}
          setShowEditor={setShowEditor}
          setShowOptions={setShowOptions}
        />
      ) : null}
    </>
  );
};

export default ContactOptions;
