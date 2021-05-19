import React, { ChangeEvent } from "react";
import { Input } from "../../../../components/ui/input/Input";
import { FieldsState } from "../signin-page/SignInPage";
import { NavLink } from "react-router-dom";
import styles from "./signInForm.module.scss";

interface Props {
  fieldsValues: FieldsState;
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

export const SignInForm = ({
  fieldsValues,
  handleSubmit,
  handleChange,
}: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      className={styles.signInForm}
    >
      <Input
        error={fieldsValues.email?.touched && !fieldsValues.email?.isValid}
        errorMessage={"Email is required"}
        label={"Email"}
        name={"email"}
        type={"email"}
      />
      <Input
        error={
          fieldsValues.password?.touched && !fieldsValues.password?.isValid
        }
        errorMessage={"Password is required"}
        label={"Password"}
        name={"password"}
        type={"password"}
      />
      <button>Sign In</button>
      <div className={styles.navigation}>
        <p>Not a member yet?</p>
        <NavLink to={"/signUp"}>Sign Up</NavLink>
      </div>
    </form>
  );
};
