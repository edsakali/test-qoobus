import styles from "./input.module.scss";

interface Props {
  label: string;
  name: string;
  type: "text" | "password" | "email";
  onChange?: () => void;
  onBlur?: () => void;
  error?: boolean;
}

export const Input = ({
  label,
  name,
  type,
  onChange,
  onBlur,
  error,
}: Props) => {
  return (
    <div className={styles.input}>
      {label && (
        <label>
          {label}
          <span>*</span>
        </label>
      )}
      <input type={type} name={name} onChange={onChange} />
    </div>
  );
};
