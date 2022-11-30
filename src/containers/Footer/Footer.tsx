import styles from './Footer.module.css';

interface FooterProps {
	text: string;
}

export function Footer({ text }: FooterProps) {
	return (
		<footer className={styles.footer}>
			<div className="wrapper">
				<p>{text}</p>
			</div>
		</footer>
	);
}
