import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <div className={styles.button}>
      <button onClick={() => onClick()}>
        <span>{text}</span>
      </button>
    </div>
  );
}
