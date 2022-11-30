import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialMedia.module.css';

interface SocialMediaProps {
	label: string;
	icon: any;
	link: string;
}

export function SocialMedia({ label, icon, link }: SocialMediaProps) {
	return (
		<li className={styles.socialIcon}>
			<a href={link} className={styles[label]} target="_blank">
				<FontAwesomeIcon icon={icon} />
			</a>
		</li>
	);
}
