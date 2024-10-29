import { useState } from "react";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header>
			<div>Thierry.</div>
			<nav>
				<button
					type="button"
					onClick={toggleMenu}
					aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
				>
					<span>☰</span>
				</button>
				<div className={isOpen ? "menu-open" : "menu-closed"}>
					<ul>
						<li>
							<a href="#Work">Work</a>
						</li>
						<li>
							<a href="#Services">Services</a>
						</li>
						<li>
							<a href="#About">About</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;
