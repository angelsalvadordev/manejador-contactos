import {
  GET_API,
  SEARCH_CONTACT,
  EDIT_CONTACT,
  DISABLE_SEARCHER,
  FORM_ADD_CONTACT,
  ADD_CONTACT,
  REMOVE_CONTACT,
} from "./actions"

export const initialContacts = {
  contacts: [],
  search: "",
  isSearcherDisabled: false,
  isFormAddContact: false,
}

//Reducer
export const contactsReducer = (state, action) => {
  switch (action.type) {

    case GET_API: // Agregar datos de API al estado
      return {
        ...state,
        contacts: state.contacts.concat(action.data)
      }
    case SEARCH_CONTACT:
      let word = action.data
      word = word.toLowerCase()
      return {
        ...state,
        search: word
      }

    case EDIT_CONTACT:
      const { id, name, phone, email } = action.data
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact.id === id) {
            contact.name = name
            contact.phone = phone
            contact.email = email
          }
          return contact
        })
      }

    case DISABLE_SEARCHER:
      console.log(action.data)
      return {
        ...state,
        isSearcherDisabled: action.data
      }
    case FORM_ADD_CONTACT:
      return {
        ...state,
        isFormAddContact: action.data,
      }

    case ADD_CONTACT:
      action.data.id = state.contacts.length
      state.contacts.unshift(action.data)
      console.log(state.contacts)
      return {
        ...state,
      }

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.id
        })
      }

    default: console.log('error inesperado', action.type)
      break
  }
}