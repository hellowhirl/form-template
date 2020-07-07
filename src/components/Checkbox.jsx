import React, { Fragment } from "react";

function Checkbox({ name, reference, errors }) {
  return (
    <Fragment>
      <div className="form-check">
        <label className="form-check-label">
          <input
            name={name}
            type="checkbox"
            className="form-check-input"
            id={name}
            ref={reference}
          />
          I agree to the terms and conditions
        </label>
      </div>
      {errors.map((e) => (
        <p key={errors.indexOf(e)} className="errorMessage">
          {e}
        </p>
      ))}
    </Fragment>
  );
}

export default Checkbox;
