import { Grid } from '@mui/material';
import { useCountriesData } from 'app/hooks';
import { CountryListItem } from 'components/sections';

export const CountryList = () => {
	const { data = [] } = useCountriesData();

	return (
		<Grid container spacing={8} marginTop={4}>
			{data.map(country => (
				<Grid item xs={12} xl={3} key={country.name}>
					<CountryListItem country={country} />
				</Grid>
			))}
		</Grid>
	);
};
