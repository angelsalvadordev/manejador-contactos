export const contactsApiUrl = "https://randomuser.me/api/?results=25&nat=es";

export const getContacts = async () => {
  const { results } = await (await fetch(contactsApiUrl)).json();

  const formattedContacts = results.map((contact) => {
    const {
      email,
      id,
      name,
      phone,
      picture: { thumbnail = "" } = {},
    } = contact;

    return {
      email,
      id,
      name,
      phone,
      picture: thumbnail,
    };
  });

  return formattedContacts;
};
