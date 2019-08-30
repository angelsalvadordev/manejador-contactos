import { GET_API, SEARCH_CONTACT, REMOVE_CONTACT, EDIT_CONTACT, DISABLE_SEARCHER } from "./actions";

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

export const actionRemoveContact = id => (
  {
    type: REMOVE_CONTACT,
    id
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