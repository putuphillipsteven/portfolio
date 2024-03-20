import { Link, useRouteError } from 'react-router-dom';

export const ErrorPages = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div className='flex flex-col font-mono max-w-screen items-center h-screen justify-center'>
			<p>Sorry, an unexpected error has occured</p>
			<p>
				<i>{error.statusText || error.messages}</i>
			</p>
			<p>
				Back to{' '}
				<Link to={'/'} className='text-blue-600'>
					Home
				</Link>
			</p>
		</div>
	);
};
