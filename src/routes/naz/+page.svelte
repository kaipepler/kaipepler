<svelte:head>
	<title>Nazareth - Kai Pepler</title>
	<meta name="description" content="My time with Nazareth University" />
</svelte:head>

<section>
	<h1>My Work with Naz</h1>
	<div class="intro">
		<div class="logo">
			<svg
				viewBox="0 0 98 28"
				style="height: 2.25rem; vertical-align: middle"
				aria-labelledby="naz"
				role="img"
				><path
					style="fill:var(--logo-fill)"
					d="M0,14.103l7.876,13.579l-7.876,0l0,-13.579Zm84.19,-13.56l-13.579,7.876l-0,-7.876l13.579,0Zm-43.686,13.56l0,13.579l-7.876,0l7.876,-13.579Zm-13.383,0l-7.876,-13.579l7.876,0l0,13.579Zm57.069,13.56l13.579,-7.876l-0,7.876l-13.579,0Zm-57.069,0.019l-27.121,-18.875l0,-8.283l27.121,19.011l0,8.147Zm70.629,-27.158l0,8.148l-27.121,19.01l-0,-8.283l27.121,-18.875Zm-32.18,27.139l-8.147,0l-12.748,-21.145l4.209,-6.518l16.686,27.663Z"
				/></svg
			><span id="naz" aria-hidden="true" class="visually-hidden">Nazareth logo</span>
		</div>
		<p>
			Nazareth University is my <i lang="la">alma mater</i>. I graduated with honors in 2018,
			earning a Bachelor of Science in visual communication design. I’ve since gone on to work with
			their Nursing and Art departments, recording voiceovers and teaching design labs.
		</p>
	</div>
</section>
<section>
	<h2>Notable Work</h2>
	<div class="timeline">
		<div class="tl-date"><h3>2022</h3></div>
		<div class="tl-desc">
			<p>
				Since 2022 I’ve been an adjunct professor, teaching visual design fundamentals (Photoshop
				and Illustrator). I’ve also previously taught a web design fundamentals (HTML and CSS)
				course.
			</p>
		</div>
		<div class="tl-date"><h3>2017</h3></div>
		<div class="tl-desc">
			<p>
				For the past {`${new Date().getFullYear() - 2017}`} years I have recorded the voiceovers for the
				Nazareth nursing department’s biannual pinning ceremonies.
			</p>
		</div>
	</div>
</section>

<style>
	.intro {
		display: flex;
		flex-direction: row-reverse;
		align-items: flex-start;
		justify-content: space-between;
		gap: 2rem;
		max-width: unset;
	}

	.logo {
		background: var(--logo-bg);
		display: block;
		padding: 2.5rem 3rem;
		border: 1px solid var(--gray-4);
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;

		@media (prefers-contrast: more) {
			border-color: var(--gray-12);
		}
	}

	@media (prefers-color-scheme: light) {
		.logo {
			--logo-bg: #eeaa55;
			--logo-fill: #7a39aa;
		}

		#naz {
			&::before {
				content: 'A purple ';
			}
			&::after {
				content: ' on a gold field';
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		.logo {
			--logo-bg: #7a39aa;
			--logo-fill: #ffffff;
		}

		#naz {
			&::before {
				content: 'A white ';
			}
			&::after {
				content: ' on a purple field';
			}
		}
	}

	@media (max-width: 700px) {
		.intro {
			flex-direction: column;
			gap: 0;
			margin-top: 1rem;
		}

		.logo {
			width: 100%;
		}
	}
</style>
