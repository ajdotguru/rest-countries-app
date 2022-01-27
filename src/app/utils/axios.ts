import Axios from 'axios';

export const axios = Axios.create({
	baseURL: 'https://restcountries.com/v2',
});
