import { useNavigate } from 'react-router-dom';
import { Button, Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import { useCountryDetailsData } from 'app/hooks';

interface ICountryDetailsProps {
	fullName: string;
}

export const CountryDetails: React.FC<ICountryDetailsProps> = ({ fullName }) => {
	const { data = [], isFetching } = useCountryDetailsData(fullName);
	const navigate = useNavigate();

	if (isFetching) {
		return null;
	}

	console.log('data :: ', data);

	const {
		flag,
		name,
		nativeName,
		population,
		region,
		subregion,
		capital,
		topLevelDomain,
		currencies,
		languages,
	} = data && data[0];

	return (
		<>
			<Button variant="contained" onClick={() => navigate('/')}>
				Back
			</Button>
			<Grid
				container
				marginTop={6}
				columnSpacing={6}
				display="flex"
				alignItems="center"
				justifyContent="space-between"
			>
				<Grid item xs={12} lg={6}>
					<Card raised={false}>
						<CardMedia component="img" image={flag} alt={name} />
					</Card>
				</Grid>
				<Grid item xs={12} lg={6}>
					<Typography variant="h4" fontWeight={800} gutterBottom={true}>
						{name}
					</Typography>
					<Grid container>
						<Grid item xs={12} lg={6}>
							<Box display="flex">
								<Typography variant="body1" marginRight={0.5}>
									Native Name:
								</Typography>
								<Typography variant="body1" color="text.secondary">
									{nativeName}
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="body1" marginRight={0.5}>
									Population:
								</Typography>
								<Typography variant="body1" color="text.secondary">
									{population}
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="body1" marginRight={0.5}>
									Region:
								</Typography>
								<Typography variant="body1" color="text.secondary">
									{region}
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="body1" marginRight={0.5}>
									Sub Region:
								</Typography>
								<Typography variant="body1" color="text.secondary">
									{subregion}
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="body1" marginRight={0.5}>
									Capital:
								</Typography>
								<Typography variant="body1" color="text.secondary">
									{capital}
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} lg={6}>
							<Box display="flex">
								<Typography variant="body1" marginRight={0.5}>
									Top Level Domain:
								</Typography>
								<Typography variant="body1" color="text.secondary">
									{topLevelDomain[0]}
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="body1" marginRight={0.5}>
									Currencies:
								</Typography>
								<Typography variant="body1" color="text.secondary">
									{currencies ? currencies[0].name : '-'}
								</Typography>
							</Box>
							<Box display="flex">
								<Typography variant="body1" marginRight={0.5}>
									Languages:
								</Typography>
								<Typography variant="body1" color="text.secondary">
									{languages.map(language => language.name).join(', ')}
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
