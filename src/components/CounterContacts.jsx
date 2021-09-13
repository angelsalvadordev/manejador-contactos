import React, { useContext } from "react";

import ContactContext from "../context/ContactsContext";

const CounterContacts = () => {
  const [state] = useContext(ContactContext);

  return (
    <div className="row justify-content-center mb-1">
      <div className="col-6 col-md-3 col-lg-2 bg-confirm counter-contacts">
        Contactos:<span>{state.contacts.length}</span>
      </div>
    </div>
  );
};

export default CounterContacts;
