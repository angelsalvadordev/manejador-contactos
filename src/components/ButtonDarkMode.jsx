import React, { useState } from "react";

const ButtonDarkMode = () => {
  const [darkmode, setDarkmode] = useState(false);
  const handleClick = () => {
    document.body.classList.toggle("dark");
    darkmode ? setDarkmode(false) : setDarkmode(true);
  };

  return (
    <div className="col-4 col-md-2 mx-auto">
      <div
        className={`switch my-2 ${darkmode ? "active" : ""}`}
        onClick={handleClick}
      >
        <span className="f-icon">brightness_7</span>
        <span className="f-icon">brightness_3</span>
      </div>
    </div>
  );
};

export default ButtonDarkMode;
