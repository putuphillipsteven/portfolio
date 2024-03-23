import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';

const works = [
	{
		name: 'Pure Multiwarehouse E-Commerce',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt eveniet
						sapiente nostrum animi nam expedita doloremque fugiat exercitationem obcaecati?`,
		link: `https://github.com/purwadhikafullstack/JCWD021001`,
		imageLink: `https://lh3.googleusercontent.com/d/1YeFUJClIoVNvnWUAtmSLYe9dhuXYamw_=w1000?authuser=0`,
	},
	{
		name: 'Circle-K POS',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt eveniet
		sapiente nostrum animi nam expedita doloremque fugiat exercitationem obcaecati?`,
		link: `https://github.com/wllmsawi/PSS-FE`,
		imageLink: `https://lh3.googleusercontent.com/d/1Ua4UMcuSx7m-Zso49I00Mg-nWRcuiEIz=w1000?authuser=0`,
	},
	{
		name: 'Calculator',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt eveniet
						sapiente nostrum animi nam expedita doloremque fugiat exercitationem obcaecati?`,
		link: `https://putuphillipsteven.github.io/calculator/`,
		imageLink: `https://lh3.googleusercontent.com/d/1QJCZelGz5PDW9UZM58UVEJkglZkjLUnq=w1000?authuser=0`,
	},
];

export const Works = () => {
	const renderedWorks = works?.map((work) => {
		return (
			<div className='flex flex-col gap-y-2' key={[work?.name]}>
				<Link
					to={`${work?.link}`}
					target='_blank'
					className='flex items-center gap-x-2 '
					rel='noreferrer'
				>
					<h2 className='text-sm sm:text-lg border-black border-b-2  font-bold '>{work?.name}</h2>
					<MdArrowOutward />
				</Link>
				<p className='text-justify'>{work?.description}</p>
				<div className='w-full md:w-7/12 aspect-video border-black border-2'>
					<img src={`${work?.imageLink}`} />
				</div>
			</div>
		);
	});
	return (
		<div className='flex flex-row-reverse h-full b overflow-hidden'>
			<div className='self-end w-full sm:w-8/12 max-h-[30em]  overflow-y-auto no-scrollbar flex flex-col gap-y-4'>
				{renderedWorks}
			</div>
		</div>
	);
};
