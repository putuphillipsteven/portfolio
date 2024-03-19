import { useState } from 'react';
import { Home } from './pages/home/container';

export const App = () => {
	return (
		<div className='p-4 font-mono bg-gray-200 max-w-screen h-screen'>
			<div className='p-2 border border-black max-w-full min-h-full flex flex-col gap-y-2'>
				<div className='p-2 bg-red-200'>
					<h2 className='text-2xl font-bold'>I Putu Phillip Steven</h2>
					<p>Web Developer</p>
				</div>
				<div className='p-2 bg-red-200 max-w-full min-h-full flex justify-between gap-x-2'>
					<div className='bg-green-200 w-4/12'>
						<ul>
							<li>Home</li>
						</ul>
					</div>
					<div className='bg-green-200 w-8/12'>
						<ul>
							<li>Home</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
