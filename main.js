const linkConfig = [
	{
		text: 'Fabb Artists Breaking Boundaries ~ React/Redux/Firebase with a built in CMS',
		href: 'https://fabb.world',
		category: 'work'
	},
	{
		text: 'Oberlin College & Community Radio ~ React/Redux/Firebase/MySQL with a built in CMS',
		href: 'https://www.wobc.org',
		category: 'work'
	},
	{
		text: 'A Groundbreaking Puzzlegame ~ React/Redux/Firebase + Konva.js',
		href: 'https://salt-and-pepper-games.github.io/prism/#/',
		category: 'work'
	},
	{
		text: 'A Site for Deborah Davis Jackson ~ HTML/CSS/JS + Extremely Thorough Documentation',
		href: 'http://deborahdavisjackson.org',
		category: 'work'
	},
	{
		text: 'A book about birds and people',
		href: 'https://www.npr.org/books/titles/536028247/the-evolution-of-beauty-how-darwins-forgotten-theory-of-mate-choice-shapes-the-a',
		category: 'hope'
	},
	{
		text: '<3 <3 <3',
		href: 'https://www.instagram.com/tinygentleasians/',
		category: 'hope'
	},
	{
		text: 'for coding',
		href: 'https://github.com/sgrund14',
		category: 'social'
	},
	{
		text: 'for discovery',
		href: 'https://are.na/samuel-grund',
		category: 'social'
	},
	{
		text: 'for my peers',
		href: 'dat://7a49333d2d9ab6238ca38f104caa55c0b2f3f7727308ae9b75d6ac95fbe73cd9/',
		category: 'social'
	},
	{
		text: 'hello',
		href: 'mailto:sgrund626@gmail.com',
		category: 'contact'
	},
	{
		text: 'nice handshake ya got there',
		href: 'www.linkedin.com/in/samuel-grund',
		category: 'contact'
	},
];

const colorCombos = [
	["red", "orange", "yellow", "lightyellow"],
	["blueviolet", "blue", "cadetblue", "darkmagenta"],
	["darkolivegreen", "brown", "coral", "gold"],
	["darkorchid", "cornflowerblue", "lavender", "lavenderblush"]

];
const startColors = colorCombos[Math.floor(Math.random()*(colorCombos.length))];
document.documentElement.style.setProperty("--circle1", startColors[0]);
document.documentElement.style.setProperty("--circle2", startColors[1]);
document.documentElement.style.setProperty("--circle3", startColors[2]);
document.documentElement.style.setProperty("--circle4", startColors[3]);

document.ready = (() => {
	function onLinkHover(text, category) {
		document.getElementById(`${category}-links`).textContent = text;
		document.getElementById(`${category}-wrapper`).classList.remove('hidden');

		// const colors = colorCombos[Math.floor(Math.random()*(colorCombos.length))];
		// document.documentElement.style.setProperty("--circle1", colors[0]);
		// document.documentElement.style.setProperty("--circle2", colors[1]);
		// document.documentElement.style.setProperty("--circle3", colors[2]);
		// document.documentElement.style.setProperty("--circle4", colors[3]);

	}
	function offLinkHover(category) {
		document.getElementById(`${category}-wrapper`).classList.add('hidden');
		document.getElementById(`${category}-links`).textContent = '';
	}
	linkConfig.map(({ href, text, category }) => {
		const link = document.querySelector(`a[href="${href}"]`);
		link.addEventListener('mouseover', () => onLinkHover(text, category));
		link.addEventListener('mouseout', () => offLinkHover(category));
	});
})();

