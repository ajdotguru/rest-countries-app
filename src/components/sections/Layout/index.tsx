import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from 'components/sections';

export const Layout = () => (
	<>
		<Header />
		<Container maxWidth="xl" sx={{ marginTop: 4 }}>
			<Outlet />
		</Container>
	</>
);
