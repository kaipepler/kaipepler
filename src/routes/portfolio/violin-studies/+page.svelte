<script>
	const studies = [
		{
			title: 'I (Traditional)',
			alt: 'Line art depicting a violin'
		},
		{
			title: 'II (Stamp)',
			alt: 'Line art depicting a violin inverted against a black speckled background, reminiscent of a stamp.'
		},
		{
			title: 'III (Line)',
			alt: 'A single line wrapping along and back across itself to give the impression of a violin.'
		},
		{
			title: 'IV (Silhouette)',
			alt: 'A featureless black silhouette of a violin.'
		},
		{
			title: 'V (EdgeBlock)',
			alt: 'Organic lines and shapes depicting the 3-dimensional nature and interplay of light across a violin.'
		},
		{
			title: 'VI (BlockShape)',
			alt: 'Rough organic shapes depicting the bridge and key planes of a violin.'
		},
		{
			title: 'VII (Electric)',
			alt: 'A dynamic mix of line weights, shapes, and dots making up the shape of a violin.'
		},
		{
			title: 'IIX (Sunken)',
			alt: 'Rough broken line segments and dots, reminiscent of a violin that is buried in the deep sea.'
		},
		{
			title: 'IX (Minim)',
			alt: 'Short minimal line segments reflecting the essential shape of a violin with no extraneous detail.'
		}
	];
</script>

<svelte:head>
	<title>Violin Studies - Portfolio - Kai Pepler</title>
	<meta name="description" content="Examples of art and design work" />
</svelte:head>

<section class="hero">
	<hgroup>
		<h1>Violin Studies</h1>
		<p>A series of studies on the elements that make up a violin</p>
	</hgroup>
</section>

<section>
	<h2 id="overview">Overview</h2>
	<p>
		A series of studies on what elements are required to make an illustration read as a violin, and
		how the stylization adds additional characteristics to its interpretation.
	</p>
	<p>Originally drawn in marker and later vectorized.</p>
	<div class="mediumsblock">
		<div>
			<h3>Date</h3>
			<p>2015</p>
		</div>
		<div>
			<h3>Medium</h3>
			<p>Vectorized Marker</p>
		</div>
		<div>
			<h3>Contents</h3>
			<p>{studies.length} studies</p>
		</div>
	</div>
</section>

{#each studies as study}
	<script>
	</script>
	<section class="gallery-element">
		<h2>
			{study.title}
		</h2>
		<div class="mediaframe fullsize">
			<lightbox-image dialog-id="lightbox">
				<img
					src="/portfolio/violin/violin-{study.title
						.toLowerCase()
						.replace(/\s+/g, '-')
						.replace(/[()]/g, '')}.png"
					alt={study.alt}
					loading="lazy"
				/>
			</lightbox-image>
		</div>
	</section>
{/each}

<style>
	.hero {
		background: linear-gradient(45deg, #902308, #966f00);
	}

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
	}
</style>
