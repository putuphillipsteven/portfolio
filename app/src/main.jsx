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

const router = createBrowserRouter(
	createRoutesFromElements(<Route index element={<App />}></Route>),
);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
