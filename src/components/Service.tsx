interface ServiceProps {
	mainTitle: string;
	description: string;
}

function Service({ mainTitle, description }: ServiceProps) {
	return (
		<>
			<h2>{mainTitle}</h2>
			<p>{description}</p>
		</>
	);
}

export default Service;
