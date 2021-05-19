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
        className={styles.signUpForm}
      >
        <Input
          error={
            fieldsValues.firstName?.touched && !fieldsValues.firstName?.isValid
          }
          errorMessage={"First name is required"}
          label={"First name"}
          name={"firstName"}
          type={"text"}
        />
        <Input
          error={
            fieldsValues.lastName?.touched && !fieldsValues.lastName?.isValid
          }
          errorMessage={"Last name is required"}
          label={"Last name"}
          name={"lastName"}
          type={"text"}
        />
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
        <Input
          error={
            fieldsValues.confirmPassword?.touched &&
            !fieldsValues.confirmPassword?.isValid
          }
          errorMessage={"Password repeat is required"}
          label={"Enter your password again"}
          name={"confirmPassword"}
          type={"password"}
        />
        <button>Sign Up</button>
        <div className={styles.navigation}>
          <p>Already have an account?</p>
          <NavLink to={"/signIn"}>Sign In</NavLink>
        </div>
      </form>
    );
  }
);
