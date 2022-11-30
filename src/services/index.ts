import axios from 'axios';
import md5 from 'md5';

const BASE_URL = 'http://gateway.marvel.com/v1/public/';
const PUBLIC_KEY = '1e5847a62f33e1c71d84d9b5fe2d2c5b';
const PRIVATE_KEY = 'b89eb72b245e82dfe9363b10278fe5b0bcc0f131';
const TIMESTAMP = Number(new Date());

const HASH = md5(TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY);

const getUrl = (type: String) =>
	`${BASE_URL}${type}?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

export const getComicsData = async (offset: Number, filterParams?: any) => {
	try {
		const response = await axios.get(getUrl('comics'), {
			params: {
				limit: 12,
				offset,
				format: 'comic',
				orderBy: 'focDate',
				...filterParams,
			},
		});

		return response.data.data;
	} catch (err) {
		console.log(err);
	}
};

export const getFiltersData = async (type: string) => {
	try {
		const response = await axios.get(getUrl(type));

		return response.data.data.results;
	} catch (err) {
		console.log(err);
	}
};
