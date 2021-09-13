import React, { useEffect, useReducer } from "react";

import { contactsReducer, initialContacts } from "./store";
import ContactsContext from "./ContactsContext";
import { actionSaveContacts } from "./actionsCreators";
import { getContacts } from "../api/contacts";

const ContactsProvider = (props) => {
  const [state, dispatch] = useReducer(contactsReducer, initialContacts);

  useEffect(() => {
    getContacts().then((results) => dispatch(actionSaveContacts(results)));
  }, []);

  return (
    <ContactsContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
