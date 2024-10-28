import { useState } from "react";

interface ServiceProps {
	mainTitle: string;
	description: string;
}

function Service({ mainTitle, description }: ServiceProps) {
	const [isHidden, setHidden] = useState(false);
	return (
		<article>
			<h3 onClick={() => {setHidden(!isHidden)}}>{mainTitle}</h3>
			<p className={isHidden ? "hidden" : ""}>{description}</p>
		</article>
	);
}

export default Service;
