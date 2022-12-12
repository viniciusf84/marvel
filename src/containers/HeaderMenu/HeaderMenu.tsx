import { useMemo } from 'react';
import styles from './HeaderMenu.module.css';

export function HeaderMenu() {
	const MenuItems = [
		{ label: 'New!', link: '#' },
		{ label: 'Comics', link: '#' },
		{ label: 'Characters', link: '#' },
		{ label: 'Clothes', link: '#' },
		{ label: 'Acessories', link: '#' },
		{ label: 'Toys', link: '#' },
		{ label: 'Home Décor', link: '#' },
		{ label: 'Entertainment', link: '#' },
		{ label: 'Collectibles', link: '#' },
		{ label: 'Sales', link: '#' },
	];

	const displayMenuItems = useMemo(() => {
		return (
			<ul>
				<li className={styles.menu__title}>Shop</li>
				{MenuItems.map((item, menuItemIndex) => (
					<li key={menuItemIndex}>
						<a href={item.link}>{item.label}</a>
					</li>
				))}
			</ul>
		);
	}, []);

	return (
		<nav className={styles.header__menu}>
			<div className="wrapper">{displayMenuItems}</div>
		</nav>
	);
}
