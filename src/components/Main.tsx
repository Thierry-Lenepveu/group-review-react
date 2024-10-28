import Work from "./Work";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

function Main() {
    return (
        <>
            <h1>Hello 👋<br />
            I am Thierry - travel lover <br />
            who like to share <br />
            wonderful pictures of his journey.
            </h1>
            <Work />
            <Services />
            <About />
            <Contact />
        </>
    )
}

export default Main;