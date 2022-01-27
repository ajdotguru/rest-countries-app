import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'components/sections';

const HomePage = lazy(() => import('components/pages/Home'));

export const App = () => (
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
);
