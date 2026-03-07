export function load() {
	const projectsArray = [
		// {
		// 	title: 'Abstract №1',
		// 	id: 'abstract-no1',
		// 	type: 'Illustration',
		// 	tags: ['Illustration'],
		// 	date: '2023',
		// 	colors: ['#4022b8', '#b01e24'],
		// 	featured: false
		// },
		// {
		// 	title: 'Dota 2 Card Series',
		// 	id: 'dota-2-card-series',
		// 	type: 'Illustration',
		// 	tags: ['Illustration'],
		// 	date: '2022 (rev. 2024)',
		// 	colors: ['#4022b8', '#b01e24'],
		// 	featured: false
		// },
		{
			title: 'STRATZ',
			id: 'stratz',
			type: 'Case Study',
			tags: ['UI', 'UX', 'Graphic Design', 'Animation', 'Data Visualization'],
			date: '2019 – 2022',
			colors: ['#00809c', '#123137'],
			featured: true
		},
		// {
		// 	title: 'Randleman Program',
		// 	id: 'randleman-program',
		// 	type: 'Branding',
		// 	tags: ['Branding', 'Logo Design', 'UI'],
		// 	date: '2019',
		// 	colors: ['#54200b', '#a96521'],
		// 	featured: false
		// },
		// {
		// 	title: 'Târé',
		// 	id: 'tare',
		// 	type: 'Illustration',
		// 	tags: ['Illustration'],
		// 	date: '2019',
		// 	colors: ['#9955cc', '#4365fe'],
		// 	featured: false
		// },
		{
			title: 'ASLCORE',
			id: 'aslcore',
			type: 'Write-Up',
			tags: ['UI', 'UX', 'Graphic Design', 'Animation', 'Data Visualization'],
			date: '2016 – 2019',
			colors: ['#0c880c', '#313131'],
			featured: true
		},
		// {
		// 	title: 'Recorder Society',
		// 	id: 'recorder-society',
		// 	type: 'Branding',
		// 	tags: ['Graphic Design', 'Logo Design', 'Branding'],
		// 	date: '2019',
		// 	colors: ['#002446', '#007dab'],
		// 	featured: false
		// },
		// {
		// 	title: 'MIND 8',
		// 	id: 'mind-8',
		// 	type: 'Animation',
		// 	tags: ['Graphic Design', 'Illustration', 'Logo Design', 'Branding'],
		// 	date: '2018',
		// 	colors: ['#0075db', '#00856b'],
		// 	featured: false
		// },
		// {
		// 	title: 'Free Leaf Artisan Tea',
		// 	id: 'free-leaf-artisan-tea',
		// 	type: 'Branding',
		// 	tags: ['Graphic Design', 'Illustration', 'Logo Design', 'Branding'],
		// 	date: '2018 (rev. 2022)',
		// 	colors: ['#108743', '#5e8000'],
		// 	featured: false
		// },
		{
			title: 'Violin Studies',
			id: 'violin-studies',
			type: 'Illustration',
			tags: ['Graphic Design', 'Illustration'],
			date: '2015',
			colors: ['#902308', '#966f00'],
			featured: false
		},
		{
			title: 'Estrea',
			id: 'estrea',
			type: 'Photography',
			tags: ['Photography'],
			date: '2015',
			colors: ['#2c4f7d', '#4778af'],
			featured: false
		}
	];

	const projects = Object.fromEntries(projectsArray.map((p) => [p.id, p]));

	return { projectsArray, projects };
}
