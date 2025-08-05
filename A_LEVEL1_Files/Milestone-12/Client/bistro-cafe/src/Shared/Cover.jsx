const Cover = ({ image, title }) => {
	return (
		<div>
			<div
				className='hero h-[700px] min-h-screen'
				style={{
					backgroundImage: `url("${image}")`,
				}}
			>
				<div className='hero-overlay'></div>
				<div className='hero-content text-neutral-content text-center'>
					<div className='max-w-md'>
						<h1 className='mb-5 text-5xl font-bold'>{title}</h1>
						<p className='mb-5'>{title}</p>
						<button className='btn btn-primary'>Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cover;
