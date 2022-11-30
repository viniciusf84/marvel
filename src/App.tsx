import Header from './containers/Header';
import Footer from './containers/Footer';

import List from './containers/List';
import FiltersMenu from './containers/FiltersMenu';

import { FilterContextProvider } from './contexts/FilterContext';

import './styles/global.css';

function App() {
	return (
		<FilterContextProvider>
			<Header />

			<FiltersMenu />

			<List />

			<Footer text="© 2022 Marvel" />
		</FilterContextProvider>
	);
}

export default App;
