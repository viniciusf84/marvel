import { SetStateAction } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  setIsChecked: () => void;
}

export function Checkbox({ label, isChecked, setIsChecked }: CheckboxProps) {
  return (
    <div className={styles.checkbox__wrapper}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
