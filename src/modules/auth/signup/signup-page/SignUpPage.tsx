import React, { useState, ChangeEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SignUpForm } from "../signUpForm/SignUpForm";
import styles from "./signUpPage.module.scss";
import {
  checkLength,
  isEmail,
  isStandartPassword,
} from "../../../../core/helpers/validators";
import { AppState } from "../../../../redux/store/store";
import { signUpAction } from "../../AuthActions";

type Fields =
  | "firstName"
  | "lastName"
  | "email"
  | "password"
  | "confirmPassword";

type Field = Record<
  Fields,
  {
    name: Fields;
    validate: (value: string, state?: FieldsState) => boolean | undefined;
  }
>;

const fields: Field = {
  firstName: {
    name: "firstName",
    validate: (value) => checkLength(value, 3),
  },
  lastName: {
    name: "lastName",
    validate: (value) => checkLength(value, 3),
  },
  email: {
    name: "email",
    validate: (value) => isEmail(value),
  },
  password: {
    name: "password",
    validate: (value) => isStandartPassword(value),
  },
  confirmPassword: {
    name: "confirmPassword",
    validate: (value, state) =>
      state?.password && value === state.password.value,
  },
};

interface FieldState {
  value: string;
  isValid: boolean;
  touched?: boolean;
}
export type FieldsState = Partial<Record<Fields, FieldState>>;

const initialValues: FieldsState = {
  firstName: {
    value: "",
    isValid: false,
  },
  lastName: {
    value: "",
    isValid: false,
  },
  email: {
    value: "",
    isValid: false,
  },
  password: {
    value: "",
    isValid: false,
  },
  confirmPassword: {
    value: "",
    isValid: false,
  },
};

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { user } = useSelector((state: AppState) => state.auth);
  const [fieldsValues, setFieldsValues] = useState<FieldsState>(initialValues);

  useEffect(() => {
    user && push("/");
  }, [user, push]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (
      !fieldsValues.firstName ||
      !fieldsValues.lastName?.value ||
      !fieldsValues.email?.value ||
      !fieldsValues.password?.value
    ) {
      return;
    }
    
    const touched =
      fieldsValues.firstName?.touched &&
      fieldsValues.lastName?.touched &&
      fieldsValues.email?.touched &&
      fieldsValues.password?.touched &&
      fieldsValues.confirmPassword?.touched;

    const isValid =
      fieldsValues.firstName?.isValid &&
      fieldsValues?.lastName?.isValid &&
      fieldsValues.email?.isValid &&
      fieldsValues.password?.isValid &&
      fieldsValues.confirmPassword?.isValid;
    const checkValid = touched && isValid;

    checkValid &&
      dispatch(
        signUpAction({
          firstName: fieldsValues.firstName.value,
          lastName: fieldsValues.lastName.value,
          email: fieldsValues.email.value,
          password: fieldsValues.password.value,
        })
      );
  };

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
    <div className={styles.registration}>
      <h2 className={styles.title}>Registration</h2>
      <SignUpForm
        fieldsValues={fieldsValues}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};
