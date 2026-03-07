<script>
	import { page } from '$app/state';
	let { data } = $props();
	const current = page.route.id.split('/')[2];

	const currentProject = $derived(data.projects[current]);

	const photos = [
		{
			title: 'Encircle',
			alt: 'A black scuplted head of the Buddha encircled by a crescent of twigs, dried leaves, and feathers, with a patch of rainbow light casting a nest of shadows upon the wall.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 40mm f/2.8 STM',
			dateTime: '1390407939',
			focalLength: '40mm',
			shutterSpeed: '1⁄125',
			fStop: '2.8',
			iso: '250'
		},
		{
			title: 'Complementary',
			alt: 'A hand holding a carbon fiber bow, overtop the softly out-of-focus background of a deep reddish-brown violin.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 40mm f/2.8 STM',
			dateTime: '1392468298',
			focalLength: '40mm',
			shutterSpeed: '1⁄80',
			fStop: '4.0',
			iso: '6,400'
		},
		{
			title: 'Three Worlds',
			alt: 'A brick church in the middle of a three-point composition, with a gray scyscraper to the left, and the branches of a tree to the right.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 40mm f/2.8 STM',
			dateTime: '1395179687',
			focalLength: '40mm',
			shutterSpeed: '1⁄80',
			fStop: '4.5',
			iso: '100'
		},
		{
			title: 'day send',
			alt: 'a golden yellow sunset just over the horizon and the hints of cars traveling along the arching silhouette of a bridge.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 40mm f/2.8 STM',
			dateTime: '1395180252',
			focalLength: '40mm',
			shutterSpeed: '1⁄250',
			fStop: '20',
			iso: '100'
		},
		{
			title: 'Nature’s Window',
			alt: 'A view of a forest and foggy skyline from atop a grassy hillside, with a tree trunk and evergreen branches framing the scene.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 70–200mm f/4L USM',
			dateTime: '1402426001',
			focalLength: '200mm',
			shutterSpeed: '1⁄640',
			fStop: '8.0',
			iso: '400'
		},
		{
			title: 'Stardust Clock',
			alt: 'Tiny glowing grains of white sand fall from a close-cropped view of a plastic hourglass, with an out-of-focus black picture frame sitting at a dynamic angle in the background.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 40mm f/2.8 STM',
			dateTime: '1390408459',
			focalLength: '40mm',
			shutterSpeed: '1⁄125',
			fStop: '3.2',
			iso: '400'
		},
		{
			title: 'Diamond Tree',
			alt: 'A navy-blue sky overtop the silhouettes of leafy treetops. The moon shines through the trees like a cluster of shining diamonds at the center of the shot, casting into sharp relief the edges of nearby leaves with a brilliant silver light.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 70–200mm f/4L USM',
			dateTime: '1405040283',
			focalLength: '200mm',
			shutterSpeed: '8',
			fStop: '5.0',
			iso: '100'
		},
		{
			title: 'Puzzle Piece',
			alt: 'Blurred patches of white against a plant-green background, with a single gap. Inside the gap a single half-blown dandelion puff is caught in a sliver of razor-thin focus. The clean white of the feathered seeds contrasting against the play of warm greens and whites in the background.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 70–200mm f/4L USM',
			dateTime: '1401112866',
			focalLength: '200mm',
			shutterSpeed: '1⁄250',
			fStop: '4.0',
			iso: '200'
		},
		{
			title: 'h',
			alt: 'A dried brown leaf lies supported by bright green grass. Upon the leaf rests grains of earth and a small maple key, while below the leaf nestled into the grass sits a small pinecone.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 70–200mm f/4L USM',
			dateTime: '1401113000',
			focalLength: '84mm',
			shutterSpeed: '1⁄320',
			fStop: '4.0',
			iso: '100'
		},
		{
			title: 'Oculus Nubili Draconis',
			alt: 'The silhouette of a power line crosses the scene, above which the sun peers out from amidst black and gold clouds like the eye of a dragon.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 40mm f/2.8 STM',
			dateTime: '1393278915',
			focalLength: '40mm',
			shutterSpeed: '1⁄2000',
			fStop: '22.0',
			iso: '100'
		},
		{
			title: 'Pillar',
			alt: 'The joint of a lamppost wrapped in cobwebs fills the scene, with the background thrown out of focus to textured blurs of green and lime.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 70–200mm f/4L USM',
			dateTime: '1402179761',
			focalLength: '200mm',
			shutterSpeed: '1⁄2000',
			fStop: '4.0',
			iso: '6,400'
		},
		{
			title: 'Shadow Clock',
			alt: 'An ornate golden hourglass with black falling sand sits in soft focus, while its shadow casts a flattened impression upon the wall',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 40mm f/2.8 STM',
			dateTime: '1402966054',
			focalLength: '40mm',
			shutterSpeed: '1⁄40',
			fStop: '2.8',
			iso: '3,200'
		},
		{
			title: 'Contact',
			alt: 'A smoky tiger barn cat arches atop the door of a wooden fence, paws held in a dynamic pose and nose cenimeters away from the wood where he takes in the scents. Sunlight catches his frame, illuminating his head and shoulders and gives a soft chiaroscuro to the scene.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 70–200mm f/4L USM',
			dateTime: '1398007097',
			focalLength: '70mm',
			shutterSpeed: '1⁄250',
			fStop: '4.0',
			iso: '250'
		},
		{
			title: '14',
			alt: 'A wrought metal sculpture against a peerless blue sky. The sun shiens through a gap in the metal, casting a 14-point starburst.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 40mm f/2.8 STM',
			dateTime: '1394557152',
			focalLength: '40mm',
			shutterSpeed: '1⁄250',
			fStop: '22.0',
			iso: '100'
		},
		{
			title: 'Filament',
			alt: 'Yellow light burns across an electrical filament, encased inside an amber bulb. Matching bulbs and the curves of dark metal give the suggestion of a chandelier.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 40mm f/2.8 STM',
			dateTime: '1390712541',
			focalLength: '40mm',
			shutterSpeed: '1⁄125',
			fStop: '22.0',
			iso: '400'
		},
		{
			title: 'Path',
			alt: 'A straight cement path in 1-point perspective. A grassy hill leads down to dark green trees on the lefthand side, while the righthand side is enclosed by a black metal fence. Streetlamp bulbs arch over the path from the fence and vanish into the distance.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 40mm f/2.8 STM',
			dateTime: '1402427689',
			focalLength: '40mm',
			shutterSpeed: '1⁄320',
			fStop: '9.0',
			iso: '100'
		},
		{
			title: 'Pinnacle',
			alt: 'The wrought metal tip of some outdoor decoration. Strands of gossamer and droplets of dew hang off the spirals of black metal, while the background is a wash of soft natural colors.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 70–200mm f/4L USM',
			dateTime: '1399157078',
			focalLength: '91mm',
			shutterSpeed: '1⁄40',
			fStop: '4.0',
			iso: '2,500'
		},
		{
			title: 'Celestial Haze',
			alt: 'A waxing gibbous moon sits at the center of a hazy night sky, partially obscured by black clouds. The light of the moon throws the haze into a range of blurring browns, blacks, silvers, and greys.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 70–200mm f/4L USM',
			dateTime: '1402451715',
			focalLength: '200mm',
			shutterSpeed: '4⁄5',
			fStop: '8.0',
			iso: '100'
		},
		{
			title: 'Solid Sky',
			alt: 'A brilliantly-illuminated night sky, where an ice white patch of moonlight solidifies the nearby clouds into almost resembling a cliff face of sharp black and tan rocks.',
			camera: 'Canon EOS Rebel T5i',
			lens: 'EF 70–200mm f/4L USM',
			dateTime: '1402451841',
			focalLength: '70mm',
			shutterSpeed: '2⁄5',
			fStop: '4.0',
			iso: '1,600'
		}
	];
