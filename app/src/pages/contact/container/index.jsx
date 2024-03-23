import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const contacts = [
	{
		platform: 'Linked In',
		text: 'I Putu Phillip Steven',
		link: `https://www.linkedin.com/in/iputuphillipsteven/`,
		icon: <FaLinkedin className='text-2xl' />,
	},
	{
		platform: 'Github',
		text: 'putuphillipsteven',
		link: `https://github.com/putuphillipsteven`,
		icon: <FaGithub className='text-2xl' />,
	},
	{
		platform: 'Instagram',
		text: 'putuphillipsteven',
		link: `https://www.instagram.com/putuphillipsteven`,
		icon: <FaInstagram className='text-2xl' />,
	},
];
export const Contact = () => {
	const renderedContact = contacts?.map((contact) => {
		return (
			<Link
				rel='noreferrer'
				className='flex items-center gap-x-2'
				to={`${contact?.link}`}
				target='_blank'
				key={contact?.platform}
			>
				<li>{contact.text}</li>
				{contact?.icon}
			</Link>
		);
	});
	return (
		<div className='flex flex-row-reverse h-full b overflow-hidden w-full'>
			<div className='flex flex-col self-end w-full sm:w-8/12 h-fit gap-y-2'>
				<ul className='flex flex-col gap-y-2 self-end items-end'>{renderedContact}</ul>
			</div>
		</div>
	);
};
