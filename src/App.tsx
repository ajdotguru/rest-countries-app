import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from 'app/theme';
import { Layout } from 'components/sections';

const HomePage = lazy(() => import('components/pages/Home'));
const CountryDetailsPage = lazy(() => import('components/pages/CountryDetails'));

export const App = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
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
							<Route
								path=":countryName"
								element={
									<Suspense fallback={<>...</>}>
										<CountryDetailsPage />
									</Suspense>
								}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
