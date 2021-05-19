import React, { ChangeEvent } from "react";
import { SignInForm } from "../signInForm/SignInForm";
import styles from "./signInPage.module.scss";
import {
  isEmail,
  isStandartPassword,
} from "../../../../core/helpers/validators";
import { useState } from "react";

type Fields = "email" | "password";

type Field = Record<
  Fields,
  {
    name: Fields;
    validate: (value: string, state?: FieldsState) => boolean | undefined;
  }
>;

const fields: Field = {
  email: {
    name: "email",
    validate: (value) => isEmail(value),
  },
  password: {
    name: "password",
    validate: (value) => isStandartPassword(value),
  },
};

interface FieldState {
  value: string;
  isValid: boolean;
  touched?: boolean;
}

export type FieldsState = Partial<Record<Fields, FieldState>>;

const initialValues: FieldsState = {
  email: {
    value: "",
    isValid: false,
  },
  password: {
    value: "",
    isValid: false,
  },
};

export const SignInPage = () => {
  const [fieldsValues, setFieldsValues] = useState<FieldsState>(initialValues);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ApiServices.signUp(state);
  };

  //TODO Пробросить колбэк

  const handleChange = ({ target }: ChangeEvent<HTMLFormElement>) => {
    setFieldsValues((prevState) => ({
      ...prevState,
      [target.name as Fields]: {
        touched: true,
        value: target.value,
        isValid: fields[target.name as Fields].validate(
          target.value,
          fieldsValues
        ),
      },
    }));
  };

  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>Sign In</h2>
      <SignInForm
        fieldsValues={fieldsValues}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};
