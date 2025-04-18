import ReactDOM from 'react-dom';
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
import { Techs } from './pages/techs/container';
import { Works } from './pages/works/container';
import { Contact } from './pages/contact/container';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />} errorElement={<ErrorPages />}>
			<Route errorElement={<ErrorPages />}>
				<Route index element={<Home />} errorElement={<ErrorPages />} />
				<Route path='/techs' element={<Techs />} errorElement={<ErrorPages />} />
				<Route path='/works' element={<Works />} errorElement={<ErrorPages />} />
				<Route path='/contact' element={<Contact />} errorElement={<ErrorPages />} />
			</Route>
		</Route>,
	),
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<RouterProvider router={router} />
	</>,
);
