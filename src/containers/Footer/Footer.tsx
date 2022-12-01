import styles from './Footer.module.css';

import { VerticalMenu } from '../../components/VerticalMenu/VerticalMenu';
import Logo from '../../assets/images/marvel_logo.png';
import SocialMedia, { socialMediaList } from '../../components/SocialMedia';

interface FooterProps {
	text: string;
}

export function Footer({ text }: FooterProps) {
	return (
		<footer className={styles.footer}>
			<div className="wrapper">
				<VerticalMenu />
			</div>

			<div className="wrapper flex-default">
				<img className="brand small" src={Logo} alt="Marvel" />

				<ul className={`${styles.social} flex-default`}>
					{socialMediaList.map((item) => (
						<SocialMedia label={item.label} link={item.link} icon={item.icon} />
					))}
				</ul>
			</div>
		</footer>
	);
}
