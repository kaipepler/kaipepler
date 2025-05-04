<script>
	import * as config from '$lib/config';
</script>

<footer>
	<small
		>&copy {`${new Date().getFullYear()} ${config.title}`}
		<ul role="list">
			<li><a href="/accessibility"><span>Accessibility</span></a></li>
			<li><a href="/privacy"><span>Privacy</span></a></li>
		</ul>
	</small>
</footer>

<style>
	footer {
		padding: 1.5rem 2.5rem;

		small {
			margin-inline: auto;
			max-width: 1200px;
			display: flex;
			justify-content: space-between;
			color: var(--text-secondary);

			ul {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 1rem;
				list-style-type: none;
				padding: 0;
				margin: 0;

				li {
					text-align: center;
					a {
						position: relative;
						padding: 0.5rem;
						border-radius: 6px;

						span {
							border-bottom: 1px solid transparent;
							padding-block: 0.2rem;
							transition:
								color 0.2s linear,
								border 0.2s linear;
						}

						&:hover {
							span {
								color: var(--text-primary);
								border-bottom: 1px solid var(--text-primary);
							}
						}
					}
				}
			}
		}
	}
</style>
