import { useQuery } from 'react-query';
import { axios } from 'app/utils';
import { ICountry } from 'app/models';

const getCountries = async () => {
	const { data } = await axios.get<ICountry[]>('/all');

	return data;
};

export const useCountriesData = () => {
	return useQuery('countries', getCountries);
};
