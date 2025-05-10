<script>
	import * as config from '$lib/config';
</script>

<footer>
	<div>
		&copy {`${new Date().getFullYear()} ${config.title}`}
		<ul>
			<li><a href="/accessibility"><span>Accessibility</span></a></li>
			<li><a href="/privacy"><span>Privacy</span></a></li>
		</ul>
	</div>
</footer>

<style>
	footer {
		padding: 1.5rem 2.5rem;

		div {
			margin-inline: auto;
			max-width: 1200px;
			display: flex;
			justify-content: space-between;
			font-size: var(--step--1);
			font-weight: 400;
			color: var(--text-secondary);

			ul {
				display: grid;
				grid-template-columns: 1fr 1fr;
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
							border-bottom: 0.08rem solid transparent;
							padding-block: 0.2rem;
							transition:
								color 0.2s linear,
								border 0.2s linear;
						}

						&:hover {
							span {
								color: var(--text-primary);
								border-bottom: 0.08rem solid var(--text-primary);
							}
						}
					}
				}
			}
		}
	}
</style>
