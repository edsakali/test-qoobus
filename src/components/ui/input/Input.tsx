import "./Input.Styles.scss";

interface Props {
  label: string;
  name: string;
  type: "text" | "password" | "email";
  onChange?: () => void;
  onBlur?: () => void;
  valid?: boolean;
}

export const Input = ({
  label,
  name,
  type,
  onChange,
  onBlur,
  valid,
}: Props) => {
  return (
    <div className={"input"}>
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
