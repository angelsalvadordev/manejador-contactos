import {
  SAVE_CONTACTS,
  SEARCH_CONTACT,
  EDIT_CONTACT,
  DISABLE_SEARCHER,
  FORM_ADD_CONTACT,
  ADD_CONTACT,
  REMOVE_CONTACT,
} from "./actions";

export const initialContacts = {
  contacts: [],
  search: "",
  isSearcherDisabled: false,
  isFormAddContact: false,
};

export const contactsReducer = (state, action) => {
  switch (action.type) {
    case SAVE_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, ...action.data],
      };
    case SEARCH_CONTACT:
      return {
        ...state,
        search: action.data.toLowerCase(),
      };

    case DISABLE_SEARCHER:
      return {
        ...state,
        isSearcherDisabled: action.data,
      };

    case FORM_ADD_CONTACT:
      return {
        ...state,
        isFormAddContact: action.data,
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          { ...action.data, id: state.contacts.length },
          ...state.contacts,
        ],
        isSearcherDisabled: false,
        isFormAddContact: false,
      };

    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.data.id ? action.data : contact
        ),
        isSearcherDisabled: false,
      };

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.id),
      };

    default:
      console.log("error inesperado", action.type);
      break;
  }
};
