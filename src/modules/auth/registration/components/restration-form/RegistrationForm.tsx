import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "../../../../../components/ui/input/Input";
import "./RegistrationForm.Styles.scss";

export const RegistrationForm = React.memo(() => {
  const [firstNameVal, setFirstNameVal] = useState(true);
  const [lastNameVal, setLastNameVal] = useState(true);
  const [emailVal, setEmailVal] = useState(true);
  const [passwordVal, setPasswordVal] = useState(true);
  const [passwordRepeat, setPasswordRepeatVal] = useState(true);

  return (
    <div className={"registration-form"}>
      <Input label={"First name"} name={"firstName"} type={"text"} />
      <Input label={"Last name"} name={"lastName"} type={"text"} />
      <Input label={"Email"} name={"email"} type={"email"} />
      <Input label={"Password"} name={"password"} type={"password"} />
      <Input
        label={"Enter your password again"}
        name={"password_repeat"}
        type={"password"}
      />
      <button>Register</button>
      <div className={"registration-form--navigation"}>
        <p>Already have an account?</p>
        <NavLink to={"/"}>Log in</NavLink>
      </div>
    </div>
  );
});
