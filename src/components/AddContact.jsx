import React, { useContext } from "react";

import ContactsContext from "../context/ContactsContext";
import {
  actionFormAddContact,
  actionDisabledSearcher,
} from "../context/actionsCreators";

const AddContact = () => {
  const [state, dispatch] = useContext(ContactsContext);

  const handlerClickAdd = () => {
    dispatch(actionFormAddContact(true));
    dispatch(actionDisabledSearcher(true));
  };

  return (
    <div className="col-2">
      <div
        className="add-contact bg-action text-white"
        onClick={handlerClickAdd}
      >
        Nuevo contacto
      </div>
    </div>
  );
};

export default AddContact;
