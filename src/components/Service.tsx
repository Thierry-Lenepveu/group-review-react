interface ServiceProps {
	mainTitle: string;
	description: string;
}

function Service({ mainTitle, description }: ServiceProps) {
	return (
		<>
			<h3>{mainTitle}</h3>
			<p>{description}</p>
		</>
	);
}

export default Service;
