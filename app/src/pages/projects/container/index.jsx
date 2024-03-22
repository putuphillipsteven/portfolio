import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';

export const Projects = () => {
	return (
		<div className='flex flex-row-reverse h-full b overflow-hidden w-full'>
			<div className='self-end w-full sm:w-8/12 max-h-[35em]  overflow-y-auto no-scrollbar'>
				<div className='flex flex-col gap-y-2'>
					<Link to={`https://google.com`} target='_blank' className='flex items-center gap-x-2 '>
						<h2 className='text-sm md:text-lg border-black border-b-2 font-bold'>
							Event Ticket Management
						</h2>
						<MdArrowOutward />
					</Link>
					<p className='text-justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt eveniet
						sapiente nostrum animi nam expedita doloremque fugiat exercitationem obcaecati?
					</p>
					<div className='w-full md:w-6/12 aspect-video border-black border-2'>
						<img />
					</div>
				</div>
			</div>
		</div>
	);
};
