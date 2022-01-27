import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { ICountry } from 'app/models';

export const CountryListItem: React.FC<{ country: ICountry }> = ({ country }) => (
	<Card sx={{ maxWidth: 345 }}>
		<CardActionArea>
			<CardMedia component="img" height="140" image={country.flag} alt={country.name} />
			<CardContent sx={{ padding: '24px', paddingBottom: '34px' }}>
				<Typography gutterBottom variant="h5" component="div">
					{country.name}
				</Typography>
				<Box display="flex">
					<Typography variant="body1" marginRight={0.5}>
						Population:
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{country.population}
					</Typography>
				</Box>
				<Box display="flex">
					<Typography variant="body1" marginRight={0.5}>
						Region:{' '}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{country.region}
					</Typography>
				</Box>
				<Box display="flex">
					<Typography variant="body1" marginRight={0.5}>
						Capital:{' '}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{country.capital}
					</Typography>
				</Box>
			</CardContent>
		</CardActionArea>
	</Card>
);
