import React, { useContext } from "react";

// Components
import Contact from "./Contact";
import ContactsContext from "../context/ContactsContext";
import NewContact from "./NewContact";

// Utils
import { normalizeName } from "../helpers/utils";

const ContactsGroup = () => {
  const [state] = useContext(ContactsContext);
  const { contacts, search, isFormAddContact } = state;

  const filterContacts = (contact) => {
    const fullName = normalizeName(
      `${contact.name.first} ${contact.name.last}`.toLowerCase()
    );
    const newSearch = normalizeName(search);

    return fullName.includes(newSearch);
  };

  return (
    <div className="row">
      {isFormAddContact ? <NewContact /> : null}
      {contacts.filter(filterContacts).map((contact, index) => (
        <Contact key={index} contact={contact} />
      ))}
    </div>
  );
};

export default ContactsGroup;
