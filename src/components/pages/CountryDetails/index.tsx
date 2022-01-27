import { useParams } from 'react-router-dom';
import { CountryDetails } from 'components/sections';

const CountryDetailsPage = () => {
	const { countryName = '' } = useParams();

	return <CountryDetails fullName={countryName} />;
};

export default CountryDetailsPage;
