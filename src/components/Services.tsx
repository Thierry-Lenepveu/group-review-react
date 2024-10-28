import Service from "./Service";

function Services() {
	return (
		<section id="Services">
			<h2>Services.</h2>
			<Service
				mainTitle="Wedding reports"
				description="I can organize a shoot of your wedding for 1 000 0000 € ! It's a gift, it's not expensive"
			/>
			<Service
				mainTitle="Portrait photo sessions"
				description="If you want to be beautiful, I can sublimate your face with Photoshop. Maybe, it can be difficult to do something with your face, in this case, i will adress you to a cosmetic surgeon."
			/>
			<Service
				mainTitle="Animals shooting session"
				description="A photo shoot with animals is like herding cats—literally! Just when you think you’ve got the perfect shot, a squirrel appears out of nowhere, stealing the spotlight and your heart. And let’s not even get started on the model who keeps trying to eat the props!"
			/>
			<Service
				mainTitle="Corporate photo report session"
				description="Corporate photo shoots are like a game of hide-and-seek, but instead of kids, you’re trying to find the one employee who actually looks happy to be there. Just when you finally capture that candid moment, someone sneezes, and suddenly, the whole team looks like they’re auditioning for a sitcom! It’s all about finding the right balance between professionalism and the awkwardness of realizing nobody knows how to pose"
			/>
		</section>
	);
}

export default Services;
