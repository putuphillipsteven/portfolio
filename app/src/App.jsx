import { useState } from 'react';
import { Home } from './pages/home/container';

export const App = () => {
	return (
		<div className='p-4 font-mono  max-w-screen h-screen'>
			<div className='p-2 border-2 border-black  max-w-full min-h-full grid gap-y-2 grid-rows-[12%_auto] grid-cols-1 content-stretch bg-gray-100 '>
				<div className='p-2 max-h-full flex flex-col justify-between overflow-hidden'>
					<h2 className='text-3xl font-medium'>I Putu Phillip Steven</h2>
					<p>Web Developer</p>
				</div>
				<div className='p-2 flex justify-between gap-x-2'>
					<div className=' w-4/12'>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Skills</li>
							<li>Project</li>
							<li>Contact Me</li>
						</ul>
					</div>
					<div className=' w-8/12'>
						<ul>
							<li>Content</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
