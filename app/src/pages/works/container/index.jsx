import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';

const works = [
	{
		name: 'Pure Multi Warehouse E-Commerce',
		description: `A Web App for companies like Uniqlo that has many warehouse. In this app, we can manage our users, warehouses, products, stocks, reports, and transactions.`,
		techStacks: [`Javascript`, `My Sql`, `React`, `Express`, `Node`, `Sequelize`, `Chakra UI`],
		link: `https://github.com/putuphillipsteven/pure/tree/development`,
		imageLink: `https://lh3.googleusercontent.com/d/1YeFUJClIoVNvnWUAtmSLYe9dhuXYamw_=w1000?authuser=0`,
	},
	{
		name: 'Circle-K POS',
		description: `Point Of Sales Web App that similar to the Circle-K design. In this app, we can manage our products, reports, and transactions`,
		techStacks: [`Typescript`, `My Sql`, `React`, `Express`, `Node`, `Sequelize`, `Chakra UI`],
		link: `https://github.com/putuphillipsteven/blp-fe`,
		imageLink: `https://lh3.googleusercontent.com/d/1Ua4UMcuSx7m-Zso49I00Mg-nWRcuiEIz=w1000?authuser=0`,

	}
	,
	{
		name: 'WarungTiket Event Management',
		description: `Event Management Web App like Loket.com but with very simple feature. This app give us feature like create an event, and buying tickets`,
		techStacks: [`Javascript`, `My Sql`, `React`, `Express`, `Node`, `Sequelize`, `Chakra UI`],
		link: `https://github.com/putuphillipsteven/warungtiket.git`,
		imageLink: `https://lh3.googleusercontent.com/d/1H46bh2iJzbWWOnrG3TBOZm2mfWRvD-4t=w1000?authuser=0`,
		src : `./src/assets/WarungTiket_Portfolio_Thumbnail.jpg`
	},
	{
		name: 'Calculator',
		description: `Simple calculator app`,
		techStacks: [`HTML`, `CSS`, `Javascript`],
		link: `https://putuphillipsteven.github.io/calculator/`,
		src : `./src/assets/Calculator_Portfolio_Thumbnail.jpg`
	},
];

export const Works = () => {
	const renderedWorks = works?.map((work) => {
		const renderedTechStacks = work?.techStacks?.map((tech) => {
			return (
				<div className=' bg-black rounded-lg text-white px-2 py-1' key={work?.id}>
					<p className='text-xs'>{tech}</p>
				</div>
			);
		});
		return (
			<div className='flex flex-col gap-y-2 w-full justify-between' key={work?.name}>

				<Link
					to={`${work?.link}`}
					target='_blank'
					className='flex items-center gap-x-2 '
					rel='noreferrer'
				>
					<h2 className='text-sm sm:text-lg border-black border-b-2  font-bold '>{work?.name}</h2>
					<MdArrowOutward/>
				</Link>
				<p className='text-justify'>{work?.description}</p>
				<div className='w-full h-fit border-black border-2 p-1'>
					{/*<p className='text-xs'>I&apos;m sorry, those are for the thumbnail, but I think drive change their ways to load it.</p>*/}
					<img src={`${work?.src}`} alt={`${work?.name} Thumbnail Image`} className='aspect-video' />
				</div>
				<div className='flex flex-wrap lg:grid-cols-3 gap-1'>{renderedTechStacks}</div>
			</div>
		);
	});
	return (
		<div className='flex flex-row-reverse h-full b overflow-hidden'>
			<div className='self-end w-full sm:w-6/12 max-h-[25em] overflow-y-auto no-scrollbar flex flex-col items-end gap-y-4'>
				{renderedWorks}
			</div>
		</div>
	);
};
