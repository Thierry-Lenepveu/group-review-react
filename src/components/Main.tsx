import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Work from "./Work";

function Main() {
	return (
		<>
			<h1>
				Hello <span className="waving-hand">👋</span>
				<br />I am Thierry - travel lover <br />
				who like to share <br />
				wonderful pictures of his journey.
			</h1>
			<Work />
			<Services />
			<About />
			<Contact />
		</>
	);
}

export default Main;
