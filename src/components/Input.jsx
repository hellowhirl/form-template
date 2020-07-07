import React from "react";

function Input({ name, type, label, reference, errors }) {
  return (
    <div className="form-group">
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input
          name={name}
          type={type}
          className="form-control"
          id={name}
          ref={reference}
        />
        {errors.map((e) => (
          <p key={e} className="errorMessage">
            {e}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Input;
