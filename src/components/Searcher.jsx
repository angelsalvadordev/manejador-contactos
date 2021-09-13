import React, { useContext } from "react";

import ContactsContext from "../context/ContactsContext";
import { actionSearch } from "../context/actionsCreators";

const Searcher = () => {
  const [state, dispatch] = useContext(ContactsContext);
  const { isSearcherDisabled } = state;

  const handleSearch = (e) =>
    !isSearcherDisabled && dispatch(actionSearch(e.target.value));

  return (
    <div
      className={`col-10 d-flex searcher ${
        isSearcherDisabled
          ? "bg-gray-light searcher--disabled"
          : "bg-secondary "
      }`}
    >
      <input
        onKeyUp={handleSearch}
        className="searcher__input text-white"
        type="text"
        placeholder="Buscar contacto"
        {...(isSearcherDisabled && { disabled: true })}
      />
    </div>
  );
};

export default Searcher;
