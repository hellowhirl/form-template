import React, { useState } from "react";

const PasswordInput = ({ name, label, reference, errors, onChange }) => {
  const [show, setShow] = useState(false);

  const inputType = () => {
    return show === false ? "password" : "text";
  };

  const toggleShow = (e) => {
    e.preventDefault();

    setShow(!show);
  };

  return (
    <React.Fragment>
      <div className="form-group passwordSection">
        <label className="input-label">{label}</label>
        <div className="input-group mb-3 input-wrapper">
          <input
            name={name}
            type={inputType()}
            className="form-control"
            id={name}
            ref={reference}
            onChange={onChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              onClick={(e) => toggleShow(e)}
            >
              {!show ? "Show" : "Hide"}
            </button>
          </div>
          {errors.map((e) => (
            <p key={e} className="errorMessage">
              {e}
            </p>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PasswordInput;
