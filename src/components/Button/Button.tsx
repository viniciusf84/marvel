import styles from './Button.module.css';

interface ButtonProps {
	text: string;
	onClick: () => void;
	classNames?: string;
}

export function Button({ text, onClick, classNames }: ButtonProps) {
	return (
		<div className={`${styles.button} ${classNames}`}>
			<button onClick={() => onClick()}>
				<span>{text}</span>
			</button>
		</div>
	);
}
