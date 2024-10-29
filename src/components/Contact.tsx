import { useState } from "react";
import ContactForm from "./ContactForm";

function Contact() {
	const [isHidden, setHidden] = useState(true);
	return (
		<section id="contact">
			<h2>Contact.</h2>
			<button type="button" onClick={() => {setHidden(false)}}>Contact me!</button>
			<ContactForm isHidden={isHidden} setHidden={setHidden}/>
		</section>
	);
}

export default Contact;
