import React from "react";

function Input({ name, type, label, reference, errors, onChange }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div>
        <input
          name={name}
          type={type}
          className="form-control"
          id={name}
          ref={reference}
          onChange={onChange}
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
