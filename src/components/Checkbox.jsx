import React, { Fragment } from "react";

function Checkbox({ name, label, checkCondition, reference, errors }) {
  return (
    <Fragment>
      <div className="input-label">{label}</div>
      <div className="form-check">
        <div className="form-check-label">
          <label>
            <input
              name={name}
              type="checkbox"
              className="form-check-input"
              id={name}
              ref={reference}
            />
            {checkCondition}
          </label>
        </div>
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
