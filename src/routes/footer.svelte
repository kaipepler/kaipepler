<script>
	import * as config from '$lib/config';
</script>

<footer>
	<small>&copy {`${new Date().getFullYear()} ${config.title}`}. Written in Svelte.</small>
	<small>
		<ul>
			<li><a href="/details">Details</a></li>
			<li><a href="/details#accessibility-statement">Accessibility</a></li>
			<li><a href="/details#privacy-policy">Privacy</a></li>
		</ul>
	</small>
</footer>

<style>
	footer {
		padding-inline: 2.5rem;
		padding-block: 1rem;
		display: flex;
		justify-content: space-between;

		small {
			color: gray;

			ul {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 1rem;
				list-style-type: none;
				padding: 0;
				margin: 0;

				li {
					text-align: center;
					a {
						transition:
							color 0.2s linear,
							border 0.2s linear;
						position: relative;
						border-bottom: 1px solid var(--background);

						&:hover {
							color: var(--default);
							border-bottom: 1px solid var(--default);
						}
					}
				}
			}
		}
	}
</style>
