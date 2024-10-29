import Article from "./Article";

function Work() {
	return (
		//Nous avons intégrer des composants articles grâces aux props définis.
		<section id="Work">
			<h2>Work.</h2>
			
			<div id ="bloc-items">
			
			<Article
				imgSrc="./src/assets/_MG_1753.jpg"
				mainTitle="Brooklyn Bridge"
				description="View of the Brooklyn Bridge with a wonderful blue sky."
			/>
			<Article
				imgSrc="./src/assets/_MG_1789.jpg"
				mainTitle="Manhattan Bridge"
				description="View from the Washington Street with a beautiful sun."
			/>
			<Article
				imgSrc="./src/assets/_MG_1798.jpg"
				mainTitle="Manhatthan One World Trade Center"
				description="View from Brooklyn with cloudy sky."
			/>
			<Article
				imgSrc="./src/assets/_MG_1834.jpg"
				mainTitle="Empire State Building"
				description="In Newww Yooooork !"
			/>
	      
		  </div>
		</section>
	);
}

export default Work;
