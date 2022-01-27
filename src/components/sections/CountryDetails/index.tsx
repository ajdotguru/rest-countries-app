import { Button, Card, CardMedia, Grid, Stack } from '@mui/material';
import { useCountryDetailsData } from 'app/hooks';

interface ICountryDetailsProps {
	fullName: string;
}

export const CountryDetails: React.FC<ICountryDetailsProps> = ({ fullName }) => {
	const { data = [], isFetching } = useCountryDetailsData(fullName);

	if (isFetching) {
		return null;
	}

	const { flag, name } = data[0];

	return (
		<Stack>
			<Button>Back</Button>
			<Grid container>
				<Grid item xs={12} lg={6}>
					<Card raised={false}>
						<CardMedia component="img" image={flag} alt={name} />
					</Card>
				</Grid>
			</Grid>
		</Stack>
	);
};
