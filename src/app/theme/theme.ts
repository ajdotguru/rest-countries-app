import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const _theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 375,
			md: 900,
			lg: 1200,
			xl: 1440,
		},
	},
	typography: {
		fontFamily: "'Nunito Sans', sans-serif",
	},
	palette: {
		mode: 'dark',
		primary: {
			main: 'hsl(209, 23%, 22%)',
		},
		background: {
			paper: 'hsl(209, 23%, 22%)',
			default: 'hsl(207, 26%, 17%)',
		},
	},
});

export const theme = responsiveFontSizes(_theme);
