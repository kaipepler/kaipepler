<script>
	const features = [
		{
			title: 'Color Scheme',
			status: 'Mostly complete',
			desc: 'The site adopts your system theme to minimize eye strain. Colors across both light and dark themes are tuned to provide contrast for comfortable viewing.'
		},
		{
			title: 'Reduce Motion',
			status: 'Complete',
			desc: 'If your operating system is set to Reduce motion, the site will replace all movement-based animation with gentle fades.'
		},
		{
			title: 'Typography',
			status: 'Mostly complete',
			desc: 'The site uses the <a href="https://www.brailleinstitute.org/freefont/">Atkinson Hyperlegible</a> typeface to provide highly readable text content. Typography is tuned with additional line height and kerning to further enhance readability.'
		},
		{
			title: 'Text Resizing',
			status: 'In development, some content may resize unexpectedly',
			desc: 'The site’s entire layout is designed to gracefully reflow with browser zoom or root text size increase. Text is defined relative to your browser’s root font size, so depending on how you’ve configured your browser, text will reflow to match your desired reading size.'
		},
		{
			title: 'Reader',
			status: 'Complete',
			desc: 'Text-heavy pages are optimized for browser Reader modes, allowing users further customization of text and theming for a more comfortable reading environment.'
		},
		{
			title: 'Increase Contrast',
			status: 'Mostly complete',
			desc: 'The site will respect Increase Contrast modes, heighting the distinction between colors and outlining click targets across all pages.'
		},
		{
			title: 'Windows Contrast Themes',
			status: 'In development, partially available',
			desc: 'If you’re on Windows, the site will respect Windows Contrast Themes, allowing a user to override all styling to the colors you select in your system settings.'
		},
		{
			title: 'Keyboard Navigation',
			status: 'Complete',
			desc: 'The site is fully navigable using only a keyboard. Tab order is consistent and shows clear focus indicators on all interactive elements. For full keyboard control, all content is optimized for screen readers.'
		},
		{
			title: 'Voice Control',
			status: 'In development, needs additional testing',
			desc: 'The site is fully navigable using voice control. Links and other interactive elements have unique accessible names to allow for easy targeting by assistive technology.'
		}
	];
</script>

<svelte:head>
	<title>Accessibility Statement - Kai Pepler</title>
	<meta name="description" content="My commitment to accessibility" />
</svelte:head>
<section>
	<h1>Accessibility Statement</h1>

	<p>
		I want my site to offer a good experience to all users, and as such I have incorporated a number
		of accessibility features into the core of the site’s design.
	</p>
	<p>
		As it’s still under construction, not all of the features I have planned are fully available or
		tested yet. In the meantime I’ll use this page to document my progress:
	</p>

	{#each features as feature}
		<div class="feature-block">
			<div aria-hidden="true">
				<img
					src="/a11y/{feature.title.toLowerCase().replaceAll(' ', '-')}.svg"
					width="100%"
					height="100%"
					alt=""
				/>
			</div>
			<div>
				<h2>{feature.title}</h2>
				<small>{feature.status}</small>
				<p></p>
				<p>{@html feature.desc}</p>
			</div>
		</div>
	{/each}

	<hr />

	<aside aria-labelledby="external">
		<strong aria-hidden="true"><span id="external">Note</span>:</strong> While I do my best to promote
		accessible resources, I do link to external content that features accessibility barriers. This includes
		some of my older work for companies to which I no longer have edit access. Content I maintain ownership
		of (for example, art featured in my portfolio) I have revisited and optimized for accessibility wherever
		possible.
	</aside>

	<p>
		If you have any issues accessing the content on this site, encounter WCAG violations, or have
		other feedback that would improve usability, please <a href="mailto:hello@kaipepler.com"
			>contact me</a
		>. I appreciate all feedback!
	</p>
</section>

<style>
	.feature-block {
		display: flex;
		gap: 1rem;
		max-width: 75ch;
		margin-block: 2rem;

		& div:first-child {
			flex-shrink: 0;
			width: 9rem;
			height: 6rem;
			background: var(--gray-3);
			border-radius: 0.5rem;
			display: flex;
			justify-content: center;
			align-items: center;

			@media (prefers-contrast: more) {
				background: 1px var(--gray-1);
				border: 4px solid var(--gray-9);
			}
		}

		:global(p) {
			margin-block: 0.5rem;
		}

		small {
			color: var(--green-11);
			@media (prefers-contrast: more) {
				color: var(--green-12);
			}
		}
	}

	@media (max-width: 850px) {
		.feature-block {
			flex-direction: column;

			div:first-child {
				width: 100%;
			}
		}
	}
</style>
