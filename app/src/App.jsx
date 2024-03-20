import { Link, Outlet } from 'react-router-dom';

export const App = () => {
	return (
		<div className='p-8 font-mono  max-w-screen h-screen'>
			<div className='p-4 shadow-lg  max-w-full min-h-full grid gap-y-2 grid-rows-[15%_auto] grid-cols-1 content-stretch bg-gradient-to-tr from-gray-300 to-gray-200 rounded-md'>
				<div className='p-2 max-h-full flex flex-col justify-normal overflow-hidden'>
					<h2 className='text-3xl font-bold'>I Putu Phillip Steven</h2>
					<p className='text-sm'>Web Developer</p>
				</div>
				<div className='p-2 flex justify-between gap-x-2'>
					<div className='w-3/12 '>
						<ul className='flex flex-col gap-y-4'>
							<li>
								<Link to={'/'}>Home</Link>
							</li>
							<li>
								<Link to={`/skills`}>Skills</Link>
							</li>
							<li>
								<Link to={`/project`}>Project</Link>
							</li>
							<li>
								<Link to={`/contact`}>Contact Me</Link>
							</li>
						</ul>
					</div>
					<div className='w-9/12'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};
