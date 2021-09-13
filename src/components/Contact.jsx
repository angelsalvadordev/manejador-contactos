import React, { useState } from "react";
import { cutText } from "../helpers/utils";

import ContactOptions from "./ContactOptions";

const Contact = ({ contact }) => {
  const [showOptions, setShowOptions] = useState(false); // Estado Local
  const { name = {}, picture = "", phone, email } = contact;
  const { first: firstName, last: lastName } = name;

  return (
    <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
      <div
        className="row no-gutters contact bg-light pt-2 pb-2"
        onClick={() => {
          setShowOptions(true);
        }}
      >
        <div className="col-3 ml-2 d-flex align-items-center justify-content-end contact-image">
          {picture ? (
            <img
              className="contact-image__photo"
              src={picture}
              alt={`Imagen de ${firstName} ${lastName}`}
            />
          ) : (
            <p className="contact-image__photo contact-image__letters">
              {`${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`}
            </p>
          )}
        </div>
        <div className="col contact-info">
          <h6 className="contact-info__name">
            {firstName ? `${firstName} ${lastName}` : "Sin Nombre"}
          </h6>
          <span className="contact-info__phone">{phone || "-"}</span>
          <span className="contact-info__mail">{cutText(email) || "-"}</span>
        </div>
        {showOptions ? (
          <ContactOptions contact={contact} setShowOptions={setShowOptions} />
        ) : null}
      </div>
    </div>
  );
};

export default Contact;
