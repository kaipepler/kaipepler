<script>
	const features = [
		{
			title: 'Increase Contrast',
			desc: 'If you’re on macOS, the site will respect OS-level Increase Contrast mode, heighting the distinction between colors and outlining click targets across all pages.',
			status: 'In development, not yet available',
			icon: 'increase-contrast'
		},
		{
			title: 'Reduce Motion',
			desc: 'The site respects OS-level Reduce Motion requests, eliminating all animations except gentle fades.',
			status: 'Mostly complete. Needs polishing.',
			icon: 'reduce-motion'
		},
		{
			title: 'Forced Colors',
			desc: 'If you’re on windows, the site will respect Windows Forced Colors Mode, overriding all styling to the colors you select in your OS settings.',
			status: 'Planned',
			icon: 'forced-colors'
		},
		{
			title: 'Keyboard Navigation',
			desc: 'The site is fully navigable using only a keyboard. In addition, all content is optimized for screen readers.',
			status: 'Mostly complete. Needs additional testing.',
			icon: 'keyboard-navigation'
		},
		{
			title: 'Color Scheme',
			desc: 'The site automatically adopts your system theme to minimize eye strain. in addition, colors are tuned across both themes to provide sufficient contrast for comfortable viewing.',
			status: 'Mostly complete. Colors need a bit more tuning, especially on dark mode.',
			icon: 'color-scheme'
		},
		{
			title: 'Text Resize',
			desc: 'Text is defined relative to your browser’s root font size, so depending on how you’ve configured your browser, text will reflow to match your desired reading size.',
			status: 'Mostly complete. Font scales need a bit more tuning.',
			icon: 'text-resize'
		},
		{
			title: 'Typography',
			desc: 'Typography is balanced with additional line height and kerning to improve readability.',
			status: 'Mostly complete, but needs more tuning in the fine details.',
			icon: 'typography'
		},
		{
			title: 'Reader',
			desc: 'Text-based pages (such as those in the Writings section) are optimized for Reader modes, allowing further user customization for a comfortable reading environment.',
			status: 'Complete, but needs additional testing.',
			icon: 'reader'
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
		I want this site to offer a good experience to all users, and as such I’m working to incorporate
		as many accessibility features as possible.
	</p>
	<p>
		My goal is to have this site be 100% compliant with WCAG 2.2 AA by default, and reach AAA
		compliance certain user configurations are applied. While I’m not there yet, this page documents
		my progress on a number of accessibility features:
	</p>

	{#each features as feature}
		<div class="feature-block">
			<div aria-hidden="true">
				<img src="/a11y/{feature.icon}.svg" width="100%" height="100%" alt="" />
			</div>
			<div>
				<h2>{feature.title}</h2>
				<small>{feature.status}</small>
				<p>{feature.desc}</p>
			</div>
		</div>
	{/each}

	<hr />

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

		div:first-child {
			flex-shrink: 0;
			width: 9rem;
			height: 6rem;
			background: var(--gray-3);
			border-radius: 0.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		p {
			margin-block: 0.5rem;
		}

		small {
			color: var(--green-11);
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
