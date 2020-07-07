import React, { useState } from "react";
import Input from "./Input";

const PasswordInput = (props) => {
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
      <Input {...props} type={inputType()} />
      <button onClick={(e) => toggleShow(e)}>{!show ? "Show" : "Hide"}</button>
    </React.Fragment>
  );
};

export default PasswordInput;
