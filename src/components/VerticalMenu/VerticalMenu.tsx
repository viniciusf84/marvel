import { useMemo } from 'react';
import styles from './VerticalMenu.module.css';

const menuItems = [
	[
		{ label: 'Comics', isTitle: true },
		{ label: 'Release calendar', link: '#' },
		{ label: 'Marvel Unlimited', link: '#' },
		{ label: 'Redeem Digital Copy', link: '#' },
		{ label: 'Shop Digital Comics', link: '#' },
		{ label: 'Print Subscriptions', link: '#' },
		{ label: 'Developer portal', link: '#' },
	],
	[
		{ label: 'Characters', isTitle: true },
		{ label: 'Spider-Man', link: '#' },
		{ label: 'Avengers', link: '#' },
		{ label: 'Iron Man', link: '#' },
		{ label: 'Doctor Strange', link: '#' },
		{ label: 'Captain America', link: '#' },
	],
	[
		{ label: 'Kids', isTitle: true },
		{ label: 'Marvel HQ', link: '#' },
		{ label: 'Kids Games', link: '#' },
		{ label: 'Kides Videos', link: '#' },
		{ label: 'Kids Activities', link: '#' },
	],
	[
		{ label: 'Marvel', isTitle: true },
		{ label: 'Sign Up', link: '#' },
		{ label: 'Marvel Mastercard®', link: '#' },
		{ label: 'Marvel Insider', link: '#' },
		{ label: 'Help / FAQs', link: '#' },
		{ label: 'Email Preferences', link: '#' },
		{ label: 'About Marvel', link: '#' },
		{ label: 'Advertising', link: '#' },
		{ label: 'Internships', link: '#' },
		{ label: 'Collectibles', link: '#' },
		{ label: 'Careers', link: '#' },
	],
	[
		{ label: 'Insider', isTitle: true },
		{ label: 'Join Today', link: '#' },
		{ label: 'Home', link: '#' },
		{ label: 'Activities', link: '#' },
		{ label: 'Rewards', link: '#' },
		{ label: 'Member Profile', link: '#' },
		{ label: 'FAQs', link: '#' },
		{ label: 'Marvel Insider Terms of Use', link: '#' },
	],
];

export function VerticalMenu() {
	const displayMenuItems = useMemo(() => {
		return menuItems.map((menu, menuIndex) => {
			return (
				<ul key={menuIndex}>
					{menu.map((item) => {
						if (item.isTitle) {
							return <li className={styles.menu__title}>{item.label}</li>;
						}
						return (
							<li>
								<a href={item.link}>{item.label}</a>
							</li>
						);
					})}
				</ul>
			);
		});
	}, [menuItems]);

	return (
		<nav className={styles.vertical_menu}>
			<div className="wrapper">
				<div className={styles.vertical_menu__columns}>{displayMenuItems}</div>
			</div>
		</nav>
	);
}
