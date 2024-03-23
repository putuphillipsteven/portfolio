import { NavLink, Outlet } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go';
import capitalize from 'capitalize';
export const App = () => {
	const linkedList = ['home', 'skills', 'works', 'contact'];
	const linkedListElement = linkedList.map((link) => {
		return (
			<li>
				<NavLink
					to={`${link === 'home' ? `/` : `/${link}`}`}
					className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : 'hover:font-bold'
					}
				>
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
		<div className='p-8 max-w-screen h-screen overflow-hidden'>
			<div className='p-2 shadow-lg  max-w-full h-full grid gap-y-2 grid-rows-[min-content_auto] grid-cols-1 content-stretch bg-gradient-to-b from-gray-200 to-gray-100 overflow-hidden'>
				<div className='p-2 flex flex-col justify-between overflow-hidden h-fit'>
					<h2 className='text-xl font-bold w-fit sm:text-3xl md:text-4xl'>I Putu Phillip Steven</h2>
					<p className='md:text-xl'>Web Developer</p>
				</div>
				<div className='p-2 flex justify-between  gap-x-2'>
					<div className='w-3/12 '>
						<ul className='flex flex-col gap-y-4'>{linkedListElement}</ul>
					</div>
					<div className='w-9/12 h-full'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};
