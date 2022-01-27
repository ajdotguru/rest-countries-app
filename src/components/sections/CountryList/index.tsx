import { useCountriesData } from 'app/hooks';

export const CountryList = () => {
	const { data, isFetching } = useCountriesData();

	return <h1>Country List</h1>;
};
