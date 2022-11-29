import styles from "./LoadingContent.module.css";
import Button from "../Button";

interface LoadingProps {
  text: string;
}

export function LoadingContent({ text }: LoadingProps) {
  return (
    <div className={styles.loading_content}>
      <Button text={text} onClick={() => null} />
    </div>
  );
}
