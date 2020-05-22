// Creando componente Provider
import React, { useEffect, useReducer } from "react";

import { contactsReducer, initialContacts } from "./store";
import ContactsContext from "./ContactsContext";
import { actionAPI } from "./actionsCreators";

// Componente Provider
const ContactsProvider = (props) => {
  const [state, dispatch] = useReducer(contactsReducer, initialContacts);

  // Conexion con API y actualizacion del store
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=25&nat=es")
      .then((resp) => resp.json())
      .then(({ results }) => dispatch(actionAPI(results)));
  }, []);

  return (
    // Envolver componentes para conexion con store global
    <ContactsContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
