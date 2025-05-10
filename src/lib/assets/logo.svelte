<div>
	<svg viewBox="0 0 98 54" role="img" aria-labelledby="title">
		<path
			class="light"
			d="M96.89,27.506c0.109,-0.118 0.28,-0.157 0.43,-0.097c0.149,0.059 0.247,0.204 0.247,0.365c0.002,4.12 0.002,19.34 0.002,24.197c0,0.828 -0.67,1.5 -1.5,1.5l-21.312,-0c-0.398,-0 -0.779,-0.159 -1.061,-0.439c-0.281,-0.282 -0.439,-0.664 -0.439,-1.061l-0,-17.165c-0,-0.827 0.671,-1.5 1.5,-1.5l4.919,0c2.769,0 5.438,-0.302 8.006,-0.905c2.568,-0.605 4.833,-1.561 6.797,-2.871c0.885,-0.59 1.689,-1.265 2.411,-2.024Z"
		></path><path
			class="accent"
			d="M87.984,16.275c-0,1.259 -0.252,2.304 -0.756,3.134c-0.503,0.831 -1.195,1.498 -2.076,2.001c-0.881,0.505 -1.876,0.857 -2.983,1.058c-1.108, 0.202 -2.266,0.302 -3.475,0.302l-3.937,0c-0.398,0 -0.779,-0.159 -1.061,-0.439c-0.281,-0.281 -0.439,-0.663 -0.439,-1.061l-0,-9.613c-0,-0.397 0.158,-0.779 0.439,-1.059c0.282,-0.282 0.663,-0.439 1.061,-0.439l4.164,-0c1.158,-0 2.278,0.074 3.361,0.226c1.082,0.15 2.051,0.453 2.907,0.906c0.856,0.453 1.536,1.082  2.039,1.887c0.504,0.807 0.756,1.839 0.756,3.097Z"
		></path><path
			class="accent"
			d="M25.376,32.924c-0,-0.634 0.401,-1.202 1,-1.41c0.6,-0.218 1.268,-0.028 1.667,0.473c4.074,5.044 11.75,14.563 15.359,19.039c0.363,0.454  0.435,1.069 0.186,1.589c-0.249,0.521 -0.776,0.852 -1.354,0.852l-15.358,0c-0.829,0 -1.5,-0.672 -1.5,-1.495l-0,-19.048Z"
		></path><path
			class="dark"
			d="M38.655,25.572c-0.49,-0.582 -0.464,-1.44 0.052,-1.995c3.21,-3.417 14.026,-14.939 19.043,-20.282c0.422,-0.448 1.067,-0.594 1.644,  -0.368c0.568,0.227 0.946,0.78 0.946,1.395l0,42.813c0,0.629 -0.396,1.192 -0.981,1.408c-0.594,0.217 -1.256,0.041 -1.661,-0.44c-5.068,-5.995 -15.91,-18.827  -19.043,-22.531Z"
		></path><path
			class="accent"
			d="M25.376,18.206l-0,-16.698c-0,-0.826 0.671,-1.501 1.5,-1.501l15.115,0c0.593,0 1.13,0.346 1.371,0.894c0.24,0.54 0.139,1.172 -0.259, 1.611c-3.737,4.132 -11.165,12.338 -15.115,16.706c-0.416,0.456 -1.073,0.616 -1.652,0.388c-0.579,-0.219 -0.96,-0.776 -0.96,-1.4Z"
		></path><path
			class="dark"
			d="M11.188,0c0.828,0 1.5,0.674 1.5,1.499l-0,50.473c-0,0.829 -0.672,1.499 -1.5,1.499l-9.688,-0c-0.828,-0 -1.5,-0.67 -1.5,-1.499l0,-50.473c0,-0.825 0.672,-1.499 1.5,-1.499l9.688,0Z"
		></path></svg
	>
</div>

<style>
	div {
		will-change: transform;
		transition: transform 250ms ease-in-out;
	}

	svg {
		height: 110px;
		padding: 1rem;
		overflow: visible;
		filter: drop-shadow(8px 10px 2px color(from var(--shadow) display-p3 r g b / 0.02))
			drop-shadow(13px 15px 4px color(from var(--shadow) display-p3 r g b / 0.03))
			drop-shadow(18px 22px 5px color(from var(--shadow) display-p3 r g b / 0.04))
			drop-shadow(24px 29px 7px color(from var(--shadow) display-p3 r g b / 0.04))
			drop-shadow(32px 38px 10px color(from var(--shadow) display-p3 r g b / 0.05))
			drop-shadow(41px 49px 12px color(from var(--shadow) display-p3 r g b / 0.05))
			drop-shadow(50px 60px 15px color(from var(--shadow) display-p3 r g b / 0.06));
		/* https://smoothshadows.com/#djEsMSwxMCwwLjA2LDE1LDYwLDUwLCMwMzA3MTIsI2YzZjRmNiwjZmZmZmZmLDI%3D */

		@media (prefers-color-scheme: light) {
			path.accent {
				fill: var(--green-9);
			}
			path.dark {
				fill: var(--text-primary);
			}
			path.light {
				fill: var(--gray-1);
			}
		}

		@media (prefers-color-scheme: dark) {
			path.accent {
				fill: var(--text-primary);
			}
			path.dark {
				fill: var(--text-primary);
			}
			path.light {
				fill: var(--text-primary);
			}
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		div:hover {
			transform: scale(1.1);
		}
	}
</style>