</script>

<svelte:head>
	<title>Estrea - Portfolio - Kai Pepler</title>
	<meta name="description" content="Examples of art and design work" />
</svelte:head>

<section>
	<div
		class="project-card focus"
		id={currentProject.id}
		style:--c1={currentProject.colors[0]}
		style:--c2={currentProject.colors[1]}
		style:view-transition-name="project-card-{currentProject.id}"
	>
		<h1 class="title" style:view-transition-name="project-card-title-{currentProject.id}">
			{currentProject.title}
		</h1>
		<div class="type" style:view-transition-name="project-card-type-{currentProject.id}">
			{currentProject.type}
		</div>
		<div class="date" style:view-transition-name="project-card-date-{currentProject.id}">
			{currentProject.date}
		</div>
	</div>

	<h2 id="overview">Overview</h2>
	<p>
		Estrea is my first full-length photo album. All images were crafted completely in-camera; With
		the exception of minor color correction and sensor dust cleaning, no post-processing or
		photomanipulation was used.
	</p>
	<div class="mediumsblock">
		<div>
			<h3>Date</h3>
			<p>2014</p>
		</div>
		<div>
			<h3>Medium</h3>
			<p>Digital Photography</p>
		</div>
		<div>
			<h3>Contents</h3>
			<p>{photos.length} photos</p>
		</div>
	</div>
</section>

{#each photos as photo}
	<script>
	</script>
	<section class="gallery-element">
		<h2>
			{photo.title}
		</h2>
		<div class="mediaframe fullsize">
			<lightbox-image dialog-id="lightbox">
				<img
					src="/portfolio/estrea/estrea-{photo.title
						.toLowerCase()
						.replace(/\s+/g, '-')
						.replace(/[’]/g, '')}.jpg"
					alt={photo.alt}
					loading="lazy"
				/>
			</lightbox-image>
		</div>

		<details>
			<summary>Details</summary>
			<ul>
				<li>
					Date <strong
						><time datetime={new Date(Number(photo.dateTime) * 1000).toISOString()}
							>{new Date(Number(photo.dateTime) * 1000).toLocaleString('en-US', {
								year: 'numeric',
								month: 'short',
								day: 'numeric',
								hour: 'numeric',
								minute: 'numeric'
							})}</time
						></strong
					>
				</li>
				<li>Camera <strong>{photo.camera}</strong></li>
				<li>Lens <strong>{photo.lens}</strong></li>
				<li>Focal Length <strong>{photo.focalLength}</strong></li>
				<li>Shutter Speed <strong>{photo.shutterSpeed}s</strong></li>
				<li>ISO <strong>{photo.iso}</strong></li>
				<li>F-Stop <strong>f/{photo.fStop}</strong></li>
			</ul>
		</details>
	</section>
{/each}

<style>
	.gallery-element {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		max-width: 85ch;

		div {
			order: 1;
		}

		h2 {
			order: 2;
			font-size: var(--step-1);
			margin: 1rem 0.25rem 0;
		}
		details {
			order: 3;
			font-size: var(--step--1);
			margin-inline: -0.5rem;
			max-width: 100%;
			position: relative;

			ul {
				margin-block: 0;
				padding: 0;
				display: grid;
				max-width: 100%;
				grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
				gap: 1rem;

				li {
					display: flex;
					flex-direction: column;
					margin: 0;
					color: var(--text-secondary);

					strong {
						color: var(--text-primary);
					}
				}
			}
		}
	}
</style>
