const linkConfig = [
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
		text: 'This is the second version of my first website',
		href: 'https://sgrund14.github.io',
		category: 'work'
	},
	{
		text: 'for coding',
		href: 'https://github.com/sgrund14',
		category: 'social'
	},
	{
		text: 'for research',
		href: 'https://are.na/samuel-grund',
		category: 'social'
	},
	{
		text: 'for my peers',
		href: 'dat://7a49333d2d9ab6238ca38f104caa55c0b2f3f7727308ae9b75d6ac95fbe73cd9/',
		category: 'social'
	},
	{
		text: 'please follow me',
		href: 'https://instagram.com/gruno14',
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
	{
		text: '"Our server Sam was sweet and adorable and offered plenty of suggestions" - Janine R.',
		href: 'https://www.yelp.com/biz/sla-thai-restaurant-montclair?hrid=H5R6TmHLJ1bUvH1lp6jGnw',
		category: 'press'
	},
	{
		text: '"Very Friendly Service (Sam)" - Carly B. ***DISCLAIMER CARLY B\'s ACCOUNT HAS SINCE BEEN DELETED BUT PLEASE TRUST ME***',
		href: 'https://www.yelp.com/biz/sla-thai-restaurant-montclair?hrid=CnTcH9ZqoMWZ5y8G7R-fgA',
		category: 'press'
	}
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

