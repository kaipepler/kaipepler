<svelte:head>
	<title>Kai Pepler</title>
	<meta name="description" content="This is a welcome page for Kai Pepler's portfolio." />
</svelte:head>

<section>
	<h1>Hello Everyone!</h1>
	<p>
		My name is Kai Pepler. I’m a <abbr title="User Experience">UX</abbr> designer and visual artist specializing
		in accessibility, color theory, data visualization, and motion graphics.
	</p>
	<p>
		This site is under construction while I get all my content moved over to a new framework. Thanks
		for your patience!
	</p>
</section>

<style>
	abbr {
		position: relative;
		border-bottom: 2px dotted var(--gray-300);
		text-decoration: none;

		&::after {
			position: absolute;
			bottom: 150%;
			left: 50%;
			transform: translateX(-50%) translateY(2rem) scale(0.1);
			background: var(--default);
			width: max-content;
			color: var(--background);
			padding: 10px;
			border-radius: 6px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
			opacity: 0;
			text-align: center;
			overflow: hidden;
			transition:
				transform 150ms cubic-bezier(0.2, 0.8, 0.3, 1.3) 200ms,
				opacity 50ms ease-in-out 200ms;
			content: attr(title) / ''; /* The '/' is a separator that screen readers typically ignore */
			speak-as: none; /* Modern browsers */

			@media (prefers-reduced-motion: reduce) {
				transform: translateX(-50%) translateY(0);
				transition: opacity 150ms ease-in-out 200ms;
			}
		}

		&:hover {
			cursor: help;

			&::after {
				content: attr(title) / '';
				opacity: 1;
				transform: translateX(-50%) translateY(0) scale(1);

				@media (prefers-reduced-motion: reduce) {
					transform: translateX(-50%) translateY(0);
				}
			}
		}
	}
</style>
