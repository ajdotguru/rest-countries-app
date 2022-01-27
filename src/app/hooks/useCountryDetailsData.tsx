import { useQuery } from 'react-query';
import { axios } from 'app/utils';
import { ICountryDetails } from 'app/models';

const getCountryDetails = async (fullName: string) => {
	const { data } = await axios.get<ICountryDetails[]>(`/name/${fullName}?fullText=true`);

	return data;
};

export const useCountryDetailsData = (fullName: string) => {
	return useQuery(['country-details', fullName], () => getCountryDetails(fullName), {
		enabled: fullName !== '',
	});
};
