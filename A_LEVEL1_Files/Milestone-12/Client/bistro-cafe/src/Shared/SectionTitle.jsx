const SectionTitle = (props) => {
	return (
		<div className=' mx-auto  md:w-3/12 my-8'>
			<p className='text-yellow-800 '>-----{props.subHeading}---</p>

			<h3 className='text-4xl uppercase border-y-4 py-4  '>{props.heading}</h3>
		</div>
	);
};

export default SectionTitle;
