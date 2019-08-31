import { GET_API, SEARCH_CONTACT, EDIT_CONTACT, DISABLE_SEARCHER, ADD_CONTACT, REMOVE_CONTACT } from "./actions";

export const actionAPI = data => (
  {
    type: GET_API,
    data
  }
)

export const actionSearch = data => (
  {
    type: SEARCH_CONTACT,
    data
  }
)

export const actionEditContact = data => (
  {
    type: EDIT_CONTACT,
    data
  }
)

export const actionDisabledSearcher = data => (
  {
    type: DISABLE_SEARCHER,
    data
  }
)

export const actionAddContact = data => (
  {
    type: ADD_CONTACT,
    data
  }
)

export const actionRemoveContact = id => (
  {
    type: REMOVE_CONTACT,
    id
  }
)



