import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const _theme = createTheme({
	typography: {
		fontFamily: "'Nunito Sans', sans-serif",
	},
});

export const theme = responsiveFontSizes(_theme);
