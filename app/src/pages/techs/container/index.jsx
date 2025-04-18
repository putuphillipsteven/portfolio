export const Techs = () => {
	const skills = [
		{ name: 'Front End', listOfSkills: ['HTML', 'CSS', 'SASS', 'Javascript', 'React', 'Next'] },
		{ name: 'Back End', listOfSkills: ['MySQL', 'Node.Js', 'Express.Js'] },
		{ name: 'Tools', listOfSkills: ['Git', 'VSCode'] },
	];
	const renderedSkills = skills?.map((skill) => {
		const renderedListOfSkills = skill?.listOfSkills?.map((listOfSkill) => {
			return (
				<li key={listOfSkill}>
					<p>{listOfSkill}</p>
				</li>
			);
		});
		return (
			<div className='p-1 flex flex-col gap-y-2 self-end items-end' key={skill?.name}>
				<h2 className='text-sm sm:text-lg border-black border-b-2 font-bold '>{skill?.name}</h2>
				<ul className='flex flex-col items-end'>{renderedListOfSkills}</ul>
			</div>
		);
	});
	return (
		<div className='flex flex-row-reverse h-full b overflow-hidden w-full'>
			<div className='flex flex-col self-end w-full sm:w-8/12 h-fit gap-y-2'>{renderedSkills}</div>
		</div>
	);
};
