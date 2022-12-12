import SocialMedia, { socialMediaList } from '../../components/SocialMedia';

import styles from './Header.module.css';
import Logo from '../../assets/images/marvel_logo.png';
import HeaderMenu from '../HeaderMenu';

export function Header() {
	return (
		<>
			<header className={styles.header}>
				<div className={`${styles.header__wrapper} wrapper`}>
					<img className="brand" src={Logo} alt="Marvel" />

					<ul className={`${styles.social} flex-default`}>
						{socialMediaList.map((item, index) => (
							<SocialMedia
								key={index}
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
