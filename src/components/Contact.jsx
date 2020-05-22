import React, { useState } from "react";

import ContactOptions from "./ContactOptions";

const Contact = ({ contact }) => {
  const [showOptions, setShowOptions] = useState(false); // Estado Local
  return (
    <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
      <div
        className="row no-gutters contact bg-light pt-2 pb-2"
        onClick={() => {
          setShowOptions(true);
        }}
      >
        <div className="col-3 ml-2 d-flex align-items-center justify-content-end contact-image">
          {contact.picture ? (
            <img
              className="contact-image__photo"
              src={contact.picture.thumbnail}
              alt={`Imagen de ${contact.name.first} ${contact.name.last}`}
            />
          ) : (
            <p className="contact-image__photo contact-image__letters">{`${contact.name.first.charAt(
              0
            )}${contact.name.last.charAt(0)}`}</p>
          )}
        </div>
        <div className="col contact-info">
          <h6 className="contact-info__name">
            {contact.name.first
              ? `${contact.name.first} ${contact.name.last}`
              : "Sin Nombre"}
          </h6>
          <span className="contact-info__phone">
            {contact.phone ? contact.phone : "-"}
          </span>
          <span className="contact-info__mail">
            {contact.email
              ? contact.email.length > 25
                ? `${contact.email.substring(0, 25)}...`
                : contact.email
              : "-"}
          </span>
        </div>
        {showOptions ? (
          <ContactOptions contact={contact} setShowOptions={setShowOptions} />
        ) : null}
      </div>
    </div>
  );
};

export default Contact;
