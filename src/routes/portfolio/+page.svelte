<svelte:head>
	<title>Portfolio - Kai Pepler</title>
	<meta name="description" content="Examples of art and design work" />
</svelte:head>
<section>
	<h1>Portfolio</h1>

	<p>This page highlights a number of my projects and case studies from over the years.</p>
	<p>
		My most recent work is under nondisclosure for Xerox. <a href="/xerox"
			>Learn about my work with Xerox</a
		>.
	</p>
</section>
<section>
	<h2 class="visually-hidden">Featured</h2>

	<div class="portfolio-featured">
		<a class="project-card" href="/portfolio/stratz/" id="stratz"
			><div class="project-title">STRATZ</div>
			<div class="project-type">Case Study</div>
			<div class="project-date">2019 – 2022</div></a
		>

		<a class="project-card" href="/portfolio/aslcore/" id="aslcore"
			><div class="project-title">ASLCORE</div>
			<div class="project-type">Write-Up</div>
			<div class="project-date">2016 – 2019</div></a
		>
	</div>
</section>

<section>
	<h2>Art & Design</h2>
	<p>
		Many of my older pieces are offline as I migrate my portfolio to a new framework. Expect new
		content and UI changes daily as I tune the new experience.
	</p>
	<p>
		Please <a href="mailto:hello@kaipepler.com">contact me</a> if you have any questions or would like
		to see further samples of my work.
	</p>
</section>

<style>
	a.project-card {
		position: relative;
		border: 2px solid var(--text-primary);
		border-radius: 8px;
		padding: 2.5rem 2rem;
		display: block;
		color: var(--default);
		background-image: linear-gradient(to right, var(--background), var(--background));
		z-index: 1;
		text-decoration: none;
		transition-property: transform, color, box-shadow;
		transition-duration: 0.2s;
		transition-timing-function: ease-in-out;

		&::before {
			position: absolute;
			content: '';
			border-radius: 6px;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: -1;
			transition: opacity 0.2s ease-in-out;
			opacity: 0;
		}
		&:hover::before {
			opacity: 1;
		}

		&:hover {
			color: white;
			box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.3);
			border-width: 2px;
			transform: scale(1.03);
		}

		&:active {
			transform: scale(0.98);
		}

		div.project-title {
			font-weight: bold;
			font-size: var(--step-1);
			letter-spacing: 0.075rem;
		}

		div.project-type {
			position: absolute;
			top: 0;
			right: 0;
			padding: 0.25rem;
			padding-left: calc(0.35rem + 2px);
			background: var(--text-primary);
			border-bottom-left-radius: 8px;
			border-top-right-radius: 2px;
			color: var(--background);
			font-size: var(--step--2);
			font-weight: bold;
			letter-spacing: 0.1rem;
		}

		div.project-date {
			font-size: var(--step--1);
			font-weight: 400;
		}
	}

	div.portfolio-featured {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		margin-block: 2rem;
		max-width: unset;
	}

	#stratz::before {
		background-image: linear-gradient(#123137, #00809c);
	}
	#aslcore::before {
		background-image: linear-gradient(#313131, #0c880c);
	}
	#abstract-no1::before {
		background-image: linear-gradient(#088800, #00846e);
	}
	#dota-card-series::before {
		background-image: linear-gradient(#4022b8, #b01e24);
	}
	#randleman-program::before {
		background-image: linear-gradient(#54200b, #a96521);
	}
	#tare::before {
		background-image: linear-gradient(#9955cc, #4365fe);
	}
	#recorder-society::before {
		background-image: linear-gradient(#002446, #007dab);
	}
	#mind-8::before {
		background-image: linear-gradient(#0075db, #00856b);
	}
	#free-leaf-artisan-tea::before {
		background-image: linear-gradient(#108743, #5e8000);
	}
	#violin-studies::before {
		background-image: linear-gradient(#902308, #966f00);
	}
	#estrea::before {
		background-image: linear-gradient(#2c4f7d, #4778af);
	}
</style>
