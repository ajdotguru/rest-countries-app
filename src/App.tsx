import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from 'app/theme';
import { Layout } from 'components/sections';

const HomePage = lazy(() => import('components/pages/Home'));

export const App = () => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							<Suspense fallback={<>...</>}>
								<HomePage />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</ThemeProvider>
);
