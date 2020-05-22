import React, { useContext } from "react";
import Contact from "./Contact";
import ContactsContext from "../context/ContactsContext";
import NewContact from "./NewContact";

const ContactsGroup = () => {
  const [state] = useContext(ContactsContext); // Estado Global

  const filterContacts = (contact) => {
    let fullName = `${contact.name.first} ${contact.name.last}`.toLowerCase();

    let newName = normalizeName(fullName); // Quitar tildes y ñ

    return newName.includes(state.search); // Coincidencias de la busqueda
  };

  //Normalizar: ángelsalvador => angelsalvador
  const normalizeName = (name) => {
    name = name.replace(/á/gi, "a");
    name = name.replace(/é/gi, "e");
    name = name.replace(/í/gi, "i");
    name = name.replace(/ó/gi, "o");
    name = name.replace(/ú/gi, "u");
    name = name.replace(/ñ/gi, "n");
    return name;
  };

  return (
    <div className="row">
      {state.isFormAddContact ? <NewContact /> : null}
      {state.contacts.filter(filterContacts).map((contact, index) => (
        <Contact key={index} contact={contact} />
      ))}
    </div>
  );
};

export default ContactsGroup;
