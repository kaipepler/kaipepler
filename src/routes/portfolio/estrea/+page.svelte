<script>
	const photos = [
		{
			title: 'Encircle',
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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
			alt: '',
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

<section class="hero">
	<hgroup>
		<h1>Estrea</h1>
		<p>Debut photo album</p>
	</hgroup>
</section>

<section>
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
			<p>{photos.length} Photos</p>
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
						><time datetime={new Date(photo.dateTime * 1000).toISOString()}
							>{new Date(photo.dateTime * 1000).toLocaleString('en-US', {
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
	.hero {
		background: linear-gradient(45deg, #2c4f7d, #4778af);
	}

	.gallery-element {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;

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
			max-width: 95ch;

			ul {
				margin-block: 0;
				padding: 0;
				display: grid;
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
