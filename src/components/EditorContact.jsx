import React, { useContext } from "react";

import ContactsContext from "../context/ContactsContext";
import {
  actionEditContact,
  actionDisabledSearcher,
} from "../context/actionsCreators";

const EditorContact = ({ contact, setShowEditor, setShowOptions }) => {
  const { id, name, phone, email, picture } = contact;
  const formattedName = `${name.first} ${name.last}`;

  const [store, dispatch] = useContext(ContactsContext);

  const handlerEditContact = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const elements = Array.from(e.target.querySelectorAll("div > input"));

    let contactData = {
      id,
      picture,
    };

    elements.forEach((element) => {
      let separateName = element.value.split(" ");
      element.name === "name"
        ? (contactData = {
            ...contactData,
            name: {
              first: separateName[0],
              last: separateName[1] || "",
            },
          })
        : (contactData = {
            ...contactData,
            [element.name]: element.value,
          });
    });

    dispatch(actionEditContact({ id, ...contactData }));

    setShowEditor(false);
    setShowOptions(false);
  };

  const handlerCloseEditor = (e) => {
    if (window.confirm("Seguro que deseas salir del modo editar?")) {
      e.stopPropagation();
      setShowEditor(false);
      dispatch(actionDisabledSearcher(false));
      setShowOptions(false);
    }
  };

  return (
    <div className="contact-edit d-flex align-items-center row no-gutters bg-light">
      <div className="col-12">
        <form
          action="#"
          className="contact-edit-form"
          onSubmit={handlerEditContact}
        >
          <div className="d-flex">
            <label className="f-icon">account_circle</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={formattedName}
            />
          </div>

          <div className="d-flex">
            <label className="f-icon">phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Telefono"
              defaultValue={phone}
            />
          </div>

          <div className="d-flex">
            <label className="f-icon">email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              defaultValue={email}
            />
          </div>

          <input
            type="button"
            value="close"
            className="contact-edit-form__close bg-danger f-icon"
            onClick={handlerCloseEditor}
          />
          <input
            type="submit"
            value="check"
            className="contact-edit-form__send f-icon bg-confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default EditorContact;
