import { GET_API, SEARCH_CONTACT, REMOVE_CONTACT } from "./actions";

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