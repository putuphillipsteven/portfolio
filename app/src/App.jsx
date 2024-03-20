import { NavLink, Outlet } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go';
import capitalize from 'capitalize';
export const App = () => {
	const linkedList = ['home', 'skills', 'project', 'contact'];
	const linkedListElement = linkedList.map((link) => {
		return (
			<li>
				<NavLink to={`${link === 'home' ? `/` : `/${link}`}`} className='hover:font-bold'>
					{({ isActive }) =>
						isActive ? (
							<div className='flex items-center gap-x-1'>
								<GoDotFill />
								{capitalize.words(link)}
							</div>
						) : (
							capitalize.words(link)
						)
					}
				</NavLink>
			</li>
		);
	});

	return (
		<div className='p-8 font-mono  max-w-screen h-screen'>
			<div className='p-2 shadow-lg  max-w-full min-h-full grid gap-y-2 grid-rows-[15%_auto] grid-cols-1 content-stretch bg-gradient-to-b from-gray-200 to-gray-100 rounded-md'>
				<div className='p-2 max-h-full flex flex-col justify-normal overflow-hidden'>
					<h2 className='text-3xl font-bold'>I Putu Phillip Steven</h2>
					<p className='text-sm font-semibold'>Web Developer</p>
				</div>
				<div className='p-2 flex justify-between gap-x-2'>
					<div className='w-3/12 '>
						<ul className='flex flex-col gap-y-4'>{linkedListElement}</ul>
					</div>
					<div className='w-9/12'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};
