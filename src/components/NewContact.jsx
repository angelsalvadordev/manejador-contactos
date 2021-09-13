import React, { useContext } from "react";
import ContactsContext from "../context/ContactsContext";
import {
  actionDisabledSearcher,
  actionFormAddContact,
  actionAddContact,
} from "../context/actionsCreators";

const NewContact = () => {
  const [store, dispatch] = useContext(ContactsContext);

  const handleNewContact = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const elements = Array.from(e.target.querySelectorAll("div > input"));

    let contactData = {
      picture: "",
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

    dispatch(actionAddContact(contactData));
  };

  const handleCloseEditor = (e) => {
    if (window.confirm("Seguro que no desea agregar un contacto?")) {
      e.stopPropagation();
      dispatch(actionDisabledSearcher(false));
      dispatch(actionFormAddContact(false));
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
      <div className="new-contact d-flex align-items-center row no-gutters bg-light pt-2 pb-2">
        <form
          action="#"
          className="new-contact-form"
          onSubmit={handleNewContact}
        >
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
            onClick={handleCloseEditor}
          />
          <input
            type="submit"
            value="check"
            className="new-contact-form__send f-icon bg-confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default NewContact;
