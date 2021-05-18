import { RegistrationForm } from "../components/restration-form/RegistrationForm";
import "./RegistrationPage.Styles.scss";

export const RegistrationPage = () => {
  return (
    <div className={"registration"}>
      <h2 className={"registration--title"}>Registration</h2>
      <RegistrationForm />
    </div>
  );
};
