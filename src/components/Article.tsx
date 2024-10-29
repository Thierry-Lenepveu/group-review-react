//Nous créons une interface pour définir le type de données des props.

interface ArticleProps {
	imgSrc: string;
	mainTitle: string;
	description: string;
}

function Article({ imgSrc, mainTitle, description }: ArticleProps) {
	return (
		<article className="items">
			<img src={imgSrc} alt="" />
			<h3>{mainTitle}</h3>
			<p>{description}</p>
		</article>
	);
}

export default Article;
