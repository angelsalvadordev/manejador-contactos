import { GET_API, SEARCH_CONTACT, EDIT_CONTACT, DISABLE_SEARCHER, ADD_CONTACT, REMOVE_CONTACT } from "./actions"

export const initialContacts = {
  contacts: [],
  search: "",
  isSearcherDisabled: false
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
      return {
        ...state,
        isSearcherDisabled: action.data
      }

    case ADD_CONTACT:
      // Pendiente logica para agregar nuevo contacto
      return {
        ...state
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