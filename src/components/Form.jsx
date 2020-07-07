import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("submitted", data);
  };

  //

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [toggleShow, setToggleShow] = useState(false);
  const [toggleShow2, setToggleShow2] = useState(false);

  const passwordFieldType = () => {
    return toggleShow === false ? "password" : "text";
  };
  const passwordFieldType2 = () => {
    return toggleShow2 === false ? "password" : "text";
  };

  const togglePasswordType = (e) => {
    e.preventDefault();

    toggleShow === false ? setToggleShow(true) : setToggleShow(false);
  };
  const togglePasswordType2 = (e) => {
    e.preventDefault();

    toggleShow2 === false ? setToggleShow2(true) : setToggleShow2(false);
  };

  //

  const validateEmail = (value) => {
    const atpos = value.indexOf("@");
    const dotpos = value.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= value.length) {
      return false;
    }
    return true;
  };

  const handleSetPassword = ({ currentTarget: input }) => {
    setPassword(input.value);
  };

  const handleSetConfirmPassword = ({ currentTarget: input }) => {
    setConfirmPassword(input.value);
  };

  const checkPasswords = () => {
    return password === confirmPassword ? true : false;
  };

  return (
    <div className="form-wrapper">
      <h2>Signup Form</h2>

      <p className="fieldsInfo">All fields are required</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            id="1"
            ref={register({ required: true })}
          />
          {errors.firstName && (
            <p className="errorMessage">Please enter first name</p>
          )}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            id="2"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p className="errorMessage">Please enter last name</p>
          )}
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            name="emailAddress"
            className="form-control"
            id="3"
            ref={register({
              required: true,
              validate: validateEmail,
            })}
          />
          {errors.emailAddress && errors.emailAddress.type === "required" && (
            <p className="errorMessage">Please enter email address</p>
          )}
          {errors.emailAddress && errors.emailAddress.type === "validate" && (
            <p className="errorMessage">Please enter email address</p>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type={passwordFieldType()}
            className="form-control"
            id="4"
            onChange={handleSetPassword}
            ref={register({
              required: true,
              minLength: 12,
              pattern: /^(?=.*\d{2,})(?=.*[A-Z]{2,})(?=.*[-!@$#\\%^&*()_+|~=`{}[\]:";'<>?,./]{2,}).{12,}$/,
            })}
          />
          <button onClick={(e) => togglePasswordType(e)}>
            {!toggleShow ? "Show" : "Hide"}
          </button>
          {errors.password?.type === "required" && (
            <p className="errorMessage">Please enter password</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="errorMessage">
              Password must be at least 12 characters long
            </p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p className="errorMessage">
              Password must contain at least 2 upper case letters, 2 numbers,
              and 2 symbols
            </p>
          )}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type={passwordFieldType2()}
            className="form-control"
            id="5"
            onChange={handleSetConfirmPassword}
            ref={register({ required: true, validate: checkPasswords })}
          />
          <button onClick={(e) => togglePasswordType2(e)}>
            {!toggleShow2 ? "Show" : "Hide"}
          </button>
          {errors.confirmPassword?.type === "required" && (
            <p className="errorMessage">Please enter password</p>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <p className="errorMessage">
                Confirm password doesn't match password
              </p>
            )}
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              name="termsConditions"
              type="checkbox"
              className="form-check-input"
              id="6"
              ref={register({ required: true })}
            />
            I agree to the terms and conditions
          </label>
        </div>
        {errors.termsConditions && (
          <p className="errorMessage">Please check terms and conditions</p>
        )}
        <div className="button-wrapper">
          <button type="submit" className="btn btn-primary">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
