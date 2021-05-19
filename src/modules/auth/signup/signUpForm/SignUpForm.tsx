import React, { ChangeEvent } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "../../../../components/ui/input/Input";
import { FieldsState } from "../signup-page/SignUpPage";
import styles from "./SignUpForm.module.scss";

interface Props {
  fieldsValues: FieldsState;
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

export const SignUpForm = React.memo(
  ({ fieldsValues, handleSubmit, handleChange }: Props) => {
    return (
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className={styles.registrationForm}
      >
        <Input
          error={
            fieldsValues.password?.touched && !fieldsValues.password?.isValid
          }
          label={"First name"}
          name={"firstName"}
          type={"text"}
        />
        <Input label={"Last name"} name={"lastName"} type={"text"} />
        <Input label={"Email"} name={"email"} type={"email"} />
        <Input label={"Password"} name={"password"} type={"password"} />
        <Input
          label={"Enter your password again"}
          name={"password_repeat"}
          type={"password"}
        />
        <button>Register</button>
        <div className={styles.navigation}>
          <p>Already have an account?</p>
          <NavLink to={"/login"}>Log in</NavLink>
        </div>
      </form>
    );
  }
);
