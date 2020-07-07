import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Checkbox from "./Checkbox";
import PasswordInput from "./PasswordInput";

function Form(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("submitted", data);
    setFormSubmitted(true);
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    return password === confirmPassword;
  };

  return (
    <div className="form-wrapper">
      {!formSubmitted && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Signup Form</h2>
          <p className="fieldsInfo">All fields are required</p>
          <Input
            name="firstName"
            label="First Name"
            type="text"
            reference={register({ required: true })}
            errors={errors.firstName ? ["Please enter first name"] : []}
          />
          <Input
            name="lastName"
            label="Last Name"
            type="text"
            reference={register({ required: true })}
            errors={errors.lastName ? ["Please enter last name"] : []}
          />
          <Input
            name="emailAddress"
            label="Email Address"
            type="email"
            reference={register({
              required: true,
              validate: validateEmail,
            })}
            errors={[
              errors.emailAddress?.type === "required"
                ? "Please enter an email address"
                : null,
              errors.emailAddress?.type === "validate"
                ? "Please enter valid email address"
                : null,
            ].filter((e) => e)}
          />
          <PasswordInput
            label="Password"
            name="password"
            reference={register({
              required: true,
              minLength: 12,
              pattern: /^(?=.*\d{2,})(?=.*[A-Z]{2,})(?=.*[-!@$#\\%^&*()_+|~=`{}[\]:";'<>?,./]{2,}).{12,}$/,
            })}
            onChange={handleSetPassword}
            errors={[
              errors.password?.type === "required"
                ? "Please enter a password"
                : null,
              errors.password?.type === "minLength"
                ? "Password must be at least 12 characters long"
                : null,
              errors.password?.type === "pattern"
                ? "Password must contain at least 2 upper case letters, 2 numbers, and 2 symbols"
                : null,
            ].filter((e) => e)}
          />
          <div className="passwordAdvice">
            <p>- Minimum 12 characters</p>
            <p>
              - Must contain at least 2 upper case letters, 2 numbers, and 2
              symbols"
            </p>
          </div>
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            reference={register({ required: true, validate: checkPasswords })}
            onChange={handleSetConfirmPassword}
            errors={[
              errors.confirmPassword?.type === "required"
                ? "Please enter a password"
                : null,
              errors.confirmPassword?.type === "validate"
                ? "Confirm password does not match password"
                : null,
            ].filter((e) => e)}
          />
          <Checkbox
            name="termsConditions"
            label="Terms and conditions"
            checkCondition="I agree to the terms and conditions"
            reference={register({ required: true })}
            errors={[
              errors.termsConditions?.type === "required"
                ? "Please check terms and conditions"
                : null,
            ].filter((e) => e)}
            message="I agree to the terms and conditions"
          />
          <div className="button-wrapper">
            <button type="submit" className="btn btn-primary">
              SIGN UP
            </button>
          </div>
        </form>
      )}
      {formSubmitted && <div>Thank you for signing up!</div>}
    </div>
  );
}

export default Form;
