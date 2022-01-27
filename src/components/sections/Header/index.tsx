import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export const Header = () => (
	<AppBar position="static">
		<Container maxWidth="xl">
			<Toolbar disableGutters={true}>
				<Typography sx={{ flexGrow: 1 }}>Where in the world?</Typography>
				<Typography>Dark Mode</Typography>
			</Toolbar>
		</Container>
	</AppBar>
);
