import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/home/container';
import { ErrorPages } from './pages/error-pages/container';
import { Skills } from './pages/skills/container';
import { Works } from './pages/works/container';
import { Contact } from './pages/contact/container';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />} errorElement={<ErrorPages />}>
			<Route errorElement={<ErrorPages />}>
				<Route index element={<Home />} errorElement={<ErrorPages />} />
				<Route path='/skills' element={<Skills />} errorElement={<ErrorPages />} />
				<Route path='/works' element={<Works />} errorElement={<ErrorPages />} />
				<Route path='/contact' element={<Contact />} errorElement={<ErrorPages />} />
			</Route>
		</Route>,
	),
);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
