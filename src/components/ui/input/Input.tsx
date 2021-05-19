import styles from "./input.module.scss";

interface Props {
  label: string;
  name: string;
  type: "text" | "password" | "email";
  error?: boolean;
  errorMessage?: string;
}

export const Input = ({ label, name, type, error, errorMessage }: Props) => {
  return (
    <div className={styles.input}>
      {label && (
        <label>
          {label}
          <span>*</span>
        </label>
      )}
      <input type={type} name={name} />
      {error ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
    </div>
  );
};
