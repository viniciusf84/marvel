import SocialMedia from '../../components/SocialMedia';

import {
	faFacebookSquare,
	faYoutube,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import styles from './Header.module.css';
import Logo from '../../assets/images/marvel_logo.png';
import HeaderMenu from '../HeaderMenu';

const socialmedia = [
	{ label: 'facebook', link: 'https://facebook.com', icon: faFacebookSquare },
	{ label: 'youtube', link: 'https://youtube.com', icon: faYoutube },
	{ label: 'twitter', link: 'https://twitter.com', icon: faTwitter },
];

export function Header() {
	return (
		<>
			<header className={styles.header}>
				<div className={`${styles.header__wrapper} wrapper`}>
					<img className="brand" src={Logo} alt="Marvel" />

					<ul className={`${styles.social} flex-default`}>
						{socialmedia.map((item) => (
							<SocialMedia
								label={item.label}
								link={item.link}
								icon={item.icon}
							/>
						))}
					</ul>
				</div>
			</header>
			<HeaderMenu />
		</>
	);
}
