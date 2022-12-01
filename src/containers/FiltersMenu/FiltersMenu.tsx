import {
	useCallback,
	useEffect,
	useState,
	SetStateAction,
	useContext,
} from 'react';
import styles from './FiltersMenu.module.css';
import { getComicsData, getFiltersData } from '../../services';

import { FilterContext } from '../../contexts/FilterContext';

import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

export function FiltersMenu() {
	const [seriesData, setSeriesData] = useState([]);
	const [charactersData, setCharactersData] = useState([]);
	const [creatorsData, setCreatorsData] = useState([]);
	const [selectedFilters, setSelectedFilters] = useState({
		series: [],
		characters: [],
		creators: [],
	});
	const [applyFilters, setApplyFilters] = useState(false);

	const filterContext = useContext(FilterContext);

	const { setFilters, setComicsData, setIsLoading, resetData, setTotal } =
		filterContext.actions;

	const filtersGroup = [
		{
			title: 'series',
			state: seriesData,
			action: setSeriesData,
			label: 'title',
		},
		{
			title: 'characters',
			state: charactersData,
			action: setCharactersData,
			label: 'name',
		},
		{
			title: 'creators',
			state: creatorsData,
			action: setCreatorsData,
			label: 'fullName',
		},
	];

	const filterComics = useCallback(async (params: any) => {
		resetData();
		setIsLoading(true);

		try {
			const filtered = await getComicsData(0, params);

			setComicsData(filtered.results);
			setTotal(filtered.total);
		} catch (error) {
			console.log(error);
		}

		setIsLoading(false);
	}, []);

	const getMenuData = useCallback(
		async (type: string, action: SetStateAction<any>) => {
			try {
				const series = await getFiltersData(type);

				action(series);
			} catch (error) {
				console.log(error);
			}
		},
		[],
	);

	const displayItems = filtersGroup.map((filterGroup) => (
		<li key={filterGroup.title} className={styles.filters__menu_item}>
			<span>{filterGroup.title}</span>
			<div className={styles.arrow_down}></div>

			<section className={styles.filter_list}>
				{filterGroup.state.map((listItem) => {
					const isChecked =
						selectedFilters[filterGroup.title].indexOf(listItem.id) > -1;

					return (
						<Checkbox
							key={listItem.id}
							label={listItem[filterGroup.label]}
							isChecked={isChecked}
							setIsChecked={() =>
								setSelectedFilters((previous) => ({
									...previous,
									[filterGroup.title]: isChecked
										? /**  if is already checked, it filters the previous array
                        otherwise, it adds the new id to list */
										  previous[filterGroup.title].filter(
												(prevItem) => prevItem !== listItem.id,
										  )
										: [...previous[filterGroup.title], listItem.id],
								}))
							}
						/>
					);
				})}

				<Button
					text="OK"
					onClick={() => setApplyFilters(true)}
					classNames={styles.filter_list__button}
				/>
			</section>
		</li>
	));

	useEffect(() => {
		filtersGroup.forEach((item) => getMenuData(item.title, item.action));
	}, []);

	useEffect(() => {
		if (applyFilters) {
			filterComics(selectedFilters);
			setApplyFilters(false);
			setFilters(selectedFilters);
		}
	}, [selectedFilters, applyFilters]);

	return (
		<section className={styles.filters}>
			<div className={`${styles.filters__wrapper} wrapper`}>
				<ul>
					<li className={`${styles.filters__menu_item} ${styles.bold}`}>
						Browse by
					</li>
					{displayItems}
				</ul>
			</div>
		</section>
	);
}
