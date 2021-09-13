import {
  SAVE_CONTACTS,
  SEARCH_CONTACT,
  EDIT_CONTACT,
  DISABLE_SEARCHER,
  FORM_ADD_CONTACT,
  ADD_CONTACT,
  REMOVE_CONTACT,
} from "./actions";

export const actionSaveContacts = (data) => ({
  type: SAVE_CONTACTS,
  data,
});

export const actionSearch = (data) => ({
  type: SEARCH_CONTACT,
  data,
});

export const actionEditContact = (data) => ({
  type: EDIT_CONTACT,
  data,
});

export const actionDisabledSearcher = (data) => ({
  type: DISABLE_SEARCHER,
  data,
});

export const actionFormAddContact = (data) => ({
  type: FORM_ADD_CONTACT,
  data,
});

export const actionAddContact = (data) => ({
  type: ADD_CONTACT,
  data,
});

export const actionRemoveContact = (id) => ({
  type: REMOVE_CONTACT,
  id,
});
